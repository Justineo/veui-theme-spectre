import config from 'veui/managers/config'
import 'vue-awesome-material-icons/icons/remove'
import 'vue-awesome-material-icons/icons/check'

config.defaults({
  icons: {
    indeterminate: 'remove',
    checked: 'check'
  },
  ui: {
    size: {
      values: ['sm', 'lg']
    }
  }
}, 'checkbox')
