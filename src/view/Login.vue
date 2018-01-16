<template>
  <div class="container">
      登录页面
      {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'welcome to my world haha'
    }
  }
}
</script>

<style scoped>
div{
    width: 200px;
    height: 200px;
    background: pink
}
</style>
