<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MenuButton',
  data() {
    return {
      menuIcon: ''
    }
  },
  methods: {
    openMenu(): void {
      console.log('hydriam')
    },
    async setIcon(): Promise<void> {
      this.menuIcon = await (this as any).$vsk.getGlobalIcon('hydriam')
    }
  },
  computed: {
    icon(): string {
      return this.menuIcon
    }
  },
  mounted() {
    this.setIcon()
  }
})
</script>

<template>
  <a class="navbar-brand" href="#" id="dockMenuLauncher" @click="openMenu()">
    <img
      :src="'file://' + icon"
      data-bs-toggle="tooltip"
      data-bs-placement="left"
      title="Lynx Menu"
      class="img-fluid dock-menu-launcher-icon"
      alt="Menu"
    />
  </a>
</template>
