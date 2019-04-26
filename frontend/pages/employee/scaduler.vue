<template>
   <div>
    <Scaduler class="scaduler"/>

  </div>
</template>

<script>
import Scaduler from '@/components/scaduler/Scaduler'

export default {
  layout: 'default',
  // middleware: 'auth',
  components: {
    Scaduler
    // Feed,
    // NewFeed
  },
  data: () => ({
  })
}
</script>
