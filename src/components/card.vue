<template>
  <div class="wrapper">
      <img src="../assets/logo.png" alt="">
      <p>hellen</p>
      <div>
          <i class="fa fa-search search-icon"></i>
          <input type="text" placeholder="Search...">
      </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  data () {
    return {}
  }
}
</script>

<style>
  .wrapper {
    box-sizing: border-box;
    height: 190px;
    background: #2E2C51;
  }
  .wrapper img {
      float:left;
      width:90px;
      height: 90px;
      margin: 15px;
      background: #000;
    }
    .wrapper p {
      float: left;
      color: #C4C4E3;
      margin-top: 50px;
    }
    .wrapper div {
      clear: both;
      position: relative;
    }
    .wrapper input {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      background: #3D3C60;
      border: none;
      outline: none;
      color: #C4C4E3;
      padding: 20px 20px 20px 40px;
      margin-top: 5px;
    }
    .wrapper ::-webkit-input-placeholder {
      color: #C4C4E3;
    }
    i.search-icon {
      color: #C4C4E3;
      position: absolute;;
      top: 23px;
      left: 15px;
    }
</style>


