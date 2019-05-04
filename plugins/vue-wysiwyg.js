import Vue from 'vue'
import wysiwyg from 'vue-wysiwyg'

Vue.use(wysiwyg, {
  hideModules: { image: true, code: true, removeFormat: true, table: true }
})
