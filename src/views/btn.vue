<template>
  <div>
    <div class="btn_box">
      <p class="btn_text">按钮</p>
      <div class="cen_box">
        <div class="cen_model"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'btn'
}
</script>

<style scoped>
.btn_box {
  position: relative;
  margin: 200px auto;
  width: 400px;
  height: 50px;
  line-height: 50px;
  background-color: chartreuse;
  border-radius: 6px;
}
.btn_text {
  text-align: center;
  color: #ffffff;
  font-size: 18px;
}
.cen_box {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  overflow: hidden;
}
.cen_model {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: 0;
  margin-top: 0;
  width: 0;
  height: 0;
  max-width: 100%;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.3);

  -webkit-animation: model_action 2s infinite linear;
  -o-animation: model_action 2s infinite linear;
  animation: model_action 2s infinite linear;
}

@-webkit-keyframes model_action {
  0% {
    width: 0;
    height: 0;
    margin-left: 0;
    margin-top: 0;
  }
  100% {
    width: 100%;
    height: 0;
    margin-left: -50%;
    margin-top: 0;
  }
}
</style>
