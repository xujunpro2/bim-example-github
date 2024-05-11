<template>
    <div class="rootDiv">
        <div class="messageDiv">
            鼠标左键双击构件，可聚焦构件，聚焦时可指定俯仰角和倾斜角
        </div>
        <div id="containerDiv"></div>

         <pre class="line-numbers"><code class="language-js">#代码示范
    //指定俯仰角为45°，倾斜角为-45°
    viewer.zoomToProduct(modelId,productId,true,null,{x:45,y:-45});</code></pre>
    </div>
	
</template>

<script>


export default {
	name: "ZoomToAndCustomAngle",
	data() {
		return {
        };
	},
	methods: {

    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            viewer.load('datas/rac_basic_sample_project/bim.bin');
   
            viewer.on(BIMI.ViewerEvent.DBL_CLICK,pickEvent=>{
                var source = pickEvent.source;
                if(source === 'bim')
                {
                    var pickObjects = pickEvent.data;
                    var modelId = pickObjects[0].modelId;
                    var productId = pickObjects[0].productId;
                    //指定俯仰角为45°，倾斜角为-45°
                    viewer.zoomToProduct(modelId,productId,true,null,{x:45,y:-45});
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
        height: 100px;
        font-size: 12px;
        padding: 5px;
        overflow: auto;
    }
</style>
