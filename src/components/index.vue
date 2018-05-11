<template>
  <div>
    ログインしました {{ number }}
    <button v-on:click='onClickButton()'>aaaa</button>
  </div>
</template>

<script>
import store from '../store/index'

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
      store.commit('increment')
    }
  }
}
</script>
