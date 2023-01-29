<template>
    <div class="rootDiv">
        <div class="messageDiv">
            构件旋转的基点是构件局部坐标基点(0,0,0),所以构件自转还是公转，需要建模人员在建模时处理。
            <br/>
            如果想围绕构件中心点自转:建模时，确保构件局部坐标基点(0,0,0)处于构件中心
        </div>
        <div id="containerDiv" ></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
        start(){
            var viewer = BIMI.ViewerHelper.getViewer();
            var plugin = viewer.getPlugin('RotatePlugin');
            if(!plugin)
            {
                plugin = new BIMI.RotatePlugin();
                viewer.addPlugin(plugin);
            }
            var option = {
                repeat:true,//重复播放
                productData:[{modelId:1,productIds:[{id:42582}]}],
                y:360,
                time:2000
            }
            plugin.ratateXYZ(option);
            viewer.isDirty();
        },
</code></pre>
    
    </div>
	
</template>

<script>


export default {
	name: "TweenRotate",
	data() {
		return {
        };
	},
	methods: {
        start(){
            var viewer = BIMI.ViewerHelper.getViewer();
            var plugin = viewer.getPlugin('RotatePlugin');
            if(!plugin)
            {
                plugin = new BIMI.RotatePlugin();
                viewer.addPlugin(plugin);
            }
            var option = {
                repeat:true,//重复播放
                productData:[{modelId:1,productIds:[{id:42582}]}],
                y:360,
                time:2000
            }
            plugin.ratateXYZ(option);
            viewer.isDirty();
        },
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            viewer.load('datas/冷站/bim.bin');
           
			viewer.on("loaded", model => {
                this.start();
            });
             viewer.on('pick',pickEvent=>{
                var pickObjects = pickEvent.data;
                console.info(pickObjects);
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
    .messageDiv{
        position: absolute;
        top: 5px;
        left: 10px;
        background:rgba(0, 0, 255, 0.3);
        border-radius: 5px;
        color: #fff;
        width: 200px;
        height: 120px;
        font-size: 12px;
        padding: 5px;
        overflow:hidden;
        z-index: 100;
    }
</style>
