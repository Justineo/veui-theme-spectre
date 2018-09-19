import config from 'veui/managers/config'
import 'vue-awesome-material-icons/icons/close'

config.defaults({
  icons: {
    remove: 'close'
  },
  ui: {
    size: {
      values: ['sm', 'lg']
    }
  }
}, 'input')
