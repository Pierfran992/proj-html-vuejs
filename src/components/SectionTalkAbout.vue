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
                    <img src="../assets/images/testimonial-avata-02.jpg" alt="testimonial_avatar_01">
                </div>
                <div class="slot_text">
                    <blockquote>
                        <p>
                            I am free to learn at my own pace, follow my own schedule and choose the subject i like.
                            Great study portal for people like me.
                        </p>
                        <cite>
                            MINA HOLLAGE
                        </cite>
                        <br>
                        <div>
                            /Freelancer
                        </div>
                    </blockquote>
                </div>
            </div>

            <!-- container dei loghi dei client -->
            <div class="ctn_client">
                <div class="slot_logo">
                    <img src="../assets/images/client-logo-colored-01.png" alt="client_1">
                </div>
                <div class="slot_logo">
                    <img src="../assets/images/client-logo-colored-02.png" alt="client_1">
                </div>
                <div class="slot_logo">
                    <img src="../assets/images/client-logo-colored-03.png" alt="client_1">
                </div>
                <div class="slot_logo">
                    <img src="../assets/images/client-logo-colored-04.png" alt="client_1">
                </div>
                <div class="slot_logo">
                    <img src="../assets/images/client-logo-colored-05.png" alt="client_1">
                </div>
                <div class="slot_logo">
                    <img src="../assets/images/client-logo-colored-06.png" alt="client_1">
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

.card {
    @include start();
    align-items: center;
    gap: 50px;

    .slot_img {
        width: 250px;
        height: 250px;

        img {
            object-fit: cover;
            border-radius: 50%;
        }
    }

    .slot_text {
        width: 60%;
        text-align: start;

        p {
            color: $fontPrimaryColor;
            font-size: 30px;
            margin-bottom: 20px;
        }

        cite {
            font-weight: 500;
        }

        div {
            color: $fivecolor;
            font-size: 16px;
            margin-top: 10px;
        }
    }
}

.ctn_client {
    margin-top: 70px;
    @include between();
}
</style>