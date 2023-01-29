<template>
    <div class="rootDiv">
        <div class="messageDiv" v-html="message"></div>
        <div id="containerDiv"></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
//请求轻量化模型文件
viewer.load('datas/冷站.gz');

//监听下载进度事件，SDK本身提供了支持多模型加载的进度控件，如果你不满意，也可以根据这些事件执行开发
viewer.on(BIMI.ViewerEvent.ON_PROGRESS, data => {
    let url = data.url;//发送进度事件的模型url
    let progress = data.progress;//进度
    this.message += "onprogress:"+progress+" ->模型下载进度<br/>"
});

//监听下载完成事件
viewer.on(BIMI.ViewerEvent.ON_DOWNLOADED, data => {
    //data数据结构 {model:url},url是轻量化文件的url
	this.message += "ondownloaded ->模型下载完毕<br/>"
});

//监听模型加载完毕事件
viewer.on(BIMI.ViewerEvent.LOADED, data => {
    //data数据结构 { model: modelName,modelId:modelId }  
    //modelName是模型名称 ，modelId是BimViewer给模型生成的唯一id，为了支持在一个场景中同时加载多个模型
    //开发者可以持有这个modelId，modelId永远从1开始递增
	this.message += "loaded ->模型加载完毕<br/>"
});</code></pre>
    
    </div>
	
</template>

<script>


export default {
	name: "LoadEvent",
	data() {
		return {
            message:'事件消息:<br/>'
        };
	},
	methods: {},
	mounted() {
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            viewer.load('datas/冷站/bim.bin');
            viewer.on(BIMI.ViewerEvent.ON_PROGRESS, data => {
                let url = data.url;//发送进度事件的模型url
                let progress = data.progress;//进度
                this.message += "onprogress:"+progress+" ->模型下载进度<br/>"
			});
			viewer.on(BIMI.ViewerEvent.ON_DOWNLOADED, data => {
                //{model:当前下载完毕的url}
				this.message += "ondownloaded ->模型下载完毕<br/>"
			});
			viewer.on(BIMI.ViewerEvent.LOADED, model => {
                //{ model: model.name,modelId:model.id }
				this.message += "loaded ->模型加载完毕<br/>"
			});
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
        height: 150px;
        font-size: 12px;
        padding: 5px;
        overflow: auto;
    }
</style>
