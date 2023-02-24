<template>
    <div class="rootDiv">
        
        <div id="containerDiv" ></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
        //创建一条圆滑曲线，并获得组成该线的5000个顶点
        createCurveLine1(){
            let points = [
                new BIMI.THREE.Vector3( -10, 0, 10 ),
                new BIMI.THREE.Vector3( -5, 5, 5 ),
                new BIMI.THREE.Vector3( 0, 0, 0 ),
                new BIMI.THREE.Vector3( 5, -5, 5 ),
                new BIMI.THREE.Vector3( 10, 0, 10 )
            ] ;
            let viewer = BIMI.ViewerHelper.getViewer();
            let data = viewer.drawCurve(points,'#cccccc',5000);
            return data.points;
        },
        //创建一条圆滑曲线，并获得组成该线的5000个顶点
        createCurveLine2(){
            let points = [
                new BIMI.THREE.Vector3( -10, 5, 10 ),
                new BIMI.THREE.Vector3( -5, 10, 5 ),
                new BIMI.THREE.Vector3( 0, 5, 0 ),
                new BIMI.THREE.Vector3( 5, 0, 5 ),
                new BIMI.THREE.Vector3( 10, 5, 10 )
            ] ;
            let viewer = BIMI.ViewerHelper.getViewer();
            let data = viewer.drawCurve(points,'#ffffff',5000);
            return data.points;
        },
        //根据两条线上的各5000个顶点，生成两个不同速度，不同颜色的FlyLine
        FlyLinePluginTest(){
            let points = this.createCurveLine1();
            let points2 = this.createCurveLine2();
            let viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('FlyLinePlugin');
            if(!plugin)
            {
                plugin = new BIMI.FlyLinePlugin();
                viewer.addPlugin(plugin);
            }
            /**
             * id：Number/String  ID   <br/>
             * curve：Array[Vector3] 飞行轨迹线(顶点数组)  <br/>
             * color: String 飞行线颜色 默认值'#ff0000'  <br/>
             * opacity:Number 不透明度(因为飞行线是由很多个Point粒子组成重叠效应，不透明度实际效果比设置值显得低效) <br/>
             * size：Number 飞行线宽度，默认值5 <br/>
             * range:Number 飞行线长度 <br/>
             * speed:Number 飞行速度 默认值0.1
             */
            plugin.addFly({
                id:1,
                curve:points,
                color:'#ff0000',
                opacity:0.5,
                size:5,
                range:500,
                speed:0.1
            })
            plugin.addFly({
                id:2,
                curve:points2,
                color:'#0000ff',
                opacity:0.5,
                size:5,
                range:500,
                speed:0.2
            })
            plugin.start();
        },

</code></pre>
    
    </div>
	
</template>

<script>



export default {
	name: "FlyLine",
	data() {
		return {
        };
	},
	methods: {
        //创建一条圆滑曲线，并获得组成该线的5000个顶点
        createCurveLine1(){
            let points = [
                new BIMI.THREE.Vector3( -10, 0, 10 ),
                new BIMI.THREE.Vector3( -5, 5, 5 ),
                new BIMI.THREE.Vector3( 0, 0, 0 ),
                new BIMI.THREE.Vector3( 5, -5, 5 ),
                new BIMI.THREE.Vector3( 10, 0, 10 )
            ] ;
            let viewer = BIMI.ViewerHelper.getViewer();
            let data = viewer.drawCurve(points,'#cccccc',5000);
            return data.points;
        },
        //创建一条圆滑曲线，并获得组成该线的5000个顶点
        createCurveLine2(){
            let points = [
                new BIMI.THREE.Vector3( -10, 5, 10 ),
                new BIMI.THREE.Vector3( -5, 10, 5 ),
                new BIMI.THREE.Vector3( 0, 5, 0 ),
                new BIMI.THREE.Vector3( 5, 0, 5 ),
                new BIMI.THREE.Vector3( 10, 5, 10 )
            ] ;
            let viewer = BIMI.ViewerHelper.getViewer();
            let data = viewer.drawCurve(points,'#ffffff',5000);
            return data.points;
        },
        //根据两条线上的各5000个顶点，生成两个不同速度，不同颜色的FlyLine
        FlyLinePluginTest(){
            let points = this.createCurveLine1();
            let points2 = this.createCurveLine2();
            let viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('FlyLinePlugin');
            if(!plugin)
            {
                plugin = new BIMI.FlyLinePlugin();
                viewer.addPlugin(plugin);
            }
            /**
             * id：Number/String  ID   <br/>
             * curve：Array[Vector3] 飞行轨迹线(顶点数组)  <br/>
             * color: String 飞行线颜色 默认值'#ff0000'  <br/>
             * opacity:Number 不透明度(因为飞行线是由很多个Point粒子组成重叠效应，不透明度实际效果比设置值显得低效) <br/>
             * size：Number 飞行线宽度，默认值5 <br/>
             * range:Number 飞行线长度(range < curve) <br/>
             * speed:Number 飞行速度 默认值0.1
             */
            plugin.addFly({
                id:1,
                curve:points,
                color:'#ff0000',
                opacity:0.5,
                size:5,
                range:500,
                speed:0.1
            })
            plugin.addFly({
                id:2,
                curve:points2,
                color:'#0000ff',
                opacity:0.5,
                size:5,
                range:500,
                speed:0.2
            })
            plugin.start();
        },

    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            let viewer = new BIMI.BimViewer(dom,{grid:false,debug:true,loading:true,enableInstancedMesh:true});
            viewer.load('datas/机柜/bim.bin');
            viewer.on(BIMI.ViewerEvent.LOADED,event=>{
                this.FlyLinePluginTest();
            })
            Prism.highlightAll();
        })
         
    },
	beforeDestroy() {
        var viewer = BIMI.ViewerHelper.getViewer();
        if(viewer)
        {
            viewer.dispose();
        }
    }
};
</script>

<style scoped>
    #containerDiv {
	    width: 100%;
	    height: 500px;
	    overflow: hidden;
	}

</style>
