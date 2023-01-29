<template>
    <div class="rootDiv">
        <div class="messageDiv">
            按住Alt+鼠标左键，操作剖切盒<br/>
           
        </div>
        <div id="containerDiv" ></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
        //加载剖切插件
        addClipPlugin(){
            var viewer = BIMI.ViewerHelper.getViewer();
            if(viewer)
            {
                var plugin = viewer.getPlugin('ClipBoxPlugin');
                if(plugin == null)
                {
                    plugin = new BIMI.ClipBoxPlugin();
                    viewer.addPlugin(plugin)
                }
            }
       }</code></pre>
    
    </div>
</template>

<script>


export default {
	name: "BoxClip",
	data() {
		return {
        };
	},
	methods: {
       addClipPlugin(){
            var viewer = BIMI.ViewerHelper.getViewer();
            if(viewer)
            {
                var plugin = viewer.getPlugin('ClipBoxPlugin');
                if(plugin == null)
                {
                    plugin = new BIMI.ClipBoxPlugin();
                    viewer.addPlugin(plugin)
                }
            }
       }
        
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            viewer.load('datas/冷站/bim.bin');
           
			viewer.on("loaded", model => {
                this.addClipPlugin();
            });
            viewer.on("pick",eventData=>{
                console.info(eventData)
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
        height: 120px;
        font-size: 12px;
        padding: 5px;
        overflow: auto;
    }
</style>
