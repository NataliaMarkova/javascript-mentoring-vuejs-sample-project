<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Notes</router-link> |
      <router-link to="/archive">Archive</router-link>
    </div>
    <main class>
      <div class="header">
        <h1>Keep Your Notes</h1>
        <p>This this a JavaScript Mentoring Vue JS Project</p>
      </div>
      <router-view/>
    </main>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.header {
  text-align: center;
  color: #2c3e50;  
}
#nav {
  padding: 30px;
  text-align: center;
  color: #2c3e50;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #17a2b8;
    }
  }
}
</style>
