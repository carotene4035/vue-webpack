<template>
  <div>
    ログインしました {{ number }}
    <button v-on:click='onClickButton()'>aaaa</button>
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
  methods: {
    onClickButton: function () {
      // store.commint('mutation名')でstoreを操作する
      this.$store.commit('increment')
    }
  }
}
</script>
