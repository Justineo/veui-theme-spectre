import config from 'veui/managers/config'
import 'vue-awesome-material-icons/icons/check_circle'
import 'vue-awesome-material-icons/icons/warning'
import 'vue-awesome-material-icons/icons/info'
import 'vue-awesome-material-icons/icons/error'
import 'vue-awesome-material-icons/icons/chevron_left'
import 'vue-awesome-material-icons/icons/chevron_right'
import 'vue-awesome-material-icons/icons/close'

config.defaults({
  icons: {
    success: 'check_circle',
    warning: 'warning',
    info: 'info',
    error: 'error'
  }
}, 'toast')
