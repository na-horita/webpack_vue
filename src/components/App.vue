<template>
  <div class="app">
    <h1>potato mozigakawaru</h1>
    <sub-component message="My Counter for Vue.js with Babel"></sub-component>
  </div>
</template>

<script>
  import SubComponent from "./SubComponent.vue";
  export default {
    components: {
      SubComponent
    }
  };
</script>

<style scoped>

  h1 {
    font-weight: normal;
  }

  .app {
    text-align: center;
    font-family: 'Roboto', sans-serif;
  }
</style>
