<template>
    <div class="rootDiv">
        <div id="containerDiv"></div>
        <div id="btnDiv">
          
        </div>
       
    </div>
	
</template>

<script>


export default {
	name: "SweepLight",
	data() {
		return {
            
        };
	},
	methods: {
        addMap(){
            var viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('MapPlugin')
            if(plugin == null)
            {
                plugin = new BIMI.MapPlugin();
                viewer.addPlugin(plugin);
            }
            //使用mapbox dark地图
            plugin.useMapBox('','mapbox/dark-v9');
            //设置默认视角
            plugin.setDefaultCamera({latitude:30.70615, longitude:111.30034,height:3000, pitch:-60,yaw:0});
        },
        loadObj(){
            var viewer = BIMI.ViewerHelper.getViewer();
            //原始obj是一个白模，设置一个初始颜色
            viewer.setReplaceStyle({
                byModel:[ 
                    { 
                        modelId:'city', 
                        style:{color:'#00ffff',opacity:0.5} //如果这里不设置color,那么就针对构件的原始材质做透明化处理，该功能只对byModel起效 <br/>
                    }
                ], 
            })
            viewer.load('datas/obj/city-gry.obj',{
                modelId:'city',
                latitude:30.72615,
                longitude:111.30034,
                offset:new BIMI.THREE.Vector3(0,0,0),
                scale:new BIMI.THREE.Vector3(10,10,10),
                rotate:new BIMI.THREE.Vector3(0,0,0)
            }).then(event=>{
                setTimeout(() => {
                    this.SweepLightPluginTest()
                }, 1000);
            })
        },
        SweepLightPluginTest(){
            var viewer = BIMI.ViewerHelper.getViewer();
            //光环的扩散中心点就是模型的position，将模型的位置经纬度转世界坐标
            let lightCenter = BIMI.MapTools.latlngToVector(30.72615,111.30034)

            let plugin = viewer.getPlugin('SweepLightPlugin');
            if(!plugin)
            {
                plugin = new BIMI.SweepLightPlugin();
                viewer.addPlugin(plugin);
            }
            plugin.setOptions({
                circleWidth:200,
                innerCircleWidth:0,
                maxInnerCircleWidth:1500,
                center:lightCenter,
                speed:4,
                opacity:0.8,
                color:['#00ffff','#ffffff'],//模型用渐变色
                //color:'#00ffff',//模型用单色
                tcolor:'#ff9800'
            });
            plugin.addModel('city');
            plugin.start();

            // setTimeout(() => {
            //     plugin.pause();
            //     setTimeout(() => {
            //         plugin.start();
            //     }, 2000);
            // }, 5000);
        },
    },
	mounted() {
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom,{alwaysRefresh:true});
            //地图模式
            this.addMap();
            //添加obj模型
            this.loadObj();
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
