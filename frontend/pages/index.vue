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
      title: 'main',
      meta: [
        { hid: 'description', name: 'description', content: 'thecook-admin 페이지' }
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
<style lang="sass" scoped src="./assets/index.sass"></style>
