<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ClockComponent',
  data() {
    return {
      day: '00',
      month: '00',
      year: '0000',
      min: '00',
      hour: '00'
    }
  },
  mounted() {
    setInterval(() => this.setTime(), 5000)
  },
  methods: {
    setTime() {
      let date = new Date()
      this.hour = this.dobleDTO(date.getHours()) // 0 - 23
      this.min = this.dobleDTO(date.getMinutes()) // 0 - 59
      this.day = this.dobleDTO(date.getDate())
      this.month = this.dobleDTO(date.getMonth() + 1)
      this.year = date.getFullYear().toString()
    },
    dobleDTO(data: number): string {
      return data < 10 ? `0${data}` : data.toString()
    }
  }
})
</script>

<template>
  <div id="clock">
    <span
      data-bs-toggle="tooltip"
      data-bs-placement="left"
      :title="
        day.toString().padStart(2, '0') + '/' + month.toString().padStart(2, '0') + '/' + year
      "
    >
      {{ hour }}:{{ min }}
    </span>
  </div>
</template>
