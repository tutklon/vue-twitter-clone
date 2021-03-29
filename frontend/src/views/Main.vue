<script>
import axios from 'axios'
import Navbar from '../components/Navbar'
import Tweet from '../components/Tweet'
import MainHeader from '../components/Main/MainHeader'
import TweetForm from '../components/Main/TweetForm'
import SearchBar from '../components/SearchBar'
import Trends from '../components/Trends'
export default {
  name: 'Main',
  components: {
    Navbar,
    Tweet,
    MainHeader,
    TweetForm,
    SearchBar,
    Trends
  },
  data(){
    return {
      users: []
    }
  },
  beforeCreate(){
      axios.get('../data.json')
      .then(data => this.users.push(data.json()))
      .catch(e => console.log(e))
  }
}
</script>

<template>
  <div class="main">
    <Navbar />
    <div class="content">
      <MainHeader />
      <TweetForm />
      <Tweet />
    </div>
    <div class="search">
      <SearchBar />
      <Trends component_name="trends" />
      <Trends />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/veriables.scss';
.main {
  display: grid;
  grid-template-columns: repeat(16 , 1fr);
  grid-template-rows: 1fr;
  grid-template-areas: "header" "content" "search";
  width: 100%;
  max-width: 1450px;
  margin: 0 auto;
}
.content {
  width: 96%;
  //background: lawngreen;
  grid-area: content;
  grid-column: 3 / 11;
  grid-row: 1 / 2;
  border-right: 1px solid $c-tweet-border;
  border-left: 1px solid $c-tweet-border;
}
.search {
  height: 100vh;
  width: 88%;
  //background: green;
  grid-area: search;
  grid-column: 11 / 16;
  grid-row: 1 / 2;
}
@media  screen and (min-width: 1300px) {
  .main {
    grid-template-columns: repeat(18 , 1fr);
  }
  .content {
    grid-column: 5  / 13;
  }
  .search {
    grid-column: 13 / 18;
  }
}
</style>