<script lang="ts">
import { defineComponent } from 'vue'
import { windowsStore } from '@/stores/windows';
import WindowBottom from '../button/WindowBottom.vue';

export default defineComponent({
  name: 'WindowsArea',
  data() {
    return {
      windowsManager: windowsStore(),
    }
  },
  computed: {
    windows():any[] {
      return this.windowsManager.windows
    },
  },
  components: {
    WindowBottom,
  },
})
</script>

<template>
  <div>
    <template v-for="window in windows" :key="window.id">
      <WindowBottom :window="window" />
    </template>
  </div>
</template>
