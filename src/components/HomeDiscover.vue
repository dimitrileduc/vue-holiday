<template>
    <div class="container">
        <div class="containerInterne">
            <h3>{{ dataProps.sectionName }} section</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeDiscover",

    components: {},
    data() {},
    props: {
        dataProps: {
            type: Object,
            default: function () {
                return {message: "no data fetched"};
            },
        },
    },
    methods: {},
    mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    background-color: yellow;

    width: 100vw;
    height: 100vh;
}
.containerInterne {
    background-color: rgb(157, 52, 52);
    width: 100vw;
    height: 100vh;
}
</style>
