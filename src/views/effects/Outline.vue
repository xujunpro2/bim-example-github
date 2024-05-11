<template>
    <div class="rootDiv">
        
        <div id="containerDiv" ></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
        addOutline(){
            let viewer =  BIMI.ViewerHelper.getViewer();
            let outlinePlugin = viewer.getPlugin('OutlinePlugin')
            if(outlinePlugin == null)
            {
                outlinePlugin = new BIMI.OutlinePlugin();
                viewer.addPlugin(outlinePlugin);
            }
            
            outlinePlugin.add(1,[934462]);
            viewer.isDirty();  
        }
</code></pre>
    
    </div>
	
</template>

<script>



export default {
	name: "Outline",
	data() {
		return {
        };
	},
	methods: {
        addOutline(){
            let viewer =  BIMI.ViewerHelper.getViewer();
            let outlinePlugin = viewer.getPlugin('OutlinePlugin')
            if(outlinePlugin == null)
            {
                outlinePlugin = new BIMI.OutlinePlugin();
                viewer.addPlugin(outlinePlugin);
            }
            
            outlinePlugin.add(1,[10934462]);
            viewer.isDirty();  
        }
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            let viewer = new BIMI.BimViewer(dom,{grid:false,debug:true,loading:true,antiAliasing:'smaa'});
            viewer.load('datas/rac_basic_sample_project/bim.bin');
            viewer.on('loaded',event=>{
                this.addOutline()
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

</style>
