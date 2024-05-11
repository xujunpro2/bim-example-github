<template>
    <div class="rootDiv">
        
        <div id="containerDiv" ></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
       addSAOPlugin()
        {
            let viewer =  BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('SAOPlugin');
            if(!plugin)
            {
                plugin = new BIMI.SAOPlugin();
                viewer.addPlugin(plugin)
            }
            plugin.start();
        },
        //SAPPlugin相比viewer.enableSAO(true)，只会在渲染的最后一帧使用SAO效果，所以对GPU的消耗小很多。
</code></pre>
    
    </div>
	
</template>

<script>



export default {
	name: "SAOPluginExample",
	data() {
		return {
        };
	},
	methods: {
        addSAOPlugin()
        {
            let viewer =  BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('SAOPlugin');
            if(!plugin)
            {
                plugin = new BIMI.SAOPlugin();
                viewer.addPlugin(plugin)
            }
            plugin.start();
        },
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            let viewer = new BIMI.BimViewer(dom,{grid:false,debug:true,loading:true,antiAliasing:'smaa'});
            viewer.load('datas/rac_basic_sample_project/bim.bin').then(model=>{
                //开启SAO
                this.addSAOPlugin();
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
        background:-webkit-gradient(linear, 0% 0%, 0% 100%,from(#333), to(#969696));
	}

</style>
