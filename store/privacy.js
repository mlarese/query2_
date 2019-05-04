import _cloneDeep from 'lodash/cloneDeep'
import Vue from 'vue'

export const state = () => {
    return {
        list: [],
        recordList: [],
        record: {},
        $record: {},
        addRecord: {},
        resetItem: {},
        grid: {pagination: {}},
        mode: 'add',
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
    setMode (state, payload) { state.mode = payload },
    setForm (state, payload) { state.form = payload },
    setEditMode (state) { state.mode = 'edit' },
    setAddMode (state) { state.mode = 'add' }

}
export const actions = {
    update ({dispatch, commit, state}, {data, id}) {
        const url = `/booking/${id}`
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
    insert ({dispatch, commit}, {data}) {
        const url = `/booking`
        return dispatch('api/post', {url, data}, root)
    },
    load ({dispatch, commit, state}, {id = null, force = true, options = {}}) {
        if (!force && state.loaded) {
            return
        }
        if (id === null) {
            return dispatch('api/get', {url: `/booking`, options, debug: false}, root)
                .then(res => {
                    commit('setList', res.data)
                    return res
                })
        } else {
            return dispatch('api/get', {url: `/booking/{id}`, options}, root)
                .then(res => {
                    commit('setRecord', res.data)
                    return res
                })
        }
    },
}

export const getters = {
    isEditMode: state => state.mode === 'edit',
    isAddMode: state => state.mode === 'add'
}

