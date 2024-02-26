<script lang="ts" setup>
import { ref, onMounted, inject, computed } from 'vue'

const $vsk: any = inject('vsk')
const menuIcon = ref('')
const openMenu = (): void => {
  console.log('hydriam')
}
const setIcon = async (): Promise<void> => {
  menuIcon.value = await $vsk.getGlobalIcon('applications-all')
}
const icon = computed(() => menuIcon.value)

onMounted(() => {
  setIcon()
})
</script>

<template>
  <a class="navale-menu" href="#" id="dockMenuLauncher" @click="openMenu()">
    <img
      :src="'file://' + icon"
      title="Hydriam"
      alt="Menu"
    />
  </a>
</template>
