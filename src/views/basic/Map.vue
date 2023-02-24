<template>
    <div class="rootDiv">
        <div class="messageDiv">
            导航图在模型范围内可鼠标左键单击，主场景会将相机位置移动到该处
        </div>
        <div id="containerDiv"></div>

         <pre class="line-numbers"><code class="language-js">#代码示范
//PS:导航图中的绿色圆点代表的相机位置，三维场景中视野范围除了相机位置之外，还受相机本身欧拉角的影响
createMap(){
    let viewer = BIMI.ViewerHelper.getViewer();
    let plugin = viewer.getPlugin('MapPlugin');
    if(plugin == null)
    {
        plugin  = new BIMI.MapPlugin();
        viewer.addPlugin(plugin);
    }
    plugin.createMap({blackAndWhite:true});//地图是否为黑色色调
}</code></pre>
    </div>
	
</template>

<script>


export default {
	name: "Map",
	data() {
		return {
        };
	},
	methods: {
        createMap(){
            let viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('MapPlugin');
            if(plugin == null)
            {
                plugin  = new BIMI.MapPlugin();
                viewer.addPlugin(plugin);
            }
            plugin.createMap({blackAndWhite:true});//地图是否为黑色色调
        }
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            viewer.load('datas/rac_basic_sample_project/bim.bin');
            viewer.on(BIMI.ViewerEvent.LOADED, model => {
                this.createMap();
            });
            
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
        z-index: 100;
        position: absolute;
        top: 5px;
        left: 10px;
        background:rgba(0, 0, 255, 0.3);
        border-radius: 5px;
        color: #fff;
        width: 250px;
        height: 50px;
        font-size: 12px;
        padding: 5px;
        overflow: auto;
    }
</style>
