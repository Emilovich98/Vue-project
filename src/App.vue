<template>
  <div id="app">
    <div id="nav">
      <div id="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/create">Create</router-link>
        <router-link to="/update">Update</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav-links {
  padding: 30px;
  background-color: beige;
  display: flex;
  justify-content: center;
}

#nav-links a {
  font-weight: bold;
  padding-left: 20px;
  padding-right: 20px;
  color: #2c3e50;
  text-decoration: none;
}

#nav-links a.router-link-exact-active {
  color: #42b983;
}
</style>
