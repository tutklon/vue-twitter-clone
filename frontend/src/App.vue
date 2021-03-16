<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
*  , *::before , *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 100%;
  height: 100vh;
  background: #15202b;
  color: white;
  .link {
    color: white;
  }
}
</style>
