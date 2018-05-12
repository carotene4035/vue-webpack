<template>
    <div>
        <input type="text" v-on:keyup.enter='submit'>
    </div>
</template>

<script>
export default {
  methods: {
    /** mapActionsは無理に使わなくて良い。リファクタリングのタイミングで使おう */
    submit (e) {
      let text = e.target.value
      // dispatchの引数はtype, payload
      this.$store.dispatch('add', text)
    }
  }
}
</script>
