import {mockApp} from '../storeimp/api/api-properties'
export default async function ({route, store, redirect, app, next}) {
  if (!store.state.auth.loggedIn) {
    if (!mockApp) {
      let res = await store.dispatch('auth/checkProfile', {}, {root: true})
      console.log(res)
    }
  }

}
