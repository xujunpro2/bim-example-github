<template>
    <div class="rootDiv">
        <div class="messageDiv">
            演示加载多个模型,整个三维场景会以第一个加载的模型为场景中心。需要注意的是：多模型的长度单位在建模时应该一致。
            <br/>
            鼠标单击BIM构件，弹出模型ID和构件ID。
            <br/>
            <button @click="unload">卸载柱子模型</button>
            <button @click="load">加载柱子模型</button>
        </div>
        <div id="containerDiv"></div>

         <pre class="line-numbers"><code class="language-js">#代码示范
viewer.load('模型A');
viewer.load('模型B');

</code></pre>
    </div>
	
</template>

<script>


export default {
	name: "MultiModel",
	data() {
		return {
           stationModelId:-1
        };
	},
	methods: {
        load(){
            if(this.stationModelId == -1)
            {
                var viewer = BIMI.ViewerHelper.getViewer();
                viewer.load('datas/代码测试用/bim.bin');
            }
        },
        unload(){
            var viewer = BIMI.ViewerHelper.getViewer();
            viewer.unload(this.stationModelId)
            this.stationModelId = -1;
        }
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom,{loading:true});
            viewer.load('datas/代码测试用/bim.bin');
            viewer.load('datas/冷站/bim.bin');
            viewer.on('loaded',model=>{
               
                if(model.name === 'datas/代码测试用/bim.bin')
                {
                    this.stationModelId = model.modelId;
                    console.info('this.stationModelId:'+this.stationModelId)
                }
            })
            viewer.on('pick',pickEvent=>{
                var source = pickEvent.source;
                if(source === 'bim')
                {
                    var pickObjects = pickEvent.data;
                    var modelId = pickObjects[0].modelId;
                    var productId = pickObjects[0].productId;
                    alert('点击的构件:模型ID-'+modelId+"  构件ID-"+productId)
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
        position: absolute;
        top: 5px;
        left: 10px;
        background:rgba(0, 0, 255, 0.3);
        border-radius: 5px;
        color: #fff;
        width: 250px;
        height: 120px;
        font-size: 12px;
        padding: 5px;
        overflow: auto;
        z-index: 100;
    }
</style>
