<template>
    <div class="rootDiv">
        <div id="containerDiv" ></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
 viewer.load('datas/rac_basic_sample_project/bim.bin').then(event=>{
    let modelId = event.modelId;
    //除了set之外，还可以override，set是临时着色，可reset。override就真的替换原始材质了
    viewer.setProductsGradientMaterial(modelId,[10411452,10701300,10554644],'#ff0000','#ffff00',0.8); //
})      
</code></pre>
    
    </div>
	
</template>

<script>


export default {
	name: "GradientStyle",
	data() {
		return {
           curModel:'normal',
        };
	},
	methods: {
    
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            viewer.load('datas/rac_basic_sample_project/bim.bin').then(event=>{
                let modelId = event.modelId;
                //除了set之外，还可以override，set是临时着色，可reset。override就真的替换原始材质了
                viewer.setProductsGradientMaterial(modelId,[10411452,10701300,10554644],'#ff0000','#ffff00',0.8); //
            })
           
			
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
        width: 210px;
        height: 140px;
        font-size: 12px;
        padding: 5px;
        overflow:hidden;
        z-index: 100;
    }
</style>
