import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: 'hello', done: true },
      { id: 2, text: 'hello world', done: false }
    ]
  },
  /** 何らかのフィルタリングをかけたりしたいときはgetterに記述する */
  /** (そのまま取得したいときはmapState?) */
  getters: {
    doneTodos: (state) => (id) => {
      return state.lists.filter(todo => todo.done)
    }
  },
  mutations: {
    add (state) {

    }
  },
  actions: {
    add (context) {
      context.commit('add')
    }
  }
})

export default store
