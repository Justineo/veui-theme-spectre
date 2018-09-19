import config from 'veui/managers/config'

config.defaults({
  ui: {
    style: {
      values: ['primary']
    },
    shape: {
      values: ['action', 'block'],
      inherit: false
    },
    size: {
      values: ['sm', 'lg']
    }
  }
}, 'buttongroup')
