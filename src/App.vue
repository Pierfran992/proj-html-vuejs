<script>
// componenti header
import AppHeader from './components/AppHeader.vue';
import Jumbotron from './components/Jumbotron.vue';

// componenti main
import SectionInfo from './components/SectionInfo.vue';
import SectionService from './components/SectionService.vue';
import SectionCourses from './components/SectionCourses.vue';
import SectionTalkAbout from './components/SectionTalkAbout.vue';
import SectionBlog from './components/SectionBlog.vue';
import SectionHelp from './components/SectionHelp.vue';
import SectionStarted from './components/SectionStarted.vue';

// componenti footer
import AppFooter from './components/AppFooter.vue';

export default {
    name: "App",
    components: {
        // componenti header
        AppHeader,
        Jumbotron,
        // componenti main
        SectionInfo,
        SectionService,
        SectionCourses,
        SectionTalkAbout,
        SectionBlog,
        SectionHelp,
        SectionStarted,
        // componenti footer
        AppFooter,
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
    <!-- componenti footer -->
    <footer>
        <AppFooter />
    </footer>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
