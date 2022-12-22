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
            <h3>Latest on <span>Our Blogs</span></h3>

            <!-- container card -->
            <div class="ctn_card">
                <div class="card">
                    <!-- immagine della card -->
                    <div class="slot_img">
                        <img src="../assets/images/artist-blog-03-480x325.jpeg" alt="artist_blog_03">
                    </div>
                    <!-- testo della card -->
                    <div class="slot_text">
                        <span>ARTIST</span>
                        <h5>Brush Strokes Energize trees in Paintings</h5>
                        <div class="blog_details">
                            <div>
                                <font-awesome-icon icon="fa-regular fa-calendar" />
                                <span>May 15, 2020</span>
                            </div>
                            <div>
                                <font-awesome-icon icon="fa-regular fa-eye" />
                                <span>688 views</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <!-- immagine della card -->
                    <div class="slot_img">
                        <img src="../assets/images/artist-blog-01-480x325.jpg" alt="artist_blog_01">
                    </div>
                    <!-- testo della card -->
                    <div class="slot_text">
                        <span>ARTIST</span>
                        <h5>Pocket-Sized Notebookes Hold Miniature Paintings</h5>
                        <div class="blog_details">
                            <div>
                                <font-awesome-icon icon="fa-regular fa-calendar" />
                                <span>May 15, 2020</span>
                            </div>
                            <div>
                                <font-awesome-icon icon="fa-regular fa-eye" />
                                <span>603 views</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <!-- immagine della card -->
                    <div class="slot_img">
                        <img src="../assets/images/artist-blog-02-480x325.jpg" alt="artist_blog_02">
                    </div>
                    <!-- testo della card -->
                    <div class="slot_text">
                        <span>ARTIST</span>
                        <h5>Connection Between Self-Portraits and Identity</h5>
                        <div class="blog_details">
                            <div>
                                <font-awesome-icon icon="fa-regular fa-calendar" />
                                <span>May 15, 2020</span>
                            </div>
                            <div>
                                <font-awesome-icon icon="fa-regular fa-eye" />
                                <span>397 views</span>
                            </div>
                        </div>
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
    background-color: $sectionThirdColor;
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

.ctn_card {
    margin-top: 50px;
    @include between();
    align-items: stretch;
    gap: 20px;

    .card {
        width: calc((100% - 40px) / 3);

        .slot_img {
            margin-bottom: 10px;

            img {
                border-radius: 5px;
            }
        }

        .slot_text {
            text-align: start;

            span {
                color: $fivecolor;
                font-size: 13px;
            }

            h5 {
                color: $fontPrimaryColor;
                font-size: 20px;
                margin: 10px 0;
            }

            .blog_details {
                color: $fivecolor;
                font-size: 13px;
                @include start();
                gap: 20px;

                span {
                    margin-left: 5px;
                }
            }
        }
    }
}
</style>