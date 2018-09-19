import config from 'veui/managers/config'

config.defaults({
  icons: {
    remove: 'cross',
    add: 'plus-circle-o',
    prev: 'angle-left',
    next: 'angle-right',
    success: 'check-circle-o',
    warning: 'exclamation-circle-o',
    info: 'info-circle-o',
    error: 'cross-circle-o'
  },
  ui: {
    size: {
      values: ['large', 'small', 'tiny']
    },
    style: {
      values: ['block'],
      data: {
        block: {
          icons: {
            add: 'plus-huge'
          }
        }
      }
    }
  }
}, 'tabs')
