import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    lists: [
      { id: 1, text: 'hello', done: true },
      { id: 2, text: 'hello world', done: false }
    ]
  },
  /** 何らかのフィルタリングをかけたりしたいときはgetterに記述する */
  /** (そのまま取得したいときはmapState?) */
  getters: {
    doneTodos: (state) => (id) => {
      console.log(id)
      return state.lists.filter(todo => todo.done)
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default store
