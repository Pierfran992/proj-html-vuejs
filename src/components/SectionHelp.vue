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
            <h3>Glad to <span>Help You</span> Learn</h3>

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

                <div class="card">
                    <!-- icona della card -->
                    <div class="slot_icon">
                        <font-awesome-icon icon="fa-solid fa-gear" />
                    </div>
                    <!-- testo della card -->
                    <div class="slot_text">
                        <h5>Web Development</h5>
                        <p>
                            Learn to start building a webpage from scratch. You decide your own pace, course and speed.
                        </p>
                    </div>
                </div>

                <div class="card">
                    <!-- icona della card -->
                    <div class="slot_icon">
                        <font-awesome-icon icon="fa-solid fa-life-ring" />
                    </div>
                    <!-- testo della card -->
                    <div class="slot_text">
                        <h5>System Administration</h5>
                        <p>
                            Learnes are encouraged to study the mechanism and structure of system administration.
                        </p>
                    </div>
                </div>

                <div class="card">
                    <!-- icona della card -->
                    <div class="slot_icon">
                        <font-awesome-icon icon="fa-solid fa-desktop" />
                    </div>
                    <!-- testo della card -->
                    <div class="slot_text">
                        <h5>Graphic Design</h5>
                        <p>
                            Have a passion for graphics and arts? Show your talents with confidence and
                            self-assertiveness.
                        </p>
                    </div>
                </div>
            </div>

            <!-- container immagine section -->
            <div class="ctn_img">
                <img src="../assets/images/home-6-services-image-1024x411.png" alt="home_6_services">
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

    h3 {
        color: $fontPrimaryColor;
        font-size: 35px;
        margin-top: 10px;

        span {
            color: $fontSecondaryColor;
            font-weight: 300;
        }
    }
}

// regole card
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

// regole immagine
.ctn_img {
    width: 100%;
    position: relative;
    bottom: -135px;
}
</style>