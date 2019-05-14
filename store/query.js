import _cloneDeep from 'lodash/cloneDeep'
import Vue from 'vue'
import _isEmpty from 'lodash/isEmpty'
import _isArray from 'lodash/isArray'
import _isObject from 'lodash/isObject'
import _isString from 'lodash/isString'
import _startsWith from 'lodash/startsWith'
import _keys from 'lodash/keys'

export const state = () => {
    return {
        list: [],
        recordList: [],
        record: {},
        $record: {},
        filter: {},
        resetFilter: {},
        filterActive: false,
        addRecord: {},
        resetItem: {},
        grid: {pagination: {}},
        mode: 'add',
        search: {criteria: ''}
    }
}

const root = {root: true}

export const mutations = {
    setRecordList (state, payload) { state.recordList = payload },
    setPagination (state, payload) { state.pagination = payload },
    setList (state, payload) {
        state.list = payload
    },
    setRecord (state, payload) {
        state.record = _cloneDeep(payload)
        state.$record = _cloneDeep(payload)
        state.loaded = true
    },
    set$Record (state, payload) {
        state.$record = _cloneDeep(payload)
        state.loaded = true
    },
    updateItemList (state,  {data, index}) {
        Vue.set(state.list, index, data)
    },
    addRecord (state,  p ) {
        state.list.push(p)
    },
    reset$Record (state) {
        state.$record = {}
    },
    setFilter (s, p) { s.filter = p },
    setResetFilter (s, p) { s.resetFilter = p },
    setFilterActive (s, p) {
        s.filterActive = p
        if (!p) s.filter = _cloneDeep(s.resetFilter)

        s.grid.pagination.page = 1
    },
    resetFilter (s) { s.filter = _cloneDeep(s.resetFilter) },
    setMode (state, payload) { state.mode = payload },
    setForm (state, payload) { state.form = payload },
    setEditMode (state) { state.mode = 'edit' },
    setAddMode (state) { state.mode = 'add' }

}
export const actions = {
    update ({dispatch, commit, state}, {data, id}) {
        const url = `/query/${id}`
        return dispatch('api/put', {url, data}, root)
            .then(() => {
                const index = state.list.findIndex(o => o.code === id)
                commit('updateItemList', {data, index})
                commit('setAddMode')
            })
    },
    selectItem({commit}, item) {
        commit('set$Record', item)
        commit('setEditMode')


    },
    cancelItem({commit}) {
        commit('reset$Record')
        commit('setAddMode')
    },
    save ({dispatch, commit, state, getters}) {
        let data = state.$record

        if (getters.isAddMode) {
            return dispatch('insert', {data})
                .then(r => {
                    commit('addRecord', data)
                    commit('set$Record', {})
                })
        } else {
            let id = data.code
            return dispatch('update', {data, id})

                .then(() => commit('set$Record', {}))
                .then(() => commit('setAddMode'))
        }
    },
    find ({commit, dispatch, state}, search) {
        return dispatch('api/get', {url: `query/search=${state.search.criteria}`}, {root: true})
            .then(result => {
                commit('setList', result.data)
            })
    },
    insert ({dispatch, commit}, {data}) {
        const url = `/query`
        return dispatch('api/post', {url, data}, root)
    },
    load ({dispatch, commit, state}, {id = null, force = true, options = {}}) {
        if (!force && state.loaded) {
            return
        }
        if (id === null) {
            return dispatch('api/get', {url: `/query`, options, debug: false}, root)
                .then(res => {
                    commit('setList', res.data)
                    return res
                })
        } else {
            return dispatch('api/get', {url: `/query/{id}`, options}, root)
                .then(res => {
                    commit('setRecord', res.data)
                    return res
                })
        }
    },
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
                            return _startsWith(f, aValue)
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
