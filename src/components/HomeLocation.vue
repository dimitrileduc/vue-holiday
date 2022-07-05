<template>
    <div class="container">
        <div class="containerInterne">
            <h3>{{ dataProps.sectionName }} section</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeLocation",
    data() {
        return {};
    },
    props: {
        dataProps: {
            type: Object,
            default: function () {
                return {message: "no data fetched"};
            },
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 400vh;
    z-index: 10;
}
.containerInterne {
    background-color: white;
    width: 100vw;
    height: 60vh;
}
</style>
