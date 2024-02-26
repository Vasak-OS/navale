<script lang="ts" setup>
import { computed } from 'vue'
import { windowsStore } from '@/stores/windows'
import WindowBottom from '../button/WindowBottom.vue'

const windowsManager = windowsStore()
const windows = computed((): Array<any> => windowsManager.windows)
</script>

<template>
  <div class="navale-applications-zone">
    <WindowBottom v-for="window in windows" :key="window?.id" :window="window" />
  </div>
</template>
