<template>
  <v-layout row wrap>

  </v-layout>
</template>

<script>
export default {
  middleware: 'notAuthenticated',
  head () {
    return {
      htmlAttrs: {
      },
      title: 'thecook-customer | Production',
      meta: [
        { hid: 'description', name: 'description', content: 'thecook-customer | Production' }
      ]
    }
  },
  layout: 'default',
  // middleware: 'auth',
  components: {
  },
  data () {
    return {
    }
  }
}
</script>

