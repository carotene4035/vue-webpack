<template>
  <div>
      <todo v-for='(todo, index) in todos' :key=index :todo="todo" :index="index"></todo>
  </div>
</template>

<script>
import todo from './todo.vue'

export default {
  components: { todo },
  created: function () {
    this.$store.dispatch('getAll')
  },
  computed: {
    todos () {
      return this.$store.state.todos
    }
  }
}
</script>
