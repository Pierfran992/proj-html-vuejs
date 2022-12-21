<script>
import AppHeader from './components/AppHeader.vue';
import Jumbotron from './components/Jumbotron.vue';

export default {
    name: "App",
    components: {
        AppHeader,
        Jumbotron,
    }
}
</script>

<template>
    <AppHeader />
    <Jumbotron />
</template>

<style lang="scss">
@use './styles/partials/variables.scss' as *;
@use './styles/general.scss' as *;
</style>
