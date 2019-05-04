const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)

const mixin = {
  methods: {
    _repairAutocomplete () {
      const el = this.$el
      el.querySelectorAll('input[type="text"][autocomplete="off"').forEach(it => {
        it.setAttribute('autocomplete', 'new-password')
      })
    }
  },
  mounted () {
    this._repairAutocomplete()
  },
  updated () {
    this._repairAutocomplete()
  }
}

export default isChrome ? mixin : {}
