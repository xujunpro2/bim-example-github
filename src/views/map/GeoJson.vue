<template>
    <div class="rootDiv">
        <div id="containerDiv"></div>
      
    </div>
	
</template>

<script>


export default {
	name: "GeoJson",
	data() {
		return {
            
        };
	},
	methods: {
        addGeoJson(){
            var viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('MapPlugin');
            let options = {
                id: '1234',
                color:{
                    property:'name',
                    values:{
                        '宝山区':{color:'#00ff00',opacity:0.5},
                        '奉贤区':{color:'#0000ff',opacity:0.5},
                    }
                },
                clamp:false,
                maxHeight:20,
                minHeight:0,
                lineWidth:20,
                lineStep:100
                
            }
            plugin.loadGeoJson('datas/geojson/shanghai.geojson',options);
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
            //设置默认视角定位到上海
            plugin.setDefaultCamera({latitude:31.220868, longitude:121.176679,height:177686, pitch:-90,yaw:0});
            this.addGeoJson();
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
