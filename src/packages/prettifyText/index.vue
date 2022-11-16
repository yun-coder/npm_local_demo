<template>
  <div class="container">
    <div id="printMe" class="emblem" :style="{'width':width+'px','height':height+'px'}">
      <div class="text" v-for="(text, index) in emblemText" :key="index"
           :style="'transform: rotateZ('+ getDeg(index) +');font-size: '+fontSize+'px;'">
        <div class="leanBox">{{ text }}</div>
      </div>
    </div>
<!--    <br/>-->
<!--    <div>-->
<!--      <button v-print="printObj">打印pdf</button>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: 'prettifyText',
  props: {
    width: {
      type: String,
      required: true,
      default() {
        return ''
      }
    },
    height: {
      type: String,
      required: true,
      default() {
        return "";
      }
    },
    arcTitle: {
      type: String,
      required: true,
      default() {
        return "";
      }
    },
    fontSize:{
      type: Number,
      required: true,
      default() {
        return 14
      }
    },
    angle:{
      type: Number,
      required: true,
      default() {
        return 20
      }
    },
    offset:{
      type: Number,
      required: true,
      default() {
        return 100
      }
    }
  },
  data() {
    return {
      emblemText: [],
      printObj: {
        id: "printMe",
        popTitle: '',
        // extraCss: 'https://www.google.com',
        extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>'
      }
    }
  },
  created() {
    let arr = []
    for (let i = 0; i < this.arcTitle.length; i++) {
      arr.push(this.arcTitle[i]);
    }
    this.emblemText = arr;
    // console.log(arr)
  },
  methods: {
    //一个圆是360度这里划分成了12份。每个文字角度是30度。然后从第一个文字开始距离水平线是倾斜了15度的
    getDeg(index) {
      // console.log(this.arcTitle.length)
      return (index + 1) * this.angle - this.offset + 'deg';
    },
  },
}
</script>

<style media="print">
@page {
  size: auto; /* auto is the initial value */
  margin: 3mm; /* this affects the margin in the printer settings */
}
</style>

<style lang="scss" scoped>
.emblem {
  //position: absolute;
  //top: 50%;
  //left: 50%;
  //right: 0;
  //bottom: 0;
  //transform: translate(50%, 50%);
  transform: translate(0, 0);
  border-radius: 50%;
  text-align: center;
  overflow: hidden;
  background: url("../../assets/old.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.emblem .text {
  position: absolute;
  display: inline-block;
  left: 2px;
  right: 2px;
  top: 2px;
  bottom: 2px;
  color: red;
  font-weight: 600;
  font-family: Small Fonts;
  transition: all 0.5s cubic-bezier(0, 0, 0, 1);
}

.leanBox {
  transform: scale(1, 1.8);
  transform-origin: 0 0;
}
</style>
