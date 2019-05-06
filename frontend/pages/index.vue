<template>
  <div>

  </div>
</template>

<script>

export default {
  layout: 'default',
  middleware: 'notAuthenticated',
  methods: {
    logout () {
      this.$store.commit('set_signout_mutation')
    }
  }
}
</script>
