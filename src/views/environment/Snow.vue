<template>
    <div class="rootDiv">
         <div class="messageDiv">
            <el-button size="mini" @click="run">下雪</el-button>
            <el-button size="mini" @click="stop">停止</el-button>
        </div>
        <div id="containerDiv"></div>

        <pre class="line-numbers"><code class="language-js">#代码示范
        run(){
            let viewer = BIMI.ViewerHelper.getViewer();
            //设置场景背景色深色，这样雨天的效果会更好
            viewer.setSceneBackground(new BIMI.THREE.Color('#333333'))
            let snowPlugin = viewer.getPlugin('SnowMaskPlugin');
            if(snowPlugin == null)
            {
                //size:雪花大小，默认是0.035
                //speed:速度,默认是1.0,越大速度越快
                //density:密度,默认是0.3,越大越密集
                snowPlugin = new BIMI.SnowMaskPlugin({
                    size:0.035,
                    speed:1.0,
                    density:0.3
                });
                viewer.addPlugin(snowPlugin);
            }
            snowPlugin.start();
        },
        stop(){
            let viewer = BIMI.ViewerHelper.getViewer();
            //场景不用背景色
            viewer.setSceneBackground(null);
            let snowPlugin = viewer.getPlugin('SnowMaskPlugin');
            if(snowPlugin)
            {
                snowPlugin.stop();
            }
        }
</code></pre>
    </div>
	
</template>

<script>

export default {
	name: "Snow",
	data() {
		return {};
	},
	methods: {
        run(){
            let viewer = BIMI.ViewerHelper.getViewer();
            //设置场景背景色深色，这样雨天的效果会更好
            viewer.setSceneBackground(new BIMI.THREE.Color('#333333'))
            let snowPlugin = viewer.getPlugin('SnowMaskPlugin');
            if(snowPlugin == null)
            {
                //size:雪花大小，默认是0.035
                //speed:速度,默认是1.0,越大速度越快
                //density:密度,默认是0.3,越大越密集
                snowPlugin = new BIMI.SnowMaskPlugin({
                    size:0.035,
                    speed:1.0,
                    density:0.3
                });
                viewer.addPlugin(snowPlugin);
            }
            snowPlugin.start();
        },
        stop(){
            let viewer = BIMI.ViewerHelper.getViewer();
            //场景不用背景色
            viewer.setSceneBackground(null);
            let snowPlugin = viewer.getPlugin('SnowMaskPlugin');
            if(snowPlugin)
            {
                snowPlugin.stop();
            }
        }
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            let viewer = new BIMI.BimViewer(dom,{grid:false,debug:true,loading:true,enableInstancedMesh:true});
            viewer.load('datas/rac_basic_sample_project/bim.bin');
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

        z-index: 100;
    }
</style>
