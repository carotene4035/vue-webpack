<template>
  <div>
      <div>{{ todo }}</div>
      <button v-on:click='remove(index)'>x</button>
  </div>
</template>

<script>
export default {
  props: ['todo', 'index'],
  methods: {
    remove (index) {
      this.$store.dispatch('remove', index)
    }
  }
}
</script>
