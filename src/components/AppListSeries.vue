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

<template></template>

<style lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/variables.scss' as *;
</style>