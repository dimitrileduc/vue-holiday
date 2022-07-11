<template>
    <div id="smooth-wrapper">
        <NavBar
            @wheel.prevent
            @touchmove.prevent
            @scroll.prevent
            class="navBar"
            :isNavVisible="isNavVisible"
        />
        <div id="smooth-content" class="smooth-content">
            <router-view v-if="homeData" :data="homeData" />
            <FooterSection />
        </div>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import HomeService from "@/services/HomeServices";

import gsap from "gsap-trial";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import ScrollSmoother from "gsap-trial/ScrollSmoother";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default {
    name: "App",
    components: {
        NavBar,
    },

    data() {
        return {
            homeData: null,
            isNavVisible: false,
            isFooterVisible: true,
        };
    },
    methods: {},
    created() {
        document.body.style.overflowX = "hidden";
        HomeService.getHomeData()
            .then((response) => {
                this.homeData = response.data;
                console.log(this.homeData);
            })
            .catch((error) => {
                console.log(error);
            });
        this.emitter.on("emitOpenMenu", () => {
            console.log("open nav");

            this.isNavVisible = true;
        });
        this.emitter.on("emitCloseMenu", () => {
            console.log("close nav");

            this.isNavVisible = false;
        });

        // create the smooth scroller FIRST!
    },
    mounted() {
        ScrollSmoother.create({
            smooth: 1.5, // how long (in seconds) it takes to "catch up" to the native scroll position
            effects: true, // looks for data-speed and data-lag attributes on elements
            smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
        });

        this.emitter.on("createScroll", () => {});
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: black;
}

* {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
}

.smooth-content {
    height: calc(800vh);
}

.navBar {
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
