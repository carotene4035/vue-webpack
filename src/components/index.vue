<template>
  <div>
    ログインしました {{ store }}
    <button v-on:click='onClickButton()'>aaaa</button>
  </div>
</template>

<script>
import store from '../store/index'

export default {
  data: function () {
    /** dataはobjectしか返さない */
    return {
      store: '1'
    }
  },
  methods: {
    onClickButton: function () {
      // store.commint('mutation名')でstoreを操作する
      store.commit('increment')

      // 一応ここからもいじれる
      store.state.count = 1
    }
  }
}
</script>
