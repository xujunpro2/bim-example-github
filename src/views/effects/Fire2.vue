<template>
    <div id="containerDiv">

    </div> 
</template>
<script>


export default {
    name:"Fire",
    data(){
        return { 
            
        }
    },
    methods:{
        addFire(){
            let viewer =  BIMI.ViewerHelper.getViewer();
            let plugin =viewer.getPlugin('FirePlanPlugin');
            if (!plugin) {
                plugin = new BIMI.FirePlanPlugin();
                viewer.addPlugin(plugin);
            }
            plugin.addFire({
                id:101,
                position:new BIMI.THREE.Vector3(12.169237110799827, 10.855400106811517, -0.6442319531390996)
            })
            viewer.isDirty();
        },
        moveCamera(){
            let viewer =  BIMI.ViewerHelper.getViewer();
            let state = {
                position: {x: 10.361758705823036, y: 14.338900471342804, z: 3.4625982137825644},
                quaternion: {x: -0.32340020634295563, y: -0.1142356236960827, z: -0.03936406970941289, w: 0.9385163817600705},
                target: {x: 11.908010656130706, y: 10.770167092343234, z: 0.5947997390747108},
                zoom: 1
            }
            let fly =true;//视角切换过程是否有飞行动画
            let time = 1000;//飞行动画时长
            viewer.setOrbitState(state,fly,time,()=>{
                this.addFire();
            });
        }
    },

    mounted(){
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom,{loading:true});
            viewer.load('datas/rac_basic_sample_project/bim.bin');

			viewer.on("loaded", model => {
                this.moveCamera();
			});
            viewer.on('pick',(event)=>{
               
            })
            viewer.on('dblclick',(event)=>{
              
            })

            viewer.on('contextmenu',event=>{
               
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


