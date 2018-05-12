<template>
  <div>
    <todoform></todoform>
    <todolists></todolists>
  </div>
</template>

<script>
/*
 * TOPページのコンテナコンポーネント
 */
// 全てのコンポーネントをここで書くのは大変だし、
// テストをするときにstoreのモックが必要になってしまう
// なのでmain.jsで読み込む
// import store from '../store/index'
import { mapState, mapGetters } from 'vuex'
import todolists from './todolists.vue'
import todoform from './todoform.vue'

export default {
  components: {
    todolists,
    todoform
  },
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
    /** storeの状態を参照 */
    ...mapState([
      // map this.count to store.state.count
      'count',
      'lists'
    ]),
    /** storeの状態をfilterをかけて参照 */
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
