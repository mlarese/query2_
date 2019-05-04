import Vue from 'vue'
import {actions} from './actions'
import {getters} from './getters'

export const state = () => {
  return {
    notification: {title: '', type: '', text: '', id: 0},
    isAjax: false,
    error: {},
    hasError: false
  }
}

let notificationsId = 0

export const mutations = {
  notification (state, {title, type, text}) {
    if (Vue.i18n) {
      text = Vue.i18n.translate(text)
      title = Vue.i18n.translate(title)
    }
    notificationsId++
    state.notification = {title, type, text, id: notificationsId}
  },
  isAjax (state, payLoad = false) {
    state.isAjax = payLoad
  },
  error (state, payLoad = null) {
    if (payLoad === null) {
      if (state.error !== null) {
        state.error = null
      }
    } else {
      Vue.set(state, 'error', payLoad)
    }
  },
  hasError (state, payLoad = false) {
    state.hasError = payLoad
  }
}

export default {
  namespaced: true,
  mutations,
  actions,
  getters,
  state
}
