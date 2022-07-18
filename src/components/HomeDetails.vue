<template>
    <div class="container">
        <div class="title">{{ title }}</div>
        <div class="detailstTitle">Areas</div>
        <div class="details">
            <ul>
                <li v-for="item in itemsDetails" :key="item">
                    {{ item }}
                </li>
            </ul>
        </div>
        <div class="containerPics">
            <div class="pic1">Pic 1</div>
            <div class="pic2">Pic 2</div>
        </div>
        <div class="description">{{ description1 }} {{ description2 }}</div>
    </div>
</template>

<script>
import gsap from "gsap-trial";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import ScrollSmoother from "gsap-trial/ScrollSmoother";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default {
    name: "HomeDetails",
    data() {
        return {
            title: "More than a luxury stay. It’s a space for opening the mind",
            titleDetails: "areas",
            itemsDetails: [
                "Living Room",
                "The Ktichen",
                "Bedrooms",
                "Pool Area",
                "Spa",
                "Rooftop",
                "Garden",
                "Pool",
            ],
            description1:
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam",
            description2:
                "When you visit, you can feel the natural energy of Bond’s surroundings helping you reground, recharge and regrow. This expansion leads to new ideas, collaborations, and most and foremost, a pretty good & healing time for those joining you.",
        };
    },
    props: {
        dataProps: {
            type: Object,
            default: function () {
                return {message: "no data fetched"};
            },
        },
    },
    mounted() {
        ScrollTrigger.create({
            trigger: "#orange",
            start: "top top",
            end: "bottom 150px",
            pin: "#orange-content",
        });
    },
};
</script>

<style scoped>
.container {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 50vh 50vh;
    grid-auto-rows: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    color: #f4ece1;
    background-color: #02281c;
}

.title {
    justify-self: end;
    align-self: start;
    grid-area: 1 / 1 / 2 / 5;
    font-size: 92px;
    margin-top: 20px;
    margin-right: 20px;
    text-align: right;
}

.detailstTitle {
    margin-top: -90px;
    justify-self: end;
    align-self: start;
    grid-area: 2 / 1 / 2 / 2;
    margin-right: 40px;
}
.details {
    margin-top: -90px;
    justify-self: start;
    align-self: start;
    grid-area: 2 / 2 / 3 / 3;
    text-align: left;
}

.containerPics {
    justify-self: stretch;
    align-self: end;
    grid-area: 2 / 1 / 2 / 3;
    display: flex;
    border: 1px dashed white;
    height: 70%;
}
.pic1 {
    width: 33%;
    border: red 1px solid;
}
.pic2 {
    width: 67%;
    border: blue 1px solid;
}
.description {
    justify-self: end;
    align-self: end;
    grid-area: 2 / 4 / 3 / 5;
    text-align: left;
    margin-right: 20px;
    margin-bottom: 20px;
}

ul {
    list-style-type: none;
}
</style>

<!-- 
    <div class="Title">{{ title }}</div>
        <div class="details">
            <div class="detailsTitle">{{ titleDetails }}</div>
            <ul>
                <li v-for="item in itemsDetails" :key="item">
                    {{ item }}
                </li>
            </ul>
        </div>
        <div class="containerPics">
            <div class="pic1">Pic 1</div>
            <div class="pic2">Pic 2</div>
        </div>
        <div class="description">
            <div class="description1">{{ description1 }}</div>
            <div class="description2">{{ description2 }}</div>
        </div>
-->
