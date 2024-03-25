import { RouteNames } from './routes'


const RoutesPlugin = {
  install(Vue) {
    Vue.prototype.$routes = RouteNames
    Vue.mixin({
      data() {
        return {
          routes: RouteNames
        }
      }
    })
  }
}

export default RoutesPlugin