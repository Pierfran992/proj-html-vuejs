<script>
export default {
    name: "SectionCourses",
}
</script>

<template>
    <section>
        <div class="container">
            <!-- titolo della sezione -->
            <span class="sub_title">CHOOSE A COURSE TO GET STARTED</span>
            <h3>Latest Featured <span>Courses</span></h3>

            <!-- card dei corsi disponibili -->
            <div class="ctn_card">
                <div class="card">
                    <div class="img_slot">
                        <img src="../assets/images/course-02-480x298.jpg" alt="courses_img_01">
                    </div>
                    <div class="info_slot">
                        <div class="price_course"> &dollar;40.<span>00</span> </div>
                        <h3>Learning to Write as a Professional Author</h3>
                        <div class="course_details">
                            <div>
                                <font-awesome-icon icon="fa-regular fa-file-lines" />
                                <span>20 Lessons</span>
                            </div>
                            <div>
                                <font-awesome-icon icon="fa-regular fa-user" />
                                <span>50 Students</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="img_slot">
                        <img src="../assets/images/stock-full-hd-03-480x298.jpg" alt="courses_img_02">
                    </div>
                    <div class="info_slot">
                        <div class="price_course">Free</div>
                        <h3>Customer-centric Info-Tech Strategies</h3>
                        <div class="course_details">
                            <div>
                                <font-awesome-icon icon="fa-regular fa-file-lines" />
                                <span>24 Lessons</span>
                            </div>
                            <div>
                                <font-awesome-icon icon="fa-regular fa-user" />
                                <span>769 Students</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="img_slot">
                        <img src="../assets/images/stock-full-hd-04-480x298.jpg" alt="courses_img_03">
                    </div>
                    <div class="info_slot">
                        <div class="price_course"> &dollar;19.<span>00</span> </div>
                        <h3>Open Programming Courses for Everyone: Python</h3>
                        <div class="course_details">
                            <div>
                                <font-awesome-icon icon="fa-regular fa-file-lines" />
                                <span>17 Lessons</span>
                            </div>
                            <div>
                                <font-awesome-icon icon="fa-regular fa-user" />
                                <span>62 Students</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="img_slot">
                        <img src="../assets/images/stock-full-hd-06-480x298.jpg" alt="courses_img_01">
                    </div>
                    <div class="info_slot">
                        <div class="price_course"> &dollar;26.<span>00</span> </div>
                        <h3>Academic Listening and Note-taking</h3>
                        <div class="course_details">
                            <div>
                                <font-awesome-icon icon="fa-regular fa-file-lines" />
                                <span>14 Lessons</span>
                            </div>
                            <div>
                                <font-awesome-icon icon="fa-regular fa-user" />
                                <span>67 Students</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="img_slot">
                        <img src="../assets/images/course-featured-image-01-480x298.jpg" alt="courses_img_05">
                    </div>
                    <div class="info_slot">
                        <div class="price_course"> &dollar;39.<span>00</span> </div>
                        <h3>Master jQuery in a Short Period of Time</h3>
                        <div class="course_details">
                            <div>
                                <font-awesome-icon icon="fa-regular fa-file-lines" />
                                <span>6 Lessons</span>
                            </div>
                            <div>
                                <font-awesome-icon icon="fa-regular fa-user" />
                                <span>51 Students</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="img_slot">
                        <img src="../assets/images/stock-full-hd-05-480x298.jpg" alt="courses_img_06">
                    </div>
                    <div class="info_slot">
                        <div class="price_course"> &dollar;59.<span>00</span> </div>
                        <h3>Introduction to Javascript for Beginners</h3>
                        <div class="course_details">
                            <div>
                                <font-awesome-icon icon="fa-regular fa-file-lines" />
                                <span>14 Lessons</span>
                            </div>
                            <div>
                                <font-awesome-icon icon="fa-regular fa-user" />
                                <span>76 Students</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- button per mostrare tutti i tipi di corso -->
            <div class="button">
                View all courses
                <font-awesome-icon icon="fa-solid fa-arrow-right" />
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

    .sub_title {
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

.ctn_card {
    margin-top: 50px;
    @include between();
    flex-wrap: wrap;

    .card {
        width: calc((100% - 10px)/ 2);
        height: 200px;
        padding: 10px;
        @include start();
        align-items: center;
        gap: 20px;

        .img_slot {
            width: 150px;
            height: 150px;

            img {
                object-fit: cover;
                border-radius: 50%;
            }
        }

        .info_slot {
            text-align: start;

            .price_course {
                color: $fontSecondaryColor;
                font-size: 22px;
                font-weight: 800;

                span {
                    font-size: 18px;
                }
            }

            h3 {
                font-size: 20px;
                color: $titleCardColor;
                line-height: 30px;
            }

            .course_details {
                font-size: 14px;
                color: $fivecolor;
                margin-top: 15px;
                @include start();
                gap: 20px;

                div {
                    span {
                        margin-left: 5px;
                    }
                }
            }
        }
    }
}

.button {
    @include button();
    margin: 50px auto 0 auto;
}
</style>