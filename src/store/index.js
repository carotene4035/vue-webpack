import Vue from 'vue'
import Vuex from 'vuex'
import { TodoAPI } from '../api/todo'

/** 基本、一つのstoreは１つのドメインモデルを持っている */
import Todo from '../models/todo'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: []
  },
  getters: {
    doneTodos: (state) => (id) => {
      return state.lists.filter(todo => todo.done)
    },
    getTodos () {
    }
  },
  mutations: {
    add (state, todo) {
      state.todos.push(new Todo(todo))
    },
    remove (state, index) {
      state.todos.splice(index, 1)
    }
  },
  actions: {
    getAll (context) {
      TodoAPI.getAllTodo(todos => {
        todos.forEach(todo => {
          context.commit('add', todo)
        })
      })
    },
    add (context, todo) {
      console.log(todo)
      context.commit('add', todo)
    },
    remove (context, index) {
      context.commit('remove', index)
    }
  }
})

export default store
