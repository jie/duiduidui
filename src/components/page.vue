<template>
  <div>
    <x-header>{{ title }}</x-header>
    <div style="padding: 20px">
      <img v-if="currentSrc" :src="currentSrc" :alt="errAlt" style="display: block; margin: 0 auto; width: 200px">
      <div style="display: block; margin: 0 auto; width: 200px; text-align: center; min-height: 230px; vertical-align: middle" v-else>
        <spinner type="android" slot="value" size="40" style="margin-top: 50px;"></spinner>
      </div>
    </div>
    <div class="comments" v-if="currentRecord.comment">
      <div class="comment">
        <div class="avatar">
          <img src="../assets/avatar.png" alt="" width="40" height="40">
        </div>
        <div class="speech">
          <hgroup class="speech-bubble">
            <div class="speech-content" style="min-height: 40px">{{ currentRecord.comment }}</div>
          </hgroup>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Group, Cell, XHeader, Spinner } from 'vux'
import techRecords from '@/data/tech'

export default {
  components: {
    Group,
    Cell,
    XHeader,
    Spinner
  },
  created() {
    this.getImage()
  },
  watch: {
      '$route': 'getImage'
  },
  data () {
    return {
      techRecords: techRecords,
      currentRecord: '',
      currentSrc: '',
      title: '',
      errAlt: ''
    }
  },
  methods: {
    getImage() {
      for(let item in this.techRecords) {
        let obj = this.techRecords[item]
        if(this.$route.params.key == obj.value) {
          setTimeout(() => {
            this.currentRecord = obj
            this.loadImage(obj.link)
            this.title = obj.name
          }, 1000)
        }
      }
    },
    loadImage(src) {
      let newImg = new Image()
      newImg.src = src
      newImg.onerror = () => {
        this.errAlt = '请刷新页面重试'
      }
      newImg.onload = () => {
          this.currentSrc = newImg.src
      }
    }
  }
}
</script>

<style>

</style>
