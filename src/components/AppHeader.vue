<script>
import { store } from '../store.js';


export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    },
    methods: {
        resetSearch() {
            store.searchText = '';
            this.$emit('search')
        }
    }
}
</script>

<template>
    <section>
        <div class="logo">
            <h1>Boolfix</h1>
        </div>
        <div class="search">
            <input type="text" size="30" placeholder="Search" v-model.trim="store.searchText">
            <button type="submit" @click.prevent="$emit('search')">Search</button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/variables.scss' as *;

section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    .logo {
        padding-left: 30px;
    }

    .search {
        padding-right: 30px;

        input {
            padding: 5px;
        }

        button {
            margin-left: 10px;
            padding: 5px;
        }
    }
}
</style>