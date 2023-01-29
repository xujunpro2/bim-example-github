<template>
    <div class="rootDiv">
         <div class="messageDiv">
            <el-button size="mini" @click="run">下雨</el-button>
            <el-button size="mini" @click="stop">停止</el-button>
        </div>
        <div id="containerDiv"></div>

        <pre class="line-numbers"><code class="language-js">#代码示范
        run(){
            let viewer = BIMI.ViewerHelper.getViewer();
            //设置场景背景色深色，这样雨天的效果会更好
            viewer.setSceneBackground(new BIMI.THREE.Color('#333333'))
            let rainPlugin = viewer.getPlugin('RainMaskPlugin');
            if(rainPlugin == null)
            {
                //angle:雨的角度，默认是225度
                //speed:下雨的速度,默认是0.75,越大速度越快
                //density:雨点密度,默认是1.45,越大越密集
                rainPlugin = new BIMI.RainMaskPlugin({
                    angle:225,
                    speed:0.75,
                    density:1.45,
                });
                viewer.addPlugin(rainPlugin);
            }
            rainPlugin.start();
        },
        stop(){
            let viewer = BIMI.ViewerHelper.getViewer();
            //场景不用背景色
            viewer.setSceneBackground(null);
            let rainPlugin = viewer.getPlugin('RainMaskPlugin');
            if(rainPlugin)
            {
                rainPlugin.stop();
            }
        }
</code></pre>
    </div>
	
</template>

<script>

export default {
	name: "Rain",
	data() {
		return {};
	},
	methods: {
        run(){
            let viewer = BIMI.ViewerHelper.getViewer();
            //设置场景背景色深色，这样雨天的效果会更好
            viewer.setSceneBackground(new BIMI.THREE.Color('#333333'))
            let rainPlugin = viewer.getPlugin('RainMaskPlugin');
            if(rainPlugin == null)
            {
                //angle:雨的角度，默认是225度
                //speed:下雨的速度,默认是0.75,越大速度越快
                //density:雨点密度,默认是1.45,越大越密集
                rainPlugin = new BIMI.RainMaskPlugin({
                    angle:225,
                    speed:0.75,
                    density:1.45,
                });
                viewer.addPlugin(rainPlugin);
            }
            rainPlugin.start();
        },
        stop(){
            let viewer = BIMI.ViewerHelper.getViewer();
            //场景不用背景色
            viewer.setSceneBackground(null);
            let rainPlugin = viewer.getPlugin('RainMaskPlugin');
            if(rainPlugin)
            {
                rainPlugin.stop();
            }
        }
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            let viewer = new BIMI.BimViewer(dom,{grid:false,debug:true,loading:true,enableInstancedMesh:true});
            viewer.load('datas/rac_basic_sample_project/bim.bin');
            // viewer.on('loaded',model=>{
            //     this.addRainPlugin();
            // })
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
