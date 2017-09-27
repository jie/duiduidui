<template>
  <div>
    <div class="logo-image">
      <img class="logo" src="../assets/dui.png">
      <h1> </h1>
    </div>
    <group title="怼法官">
      <selector :options="pages" @on-change="onChangeSelect"></selector>
    </group>
  </div>
</template>

<script>
import { Group, Cell, Selector } from 'vux'

export default {
  components: {
    Group,
    Cell,
    Selector
  },
  data () {
    return {
      pages: [
        {
          key: 'http://owxg7bsq3.bkt.clouddn.com/%E5%9F%BA%E6%9C%AC%E6%90%93%E7%90%831.gif',
          value: '基本搓球1',
        },
        {
          key: 'http://owxg7bsq3.bkt.clouddn.com/%E5%9F%BA%E6%9C%AC%E6%90%93%E7%90%832.gif',
          value: '基本搓球2',
        },
        {
          key: 'http://owxg7bsq3.bkt.clouddn.com/%E5%9F%BA%E6%9C%AC%E6%90%93%E7%90%833.gif',
          value: '基本搓球3',
        },
        {
          key: 'http://owxg7bsq3.bkt.clouddn.com/%E4%B8%AD%E6%AF%92%E5%BF%AB%E9%80%9F%E7%90%831.gif',
          value: '中毒快速球1',
        },
        {
          key: 'http://owxg7bsq3.bkt.clouddn.com/%E5%B7%A6%E4%BE%A7%E5%80%92%E9%92%A91.gif',
          value: '左侧倒钩1',
        },
        {
          key: 'http://owxg7bsq3.bkt.clouddn.com/%E5%B0%8F%E8%A7%92%E5%BA%A6%E9%95%BF%E8%B7%9D%E7%A6%BB%E8%82%89%E6%90%8F1.gif',
          value: '小角度长距离肉搏1',
        }
      ]
    }
  },
  methods: {
    onChangeSelect(key, value) {
      console.log(key, value)
    }
  }
}
</script>

<style>
.logo-image {
  text-align: center;
  margin-top: 30px;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
