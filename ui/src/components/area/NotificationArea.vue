<script lang="ts">
import { defineComponent } from 'vue'
import ClockComponent from '@/components/ClockComponent.vue'

export default defineComponent({
  name: 'NotificationArea',
  components: {
    ClockComponent
  }
})
</script>

<template>
  <div id="notificationArea">
    <ClockComponent />
  </div>
</template>
