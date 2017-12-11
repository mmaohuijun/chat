<template>
  <div class="carea-box">
    <textarea placeholder="Type something to send..."></textarea>
    <div class="send">
      <button @click="send">发送</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'carea',
  data () {
    return {}
  },
  methods: {
    send () {
      this.emit('sendMessage')
    }
  }
}
</script>

<style>
  .carea-box {
    position: absolute;
    width: 100%;
    bottom: 0;
  }
  textarea {
    width: 100%;
    height: 70px;
    border: none;
    outline: none;
    resize: none;
    padding: 15px;
    box-sizing: border-box;
  }
  textarea ::-webkit-input-placeholder {
    font-size: 16px;
  }
  .send {
    height: 30px;
    width: 100%;
    background: #fff;
    margin-top: -5px;
  }
  .send button {
    outline: none;
    border: none;
    padding:5px 10px;
    position: absolute;
    right: 15px;
    bottom: 15px;
    background: #474B7A;
    color: #C4C4E3;
  }
</style>


