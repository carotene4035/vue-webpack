<template>
  <div>ログインしました {{ store }}</div>
</template>

<script>
import store from '../store/index'

export default {
  data: function () {
    /** dataはobjectしか返さない */
    return {
      store: store
    }
  }
}
</script>
