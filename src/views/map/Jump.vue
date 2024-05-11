<template>
    <div class="rootDiv">
        <div id="containerDiv"></div>
        <div id="btnDiv">
            <button @click="jumpTo">跳转到BIM小场景</button>
            <button @click="jumpBack">返回GIS大场景</button>
        </div>
       
    </div>
	
</template>

<script>


export default {
	name: "Jump",
	data() {
		return {
            jumpToBIM:false
        };
	},
	methods: {
         //场景跳转
        jumpTo(){
            if(!this.jumpToBIM)
            {
                var viewer = BIMI.ViewerHelper.getViewer();
                let plugin = viewer.getPlugin('MapPlugin');
                plugin.jumpTo(1234);//跳转到指定模型的小场景

                this.jumpToBIM = true;
            }
            
        },
        jumpBack(){
            if(this.jumpToBIM)
            {
                var viewer = BIMI.ViewerHelper.getViewer();
                let plugin = viewer.getPlugin('MapPlugin');
                plugin.jumpBack();//跳转回GIS大场景

                this.jumpToBIM = false;
            }
            
        },

        addBIM(){
            var viewer = BIMI.ViewerHelper.getViewer();
            viewer.load('datas/rac_basic_sample_project/bim.bin',{
                updateRegion:false,//加载模型后，不改变相机位置和视角
                modelId:1234,
                latitude:39.90960456049752,
                longitude:116.3972282409668,
                offset:new BIMI.THREE.Vector3(0,0,0),
                scale:new BIMI.THREE.Vector3(1,1,1),
                rotate:new BIMI.THREE.Vector3(0,0,0)
            })
        },
    },
	mounted() {
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom,{alwaysRefresh:true});
            let toolbar = new BIMI.Toolbar(viewer);
            let plugin = viewer.getPlugin('MapPlugin')
            if(plugin == null)
            {
                plugin = new BIMI.MapPlugin();
                viewer.addPlugin(plugin);
            }
            //设置默认视角
            plugin.setDefaultCamera({latitude:39.90960456049752, longitude:116.3972282409668,height:500, pitch:-90,yaw:0});
            viewer.isDirty();
            this.addBIM();
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
