<template>
    <div class="model_box">
        <canvas id="myCanvas"></canvas>
    </div>
</template>

<script>
    export default {
        name: "mathRain",
        data () {
            return {
                myCanvas : {
                    object : null,
                    context : null,
                    width : 0,
                    height : 0,
                    left : 0,
                    top : 0,
                    list : [],
                    len : 1
                },
            }
        },
        mounted : function () {
            this.initCanvas();

            window.onresize = ()=>{
                this.initSize();
            };
        },
        methods : {
            initCanvas : function () {
                this.myCanvas.object = document.querySelector("#myCanvas");
                this.myCanvas.context = this.myCanvas.object.getContext("2d");

                this.initSize();

                this.initModel();

                this.modelDraw(this.myCanvas.context, this.myCanvas.list);
            },
            initSize : function () {
                this.myCanvas.width = window.innerWidth;
                this.myCanvas.height = window.innerHeight;
                this.myCanvas.left = window.innerWidth / 2;
                this.myCanvas.top = window.innerHeight / 2;
                this.myCanvas.object.width = window.innerWidth;
                this.myCanvas.object.height = window.innerHeight;
            },
            initModel : function () {
                let list = [], x = 0, y = 0, s = 14;

                // x = parseInt(this.myCanvas.left);
                // y = parseInt(this.myCanvas.top);

                this.myCanvas.list.push({
                    x : (this.myCanvas.len - 1) * s,
                    y : parseInt(Math.random() * 41 - 20) * s,
                    n : parseInt(Math.random() * 10),
                    s : s,
                    c : `rgba(0, 255, 0, 1)`,
                    m : parseInt(Math.random() * Math.floor(this.myCanvas.height / s)) * s
                });

                if((this.myCanvas.len - 1) * s < this.myCanvas.width) {
                    this.myCanvas.len++;
                    this.initModel();
                }
            },
            modelAction : function (ctx, list) {
                // if(this.myCanvas.list.length < this.myCanvas.len) {
                //     this.initModel();
                // }

                this.clearRect(ctx, 0, 0, this.myCanvas.width, this.myCanvas.height);

                for (let i = 0, len = list.length; i < len; i++) {
                    list[i].y += list[i].s;
                    list[i].n = parseInt(Math.random() * 10);
                    this.drawFillText(ctx, list[i].x, list[i].y, list[i].n, list[i].s, list[i].c);
                    this.modelReset(this.myCanvas, i);
                }

                this.modelDraw(ctx, list);
            },
            modelDraw : function (ctx, list) {
                requestAnimationFrame(()=>{
                    this.modelAction(ctx, list);
                });
            },
            modelReset : function (myCanvas, i) {
                if(myCanvas.list[i].y > myCanvas.list[i].m || myCanvas.list[i].y > myCanvas.height) {
                    myCanvas.list[i].y = parseInt(Math.random() * 41 - 20) * myCanvas.list[i].s;
                    // myCanvas.list[i].y = 0;
                    myCanvas.list[i].n = parseInt(Math.random() * 10);
                    myCanvas.list[i].m = parseInt(Math.random() * Math.floor(this.myCanvas.height / myCanvas.list[i].s)) * myCanvas.list[i].s;
                }
            },
            drawFillText : function (ctx, x, y, n, s, c) {
                ctx.save();
                ctx.font = `${s}px Arial`;
                ctx.fillStyle = c;
                ctx.fillText(n, x, y);
                ctx.restore();
            },
            clearRect : function (ctx, x, y, w, h) {
                ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
                ctx.fillRect(x, y, w, h);
            },
            getRandomColor : function(){
                return '#'+(Math.random()*0xffffff<<0).toString(16);
            }
        }
    }
</script>

<style scoped>
    .model_box{
        position: relative;
        width: 100%;
        height: 100vh;
        background-color: #000000;
        overflow: hidden;
    }
    #myCanvas{
        position: absolute;
        left: 0;
        top: 0;
    }
</style>