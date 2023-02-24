<template>
    <div class="rootDiv">
        
        <div id="containerDiv" ></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
        addCircleWave(){
            let viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('CircleWavePlugin')
            if(plugin == null)
            {
                plugin = new BIMI.CircleWavePlugin();
                viewer.addPlugin(plugin);
            }
            plugin.addWave({
                id:'J_101',//string/Number，//对象id，唯一标识
                radio: 0.5,//Number,//中心半径，默认值1 <br/>
                position:new BIMI.THREE.Vector3(0,0,0),//Vector3对象 //中心坐标，默认(0,0,0)
                color:'#ff0000' //string, //颜色,默认'#FF0000'
            })

            plugin.start();
        }
</code></pre>
    
    </div>
	
</template>

<script>



export default {
	name: "CircleWave",
	data() {
		return {
        };
	},
	methods: {
        addCircleWave(){
            let viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('CircleWavePlugin')
            if(plugin == null)
            {
                plugin = new BIMI.CircleWavePlugin();
                viewer.addPlugin(plugin);
            }
            plugin.addWave({
                id:'J_101',//string/Number，//对象id，唯一标识
                size: 1,//Number,//圆环大小，默认值1 <br/>
                position:new BIMI.THREE.Vector3(0,0,0),//Vector3对象 //中心坐标，默认(0,0,0)
                color:'#ff0000' //string, //颜色,默认'#FF0000'
            })


            plugin.start();
        }
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            let viewer = new BIMI.BimViewer(dom,{grid:false,debug:true,loading:true,enableInstancedMesh:true});
            viewer.load('datas/机柜/bim.bin');
            viewer.on(BIMI.ViewerEvent.LOADED,event=>{
                this.addCircleWave();
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
