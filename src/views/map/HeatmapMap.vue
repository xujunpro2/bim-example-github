<template>
    <div class="rootDiv">
        <div id="containerDiv"></div>
    </div>
	
</template>

<script>


export default {
	name: "HeatmapMap",
	data() {
		return {
            
        };
	},
	methods: {
        AddHeatmap()
        {
            var viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('HeatmapPlugin');
            if(!plugin)
            {
                plugin = new BIMI.HeatmapPlugin();
                viewer.addPlugin(plugin);
            }
            //建议边界比样本点的范围大一些，这样可以确保样本点的热点半径在范围内，好看！
            let bounds = [31.384308,120.710107,30.806931,121.478660];//左上角和右下角的经纬度坐标，纬度在前，经度在后

            //设置在指定范围内，随机生成样本点经纬度
            let minLat = 30.87;
            let maxLat = 31.30;
            let minLon = 120.77;
            let maxLon = 121.40;
            let simples = [];
            //生成50个样本点
            let count = 50;
            while (count--) 
            {
                //样本点x坐标是经度，y坐标是纬度
                var point = {
                    x: Math.random() * (maxLon - minLon) + minLon,
                    y: Math.random() * (maxLat - minLat) + minLat,
                    value: Math.floor(Math.random() * 50)
                };
                simples.push(point);
            }
            //边界经纬度转世界坐标
            let vec1 = BIMI.MapTools.latlngToVector(bounds[0],bounds[1]);
            let vec2 = BIMI.MapTools.latlngToVector(bounds[2],bounds[3]);
            //设置边界
            plugin.setEnvelope(vec1.x, vec1.z, vec2.x, vec2.z);
            //样本点经纬度转世界坐标
            simples.forEach(item=>{
                let vec = BIMI.MapTools.latlngToVector(item.y,item.x);
                item.x = vec.x;
                item.y = vec.z;
            })
            //样本点坐标转换完成后，交给plugin
            plugin.setSimplePoints(simples);
            //设置热点抬起高度，因为是GIS地图，高度大一些，看的舒服
            plugin.maxHeight = 10000;
            plugin.create(300,40,[0,0,0]);
        },
        //创建测试数据
        createMatrix(bounds,samplePoints,plugin){
            //经纬度坐标转三维坐标
            let vec1 = BIMI.MapTools.latlngToVector(bounds[0],bounds[1]);
            let vec2 = BIMI.MapTools.latlngToVector(bounds[2],bounds[3]);

            let points = [];
            samplePoints.forEach(item=>{
                let vec = BIMI.MapTools.latlngToVector(item.latitude,item.longitude);
                points.push({x:vec.x,y:vec.z,value:item.value})
            });

            let param = {
                config:{count:100,power:5,sampleCount:15},
                sampelPoints:points,
                bounds:[vec1.x, vec1.z, vec2.x, vec2.z]
            }
            let matrix = plugin.getGridMatrix(param);
            return matrix;
        },
    },
	mounted() {
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom,{alwaysRefresh:true});

            let plugin = viewer.getPlugin('MapPlugin')
            if(plugin == null)
            {
                plugin = new BIMI.MapPlugin({terrain:false});
                viewer.addPlugin(plugin);
            }
            //使用mapbox dark样式的地图
            plugin.useMapBox('','mapbox/dark-v9');
            //设置默认视角
            plugin.setDefaultCamera({latitude:31.220868, longitude:121.176679,height:177686, pitch:-90,yaw:0});
            viewer.isDirty();

            setTimeout(() => {
                this.AddHeatmap();
            }, 3000);
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
