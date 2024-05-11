<template>
    <div class="rootDiv">
        <div id="containerDiv"></div>
       
       
    </div>
	
</template>

<script>


export default {
	name: "Road",
	data() {
		return {
           
        };
	},
	methods: {
        addRoad(){
            //模拟一个道路的经纬度json数据
            let json = '[{"latitude":39.90616,"longitude":116.38563,"height":0},{"latitude":39.90635,"longitude":116.39166,"height":0},{"latitude":39.90654,"longitude":116.39707,"height":0},{"latitude":39.90799,"longitude":116.397,"height":0},{"latitude":39.91037,"longitude":116.39689,"height":0},{"latitude":39.91163,"longitude":116.39681,"height":0.039},{"latitude":39.91376,"longitude":116.39673,"height":0.016},{"latitude":39.91388,"longitude":116.40039,"height":0}]';
            let coords = JSON.parse(json);
            //经纬度需要先转成世界坐标
            let points = [];
            coords.forEach(item=>{
                let vec3 = BIMI.MapTools.latlngToVector(item.latitude,item.longitude);
                points.push([vec3.x,vec3.z]);
            })
            //使用RoadPlugin生成路网
            var viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('RoadPlugin');
            if(!plugin)
            {
                plugin = new BIMI.RoadPlugin();
                viewer.addPlugin(plugin);
            }  
            
            plugin.createRoadMesh({
                id:'朝阳大街',
                points:points,
                width:20,
                height:0.5,
                roadTextureScale:20,
                flowLight:true,
                flowLightColor:'#ffff00',
                flowLightTextrueScale:5,
            });   
            plugin.running = true;  

        },
    },
	mounted() {
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);

            let plugin = viewer.getPlugin('MapPlugin')
            if(plugin == null)
            {
                plugin = new BIMI.MapPlugin({terrain:false});
                viewer.addPlugin(plugin);
            }
            //使用mapbox地图
            plugin.useMapBox('','mapbox/dark-v9');
            //设置默认视角
            plugin.setDefaultCamera({latitude:39.90960456049752, longitude:116.3972282409668,height:1000, pitch:-90,yaw:0});
            this.addRoad();
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
