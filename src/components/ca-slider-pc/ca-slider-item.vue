<template>
    <div class="ca-slider-item-pc" ref="ca-slider-item-pc" :style="item.style">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ca-slider-item",
        props : {

        },
        data () {
            return {
                item : {
                    dom : null,
                    style : {}
                }
            }
        },
        components : {

        },
        mounted : function () {
            this.$parent.init.index++;
            this.item.dom = document.querySelector(".ca-slider-item-pc").children[0];
            this.$parent.init.children = this.item.dom;

            this.item.style = {
                "width" : `${this.item.dom.offsetWidth}px`
            };
        },
        methods : {

        }
    }
</script>

<style scoped>
    .ca-slider-item-pc{
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: inline-block;
    }
</style>