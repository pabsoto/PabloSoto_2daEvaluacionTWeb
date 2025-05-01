<template>
  <header>
    <nav class="navbar">
      <div class="logo">Star Wars Portal</div>
      <ul class="nav-links">
        <li><a href="#" @click.prevent="goToPeople">People</a></li>
        <li><a href="#" @click.prevent="goToPlanets">Planets</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    goToPeople() {
      this.$emit("changeView", "people");  
    },
    goToPlanets() {
      this.$emit("changeView", "planets");  
    }
  }
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');


.navbar {
  background-color: #2c3e50;
  padding: 20px;
  font-family: 'Roboto', sans-serif; 
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.8em;
  color: white;
  font-weight: 500;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links li {
  font-size: 1.2em;
}

.nav-links a {
  text-decoration: none;
  color: white;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #3498db; 
}
</style>
