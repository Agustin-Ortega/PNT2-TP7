<template>
  <div class="container-fluid mt-3">
    <navBar />
    
    <router-view></router-view>
    <div>
      
    </div>
  </div>

</template>

<script>

import navBar from './componentes/navBar.vue';

export default {
  name: 'App',
  components: {
    navBar,
  }
}
</script>

<style>

</style>
