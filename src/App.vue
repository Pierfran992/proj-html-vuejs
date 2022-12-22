<script>
import AppHeader from './components/AppHeader.vue';
import Jumbotron from './components/Jumbotron.vue';
import SectionInfo from './components/SectionInfo.vue';
import SectionService from './components/SectionService.vue';
import SectionCourses from './components/SectionCourses.vue';
import SectionTalkAbout from './components/SectionTalkAbout.vue';
import SectionBlog from './components/SectionBlog.vue';
import SectionHelp from './components/SectionHelp.vue';
import SectionStarted from './components/SectionStarted.vue';

export default {
    name: "App",
    components: {
        AppHeader,
        Jumbotron,
        SectionInfo,
        SectionService,
        SectionCourses,
        SectionTalkAbout,
        SectionBlog,
        SectionHelp,
        SectionStarted,
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
        <SectionCourses />
        <SectionTalkAbout />
        <SectionBlog />
        <SectionHelp />
        <SectionStarted />
    </main>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
