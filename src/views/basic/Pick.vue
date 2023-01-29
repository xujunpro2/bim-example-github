<template>
    <div class="rootDiv">
        <div class="messageDiv" v-html="message"></div>
        <div id="containerDiv"></div>

         <pre class="line-numbers"><code class="language-js">#代码示范
//监听pick事件
viewer.on(BIMI.ViewerEvent.PICK,pickEvent=>{
    //事件对象
    var source = pickEvent.source;
    //事件源类型，bim表示事件源是发生在BIM模型上，拾取BIM构件的source都应该为'bim'
    if(source === 'bim')
    {
        //pick的数据，注意返回的是数组，因为除了单选pick之外，还会有框选多选操作，所以拾取统一返回数组。
        var pickObjects = pickEvent.data;
        this.message = '鼠标左键单击模型构件<br/>事件消息:模型ID '+pickObjects[0].modelId+"  构件ID "+pickObjects[0].productId
    }
})</code></pre>
    </div>
	
</template>

<script>


export default {
	name: "Pick",
	data() {
		return {
            message:'鼠标左键单击模型构件<br/>事件消息:'
        };
	},
	methods: {},
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            viewer.load('datas/长方体/bim.bin');
            viewer.on(BIMI.ViewerEvent.LOADED,model=>{
            })
            viewer.on(BIMI.ViewerEvent.PICK,pickEvent=>{
                var source = pickEvent.source;
                if(source === 'bim')
                {
                    var pickObjects = pickEvent.data;
                    this.message = '鼠标左键单击模型构件<br/>事件消息:模型ID '+pickObjects[0].modelId+"  构件ID "+pickObjects[0].productId
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
        height: 50px;
        font-size: 12px;
        padding: 5px;
        overflow: auto;
    }
</style>
