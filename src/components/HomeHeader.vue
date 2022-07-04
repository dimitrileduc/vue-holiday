<template>
    <div class="event-card">
        <h3>{{ dataProps.sectionName }} section</h3>
        <p>{{ dataProps.siteTitle }}</p>
        <p>{{ dataProps.bookButton }}</p>
    </div>
</template>

<script>
export default {
    name: "HomeHeader",
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
<style scoped></style>
