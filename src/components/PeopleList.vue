<template>
    <div class="people-list">
      <h1 class="title">Personajes de Star Wars</h1>
      
      
      <div v-for="person in people" :key="person.name" class="person-card">
        <h2 class="person-name">{{ person.name }}</h2>
  
        <!-- Si ya cargaron los detalles, los mostramos -->
        <div v-if="person.details">
          <p><strong>Género:</strong> {{ person.details.gender }}</p>
          <p><strong>Año de nacimiento:</strong> {{ person.details.birth_year }}</p>
          <p><strong>Color de ojos:</strong> {{ person.details.eye_color }}</p>
          <p><strong>Color de piel:</strong> {{ person.details.skin_color }}</p>
          <p><strong>Altura:</strong> {{ person.details.height }} cm</p>
          <p><strong>Masa:</strong> {{ person.details.mass }} kg</p>
        </div>
  
        <!-- Si todavía no se cargaron los detalles -->
        <div v-else>
          <p>Cargando detalles...</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'; // Importamos axios para hacer peticiones
  
  export default {
    name: 'PeopleList',
    data() {
      return {
        people: [],  // Aquí vamos a guardar la lista de personas
      };
    },
    mounted() {
      this.fetchPeople();  
    },
    methods: {
      async fetchPeople() {
        try {
          // Usamos este endpoint para traer los personajes (este es el primer consumo de API)
          const response = await axios.get('https://www.swapi.tech/api/people/');
          const peopleList = response.data.results;
  

          for (let person of peopleList) {
            const personDetailsResponse = await axios.get(person.url); // segundo endpoint por cada persona
            person.details = personDetailsResponse.data.result.properties; // Guardamos los datos extras
          }
  
          this.people = peopleList; // Al final asignamos todo al array principal
        } catch (error) {
          console.error('Error al obtener los datos de personas:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>

  .people-list {
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
  

  .person-card {
    background-color: white;
    margin: 10px;
    padding: 20px;
    border-radius: 10px;
    width: 250px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    text-align: center;
  }
  
  
  .person-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  

  .person-name {
    font-size: 1.8em;
    color: #34495e;
    margin-bottom: 15px;
  }
  
  
  .person-details p {
    color: #7f8c8d;
    font-size: 1.1em;
  }
  </style>
  