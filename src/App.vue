<template>
  <div id="app">
    <Navbar @changeView="changeView" />
    <div v-if="currentView === 'planets'">
      <PlanetList />
    </div>
    <div v-if="currentView === 'people'">
      <PeopleList />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import PlanetList from './components/PlanetsList.vue';
import PeopleList from './components/PeopleList.vue'; 
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    PlanetList,
    PeopleList,
    Footer
  },
  data() {
    return {
      currentView: 'planets'  
    };
  },
  methods: {
    changeView(view) {
      this.currentView = view;  
    }
  }
};
</script>

<style>
</style>
