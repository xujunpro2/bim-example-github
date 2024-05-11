<template>
    <div id="containerDiv">

    </div> 
</template>
<script>

var viewer;

export default {
    name:"ArchLink",
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
            viewer = new BIMI.BimViewer(dom);
            let toolbar = new BIMI.Toolbar(viewer);
            viewer.load('datas/Arch Link Model/bim.bin');
            //鼠标移动开启阻尼
            viewer.enableDamping(true,0.08);
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


