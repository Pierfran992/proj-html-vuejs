<script>
export default {
    name: "SectionBlog",
}
</script>

<template>
    <section>
        <div class="container">
            <span class="subtitle">
                ENJOY READING ON MAXCOACH
            </span>
            <!-- titolo della sezione -->
            <h1>Latest on <span>Our Blogs</span></h1>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

section {
    background-color: $sectionThirdColor;
    padding: 100px 0;
}

.container {
    text-align: center;

    .subtitle {
        color: $fontThirdCOlor;
        font-size: 14px;
    }

    h1 {
        color: $fontPrimaryColor;
        font-size: 35px;
        margin-top: 10px;

        span {
            color: $fontSecondaryColor;
            font-weight: 300;
        }
    }
}
</style>