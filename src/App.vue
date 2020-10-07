<template>
  <div id="app">
    <b-nav align="center">
      <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
      <b-nav-item><router-link to="pricing">Pricing</router-link></b-nav-item>
    </b-nav>
    <hr />

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style></style>
