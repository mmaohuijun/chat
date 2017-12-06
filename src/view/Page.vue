<template>
  <div class="container">
      <div class="sidebar">
        <card></card>
        <ul>
          <list></list>
          <list></list>
          <list></list>
          <list></list>
          <list></list>
          <list></list>
          <list></list>
        </ul>
      </div>
      <div class="body">
        <title></title>
        <text></text>
      </div>
    </div>
</template>

<script>

import card from '../components/card'
import list from '../components/list'
import title from '../components/title'
import text from '../components/text'

export default {
  name: 'Page',
  data () {
    return {}
  },
  components: {
    card,
    list,
    title,
    text
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
  width: 300px;
  background:#ccc;
}
#app .body {
  height: 100%;
  background: #ddd;
  flex-grow: 1;
}
</style>
