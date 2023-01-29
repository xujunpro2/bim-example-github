<template>
    <div class="rootDiv">
         <div class="messageDiv">
            <el-button size="mini" @click="run">雾天</el-button>
            <el-button size="mini" @click="stop">清除雾天</el-button>
        </div>
        <div id="containerDiv"></div>

        <pre class="line-numbers"><code class="language-js">#代码示范
        run(){
            let viewer = BIMI.ViewerHelper.getViewer();
            //雾天场景有个背景色会效果好一点
            viewer.setSceneBackground(new BIMI.THREE.Color('#cccccc'));
            //雾气密度：density=0.0025,雾气颜色：color = '#ffffff',建议雾气颜色和场景背景色接近或一致
            viewer.setFog(0.0065,'#cccccc');
            viewer.isDirty();
        },
        stop(){
            let viewer = BIMI.ViewerHelper.getViewer();
            viewer.setSceneBackground(null);
            viewer.clearFog()
            viewer.isDirty();
        }
</code></pre>
    </div>
	
</template>

<script>

export default {
	name: "Fog",
	data() {
		return {};
	},
	methods: {
        run(){
            let viewer = BIMI.ViewerHelper.getViewer();
            //雾天场景有个背景色会效果好一点
            viewer.setSceneBackground(new BIMI.THREE.Color('#cccccc'));
            //雾气密度：density=0.0025,雾气颜色：color = '#ffffff',建议雾气颜色和场景背景色接近或一致
            viewer.setFog(0.0065,'#cccccc');
            viewer.isDirty();
        },
        stop(){
            let viewer = BIMI.ViewerHelper.getViewer();
            viewer.setSceneBackground(null);
            viewer.clearFog()
            viewer.isDirty();
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
