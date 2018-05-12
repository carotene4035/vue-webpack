import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/** TODO: mutation, getter, stateはバラバラにしたい */
const store = new Vuex.Store({
  state: {
    todos: [
      // これ、collectionクラスにまとめたほうがよいのではないだろうか。。。
      // 多分、collectionにもドメインロジックが入ってくる気がする
      // で、コレクションの中にmodelをもつようにしたらどうだろう？
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
    /** ここは、todoコレクションクラスへの操作を命令するだけにしたい */
    add (state, options) {
      /* 
       * ここで、todolistの操作の仕方をstoreが知ってしまっている。
       * もし今後、vueからreactに移植する事があった場合、
       * storeは捨てることになる。
       * そうすると「todolistの操作の仕方」が再利用できなくなるのでよくない。
       */
      state.todos.push({id: null, text: options, done: false})
    },
    remove (state, index) {
      console.log(index)
      state.todos.splice(index, 1)
    }
  },
  actions: {
    /** 非同期処理の場合、ここでapi通信を行う */
    add (context, options) {
      context.commit('add', options)
    },
    remove (context, id) {
      context.commit('remove', id)
    }
  }
})

export default store
