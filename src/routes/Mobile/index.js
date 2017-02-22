export default () => ({
  path : 'mobile',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Mobile = require('./components/Mobile').default
      cb(null, Mobile)
    }, 'mobile')
  }
})