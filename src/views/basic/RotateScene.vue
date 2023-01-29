<template>
    <div class="rootDiv">
        <div class="messageDiv" >
            <el-button @click="stop">停止旋转</el-button>
        </div>
        <div id="containerDiv" ></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
        //开始旋转场景
        start(){
            let viewer = BIMI.ViewerHelper.getViewer();
            if(viewer)
            {
                let plugin = viewer.getPlugin("RotateScenePlugin");
                if(plugin == null)
                {
                    plugin = new BIMI.RotateScenePlugin();
                    viewer.addPlugin(plugin);
                }
                plugin.start();
            }
        },
        //停止场景旋转
        stop(){
            let viewer = BIMI.ViewerHelper.getViewer();
            if(viewer)
            {
                let plugin = viewer.getPlugin("RotateScenePlugin");
                plugin.stop();
            }
        }</code></pre>
    
    </div>
	
</template>

<script>

export default {
	name: "RotateScene",
	data() {
		return {
            loading:true
        };
	},
	methods: {
        start(){
            let viewer = BIMI.ViewerHelper.getViewer();
            if(viewer)
            {
                let plugin = viewer.getPlugin("RotateScenePlugin");
                if(plugin == null)
                {
                    plugin = new BIMI.RotateScenePlugin();
                    viewer.addPlugin(plugin);
                }
                plugin.start();
            }
        },
        stop(){
            let viewer = BIMI.ViewerHelper.getViewer();
            if(viewer)
            {
                let plugin = viewer.getPlugin("RotateScenePlugin");
                plugin.stop();
            }
        }
    },
	mounted() {
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            viewer.load('datas/冷站/bim.bin');
            
			viewer.on("loaded", model => {
                this.start();
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
        z-index:100;
        position: absolute;
        top: 5px;
        left: 10px;
        background:rgba(0, 0, 255, 0.3);
        border-radius: 5px;
        color: #fff;
        width: 100px;
        height: 50px;
        font-size: 12px;
        padding: 5px;
        overflow: auto;
    }
</style>
