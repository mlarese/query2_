import Vue from 'vue'
import colors from 'vuetify/es5/util/colors'
import Notifications from 'vue-notification'
import {dmy, time, ymd, dec2} from '../assets/style/filters'

import {
  Vuetify,
  VDivider,
  VDialog,
  VApp,
  VCard,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VCombobox,
  VToolbar,
  VMenu,
  VDatePicker,
  VForm,
  VTextField,
  VAlert,
  VDataTable,
  VSelect,
  VSubheader,
  VSpeedDial,
  VTabs,
  VAvatar,
  VSwitch,
  VAutocomplete,
  VRadioGroup,
  VCheckbox,
  VTextarea
} from 'vuetify'

Vue.use(Vuetify, {
  theme: {
    primary: colors.indigo.darken3,
    secondary: colors.grey.darken1,
    accent: colors.shades.black,
    error: colors.red.accent3
  },
  components: {
    VApp,
    VDivider,
    VCard,
    VNavigationDrawer,
    VFooter,
    VList,
    VDialog,
    VCombobox,
    VAutocomplete,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VRadioGroup,
    VForm,
    VTextField,
    VSubheader,
    VSpeedDial,
    VAlert,
    VDataTable,
    VTabs,
    VSelect,
    VAvatar,
    VSwitch,
    VCheckbox,
    VMenu,
    VDatePicker,
    VTextarea
  }
})

Vue.use(Notifications)
Vue.filter('dmy', dmy)
Vue.filter('ymd', ymd)
Vue.filter('time', time)
Vue.filter('dec2', dec2)

VTextField.$_wrapperFor.props.box = {default: false}

// console.dir(VTextField)
