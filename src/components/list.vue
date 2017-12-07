<template>
  <li class="list" @click="clickItem">
    <img src="../assets/logo.png" alt="">
    <h3>张晓华</h3>
    <p>大家好，很高兴认识你们</p>
  </li>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {

    }
  },
  methods: {
    clickItem () {

    }
  }
}
</script>

<style>
* {margin: 0; padding: 0;}
  ul {
  }
  li.list {
    list-style: none;
    width: 100%;
    height: 80px;
    background: #3D3B5F;
  }
  li.list img {
    float: left;
    width: 50px;
    height: 50px;
    background: #fff;
    border-radius: 50%;
    margin: 15px;
  }
  li.list h3 {
    color: #C4C4E3;
    padding-top: 10px;
    padding-bottom: 5px;
  }
  li.list p {
    color: #636393;
  }
  li.list :hover li {
    cursor: pointer;
    background: #363459;
  }
</style>


