<template>
  <div>
    <todoform></todoform>
    <todolists></todolists>
  </div>
</template>

<script>
import todolists from '@/components/todos/todolists'
import todoform from '@/components/todos/todoform'

export default {
  components: {
    todolists,
    todoform
  }
}
</script>
