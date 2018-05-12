import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/** TODO: mutation, getter, stateはバラバラにしたい */
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
    add (state, options) {
      state.todos.push(options)
    }
  },
  actions: {
    /** 非同期処理の場合、ここでapi通信を行う */
    add (context, options) {
      context.commit('add', options)
    }
  }
})

export default store
