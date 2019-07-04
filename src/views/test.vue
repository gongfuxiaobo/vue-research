<template>
    <div class="model_box">
        <canvas id="myCanvas"></canvas>
        <canvas id="bufferCanvas"></canvas>
    </div>
</template>

<script>
    export default {
        name: "test",
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
                    len : 500
                },
                bufferCanvas : {
                    object : null,
                    context : null,
                }
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

                this.bufferCanvas.object = document.querySelector("#bufferCanvas");
                // this.bufferCanvas.object = document.createElement("canvas");
                this.bufferCanvas.context = this.bufferCanvas.object.getContext("2d");

                this.initSize();

                this.modelDraw(this.bufferCanvas.context, this.myCanvas.context, this.myCanvas.list);
            },
            initSize : function () {
                this.myCanvas.width = window.innerWidth;
                this.myCanvas.height = window.innerHeight;
                this.myCanvas.left = window.innerWidth / 2;
                this.myCanvas.top = window.innerHeight / 2;
                this.myCanvas.object.width = window.innerWidth;
                this.myCanvas.object.height = window.innerHeight;

                this.bufferCanvas.object.width = this.myCanvas.width;
                this.bufferCanvas.object.height = this.myCanvas.height;
            },
            initModel : function () {
                let list = [], x = 0, y = 0;

                x = parseInt(this.myCanvas.left);
                y = parseInt(this.myCanvas.top);

                this.myCanvas.list.push({
                    x : x,
                    y : y,
                    r : Math.random() * 1,
                    vx : Math.random() * 6 - 3,
                    vy : Math.random() * 4 - 2,
                    vr : 0,
                    c : this.getRandomColor()
                });
            },
            modelAction : function (ctx, bctx, list) {
                if(this.myCanvas.list.length < this.myCanvas.len) {
                    this.initModel();
                }

                this.clearRect(ctx, bctx, 0, 0, this.myCanvas.width, this.myCanvas.height);

                for (let i = 0, len = list.length; i < len; i++) {
                    list[i].x += list[i].vx;
                    list[i].y += list[i].vy;
                    list[i].vr = (Math.abs(list[i].vx) + Math.abs(list[i].vy)) * 0.007;
                    list[i].r += list[i].vr;
                    this.drawFillArc(ctx, list[i].x, list[i].y, list[i].r, list[i].c);
                    // bctx.drawImage(ctx, 0, 0);
                    this.modelReset(this.myCanvas, i);
                }

                this.modelDraw(ctx, bctx, list);
            },
            modelDraw : function (ctx, bctx, list) {
                requestAnimationFrame(()=>{
                    this.modelAction(ctx, bctx, list);
                });
            },
            modelReset : function (myCanvas, i) {
                if((myCanvas.list[i].x > myCanvas.width || myCanvas.list[i].x < 0) || (myCanvas.list[i].y > myCanvas.height || myCanvas.list[i].y < 0)) {
                    myCanvas.list[i] = {
                        x : parseInt(myCanvas.left),
                        y : parseInt(myCanvas.top),
                        r : Math.random() * 1,
                        vx : Math.random() * 6 - 3,
                        vy : Math.random() * 4 - 2,
                        vr : 0,
                        c : this.getRandomColor()
                    };
                }
            },
            drawFillArc : function (ctx, x, y, r, c) {
                ctx.save();
                ctx.fillStyle = c;
                ctx.beginPath();
                ctx.arc(x, y, r, Math.PI*2, 0, true);
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            },
            clearRect : function (ctx, bctx, x, y, w, h) {
                ctx.clearRect(x, y, w, h);
                bctx.clearRect(x, y, w, h);
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
    #myCanvas, #bufferCanvas{
        position: absolute;
        left: 0;
        top: 0;
    }
</style>