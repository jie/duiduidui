<template>
  <div>
    <div class="logo-image">
      <img class="logo" src="../assets/dui.png">
      <h1> </h1>
    </div>
    <group>
      <popup-picker
        title='怼法官'
        :data="techRecords"
        :columns="1"
        v-model="isShowPopup"
        @on-change="onChange" />
    </group>
    <group>
</group>
  </div>
</template>

<script>
import { Group, Cell, PopupPicker } from 'vux'
import techRecords from '@/data/tech'
export default {
  components: {
    Group,
    Cell,
    PopupPicker
  },
  data () {
    return {
      techRecords: techRecords,
      currentRecord: '',
      isShowPopup: []
    }
  },
  methods: {
    showPop() {
      this.isShowPopup = []
    },
    onChange(value) {
      this.$router.push({
        name: 'page',
        params: {
          key: value[0]
        }
      })
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
