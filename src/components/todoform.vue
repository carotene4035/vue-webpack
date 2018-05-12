<template>
    <div>
        <input type="text" v-on:keyup.enter='submit()'>
    </div>
</template>

<script>
export default {
  methods: {
    submit () {
      console.log('hello')
    }
  }
}
</script>
