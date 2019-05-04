import {mutations as m, actionsFn, state as s, getters as g} from '../factories/store'
const moduleName = 'modules'

export const actions = {
  ...actionsFn(moduleName),
  loadModules ({state, dispatch, commit}) {
    const url = `/query/module`
    return dispatch('api/get', {url}, {root: true})
      .then(response => commit('setModules', response.data))
  },
  saveModule ({dispatch, commit}, data) {
    const url = `/owner/module`
    return dispatch('api/post', {url, data}, {root: true})
  }
}
export const state = () => ({
  ...s(),
  modules: []
})

export const mutations = {
  ...m,
  setModules (state, payload) {
    state.modules = payload
  }
}

export const getters = {
  ...g
}
