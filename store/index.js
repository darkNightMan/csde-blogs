import Vuex from 'vuex'
import article from './modules/articles'
let store = () => new Vuex.Store({
  modules: {
    article
  },
})

export default store