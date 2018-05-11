<template>
  <div>
    ログインしました {{ number }} {{ count }}
    <ul>
      <li v-for='list in lists' :key=list.id>{{list.text}}</li>
    </ul>

    <ul>
      <li v-for='list in doneTodos' :key=list.id>{{list.text}}</li>
    </ul>
    <button v-on:click='onClickButton()'></button>
  </div>
</template>

<script>
// 全てのコンポーネントをここで書くのは大変だし、
// テストをするときにstoreのモックが必要になってしまう
// なのでmain.jsで読み込む
// import store from '../store/index'
import { mapState, mapGetters } from 'vuex'

export default {
  data: function () {
    /** dataはobjectしか返さない */
    return {
      number: '1'
    }
  },
  // storeが持っているデータのプロパティ名(count)と、
  // コンポーネントが持っているデータのプロパティ名がいっしょの場合、
  // 以下のように書くとthis.count to store.state.countをマッピングすることができる
  computed: {
    ...mapState([
      // map this.count to store.state.count
      'count',
      'lists'
    ]),
    ...mapGetters([
      'doneTodos'
    ])
  },
  // 以下をいちいち書くのは面倒なので、mapStateを使用する
  //   count () {
  //     // componentがstoreのことを知りすぎている感じがする
  //     return this.$store.state.count
  //   }
  methods: {
    onClickButton: function () {
      // store.commint('mutation名')でstoreを操作する
      this.$store.commit('increment')
    }
  }
}
</script>
