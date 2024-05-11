<template>
    <div class="rootDiv">
        <div id="containerDiv"></div>
    </div>
	
</template>

<script>


export default {
	name: "OSGB",
	data() {
		return {
            
        };
	},
	methods: {
		addOSGB(){
			let viewer = BIMI.ViewerHelper.getViewer();
			let plugin = viewer.getPlugin('OSGBPlugin')
            if(plugin == null)
            {
                plugin = new BIMI.OSGBPlugin();
                viewer.addPlugin(plugin);
            }
            //大桥
            plugin.load('bridge','datas/osgb/1/tileset.json',{
                maxDepth:Infinity,//最精细层级，无穷大，虽然这个数据本身只有root
                maxSize:50,
                minSize:30,
				offset:new BIMI.THREE.Vector3(0,5,0)
            }).then(coord=>{
                //获得osgb所在的地理坐标
            })	
		}
    },
	mounted() {
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom,{alwaysRefresh:true});

            let plugin = viewer.getPlugin('MapPlugin')
            if(plugin == null)
            {
                plugin = new BIMI.MapPlugin({
					terrain:true
				});
                viewer.addPlugin(plugin);
            }
            //设置默认视角
            plugin.setDefaultCamera({latitude:22.791201611610983, longitude:113.96068993682941,height:1000, pitch:-90,yaw:0});
            viewer.isDirty();

			setTimeout(() => {
				this.addOSGB()
			}, 2000);
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
