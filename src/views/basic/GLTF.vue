<template>
    <div class="rootDiv">
        <div class="messageDiv">
            场景融合了一个BIM模型和一个GLTF头盔模型
        </div>
        <div id="containerDiv"></div>

         <pre class="line-numbers"><code class="language-js">#代码示范
//加载BIM模型
viewer.load('datas/rac_basic_sample_project/bim.bin');
//加载GLTF模型，location是设置模型的位置，如果不设置该参数，则GLTF模型会以(0,0,0)为默认基点
viewer.loadGLTF('datas/gltf/DamagedHelmet.gltf',{location:new BIMI.THREE.Vector3(0,10,0)});
})</code></pre>
    </div>
	
</template>

<script>


export default {
	name: "gltf",
	data() {
		return {
        };
	},
	methods: {

    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom,{grid:false});
            viewer.load('datas/rac_basic_sample_project/bim.bin');
            viewer.loadGLTF('datas/gltf/DamagedHelmet.gltf',{location:new BIMI.THREE.Vector3(0,10,0),updateRegion:false});
            viewer.on(BIMI.ViewerEvent.DBL_CLICK,pickEvent=>{
                var source = pickEvent.source;
                if(source === 'bim')
                {
                    var pickObjects = pickEvent.data;
                    var modelId = pickObjects[0].modelId;
                    var productId = pickObjects[0].productId;
                    viewer.zoomToProduct(modelId,productId,true);
                }
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
