<template>
    <div class="rootDiv">
        <div id="containerDiv"></div>
        <div id="btnDiv">
            <button @click="mapTransparent">地表透明</button>
            <button @click="noTransparent">取消透明</button>
        </div>
       
    </div>
	
</template>

<script>


export default {
	name: "LoadBim",
	data() {
		return {
            
        };
	},
	methods: {
        addGLTF(){
            var viewer = BIMI.ViewerHelper.getViewer();
            viewer.load('datas/gzb.gltf',{
                updateRegion:false,
                modelId:2,
                latitude:30.739541, 
                longitude:111.273478,
                offset:new BIMI.THREE.Vector3(240,-30,180),
                //offset:new THREE.Vector3(-770,30,460),
                scale:new BIMI.THREE.Vector3(1.12,1.0,1.1),
                rotate:new BIMI.THREE.Vector3(0,-20,0)
            })
        },
        noTransparent(){
            var viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('MapPlugin');
            plugin.setMapOpacity(1.0);
        },

        mapTransparent(){
            var viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('MapPlugin');
            plugin.setMapOpacity(0.3);
        },
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
            plugin.setDefaultCamera({latitude:30.73615, longitude:111.28034,height:3000, pitch:-90,yaw:0});
            viewer.isDirty();
            this.addGLTF();
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
