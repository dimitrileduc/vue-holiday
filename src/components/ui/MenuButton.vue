<template>
    <div class="container">
        <div v-on:click="emitOpen" class="" button>
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        emitOpen() {
            this.emitter.emit("emitOpenMenu", {eventContent: "open"});
        },
    },
};
</script>

<style scoped>
.container {
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 60px;
    margin-top: 60px;
    text-align: left;
    z-index: 200;
}

.button {
    cursor: pointer;
}

.line1 {
    width: 60px;
    height: 4px;
    background-color: white;
}
.line2 {
    margin-top: 10px;
    width: 40px;
    height: 4px;
    background-color: white;
}
.line3 {
    margin-top: 10px;
    width: 30px;
    height: 4px;
    background-color: white;
}
</style>
