<template> 
  <div>
    <div class="message-box rt">
      <img v-once class="avatar rt" src="../assets/logo.png" alt="">
      <div class="my-message rt">hahah</div>
    </div>
    <div class="message-box lf">
      <img v-once class="avatar lf" src="../assets/logo.png" alt="">
      <div class="others-message lf">hahah</div>
    </div>
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
  .avatar {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background:#000;
    margin:0px 25px 15px 20px;
  }
 /* 对方消息气泡*/
  .others-message {
    background: #fff;
    position: relative;
    padding: 12px;

  } 
  .others-message:before {
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
  /*我的消息气泡*/
  .my-message {
    background: pink;
    position: relative;
    box-sizing: border-box;
    padding: 12px;
  }
  .my-message:before {
    content: '';
    position: absolute;
    right: -10px;
    top: 5px;
    width: 0;
    height: 0;
    border-left: 5px solid pink;
    border-right: 5px solid transparent;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
  }
  .lf {
    float: left;
  }
  .rt {
    float: right;
  }
</style>


