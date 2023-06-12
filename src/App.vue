<script>
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import AppListMovies from './components/AppListMovies.vue';
import AppListSeries from './components/AppListSeries.vue';
import AppSingleMovie from './components/AppSingleMovie.vue';
import AppSingleSeries from './components/AppSingleSeries.vue';
import axios from '../node_modules/axios';


export default {
  components: {
    store,
    AppHeader,
    AppListMovies,
    AppListSeries,
    AppSingleMovie,
    AppSingleSeries,
    axios,
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getMovies() {
      let movURL = store.apiMovieURL;
      if (!!store.searchText) {
        // encode concatena,incoda anche caratteri speciali
        movURL = store.apiMovieURL + '&query=' + encodeURIComponent(store.searchText);
      } else {
        movURL = store.apiMovieURL + '&query=' + '';
      }
      axios.get(movURL)
        .then(resMov => {
          store.moviesList = resMov.data.results;
          console.log(store.moviesList);
        })
        .catch(err => {
          console.log(err.message);
        })
    },
    getSeries() {
      let serURL = store.apiSeriesURL;
      if (!!store.searchText) {
        serURL = store.apiSeriesURL + '&query=' + encodeURIComponent(store.searchText);
      } else {
        serURL = store.apiSeriesURL + '&query=' + '';
      }
      axios.get(serURL)
        .then(resSer => {
          store.seriesList = resSer.data.results;
          console.log(store.seriesList);
        })
        .catch(err => {
          console.log(err.message);
        })
    },
    getAll() {
      this.getMovies();
      this.getSeries();
    }
  },
  created() {
    this.getMovies();
    this.getSeries();
  }

}
</script>

<template>
  <header>
    <AppHeader @search="getAll" />
  </header>

  <main>
    <section>
      <AppListMovies />
    </section>

    <section>
      <AppListSeries />
    </section>

  </main>
</template>

<style lang="scss">
@use './styles/general.scss';
@use './styles/partials/variables.scss' as *;
</style>
