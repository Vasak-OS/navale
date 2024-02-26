<script lang="ts" setup>
import { inject } from 'vue';

const $vsk:any = inject('vsk')
defineProps<{ window: any }>()

const toggleWindow = async (): Promise<void> => {
  await $vsk.toggleWindow((window as any).id)
}
</script>

<template>
  <a href="#" @click="toggleWindow">
    <img :src="window.icon" :title="window.name" :alt="window.name" />
  </a>
</template>
