<script>
export default {
    name: "SectionTalkAbout",
}
</script>

<template>
    <section>
        <div class="container">
            <!-- titolo della sezione -->
            <h1>Why People Talk About <span>MaxCoach</span>?</h1>
            <!-- card principale della sezione -->
            <div class="card">
                <div class="slot_img">

                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

section {
    padding: 100px 0;
}

.container {
    text-align: center;

    h1 {
        color: $fontPrimaryColor;
        font-size: 40px;
        margin-bottom: 50px;

        span {
            color: $fontSecondaryColor;
            font-weight: 300;
        }
    }
}
</style>