<template>
    <div>
      <h1>Planetas de Star Wars</h1>
      <div v-if="loading">Cargando...</div>
      <div v-if="error">{{ errorMessage }}</div>
      <div v-if="planets.length > 0">
        <div v-for="planet in planets" :key="planet.uid">
          <h2>{{ planet.name }}</h2>
          <p>Clima: {{ planet.climate }}</p>
          <p>Terreno: {{ planet.terrain }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'PlanetsView',
    data() {
      return {
        planets: [],
        loading: true,
        error: false,
        errorMessage: ''
      };
    },
    mounted() {
      this.fetchPlanets();
    },
    methods: {
  async fetchPlanets() {
    try {
      const listResponse = await axios.get('https://www.swapi.tech/api/planets');
      const planetList = listResponse.data.results;

      const planetDetails = await Promise.all(
        planetList.map(async (planet) => {
          const res = await axios.get(`https://www.swapi.tech/api/planets/${planet.uid}`);
          const props = res.data.result.properties;
          return {
            uid: planet.uid,
            name: props.name,
            climate: props.climate,
            terrain: props.terrain
          };
        })
      );

      console.log("PLANET DETAILS ->", planetDetails); // <- AÑADE ESTO

      this.planets = planetDetails;
      this.loading = false;
    } catch (error) {
      this.loading = false;
      this.error = true;
      this.errorMessage = 'No se pudieron cargar los planetas. Intenta más tarde.';
    }
  }
}

  };
  </script>
  