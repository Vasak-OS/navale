<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WindowBottom',
  props: {
    window: { type: Object, required: true }
  },
  methods: {
    async toggleWindow(): Promise<void> {
      await (this as any).$vsk.toggleWindow(this.window.id)
    },
  },
})
</script>

<template>
  <a class="navbar-brand" href="#" @click="toggleWindow">
    <img
      :src="window.icon"
      data-bs-toggle="tooltip"
      data-bs-placement="left"
      :title="window.name"
      class="img-fluid win-img"
      :alt="window.name"
    />
  </a>
</template>
