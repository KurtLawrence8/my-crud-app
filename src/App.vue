<template>
  <nav>
    <span class="title">Computer</span>
    <div class="nav-links">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/computer">Computer</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #3d494b;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
}

.title {
  font-size: 1.5rem;
  color: #ffffff;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 1rem;
  margin-right: 20px;
}

nav a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #09c21b;
}
</style>
