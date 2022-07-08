<template>
    <div class="container">
        <h3>{{ dataProps.sectionName }} section</h3>
    </div>
</template>

<script>
export default {
    name: "HomeDetails",
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

<style scoped>
.container {
    background-color: white;

    width: 100vw;
    height: 100vh;
    position: relative;
    z-index: 10;
}
</style>
