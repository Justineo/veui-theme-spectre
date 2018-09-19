import config from 'veui/managers/config'
import 'vue-awesome-material-icons/icons/close'

config.defaults({
  icons: {
    close: 'close'
  },
  ui: {
    position: {
      values: ['top']
    }
  },
  parts: {
    ok: 'primary',
    cancel: 'link'
  }
}, 'dialog')
