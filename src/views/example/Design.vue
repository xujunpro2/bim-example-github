<template>
    <div id="containerDiv">

    </div> 
</template>
<script>


export default {
    name:"Design",
    data(){
        return { 
            
        }
    },
    methods:{
        onTest1(){
           
        },
        onTest2(){
        
        }
    },

    mounted(){
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom,{loading:true});
            viewer.setBoxShadow();//DIV增加一个阴影效果，只是好看一些，没啥用
            let toolbar = new BIMI.Toolbar(viewer);
            viewer.load('datas/rac_basic_sample_project/bim.bin');
            viewer.enableDamping(true,0.08)
			viewer.on("loaded", model => {
           
			});
            viewer.on('pick',(event)=>{
                //console.info(event);
                this.modelId = event.data[0].modelId;
                var product = viewer.getProduct(event.data[0].modelId,event.data[0].productId);
                console.info(product);
            })
            viewer.on('dblclick',(event)=>{
                console.info(event.data);
                viewer.zoomToProduct(event.data[0].modelId,event.data[0].productId,true);
            })

            viewer.on('contextmenu',event=>{
                console.info(event)
            })
        })
    },
    beforeDestroy() {
        let viewer = BIMI.ViewerHelper.getViewer();
        if(viewer)
        {
            viewer.dispose();
        }
    }
  
}
</script>
<style scoped>
</style>


