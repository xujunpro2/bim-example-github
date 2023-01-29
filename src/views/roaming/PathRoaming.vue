<template>
    <div class="rootDiv">
        <div class="messageDiv">
            <el-button size="mini" @click="onStart">开始漫游</el-button>
            <p/>
            <el-button size="mini" @click="onStop">停止漫游并回到初始视角</el-button>
        </div>
        <div id="containerDiv"></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
        onStart(){
            var viewer = BIMI.ViewerHelper.getViewer();
           // console.info(viewer.getCamerPosition())
            var plugin = viewer.getPlugin('PathRoamingPlugin');
            if(!plugin)
            {
                plugin = new BIMI.PathRoamingPlugin();
                viewer.addPlugin(plugin);
            }
            plugin.setPath([
                8.779419331450296, 9.05,  0.18975726649295765,
                11.536803951388828, 9.05, -9.317458021531284,
                11.499279099431707, 9.65, -16.73,
                0.8599974187220205, 9.65,-16.73
            ],15000);
            // plugin.drawPath();
            // viewer.isDirty();
            //记录下启动之前的相机位置和target，以便在打断的时候回到该位置
            viewer._orbitControl.saveState();
            plugin.start();
        },
        onStop(){
            var viewer = BIMI.ViewerHelper.getViewer();
            var plugin = viewer.getPlugin('PathRoamingPlugin');
            plugin.stop();
            viewer.resetHomeState();
        },
</code></pre>
    
    </div>
	
</template>

<script>


export default {
	name: "PathRoaming",
	data() {
		return {
           
        };
	},
	methods: {
        onStart(){
            var viewer = BIMI.ViewerHelper.getViewer();
           // console.info(viewer.getCamerPosition())
            var plugin = viewer.getPlugin('PathRoamingPlugin');
            if(!plugin)
            {
                plugin = new BIMI.PathRoamingPlugin();
                viewer.addPlugin(plugin);
            }
            plugin.setPath([
                8.779419331450296, 9.05,  0.18975726649295765,
                11.536803951388828, 9.05, -9.317458021531284,
                11.499279099431707, 9.65, -16.73,
                0.8599974187220205, 9.65,-16.73
            ],15000);
            // plugin.drawPath();
            // viewer.isDirty();
            //记录下启动之前的相机位置和target，以便在打断的时候回到该位置
            viewer._orbitControl.saveState();
            plugin.start();
        },
        onStop(){
            var viewer = BIMI.ViewerHelper.getViewer();
            var plugin = viewer.getPlugin('PathRoamingPlugin');
            plugin.stop();
            viewer.resetHomeState();
        },
       
       
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            viewer.load('datas/rac_basic_sample_project/bim.bin')
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
        height: 100px;
        font-size: 12px;
        padding: 5px;
        overflow:hidden;
        z-index: 100;
    }
</style>
