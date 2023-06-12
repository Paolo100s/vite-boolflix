<script>
import { store } from '../store';
import AppSingleSeries from './AppSingleSeries.vue';

export default {
    name: 'AppListSeries',
    components: {
        AppSingleSeries
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <h2 v-if="!!store.searchText">Serie TV</h2>
    <div class="container">
        <div class="row">
            <AppSingleSeries v-for="series in store.seriesList" :details="series" :key="series.id" />
        </div>
    </div>
</template>

<style lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/variables.scss' as *;
</style>