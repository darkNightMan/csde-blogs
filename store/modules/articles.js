const state = () => ({
  recommendaList: [],
  counter: 0
})

const getters = {

}

const actions = {

}

const mutations = {
  increment (state) {
    state.counter++
  }
}


export default {
  namespace: true,	// 命名空间
  state,
  mutations,
  actions,
  getters
}