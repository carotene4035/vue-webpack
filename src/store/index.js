import Vue from 'vue'
import Vuex from 'vuex'
import { TodoAPI } from '../api/todo'

/** 基本、一つのstoreは１つのドメインモデルを持っているだけにしたいなぁ */
import Todolist from '../models/todolist'

Vue.use(Vuex)

/** TODO: mutation, getter, stateはバラバラにしたい */
const store = new Vuex.Store({
  state: {
    /** うーむ、これだと配列にならんな。。。 */
    // stateに直接ドメインモデルをもたせるのは現実的ではないのかな。。。 */
    todos: new Todolist().getAllTodos()
  },
  /** 何らかのフィルタリングをかけたりしたいときはgetterに記述する */
  /** (そのまま取得したいときはmapState?) */
  getters: {
    /** これもドメインモデルにアクセスするだけにしたい */
    doneTodos: (state) => (id) => {
      return state.lists.filter(todo => todo.done)
    },
    getTodos () {
    }
  },
  mutations: {
    /*
     * ここは、todoコレクションクラスへの操作を命令するだけにしたい。
     * そうすれば、vue側のドメイン知識が少なくなる
     */
    add (state, todo) {
      state.todos.addTodo(todo)
    },
    remove (state, index) {
      state.todos.removeTodd(index)
    }
  },
  actions: {
    getAll (context) {
      TodoAPI.getAllTodo(function (todos) {
        todos.forEach(todo => {
          context.commit('add', todo)
        })
      })
    },
    add (context, todo) {
      context.commit('add', todo)
    },
    remove (context, index) {
      context.commit('remove', index)
    }
  }
})

export default store
