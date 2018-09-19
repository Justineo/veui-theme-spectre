import config from 'veui/managers/config'
import 'vue-awesome-material-icons/icons/chevron_right'

config.defaults({
  icons: {
    expand: 'chevron_right',
    collapse: 'chevron_right'
  },
  ui: {
    size: {
      values: ['sm', 'lg']
    }
  }
}, 'select')
