<script>
import AppHeader from './components/AppHeader.vue';
import Jumbotron from './components/Jumbotron.vue';
import SectionInfo from './components/SectionInfo.vue';


export default {
    name: "App",
    components: {
        AppHeader,
        Jumbotron,
        SectionInfo,
    }
}
</script>

<template>
    <!-- componenti header -->
    <header>
        <AppHeader />
        <Jumbotron />
    </header>
    <!-- componenti main -->
    <main>
        <SectionInfo />
    </main>
</template>

<style lang="scss">
@use './styles/partials/variables.scss' as *;
@use './styles/general.scss' as *;
</style>
