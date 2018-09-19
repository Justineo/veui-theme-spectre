import config from 'veui/managers/config'

config.defaults({
  icons: {
    loading: null
  },
  ui: {
    style: {
      values: ['primary', 'success', 'error', 'link', 'clear']
    },
    shape: {
      values: ['action', 'block']
    },
    size: {
      values: ['sm', 'lg']
    }
  }
}, 'button')
