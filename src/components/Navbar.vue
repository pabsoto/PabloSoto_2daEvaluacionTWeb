<template>
  <header>
    <nav class="navbar">
      <div class="logo">Star Wars Portal</div>
      <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">People</a></li>
        <li><a href="#">Planets</a></li>
        <li><a href="#">Starships</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  padding: 1rem;
  color: white;
}

.nav-links {
  list-style: none;
  display: flex;
}

.nav-links li {
  margin: 0 1rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
}

.nav-links a:hover {
  text-decoration: underline;
}


@media (max-width: 768px) {
  .nav-links {
    display: none;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }

  .navbar {
    flex-direction: column;
  }

  .nav-links.active {
    display: flex;
  }
}
</style>
