<template>
    <div class="rootDiv">
        
        <div id="containerDiv" ></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
        viewer.enableSAO(true)
        //需要注意的是，SAO非常消耗GPU，模型体量小，可以使用该方法，如果模型体量大或GPU明显吃力，可采用SAPPlugin替代
</code></pre>
    
    </div>
	
</template>

<script>



export default {
	name: "SAO",
	data() {
		return {
        };
	},
	methods: {

    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            let viewer = new BIMI.BimViewer(dom,{grid:false,debug:true,loading:true,antiAliasing:'smaa'});
            viewer.load('datas/rac_basic_sample_project/bim.bin').then(model=>{
                //开启SAO
                viewer.enableSAO(true)
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
