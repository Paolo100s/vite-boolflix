<script>
import { store } from '../store';
import AppSingleMovie from './AppSingleMovie.vue';

export default {
    name: 'AppListMovies',
    components: {
        AppSingleMovie
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <h2 v-if="!!store.searchText">Film</h2>
    <div class="container">
        <div class="row">
            <AppSingleMovie v-for="movie in store.moviesList" :details="movie" :key="movie.id" />
        </div>
    </div>
</template>

<style lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/variables.scss' as *;
</style>