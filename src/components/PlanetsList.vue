<template>
    <div class="planet-list">
      <h1 class="title">Planetas de Star Wars</h1>
      <div v-for="planet in planets" :key="planet.name" class="planet-card">
        <h2 class="planet-name">{{ planet.name }}</h2>
        <div class="planet-details">
          <p><strong>Clima:</strong> {{ planet.climate }}</p>
          <p><strong>Terreno:</strong> {{ planet.terrain }}</p>
        </div>
        <button class="details-btn" @click="showDetails(planet)">Ver detalles</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PlanetList',
    data() {
      return {
        planets: [
          { name: 'Tatooine', climate: 'Arid', terrain: 'Desert' },
          { name: 'Hoth', climate: 'Frozen', terrain: 'Ice' },
          { name: 'Endor', climate: 'Temperate', terrain: 'Forest' },
          // En esta parte del código estamos añadiendo los datos de cada planeta de  manera explícita
        ]
      };
    },
    methods: {
      showDetails(planet) {
        alert(`Detalles de ${planet.name}`);
      }
    }
  }
  </script>
  
  <style scoped>
  
  .planet-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
    background-color: #f4f4f9;
    font-family: 'Arial', sans-serif;
  }
  
  .title {
    width: 100%;
    text-align: center;
    font-size: 2.5em;
    margin-bottom: 30px;
    color: #2c3e50;
  }
  
  .planet-card {
    background-color: white;
    margin: 10px;
    padding: 20px;
    border-radius: 10px;
    width: 250px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    text-align: center;
  }
  
  .planet-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  .planet-name {
    font-size: 1.8em;
    color: #34495e;
    margin-bottom: 15px;
  }
  
  .planet-details p {
    color: #7f8c8d;
    font-size: 1.1em;
  }
  
  .details-btn {
    background-color: #3498db;
    color: white;
    padding: 10px;
    font-size: 1.2em;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .details-btn:hover {
    background-color: #2980b9;
  }
  </style>
  