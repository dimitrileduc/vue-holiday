<template>
    <NavBar class="navBar" />
    <router-view v-if="homeData" :data="homeData" />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import HomeService from "@/services/HomeServices";

export default {
    name: "App",
    components: {
        NavBar,
    },
    data() {
        return {
            homeData: null,
        };
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
