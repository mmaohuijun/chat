<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
* {margin: 0; padding: 0}
#app {
  width: 100%;
  height: 100%;
  background: #9DB2FA;
  padding-top: 50px;
  padding-bottom: 50px;
  font-size: 14px;
  font-family: 'Microsoft Yahei';
}
ul {
  list-style: none;
}
</style>
