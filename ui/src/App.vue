<script setup lang="ts">
import NotificationArea from '@/components/area/NotificationArea.vue'
import WindowsArea from '@/components/area/WindowsArea.vue'
import MenuButton from './components/button/MenuButton.vue'
</script>

<template>
  <div class="container-fluid">
    <WindowsArea />
    <MenuButton />
    <NotificationArea />
  </div>
</template>
