<template>
  <v-layout row wrap>
    <Carousel/>
  </v-layout>
</template>

<script>
import Carousel from '@/components/carousel'
export default {
  head () {
    return {
      htmlAttrs: {
      },
      title: 'thecook-customer | Promotion',
      meta: [
        { hid: 'description', name: 'description', content: 'thecook-customer | Promotion' }
      ]
    }
  },
  layout: 'default',
  // middleware: 'auth',
  components: {
    Carousel
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="sass" scoped src="./assets/promotion.sass"></style>
