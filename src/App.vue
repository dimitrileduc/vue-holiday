<template>
    <NavBar
        @wheel.prevent
        @touchmove.prevent
        @scroll.prevent
        class="navBar"
        :isNavVisible="isNavVisible"
    />

    <router-view
        v-if="homeData"
        :data="homeData"
        @updateparent="updatefooter"
    />

    <FooterSection v-if="isFooterVisible" />
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
            isNavVisible: false,
            isFooterVisible: false,
        };
    },
    methods: {
        updatefooter(bool) {
            this.isFooterVisible = bool;
        },
    },
    created() {
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
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
