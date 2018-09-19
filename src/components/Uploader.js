import config from 'veui/managers/config'

config.defaults({
  icons: {
    upload: 'upload',
    clear: 'cross',
    success: 'check',
    redo: 'refresh',
    file: 'clip',
    add: 'plus-huge',
    alert: 'exclamation-circle-o'
  },
  ui: {
    direction: {
      values: ['horizontal']
    }
  }
}, 'uploader')
