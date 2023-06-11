<script>
import { store } from '../store';

export default {
    name: 'AppSingleMovie',
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
        <img src="" alt="">
        <h3>{{ details.title }}</h3>
        <h4>{{ details.original_title }}</h4>
        <span>
            {{ details.original_language }}
            <flag :iso="details.original_language == 'en' ? 'gb' : details.original_language" />
        </span>
        <span>{{ this.getVote() }}
            <font-awesome-icon v-for="_ in Array(this.getVote())" icon="fa-solid fa-star" />
            <font-awesome-icon v-for="_ in Array(5 - this.getVote())" icon="fa-regular fa-star" />
        </span>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/variables.scss' as *;

span {
    display: block;
}
</style>