<script>
export default {
    name: "SectionService",
}
</script>

<template>
    <div class="container">
        <!-- container dei servizi -->
        <div class="ctn_service">
            <!-- container delle card -->
            <div class="ctn_card_service">
                <div class="card">
                    <h3>Graphic Design</h3>
                    <p>
                        Have a passion for graphics and arts? Show your talents with confidence ad self-assertiveness.
                    </p>
                    <div class="img_card">
                        <img class="down" src="../assets/images/home-6-service-image-01.png" alt="home_service_01">
                    </div>
                </div>
                <div class="card reverse">
                    <div class="img_card">
                        <img class="up left" src="../assets/images/home-6-service-image-03.png" alt="home_service_01">
                    </div>
                    <h3>Idea Discussion</h3>
                    <p>
                        Get teamed up with the specialist who work and teach coding for years at famous universities.
                    </p>
                </div>
            </div>

            <div class="ctn_card_service translate">
                <div class="card">
                    <h3>Business Administration</h3>
                    <p>
                        Learnes are encouraged to study the mechanism and structure of system administration.
                    </p>
                    <div class="img_card">
                        <img class="down" src="../assets/images/home-6-service-image-02.png" alt="home_service_01">
                    </div>
                </div>
                <div class="card reverse">
                    <div class="img_card">
                        <img class="up" src="../assets/images/home-6-service-image-04.png" alt="home_service_01">
                    </div>
                    <h3>Web Development</h3>
                    <p>
                        Learn to start building a webpage from scratch. You decide your own pace, course and speed.
                    </p>
                </div>
            </div>
            <!-- container delle descrizioni dei servizi -->
            <div class="ctn_description_service">

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

.ctn_service {
    width: 100%;
    height: 800px;
    margin-top: 100px;
    margin-bottom: 100px;
    @include center();
}

.ctn_card_service {
    width: 25%;
    height: 100%;

    .card {
        background-color: $secondColor;
        width: 250px;
        height: 350px;
        margin-bottom: 20px;
        padding: 0 20px;
        border-radius: 5px;
        @include column();
        justify-content: end;

        h3 {
            color: $titleCardColor;
            padding: 10px 0;
        }

        p {
            color: $fontThirdCOlor;
            font-size: 14px;
            line-height: 25px;
            text-align: start;
        }

        .img_card {
            height: 200px;

            img.down {
                object-fit: scale-down;
                object-position: bottom;
            }

            img.up {
                object-fit: scale-down;
            }

            .up.left {
                object-position: left;
                position: relative;
                left: -20px;
            }
        }
    }

    .card.reverse {
        justify-content: start;
    }
}

.translate {
    position: relative;
    bottom: -50px;
}
</style>