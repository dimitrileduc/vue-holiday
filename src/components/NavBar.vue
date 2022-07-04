<template>
    <div>
        NavBar
        <nav class="container">
            <router-link to="/">Home</router-link>
            <router-link to="/details">Details</router-link>
            <router-link to="/infos">Infos</router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    components: {},
    data() {
        return {};
    },
};
</script>

<style scoped>
.container {
    position: absolute;
    top: 0;
    z-index: 100;
    background-color: white;
    width: 100vw;
    height: 100vh;
}
</style>
