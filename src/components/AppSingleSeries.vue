<script>
import { store } from '../store';

export default {
    name: 'AppSingleSeries',
    props: {
        details: Object
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getVote() {
            return Math.ceil(this.details.vote_average / 2)
        }
    }
}
</script>

<template>
    <div class="card">
        <div class="poster">
            <img :src="`https://image.tmdb.org/t/p/w342/${details.poster_path}`" :alt="poster_path">
        </div>
        <div class="info">
            <h3>Titolo: {{ details.name }}</h3>
            <h4>Titolo originale: {{ details.original_name }}</h4>
            <span>
                Lingua:
                <!-- dinamical bind da documentazione -->
                <flag :iso="details.original_language == 'en' ? 'gb' : details.original_language" />
            </span>
            <span>
                Voto:
                <font-awesome-icon v-for="_ in Array(this.getVote())" icon="fa-solid fa-star" />
                <font-awesome-icon v-for="_ in Array(5 - this.getVote())" icon="fa-regular fa-star" />
            </span>
        </div>
    </div>
</template>

<style lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/variables.scss' as *;
</style>