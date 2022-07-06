<template>
    <div class="container">
        <div class="containerParentSlider">
            <div class="containerEnfantSlider"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeSlideShow",

    data() {
        return {};
    },
    components: {},
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
    background-color: lightgray;

    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 300vh;
    z-index: 10;
}

.containerParentSlider {
    position: absolute;
    bottom: 0;
    width: 90vw;
    height: 100vh;
    overflow-x: scroll;
    border: solid 1px green;
}
.containerEnfantSlider {
    width: 300vw;
    height: 100vh;
    border: solid 1px red;
}
</style>
