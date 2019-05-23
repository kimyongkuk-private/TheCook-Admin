<template>
  <div>
    잘못된 접근입니다.
  </div>
</template>

<script>

export default {
  layout: 'error_layout',
  middleware: 'notAuthenticated',
  methods: {
  }
}
</script>
