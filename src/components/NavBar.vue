<template>
    <div>NavBar</div>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/details">Details</router-link>
        <router-link to="/infos">Infos</router-link>
    </nav>
    <router-view />
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
