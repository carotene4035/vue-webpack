<template>
  <div>
    <label for="id">id</label>
    <input type='text' v-model='id'>
    <label for="id">pass</label>
    <input type='password' v-model='pass'>
    <div>
      <a href="" v-on:click.prevent='click()'>ログイン</a>
    </div>
  </div>
</template>

<script>
// TODO: apiはmiddlewareへ移す
import LoginAPI from '../api/login'

export default {
  name: 'Login',
  data () {
    return {
      id: '',
      pass: ''
    }
  },
  methods: {
    click: function () {
      LoginAPI.auth(this.id, this.pass, (data) => {
        console.log(data)
        console.log('success')
        /** ルーティング処理 */
        this.$router.push('/todos')
      })
    }
  }
  // ログイン処理api: auth的なやつ。id, passを渡したらokとかnoとか返す
  // 成功したらcallbackが実行される
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
