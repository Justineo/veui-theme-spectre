import config from 'veui/managers/config'

config.defaults({
  icons: {
    success: 'check'
  },
  ui: {
    size: {
      data: {
        default: {
          radius: 60,
          stroke: 4,
          strokeLinecap: 'round'
        }
      }
    }
  }
}, 'progress')
