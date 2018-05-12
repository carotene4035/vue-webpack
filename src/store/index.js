import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
    todos: [
      // これ、collectionクラスにまとめたほうがよいのではないだろうか。。。
      // 多分、collectionにもドメインロジックが入ってくる気がする
      // で、コレクションの中にmodelをもつようにしたらどうだろう？
    ]
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
    add (state, options) {
      /*
       * ここで、todolistの操作の仕方をstoreが知ってしまっている。
       * もし今後、vueからreactに移植する事があった場合、
       * storeは捨てることになる。
       * そうすると「todolistの操作の仕方」が再利用できなくなるのでよくない。
       */
      state.todos.push(options)
    },
    remove (state, index) {
      console.log(index)
      state.todos.splice(index, 1)
    }
  },
  actions: {
    /** 非同期処理の場合、ここでapi通信を行う */
    /** すべてのtodoを取得 */
    getAll (context) {
      /** この処理はうまく別のファイルに移すようにする */
      client.get('/todos')
        .then(response => {
          const datas = response.data
          datas.forEach(data => {
            context.commit('add', data)
          })
        })
    },
    add (context, options) {
      context.commit('add', options)
    },
    remove (context, id) {
      context.commit('remove', id)
    }
  }
})

export default store
