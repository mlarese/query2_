import {mapState} from 'vuex'
export const redirector = {
  computed: {
    ...mapState('auth', ['role'])
  },
  created () {
    // if (this.role === 'admin') this.$router.replace('/csp')
    // else this.$router.replace('/transaction')
  }
}
