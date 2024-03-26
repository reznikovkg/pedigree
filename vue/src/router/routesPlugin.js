import { RouteNames } from './routes'


const RoutesPlugin = {
  install(Vue) {
    Vue.prototype.$routes = RouteNames
  }
}

export default RoutesPlugin