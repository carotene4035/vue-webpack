<template>
  <div>
    ログインしました {{ number }} {{ count }}
    <button v-on:click='onClickButton()'></button>
  </div>
</template>

<script>
// 全てのコンポーネントをここで書くのは大変だし、
// テストをするときにstoreのモックが必要になってしまう
// なのでmain.jsで読み込む
// import store from '../store/index'

export default {
  data: function () {
    /** dataはobjectしか返さない */
    return {
      number: '1'
    }
  },
  computed: {
    count () {
      // componentがstoreのことを知りすぎている感じがする
      return this.$store.state.count
    }
  },
  methods: {
    onClickButton: function () {
      // store.commint('mutation名')でstoreを操作する
      this.$store.commit('increment')
    }
  }
}
</script>
