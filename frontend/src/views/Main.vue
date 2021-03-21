<script>
import Navbar from '../components/Navbar'
export default {
  name: 'Main',
  components: {
    Navbar
  }
}
</script>

<template>
  <div class="main">
    <Navbar />
    <div class="content">

    </div>
    <div class="search">

    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: grid;
  grid-template-columns: repeat(14 , 1fr);
  grid-template-rows: 1fr;
  grid-template-areas: "header" "content" "search";
  width: 100%;
  max-width: 1450px;
  margin: 0 auto;
}
.content {
  width: 100%;
  height: 100vh;
  background: lawngreen;
  grid-area: content;
  grid-column: 3 / 10;
  grid-row: 1 / 2;
}
.search {
  height: 100vh;
  width: 100%;
  background: green;
  grid-area: search;
  grid-column: 10 / 14;
  grid-row: 1 / 2;
}
</style>