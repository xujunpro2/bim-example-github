<template>
    <div class="rootDiv">
        <div class="messageDiv">
            根据构件类型，设置构件自定义材质(替换原始材质，即永久材质),之后对构件进行reset()操作，恢复的也是设置的材质
            <br/>
            示例中设置了水管和控制阀的样式
        </div>
        <div id="containerDiv" ></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
        replaceStyle(){
            var viewer = BIMI.ViewerHelper.getViewer();
            viewer.overrideProductsColorByType(['IfcFlowSegment','IfcFlowFitting'],'#0b4161',0.2)
            viewer.overrideProductsColorByType(['IfcFlowController'],'#d40000',0.8)
            
            // 也可以定义一个材质对象去替换
            // var material = viewer.createLambertMaterial('#0499fd',0.5,true)
            // viewer.overridProductMaterial(1,[430,573],material);
            viewer.isDirty();
        }
</code></pre>
    
    </div>
	
</template>

<script>


export default {
	name: "UpdateStyleByType",
	data() {
		return {
           loading:true,
        };
	},
	methods: {
        replaceStyle(){
            var viewer = BIMI.ViewerHelper.getViewer();
            viewer.overrideProductsColorByType(['IfcFlowSegment','IfcFlowFitting'],'#0b4161',0.2)
            viewer.overrideProductsColorByType(['IfcFlowController'],'#d40000',0.8)
            
            // 也可以定义一个材质对象去替换
            // var material = viewer.createLambertMaterial('#0499fd',0.5,true)
            // viewer.overridProductMaterial(1,[430,573],material);
            viewer.isDirty();
        }
    },
	mounted() {
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            viewer.load('datas/消防及屋面绿化水箱/bim.bin');
           
			viewer.on("loaded", model => {
                this.replaceStyle();
            });
            viewer.on('pick',event=>{
                var modelId = event.data[0].modelId;
                var productId = event.data[0].productId;
                var product = viewer.getProduct(modelId,productId);
                console.info(product)
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
        height: 200px;
        font-size: 12px;
        padding: 5px;
        overflow:hidden;
    }
</style>
