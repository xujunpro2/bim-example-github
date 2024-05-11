<template>
    <div class="rootDiv">
        <div id="containerDiv"></div>
    </div>
	
</template>

<script>


export default {
	name: "HeatmapGridMap",
	data() {
		return {
           
        };
	},
	methods: {
        AddHeatmapGrid()
        {
            var viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('HeatmapGridPlugin');
            if(!plugin)
            {
                plugin = new BIMI.HeatmapGridPlugin();
                viewer.addPlugin(plugin);
            }
            //边界、样本点的坐标是经纬度
            let matrix1 = this.createMatrix([30.836931,120.730107,31.344308,121.448660],[
                {latitude:31.263594,longitude:120.843610,value:0},
                {latitude:31.263594,longitude:120.943610,value:20},
                {latitude:31.263594,longitude:121.043610,value:0},
                {latitude:31.263594,longitude:121.143610,value:0},
                {latitude:31.263594,longitude:121.243610,value:0},

                {latitude:31.093232,longitude:120.843610,value:0},
                {latitude:31.093232,longitude:120.943610,value:0},
                {latitude:31.093232,longitude:121.043610,value:50},
                {latitude:31.093232,longitude:121.143610,value:0},
                {latitude:31.093232,longitude:121.243610,value:0},

                {latitude:30.936382,longitude:120.843610,value:0},
                {latitude:30.936382,longitude:120.943610,value:0},
                {latitude:30.936382,longitude:121.043610,value:0},
                {latitude:30.936382,longitude:121.143610,value:0},
                {latitude:30.936382,longitude:121.243610,value:0},
            ],plugin);

            let matrix2 = this.createMatrix([30.836931,120.730107,31.344308,121.448660],[
                {latitude:31.263594,longitude:120.843610,value:0},
                {latitude:31.263594,longitude:120.943610,value:0},
                {latitude:31.263594,longitude:121.043610,value:0},
                {latitude:31.263594,longitude:121.143610,value:50},
                {latitude:31.263594,longitude:121.243610,value:0},

                {latitude:31.093232,longitude:120.843610,value:0},
                {latitude:31.093232,longitude:120.943610,value:0},
                {latitude:31.093232,longitude:121.043610,value:0},
                {latitude:31.093232,longitude:121.143610,value:0},
                {latitude:31.093232,longitude:121.243610,value:0},

                {latitude:30.936382,longitude:120.843610,value:0},
                {latitude:30.936382,longitude:120.943610,value:0},
                {latitude:30.936382,longitude:121.043610,value:0},
                {latitude:30.936382,longitude:121.143610,value:0},
                {latitude:30.936382,longitude:121.243610,value:0},
            ],plugin);

            let matrix3 = this.createMatrix([30.836931,120.730107,31.344308,121.448660],[
                {latitude:31.263594,longitude:120.843610,value:0},
                {latitude:31.263594,longitude:120.943610,value:0},
                {latitude:31.263594,longitude:121.043610,value:0},
                {latitude:31.263594,longitude:121.143610,value:0},
                {latitude:31.263594,longitude:121.243610,value:0},

                {latitude:31.093232,longitude:120.843610,value:0},
                {latitude:31.093232,longitude:120.943610,value:0},
                {latitude:31.093232,longitude:121.043610,value:0},
                {latitude:31.093232,longitude:121.143610,value:0},
                {latitude:31.093232,longitude:121.243610,value:0},

                {latitude:30.936382,longitude:120.843610,value:0},
                {latitude:30.936382,longitude:120.943610,value:0},
                {latitude:30.936382,longitude:121.043610,value:40},
                {latitude:30.936382,longitude:121.143610,value:0},
                {latitude:30.936382,longitude:121.243610,value:0},
            ],plugin);
            //设置网格数据高度夸张系数
            plugin.scale = 250;
            //合并三个时期的数据矩阵，形成一个可用于表达时间线的数据矩阵
            let mergeMatrix = plugin.mergeGridMatrix([matrix1,matrix2,matrix3]);
            plugin.drawGridTimeline(mergeMatrix,true);
            viewer.isDirty();
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
                this.AddHeatmapGrid();
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
