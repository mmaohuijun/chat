<template>
  <div class="message-box my-msg">
    <img class="avatar my-msg" src="../assets/logo.png" alt="">
    <div class="message my-msg">ds;ahgf;saldtohgslk;angls;kdngofnglsd;kgnfdkojgnfffffffffffffffffffl;diognkfglk伤筋动骨科技飞机都是高度规划</div>
  </div>
</template>

<script>
export default {
  name: 'message'
}
</script>

<style>
  .message-box {
    margin-top: 5px;
    width: 600px;
    height: auto;
  }
  img.avatar {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background:#000;
    margin:0px 25px 15px 20px;
  }
  .message{
    background: #fff;
    width: 500px;
    position: relative;
    box-sizing: border-box;
    padding: 12px;
    min-height: 25px;
  }
  .message:before {
    content: '';
    position: absolute;
    left: -10px;
    top: 5px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid #fff;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
  }
  .others-msg {
    float: left;
  }
  .my-msg {
    float: right;
  }
  
</style>


