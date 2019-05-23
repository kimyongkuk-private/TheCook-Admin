<template>
  <v-app dark v-resize="checkMobile">
    <v-content fill-height>

        <nuxt />

    </v-content>
  </v-app>
</template>

<script>
import IsMobile from '@/mixin/isMobile'

export default {
  components: {
  },
  data () {
    return {
    }
  },
  mixins: [IsMobile]
}
</script>

<style lang="stylus" scope="this api replaced by slot-scope in 2.5.0+">

</style>