<template>
  <div>
      <todo v-for='(todo, index) in todos' :key=index :todo="todo"></todo>
  </div>
</template>

<script>
import todo from './todo.vue'

export default {
  components: { todo },
  computed: {
    todos () {
      return this.$store.state.todos
    }
  }
}
</script>
