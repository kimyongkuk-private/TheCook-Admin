
<template>
  <v-layout v-resize="checkMobile" >
    <Detail/>
    <List/>

  </v-layout>
</template>

<script>
  import IsMobile from '@/mixin/isMobile'
  import ScadulDetail from './scheduler_detail'
  import ScadulList from './scheduler_list'

  export default {
    mixins: [IsMobile],
    components: {
      'Detail': ScadulDetail,
      'List': ScadulList
    },
    data () {
      return {
      }
    },
    methods: {
    },
    computed: {
    },
    watch: {
    },
    created () {
    }
  }
</script>

<style lang="stylus" scoped>
@require '~assets/style/variables'
.v-date-picker-title__date
  font-size 25px
.scheduler_wrap
  position relative
  .scheduler
    height calc(100vh - 120px)
    overflow-y scroll
    -ms-overflow-style none
    box-shadow default
    .scheduleTitle
      position sticky
      top 0
      background #303030
      z-index 1
    .scheduler_fab
      z-index 9999
::-webkit-scrollbar
  display none
</style>
