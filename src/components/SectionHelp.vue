<script>
export default {
    name: "SectionHelp",
}
</script>

<template>
    <section>
        <div class="container">
            <span class="subtitle">
                WANNA TRANSFORM YOUR LIFE?
            </span>
            <!-- titolo della sezione -->
            <h1>Glad to <span>Help You</span> Learn</h1>

            <!-- container delle card -->
            <div class="ctn_card">
                <!-- card -->
                <div class="card">
                    <!-- icona della card -->
                    <div class="slot_icon">
                        <font-awesome-icon icon="fa-regular fa-flag" />
                    </div>
                    <!-- testo della card -->
                    <div class="slot_text">
                        <h5>Idea Discussion</h5>
                        <p>
                            Get teamed up with the specialist who work and teach coding for years at famous
                            universities.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

section {
    background-color: $sectionSecondColor;
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

.ctn_card {
    margin-top: 50px;
    @include between();
    align-items: stretch;
    gap: 20px;

    .card {
        width: calc((100% - 60px) / 4);

        .slot_icon {
            text-align: start;
            color: $fontPrimaryColor;
            font-size: 40px;
        }

        .slot_text {
            text-align: start;

            h5 {
                color: $fontPrimaryColor;
                font-size: 20px;
                margin: 15px 0;
            }

            p {
                color: $fontThirdCOlor;
            }
        }
    }
}
</style>