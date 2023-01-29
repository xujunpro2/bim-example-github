<template>
    <div class="rootDiv">
        <div class="messageDiv">
            管道流向效果，可设置流向、流速<br/>
        </div>
        <div id="containerDiv" ></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
var plugin = viewer.getPlugin('TubeFlowPlugin');
if(plugin == null)
{
    plugin  = new BIMI.TubeFlowPlugin();
    viewer.addPlugin(plugin);
}
plugin.addFlow({
    id:'121',//每个流动特效对象的唯一id
    //管道坐标点
    curve:[ -8, 1, 0,
            -7, 1, 3,
            7, 1, -2,
            8, 1, 0 ],
    radius:0.8,//管道半径
    direction:'right'//流动方向 left|right 
})
plugin.start();
</code></pre>
    
    </div>
	
</template>

<script>


export default {
	name: "TubeFlow",
	data() {
		return {
        };
	},
	methods: {
        addTubeFlow(){
            var viewer = BIMI.ViewerHelper.getViewer();
            var plugin = viewer.getPlugin('TubeFlowPlugin');
            if(plugin == null)
            {
                plugin  = new BIMI.TubeFlowPlugin();
                viewer.addPlugin(plugin);
            }
            plugin.addFlow({
                id:'121',
                curve:[ -8, 1, 0,
                        -7, 1, 3,
                        7, 1, -2,
                        8, 1, 0 ],
                radius:0.8,
                direction:'right'
            })
            plugin.start();

            
            //画一根管道
            var curve = new BIMI.THREE.CatmullRomCurve3([
			  new BIMI.THREE.Vector3(-8, 1, 0),
			  new BIMI.THREE.Vector3(-7, 1, 3),
			  new BIMI.THREE.Vector3(7, 1, -2),
			  new BIMI.THREE.Vector3(8, 1, 0)
			]);
			var tube = new BIMI.THREE.TubeGeometry(curve, 100, 0.6, 50, false);
			var tubeStyle = new BIMI.THREE.MeshLambertMaterial({
				color:'#2FB7C3',
				side:BIMI.THREE.DoubleSide
			});
			var tubeMesh = new BIMI.THREE.Mesh(tube, tubeStyle); //网格模型对象Mesh
            viewer._scene.add(tubeMesh);
        },

        addTubeWaterFlow(){
            var viewer = BIMI.ViewerHelper.getViewer();
            var plugin = viewer.getPlugin('TubeFlowWaterPlugin');
            if(plugin == null)
            {
                plugin  = new BIMI.TubeFlowWaterPlugin();
                viewer.addPlugin(plugin);
            }

            
            plugin.addFlow({
                id:'121',
                curve:[ -8, 5, 0,
                        -7, 5, 3,
                        7, 5, -2,
                        8, 5, 0 ],
                radius:0.5,
                direction:'left'
            })
            //plugin.offsetSpeed = 0.06
            plugin.start();

            
            //画一根管道
            var curve = new BIMI.THREE.CatmullRomCurve3([
			  new BIMI.THREE.Vector3(-8, 5, 0),
			  new BIMI.THREE.Vector3(-7, 5, 3),
			  new BIMI.THREE.Vector3(7, 5, -2),
			  new BIMI.THREE.Vector3(8, 5, 0)
			]);
			var tube = new BIMI.THREE.TubeGeometry(curve, 100, 0.6, 50, false);
			var tubeStyle = new BIMI.THREE.MeshLambertMaterial({
				color:'#2FB7C3',
                side:BIMI.THREE.FrontSide,
                transparent:true,
                opacity:0.5
			});
			var tubeMesh = new BIMI.THREE.Mesh(tube, tubeStyle); //网格模型对象Mesh
            viewer._scene.add(tubeMesh);
        }
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            this.addTubeFlow()
            this.addTubeWaterFlow()
            viewer.setCameraPosition(new BIMI.THREE.Vector3(0,20,20))
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
    .messageDiv{
        position: absolute;
        top: 5px;
        left: 10px;
        background:rgba(0, 0, 255, 0.3);
        border-radius: 5px;
        color: #fff;
        width: 200px;
        height: 50px;
        font-size: 12px;
        padding: 5px;
        overflow: auto;
    }
</style>
