<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      
      <Menu />
      <WindowsArea />
      <NotificationArea />

    </div>
  </nav>
</template>

<script>
import Menu from './components/Menu.vue';
import NotificationArea from './components/NotificationArea.vue';
import WindowsArea from './components/WindowsArea.vue';

export default{
  components:[
    Menu,
    NotificationArea,
    WindowsArea
  ]
}
</script>

<style>
</style>
