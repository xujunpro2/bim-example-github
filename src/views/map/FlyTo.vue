<template>
    <div class="rootDiv">
        <div id="containerDiv"></div>
        <div id="btnDiv">
            <button @click="toA">去A地</button>
            <button @click="toB">去B点</button>
        </div>
       
    </div>
	
</template>

<script>


export default {
	name: "FlyTo",
	data() {
		return {
            
        };
	},
	methods: {
       toA(){
            var viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('MapPlugin');
            plugin.flyTo({  
                latitude:39.90960456049752,
                longitude:116.3972282409668,
                height:3000,pitch:-45,
                yaw:0},{duration : 3000,middleHeight : 500000,callback : null})
       },
       toB(){
            var viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('MapPlugin');
            plugin.flyTo({  
                latitude:30.72515,
                longitude:111.28034,
                height:8000,pitch:-60,
                yaw:0},{duration : 3000,middleHeight : 500000,callback : null})
       }
    },
	mounted() {
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom,{alwaysRefresh:true});

            let plugin = viewer.getPlugin('MapPlugin')
            if(plugin == null)
            {
                plugin = new BIMI.MapPlugin();
                viewer.addPlugin(plugin);
            }
            //设置默认视角
            plugin.setDefaultCamera({latitude:30.72515, longitude:111.28034,height:8000, pitch:-60,yaw:0});
            viewer.isDirty();
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
	    height: 100%;
	    overflow: hidden;
	}
    #btnDiv{
        position: absolute;
        left: 20px;
        top: 20px;
        width: 600px;
    }
</style>
