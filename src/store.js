import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    openUpload: false,
    clickHome: 0,
    display: 1,
    light: false,
    projects: 0,
    admin: false,
    githubUrl: '',
    posts: [],
    view: {
      post: {},
      active: false
    }
  },
  mutations: {
  },
  actions: {
  }
})
