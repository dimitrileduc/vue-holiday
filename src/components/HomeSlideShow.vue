<template>
    <div class="container"></div>
    <section class="section portfolio">
        <h2 class="portfolio_title text-stroke parallax"></h2>
        <div class="panel">
            <div class="panel_item">
                <img
                    class="panel_img firstAn"
                    :src="livingroomurl"
                    alt="image1"
                />
                <div class="imgtitle">{{ livingroomtitle }}</div>
            </div>
        </div>

        <div class="panel">
            <div class="panel_item">
                <img
                    class="panel_img firstAn"
                    :src="dinnerroomurl"
                    alt="image2"
                />
                <div class="imgtitle">{{ dinnerroomtitle }}</div>
            </div>
        </div>

        <div class="panel">
            <div class="panel_item">
                <img
                    class="panel_img secondAn"
                    :src="bedroomrurl"
                    alt="image3"
                />
                <div class="imgtitle">{{ bedroomtitle }}</div>
            </div>
        </div>
        <div class="panel">
            <div class="panel_item">
                <img
                    class="panel_img secondAn"
                    :src="outdoorurl"
                    alt="image4"
                />
                <div class="imgtitle">{{ outdoortitle }}</div>
            </div>
        </div>
    </section>
</template>

<script>
import gsap from "gsap-trial";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import ScrollSmoother from "gsap-trial/ScrollSmoother";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default {
    name: "HomeSlideShow",

    data() {
        return {
            isScrolling: false,
            scrollTimeout: null,
            isTopVisible: null,
            isFullVisible: false,
            livingroomtitle: "living",
            livingroomurl:
                "https://www.ministryofvillas.com/wp-content/uploads/2013/09/bali-villazelie-43.jpg",
            dinnerroomtitle: "dinner room",
            dinnerroomurl:
                "https://www.ministryofvillas.com/wp-content/uploads/2013/09/bali-villazelie-27.jpg",
            bedroomtitle: "bedroom",
            bedroomrurl:
                "https://www.ministryofvillas.com/wp-content/uploads/2013/09/bali-villazelie-31.jpg",
            outdoortitle: "garden",
            outdoorurl:
                "https://www.ministryofvillas.com/wp-content/uploads/2013/09/bali-villazelie-47.jpg",
        };
    },
    components: {},
    props: {
        dataProps: {
            type: Object,
            default: function () {
                return {message: "no data fetched"};
            },
        },
    },
    methods: {},
    watch: {},
    mounted() {
        let container = document.querySelector(".portfolio");
        let tl = gsap.timeline({
            scrollTrigger: {
                pin: true,
                scrub: true,
                anticipatePin: 1,
                trigger: container,
                start: "top top",

                end: () => "+=200%",

                onUpdate: (self) =>
                    console.log("progress: " + self.progress.toFixed(3)),
            },
            defaults: {ease: "none", duration: 5},
        });

        tl.to(
            ".panel",
            {
                x: () =>
                    -(
                        container.scrollWidth -
                        document.documentElement.clientWidth
                    ),
            },
            0,
        ).from(
            ".secondAn",
            {
                opacity: 0,
                scale: 0.5,
                duration: 0.2,
                stagger: {
                    amount: 0.8,
                },
            },
            0,
        );

        gsap.from(".firstAn", {
            duration: 1,
            opacity: 0,
            scale: 0.5,
            scrollTrigger: {
                trigger: container,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none reverse",
            },
        });
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    background-color: lightgray;
}
*,
*:before,
*:after {
    box-sizing: border-box;
    position: relative;
    letter-spacing: 0.04em;
}
body {
    font-family: "Montserrat", sans-serif;

    overflow-x: hidden;
    background-color: aqua;
}
.spacer {
    position: absolute;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: aquamarine;
}
h1 {
    font-size: 3rem;
    color: #000;
}
.section {
    height: auto;
    width: 100%;

    padding: 0;
    overflow-x: hidden;
}
.portfolio {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: nowrap;
    background-color: white;

    overflow: hidden;
    z-index: 500;

    padding-top: 40px;
    padding-bottom: 20px;
    padding-left: 20px;
}
.portfolio_title {
    position: absolute;
    top: 0;
    left: -15rem;
    font-size: 24rem;
    letter-spacing: 0;
    -webkit-text-stroke-color: #343a42;
    display: inline-block;
}
.text-stroke {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #343a42;
}
.grid {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    aling-content: center;
    justify-content: center;
    overflow: hidden;
}
.panel {
    display: flex;
    flex: 0 0 92%;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    justify-content: center;

    height: 100%;

    padding-right: 20px;

    background-color: transparent;
    overflow: hidden;
}
.panel_item {
    height: 100%;
    width: 100%;
    margin: 0 auto;
}
.panel_img {
    width: 100%;
    height: 100%;
    margin: 0 auto;
}

.imgtitle {
    z-index: 10;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    text-align: left;
    padding-top: 20px;
    padding-left: 20px;

    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 96px;
    line-height: 115px;
    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #ffffff;
}
</style>
