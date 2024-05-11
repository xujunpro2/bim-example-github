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
            var viewer = new BIMI.BimViewer(dom,{debug:true});

            let toolbar = new BIMI.Toolbar(viewer);
            viewer.load('datas/rac_basic_sample_project/bim.bin');
            viewer.enableDamping(true,0.08)
	
            //鼠标双击事件回调，聚焦构件
            viewer.on(BIMI.ViewerEvent.DBL_CLICK,(event)=>{
                console.info(event.data);
                viewer.zoomToProduct(event.data[0].modelId,event.data[0].productId,true);
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


