<template>
    <div class="rootDiv">
        <div id="containerDiv"></div>
        <div id="btnDiv">
            <button @click="toBing">Bing卫星图</button>
            <button @click="toMapBox">MapBox卫星图</button>
            <button @click="toMapBoxDark">MapBox Dark矢量图</button>
            <button @click="toTDT">天地图卫星图</button>
            <button @click="addTerrain">启用地形</button>
            <button @click="removeTerrain">移除地形</button>
        </div>
       
    </div>
	
</template>

<script>


export default {
	name: "MapProviders",
	data() {
		return {
            provider:'tdt',
        };
	},
	methods: {
        addTerrain(){
            var viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('MapPlugin');
            if(plugin && !plugin.terrain)//当前插件没启用地形
            {
                plugin.useTerrain(true);
            }
        },
        removeTerrain(){
            var viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('MapPlugin');
            if(plugin && plugin.terrain)//当前插件没启用地形
            {
                plugin.useTerrain(false);
            }
        },
        toBing(){
            var viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('MapPlugin');
            if(plugin)
            {
                 if(this.provider !== 'bing')
                {
                    plugin.useBingMaps();
                    this.provider = 'bing';
                }
            }
        },
        toMapBox(){
            var viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('MapPlugin');
            if(plugin)
            {
                 if(this.provider !== 'mapbox-v9')
                {
                    plugin.useMapBox();
                    this.provider = 'mapbox-v9';
                }
            }
        },
        toMapBoxDark(){
            var viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('MapPlugin');
            if(plugin)
            {
                 if(this.provider !== 'mapbox-dark-v9')
                {
                    plugin.useMapBox('','mapbox/dark-v9');
                    this.provider = 'mapbox-dark-v9';
                }
            }
        },
        toTDT(){
            var viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('MapPlugin');
            if(plugin)
            {
                 if(this.provider !== 'tdt')
                {
                    plugin.useTDTMaps();
                    this.provider = 'tdt';
                }
            }
        },
    },
	mounted() {
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom,{alwaysRefresh:true});

            let plugin = viewer.getPlugin('MapPlugin')
            if(plugin == null)
            {
                plugin = new BIMI.MapPlugin({
                    terrain:false,
                    terrainToken:'pk.eyJ1IjoibW91c2V3YW5nIiwiYSI6ImNrY2RhMThjdDBjcjcycm9ibGU1ZGk5eTcifQ.o8XgVXdbnQlykcUcUvDq2g'
                });
                viewer.addPlugin(plugin);
            }
            //设置默认视角
            plugin.setDefaultCamera({latitude:30.669098, longitude:111.277884,height:4781, pitch:-30,yaw:0});
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
