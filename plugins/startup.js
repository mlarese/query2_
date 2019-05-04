export default ({app, store}) => {
  store.dispatch('statusActive/init', null, {root: true})
  store.dispatch('billingTransaction/init', null, {root: true})
  store.dispatch('reporting/init', null, {root: true})
}
