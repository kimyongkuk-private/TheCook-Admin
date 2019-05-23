<template>
   <div>
    <Scheduler class="scheduler"/>
  </div>
</template>

<script>
import Scheduler from '@/components/scheduler'

export default {
  layout: 'default',
  middleware: 'authenticated',
  components: {
    Scheduler
  },
  data: () => ({
  })
}
</script>
