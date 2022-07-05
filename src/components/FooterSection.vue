<template>
    <div class="box">
        <div class="container">Footer</div>
    </div>
</template>

<script>
export default {
    name: "FooterSection",
    components: {},
    data() {
        return {};
    },
};
</script>

<style scoped>
.box {
    z-index: 5;
}
.container {
    width: 100vw;
    height: 20vh;

    color: black;

    background-color: grey;
    position: fixed;
    bottom: 0;
}
</style>
