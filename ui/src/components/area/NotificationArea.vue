<script lang="ts">
import { defineComponent } from 'vue'
import NetworkStatus from '@/components/status/NetworkStatus.vue'
import ClockComponent from '@/components/ClockComponent.vue'

export default defineComponent({
  name: 'NotificationArea',
  components: {
    NetworkStatus,
    ClockComponent
  }
})
</script>

<template>
  <div class="navale-notification-area">
    <NetworkStatus />
    <ClockComponent />
  </div>
</template>
