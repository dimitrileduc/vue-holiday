<template>
    <div class="container">
        <h3>{{ dataProps.sectionName }} section</h3>
    </div>
</template>

<script>
export default {
    name: "HomeDiscover",
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
    background-color: yellow;

    width: 100vw;
    height: 100vh;
}
</style>
