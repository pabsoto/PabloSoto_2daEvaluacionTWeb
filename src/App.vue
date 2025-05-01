<template>
  <div id="app">
    <Navbar />
    <PlanetsList />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import PlanetsList from './components/PlanetsList.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    PlanetsList,
  }
};
</script>

<style>
</style>
