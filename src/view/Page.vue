<template>
  <div class="container">
      <div class="sidebar">
        <card></card>
        <ul class="user-list">
          <list></list>
        </ul>
      </div>
      <div class="body">
        <div class="header">
          <span>张晓华</span>
        </div>
        <div class="content">
          <message></message>
          <message></message>
          <message></message>
          <message></message>
          <message></message>
          <message></message>
          <message></message>
<<<<<<< HEAD
        </div>
        
        <!-- <message></message> -->
=======
        </div>    
>>>>>>> 2272a22917c9edb06510e23c28b5d6ecf422c910
        <carea></carea>
      </div>
    </div>
</template>

<script>

import card from '../components/card'
import list from '../components/list'
import message from '../components/message'
import carea from '../components/carea'

export default {
  name: 'Page',
  data () {
    return {}
  },
  components: {
    card,
    list,
    message,
    carea
  }
}
</script>

<style scoped>
* {margin: 0; padding: 0}
#app {
  width: 100%;
  height: 100%;
  background: #9DB2FA;
  padding-top: 50px;
}
.container {
  width: 1000px;
  height: 750px;
  background: pink;
  margin: 0 auto;
  display: flex;
}
#app .sidebar {
  height: 100%;
  width: 400px;
  background:#ccc;
}
#app .body {
  position: relative;
  height: 100%;
  background: #DCDCF6;
  flex-grow: 1;
}
.header {
  height: 60px;
  width: 100%;
  background: #5D5B8C;
}
.header span {
  position: relative;
  top: 20px;
  left: 15px;
  color: #C4C4E3;
}
.user-list {
  background: #2E2C51;
  height: 560px;
}
.content {
  height: 590px;
<<<<<<< HEAD
  width: 100%;
=======
>>>>>>> 2272a22917c9edb06510e23c28b5d6ecf422c910
  overflow: auto;
}
</style>
