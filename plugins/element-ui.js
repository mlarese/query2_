import Vue from 'vue'
import {DatePicker, TimePicker} from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

// configure language
locale.use(lang)

Vue.use(DatePicker)
Vue.use(TimePicker)
