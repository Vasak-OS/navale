<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NetworkStatus',
  data() {
    return {
      name: '',
      icon: ''
    }
  },
  mounted() {
    setInterval(() => this.checkNetwork(), 2000)
  },
  methods: {
    async checkNetwork() {
      let data = await (this as any).$vsk.getDefaultNetwork()
      data = JSON.parse(data)
      this.name = data.name
      this.icon = data.icon
    }
  },
  computed: {
    networkName() {
      return this.name
    },
    networkIcon() {
      return this.icon
    }
  }
})
</script>

<template>
  <div id="network">
    <img
      data-bs-toggle="tooltip"
      data-bs-placement="left"
      :title="networkName"
      :src="'file://' + networkIcon"
      class="img-fluid dock-system-icon"
      :alt="networkName"
    />
  </div>
</template>
