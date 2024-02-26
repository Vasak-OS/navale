<script lang="ts" setup>
import { ref, inject } from 'vue'

const $vsk: any = inject('vsk')
const name = ref('')
const icon = ref('')

const checkNetwork = async (): Promise<void> => {
  let data = await $vsk.getDefaultNetwork()
  data = JSON.parse(data)
  name.value = data.name
  icon.value = data.icon
}

setInterval(() => checkNetwork(), 2000)
</script>

<template>
  <div id="network">
    <img :title="name" :src="'file://' + icon" :alt="name" />
  </div>
</template>
