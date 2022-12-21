<script>
import AppHeader from './components/AppHeader.vue';
import Jumbotron from './components/Jumbotron.vue';
import SectionInfo from './components/SectionInfo.vue';
import SectionService from './components/SectionService.vue';



export default {
    name: "App",
    components: {
        AppHeader,
        Jumbotron,
        SectionInfo,
        SectionService,
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
        <SectionService />
    </main>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
