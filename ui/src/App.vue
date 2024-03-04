<script setup lang="ts">
import NotificationArea from '@/components/area/NotificationArea.vue'
import WindowsArea from '@/components/area/WindowsArea.vue'
import MenuButton from './components/button/MenuButton.vue'
import { onMounted, inject } from 'vue';

const $vsk:any = inject('vsk');

onMounted(()=>{
  $vsk.loadUIConfig();
})
</script>

<template>
  <WindowsArea />
  <MenuButton />
  <NotificationArea />
</template>
