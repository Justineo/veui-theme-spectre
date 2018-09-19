import config from 'veui/managers/config'
import 'vue-awesome-material-icons/icons/check_circle'
import 'vue-awesome-material-icons/icons/info'
import 'vue-awesome-material-icons/icons/error'

config.defaults({
  icons: {
    success: 'check_circle',
    info: 'info',
    error: 'error'
  },
  parts: {
    ok: 'primary'
  }
}, 'alertbox')
