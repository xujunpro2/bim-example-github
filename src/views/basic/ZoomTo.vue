<template>
    <div class="rootDiv">
        <div class="messageDiv">
            鼠标左键双击构件，可聚焦构件
        </div>
        <div id="containerDiv"></div>

         <pre class="line-numbers"><code class="language-js">#代码示范
//通过监听viewer的鼠标双击事件来演示ZoomTo功能
viewer.on(BIMI.ViewerEvent.DBL_CLICK,pickEvent=>{
    //回调的事件对象和pick一样
    var source = pickEvent.source;
    if(source === 'bim')
    {
        var pickObjects = pickEvent.data;
        var modelId = pickObjects[0].modelId;
        var productId = pickObjects[0].productId;
        //构件定位API。
        //第一个参数是模型id(在模型的loaded事件回调中可以获得,如果场景中只有一个模型，那么肯定就是1)。
        //第二个参数是构件ID
        viewer.zoomToProduct(modelId,productId);
        this.message = '鼠标左键双击聚焦构件<br/>事件消息:模型ID '+pickObjects[0].modelId+"  构件ID "+pickObjects[0].productId
    }
})</code></pre>
    </div>
	
</template>

<script>


export default {
	name: "ZoomTo",
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
