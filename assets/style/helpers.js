export const mapTwoWay = (namespace, getter, action) => {
  return {
    get () {
      return this.$store.getters[ namespace ? `${namespace}/${getter}` : getter]
    },
    set (value) {
      this.$store.dispatch(namespace ? `${namespace}/${action}` : action, value)
    }
  }
}
