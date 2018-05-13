import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import Todolist from '../models/todolist'

/** axiosの設定（TODO 別のファイルにおく) */
const client = axios.create({
  baseURL: 'http://localhost:3000', // バックエンドB のURL:port を指定する
  headers: {
    'ContentType': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json'
})

Vue.use(Vuex)

/** TODO: mutation, getter, stateはバラバラにしたい */
const store = new Vuex.Store({
  state: {
    todos: Todolist
  },
  /** 何らかのフィルタリングをかけたりしたいときはgetterに記述する */
  /** (そのまま取得したいときはmapState?) */
  getters: {
    doneTodos: (state) => (id) => {
      return state.lists.filter(todo => todo.done)
    },
    getTodos () {
    }
  },
  mutations: {
    /** ここは、todoコレクションクラスへの操作を命令するだけにしたい */
    add (state, todo) {
      state.todos.addTodo(todo)
    },
    remove (state, index) {
      state.todos.removeTodd(index)
    }
  },
  actions: {
    /** 非同期処理の場合、ここでapi通信を行う */
    /** すべてのtodoを取得 */
    getAll (context) {
      /** この処理はうまく別のファイルに移すようにする */
      /** 今すごい汚いから */
      client.get('/todos')
        .then(response => {
          const todos = response.data
          todos.forEach(todo => {
            /** データ毎にmodelを作成 */
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
