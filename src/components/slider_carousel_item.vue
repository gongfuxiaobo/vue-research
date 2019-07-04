<template>
    <div class="slider_content">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "carousel-item",
        mounted : function () {

        }
    }
</script>

<style scoped>
    .slider_content{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: inline-block;
        background-color: chartreuse;
    }
</style>