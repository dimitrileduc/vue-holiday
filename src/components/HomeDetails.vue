<template>
    <div class="container">
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
    </div>
</template>

<script>
export default {
    name: "HomeDetails",
    data() {
        return {
            title: "Unico is more than a luxury stay. It’s a space designed for opening the mind",
            titleDetails: "Villa details",
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
                "The intention behind Bond was to always bring people together, whilst respecting diverse group dynamics and personal space. The owners and architect Alexis Dornier wanted to create a private & intimate space that still felt open and connected to the world and nature around them. A hub created for all forms of play, free from any restrictions or limitations.",
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
};
</script>

<style scoped>
.container {
    background-color: white;

    width: 100vw;
    height: 100vh;
    position: relative;
    z-index: 10;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
        "Title Title"
        "details description"
        "containerPics .";
}

.Title {
    justify-self: start;
    grid-area: Title;
    margin-top: 40px;
    margin-left: 40px;
    margin-right: 160px;

    position: absolute;

    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 55px;
    letter-spacing: 0.04em;
    text-align: left;

    color: #000000;
    text-transform: uppercase;
}

ul {
    list-style-type: none;
}

.details {
    margin-top: 0px;
    justify-self: start;
    align-self: start;
    grid-area: details;

    margin-left: 80px;
    text-align: left;
    font-family: "Lato";
    font-style: italic;
    font-weight: 400;
    font-size: 14px;
    line-height: 25px;
    /* or 139% */

    letter-spacing: 0.05em;

    color: #000000;
    margin-bottom: 40px;
}

.detailsTitle {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 25px;
    text-transform: uppercase;

    letter-spacing: 0.05em;

    color: #000000;
    margin-bottom: 20px;
}

.containerPics {
    justify-self: start;
    align-self: end;
    grid-area: containerPics;
    border: 1px red dashed;
    margin-left: 40px;
    margin-bottom: 40px;
    display: flex;
}

.pic1 {
    width: 20vh;
    height: 30vh;
    border: 1px grey dashed;
}
.pic2 {
    margin-left: 20px;
    width: 40vh;
    height: 30vh;
    border: 1px grey dashed;
}

.description {
    margin-top: 40px;
    justify-self: end;
    grid-area: description;

    margin-right: 80px;
    font-family: "Karla";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    /* or 144% */

    letter-spacing: 0.05em;

    color: #000000;
    text-align: left;
}

.description2 {
    margin-top: 20px;
}
</style>
