<template>
  <div class="date_bg">
    <ul class="date_box">
      <!-- translate(-50%, -50%) -->
      <li v-for="(hour, index) in time.hours.list" :style="{ '-webkit-transform': `rotate(${hour.angle}deg)` }" :key="index" class="date_model">{{ hour.text }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'btn',
  data() {
    return {
      time: {
        hours: {
          list: [],
          length: 24
        },
        minutes: {
          list: [],
          length: 60
        },
        seconds: {
          list: [],
          length: 60
        }
      }
    }
  },
  mounted: function() {
    this.setModel(this.time.hours)
    const stv = setInterval(() => {
      this.setModelAngle(this.time.hours)
    }, 1000)
  },
  methods: {
    setModel: function(data) {
      const angle = Math.floor(360 / data.length)

      for (let i = 0; i < data.length; i++) {
        data.list.push({
          angle: -(angle * i),
          text: i
        })
      }
    },
    setModelAngle: function(data) {
      const angle = Math.floor(360 / data.length)

      for (let i = 0, number = 0; i < data.length; i++) {
        number = data.list[i].angle - angle
        data.list[i].angle = number <= -360 ? number + 360 : number
        // data.list[i].angle = number
      }
    }
  }
}
</script>

<style scoped>
.date_bg {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #000000;
}
.date_box {
  position: absolute;
  width: 700px;
  height: 700px;
  left: 50%;
  top: 50%;
  margin: -350px 0 0 -350px;
  border: 1px solid #ffffff;
  list-style-type: none;
  -webkit-transition: all 1s ease-in;
  padding: 0;
}
.date_model {
  position: absolute;
  left: 50%;
  top: 50%;
  font-size: 64px;
  color: #ffffff;
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff1177,
    0 0 70px #ff1177, 0 0 80px #ff1177, 0 0 100px #ff1177, 0 0 150px #ff1177;
  -webkit-transition: left 1s, top 1s;
  cursor: pointer;
}
.date_model:hover {
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff1177,
    0 0 35px #ff1177, 0 0 40px #ff1177, 0 0 50px #ff1177, 0 0 75px #ff1177;
}
</style>
