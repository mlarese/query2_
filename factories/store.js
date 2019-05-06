import _cloneDeep from 'lodash/cloneDeep'
import _isEmpty from 'lodash/isEmpty'
import _isArray from 'lodash/isArray'
import _isObject from 'lodash/isObject'
// import _isDate from 'lodash/isDate'
import _isString from 'lodash/isString'
import _startsWith from 'lodash/startsWith'
import _keys from 'lodash/keys'
// import format from 'date-fns/format'
// import parse from 'date-fns/parse'

import {mockApp, rowsPerPageItems} from '../storeimp/api/api-properties'

export const state = () => {
  return {
    comboOptions: [],
    comboSelected: null,
    list: [],
    cacheList: false,
    record: {},
    $record: {},
    filter: {},
    resetFilter: {},
    filterActive: false,
    mountingForm: false,
    grid: {
      paginate: true,
      pagination: {sortBy: '', descending: false, page: 1, rowsPerPage: rowsPerPageItems[0]},
      totalItems: 0,
      loading: false
    },
    form: {valid: false, dirty: false},
    search: {criteria: ''},
    mode: 'list'
  }
}

const root = {root: true}

export const actionsFn = (endPoint, apiRoute = '/res', extractResult = true, options = {}) => {
  if (mockApp) {
    apiRoute = ''
    extractResult = true
  }
  return {
    info ({dispatch}, payload) {
      console.log('info')
      console.dir(payload)
    },
    save ({dispatch, commit, state, getters}, {data, id, options = {}}) {
      if (!mockApp) {
        let ndata = {}
        ndata[endPoint + 's'] = [data]
        data = ndata
      }

      if (getters.isAddMode) {
        return dispatch('insert', {data, options})
      } else {
        return dispatch('update', {data, id, options})
      }
    },
    delete ({dispatch, commit, state}, {item, idName, options = {}}) {
      const id = item[idName]
      if (mockApp) {
        console.log('-----', idName)
        console.dir(item)
      }
      const url = `/res/del/${endPoint}/${id}`
      return dispatch('api/post', {url, options}, root)
        .then(() => {
          const index = state.list.findIndex(o => o[idName] === id)
          if (index >= 0) commit('removeListItem', index)
        })
    },
    update ({dispatch, commit, state}, {data, id, options = {}}) {
      const url = `/res/put/${endPoint}/${id}`
      return dispatch('api/post', {url, data, options}, root)
        .then(r => {
          if (mockApp) return r
          else return r[endPoint + 's']
        })
    },
    insert ({dispatch, commit}, {data, options = {}}) {
      const url = '/res/' + endPoint
      return dispatch('api/post', {url, data, options}, root)
        .then(r => {
          if (mockApp) return r
          else return r[endPoint + 's']
        })
    },
    find ({commit, dispatch, state}) {
      return dispatch('api/get', {url: `${apiRoute}/${endPoint}?search=${state.search.criteria}`}, {root: true})
        .then(result => {
          commit('setList', result.data)
        })
    },
    loadOptions ({dispatch, commit}, {id = null, options = {}}) {
      return dispatch('api/get', {url: `${apiRoute}/${endPoint}_opt`, options, debug: false}, root)
        .then(res => {
          if (extractResult) commit('setComboOptions', res.data[`${endPoint}s`])
          else commit('setComboOptions', res.data)
          return res
        })
    },
    load ({dispatch, commit, state}, {id = null, force = false, options = {}}) {
      if (id === null) {
        if (force) {
          commit('setCacheList', false)
        }

        if (state.cacheList) {
          return Promise.resolve({})
        }
        // let filter = ''
        // let {sortBy, descending, page, rowsPerPage} = state.grid.pagination

        // let url = `/${endPoint}?f=${filter}&sort=${sortBy}&desc=${descending}&page=${page},perPage=${rowsPerPage}`
        let url = `${apiRoute}/${endPoint}`

        // if (mockApp) url = `http://localhodt${endPoint}`

        return dispatch('api/get', {url, options, debug: false}, root)
          .then(res => {
            console.log(endPoint)
            if (mockApp) {
              console.dir(res.data)
            }
            if (extractResult) commit('setList', res.data[`${endPoint}s`])
            else commit('setList', res.data)
            commit('setCacheList', true)
            return res
          })
      } else {
        return dispatch('api/get', {url: `${apiRoute}/${endPoint}/${id}`, options}, root)
          .then(res => {commit('setRecord', res.data)
            return res
          })
      }
    }
  }
}

export const mutations = {
  setFilterActive (s, p) {
    s.filterActive = p
    if (!p) s.filter = _cloneDeep(s.resetFilter)

    s.grid.pagination.page = 1
  },
  removeListItem (s, index) {
    s.list.splice(index, 1)
    console.log(index, s.list)
  },
  setCacheList (s, p) { s.cacheList = p },
  setFilter (s, p) { s.filter = p },
  setResetFilter (s, p) { s.resetFilter = p },
  resetFilter (s) { s.filter = _cloneDeep(s.resetFilter) },
  setComboOptions (s, p) { s.comboOptions = p },
  setMountingForm (s, p) { s.mountingForm = p },
  setComboSelected (s, p) { s.comboSelected = p },
  setList (s, p) {
    s.list = p
  },
  setGrid (s, p) { s.grid = p },
  setPaginateGrid (s, p) { s.grid.paginate = p },
  setPagination (s, p) { s.grid.pagination = p },
  setLoading (s, p) { s.grid.loading = p },
  setRecord (s, p) {
    s.record = _cloneDeep(p)
    s.$record = _cloneDeep(p)
  },
  set$Record (s, p) { s.$record = _cloneDeep(p) },
  setMode (s, p) { s.mode = p },
  setForm (s, p) { s.form = p },
  setFormValid (s, p) { s.form.valid = p },
  setFormDirty (s, p) { s.form.dirty = p },
  setListMode (s) { s.mode = 'list' },
  setViewMode (s) { s.mode = 'view' },
  setEditMode (s) { s.mode = 'edit' },
  setAddMode (s) { s.mode = 'add' },
  setSearchMode (s) { s.mode = 'search' }
}

export const getters = {
  filteredList: s => {
    if (!s.filterActive) return s.list
    if (_isEmpty(s.filter)) return s.list

    const filterKeys = _keys(s.filter)
    return s.list.filter(a => {
      for (let i = 0; i < filterKeys.length; i++) {
        let key = filterKeys[i]
        let f = s.filter[key]
        let aValue = a[key]
        if (_isArray(f)) {
          if (_isString(aValue)) aValue = aValue.substr(0, 10)
          let fromdt = '1900-01-01'
          let todt = '2900-01-01'

          if (f[0] !== null) fromdt = f[0]
          if (f[1] !== null) todt = f[1]

          if (fromdt > aValue) return false
          if (todt < aValue) return false
        } else if (_isObject(f)) {
          if (f[key]) {
            if (f[key] !== aValue) return false
          } else {
            if (f.value !== aValue) return false
          }
        } else if (_isString(f)) {
          if (f === null) {
            return false
          } else {
            return _startsWith(f, aValue) // f.contains(aValue)
          }
        } else {
          if (f !== aValue) return false
        }
      }
      return true
    })
  },
  isSearchMode: s => s.mode === 'search',
  isListMode: s => s.mode === 'list',
  isEditMode: s => s.mode === 'edit',
  isAddMode: s => s.mode === 'add',
  isViewMode: s => s.mode === 'view'
}
