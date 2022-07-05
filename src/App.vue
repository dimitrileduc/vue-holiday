<template>
    <NavBar @wheel.prevent @touchmove.prevent @scroll.prevent class="navBar" />

    <router-view v-if="homeData" :data="homeData" :windowTop="windowTop" />
    <FooterSection />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import HomeService from "@/services/HomeServices";
import FooterSection from "./components/FooterSection.vue";

export default {
    name: "App",
    components: {
        NavBar,
        FooterSection,
    },
    data() {
        return {
            homeData: null,
            windowTop: 0,
        };
    },
    methods: {
        // eslint-disable-next-line no-unused-vars
        handleScroll(event) {
            console.log(window.scrollY);
            this.windowTop = window.scrollY;
        },
    },
    created() {
        window.addEventListener("scroll", this.handleScroll);
        HomeService.getHomeData()
            .then((response) => {
                this.homeData = response.data;
                console.log(this.homeData);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    unmounted() {
        window.removeEventListener("scroll", this.handleScroll);
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
}

* {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
}

.navBar {
    display: none;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
