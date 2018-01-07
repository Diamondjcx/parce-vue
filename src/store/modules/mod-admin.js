
export default({
  namespaced: true,
  state:{
    info: 'Hi admin'
  },
  actions: {
    updateInfo( { commit }) {
      commit('SET_INFO')
    }

  },
  mutations:{
    SET_INFO: (state) => {
      state.info = "hello"
    }
  },
  getters: {
    getInfo:()=>{
      return state.info *2
    }
  }
})


