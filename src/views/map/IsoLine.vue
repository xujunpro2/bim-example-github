<template>
    <div class="rootDiv">
        <div id="containerDiv"></div>
    </div>
	
</template>

<script>


export default {
	name: "IsoLine",
	data() {
		return {
           
        };
	},
	methods: {
        //这是为了展示等值线效果的伪代码！
        addIsoLine(){
            var viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('MapPlugin');
            let options = {
                id: 'isoline_demo1',
                color:{
                    property:'name',
                    values:{
                        '<5': {color:'#ffffff',opacity:0.5},
                        '5-30': {color:'#00c0ff',opacity:0.5},
                        '30-50':{color:'#0056ff',opacity:0.5},
                        '50-70':{color:'#ff884d',opacity:0.5},
                        '70-90':{color:'#ff4a00',opacity:0.5},
                        '>=90':{color:'#ff0000',opacity:0.5},
                    }
                },
                clamp:false,
                offsetHeight:-1
            }
            BIMI.CommonTools.fetchJson('datas/isoline/isoline.json').then(geojson=>{
                geojson.features.forEach(feature=>{
                    //等值线geojson中每个feature是一个polygon，属性中包含了这个polygon的追踪值，该值属于一个图例区段
                    let value = feature.properties.value;
                    if(value < 5)
                    {
                        feature.properties.name = '<5';
                    }
                    if(value >=5 && value < 30)
                    {
                        feature.properties.name = '5-30';
                    }
                    if(value >=30 && value < 50)
                    {
                        feature.properties.name = '30-50';
                    }
                    if(value >=50 && value < 70)
                    {
                        feature.properties.name = '50-70';
                    }
                    if(value >=70 && value < 90)
                    {
                        feature.properties.name = '70-90';
                    }
                    if(value >= 90)
                    {
                        feature.properties.name = '>=90';
                    }
                })
                plugin.loadGeoJsonObject(geojson,options);

            });

           
        },
        //这是等值线功能真实的代码，但因为gitee上不能发布基于java开发的xmap服务，所以这段代码写下，供参考，用户可以在本地部署一下xmap服务(xmap程序在gitee上已提供)
        addIsoLine_real_code()
        {
            var viewer = BIMI.ViewerHelper.getViewer();
            //读取边界裁剪geojson,BIMI.CommonTools.fetchJson是一个简单的fetch get json的封装
            BIMI.CommonTools.fetchJson('datas/isoline/clipBounds.json').then(geojson=>{
                //等值线服务的请求参数
                let param = 
                {
                    //样本点
                    samples:[
                        {latitude:31.263594,longitude:120.843610,value:80},
                        {latitude:31.263594,longitude:120.943610,value:20},
                        {latitude:31.263594,longitude:121.043610,value:60},
                        {latitude:31.263594,longitude:121.143610,value:10},
                        {latitude:31.263594,longitude:121.243610,value:100},

                        {latitude:31.093232,longitude:120.843610,value:0},
                        {latitude:31.093232,longitude:120.943610,value:20},
                        {latitude:31.093232,longitude:121.043610,value:50},
                        {latitude:31.093232,longitude:121.143610,value:30},
                        {latitude:31.093232,longitude:121.243610,value:0},

                        {latitude:30.936382,longitude:120.843610,value:60},
                        {latitude:30.936382,longitude:120.943610,value:20},
                        {latitude:30.936382,longitude:121.043610,value:80},
                        {latitude:30.936382,longitude:121.143610,value:10},
                        {latitude:30.936382,longitude:121.243610,value:80},
                    ],
                    //矩形边界
                    bounds:[30.836931,120.730107,31.344308,121.448660], 
                    //图例数值区段
                    legend:[5,30,50,70,90],
                    //图例填充样式(legend.length + 1)
                    fillStyle:[ 
                        {color:'#ffffff',opacity:0.5},
                        {color:'#00c0ff',opacity:0.5},
                        {color:'#0056ff',opacity:0.5},
                        {color:'#ff884d',opacity:0.5},
                        {color:'#ff4a00',opacity:0.5},
                        {color:'#ff0000',opacity:0.5}
                    ],
                    //裁剪边界的geojson数据对象
                    clip:geojson
                }
                
                let plugin = viewer.getPlugin('MapPlugin');
                /**
                 * 加载等值线
                 * @param {String/Number} id 等值线对象，可以通过id对等值线对象进行显示/隐藏/销毁等操作
                 * @param {String} url xmap程序提供的等值线服务url，xmap是bimi引擎提供的针对GIS高级功能的后台服务程序。
                 * @param {Object} param 等值线参数对象。格式例如:
                 * 
                 * let param = 
                        {
                            //样本点
                            samples:[
                                {latitude:31.263594,longitude:120.843610,value:80},
                                {latitude:31.263594,longitude:120.943610,value:20},
                                {latitude:31.263594,longitude:121.043610,value:60},
                                {latitude:31.263594,longitude:121.143610,value:10},
                                {latitude:31.263594,longitude:121.243610,value:100},

                                {latitude:31.093232,longitude:120.843610,value:0},
                                {latitude:31.093232,longitude:120.943610,value:20},
                                {latitude:31.093232,longitude:121.043610,value:50},
                                {latitude:31.093232,longitude:121.143610,value:30},
                                {latitude:31.093232,longitude:121.243610,value:0},

                                {latitude:30.936382,longitude:120.843610,value:60},
                                {latitude:30.936382,longitude:120.943610,value:20},
                                {latitude:30.936382,longitude:121.043610,value:80},
                                {latitude:30.936382,longitude:121.143610,value:10},
                                {latitude:30.936382,longitude:121.243610,value:80},
                            ],
                            //范围，由左上角和右下角两点坐标组成
                            bounds:[30.836931,120.730107,31.344308,121.448660], 
                            //取值段落
                            legend:[5,30,50,70,90],
                            //每个取值段落的填充样式定义，注意，要包含小于最小的，和大于最大的两端定义
                            fillStyle:[ 
                                {color:'#ffffff',opacity:0.5}, //<5
                                {color:'#00c0ff',opacity:0.5}, //5-30
                                {color:'#0056ff',opacity:0.5}, //30-50
                                {color:'#ff884d',opacity:0.5}, //50-70
                                {color:'#ff4a00',opacity:0.5}, //70-90
                                {color:'#ff0000',opacity:0.5}  //>90
                            ],
                            //裁剪边界，是个geojson的polygon对象，通常为行政边界的geojson数据
                            clip:geojson
                        }

                * @param {Numher} offsetHeight 等值线渲染的mesh对象离地面高度,注意负数表示高出地面，正数表示低于地面，默认值-1，表示离地1米的高度
                * @returns Promise
                */
                plugin.loadIsoline('isoline_demo1','http://127.0.0.1:8080/xmap/isoline',param,-1).then(group=>{
                    console.info(group)
                })
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
                plugin = new BIMI.MapPlugin({terrain:false});
                viewer.addPlugin(plugin);
            }
            //使用mapbox dark样式的地图
            plugin.useMapBox('','mapbox/dark-v9');
            //设置默认视角
            plugin.setDefaultCamera({latitude:31.220868, longitude:121.176679,height:177686, pitch:-90,yaw:0});
            viewer.isDirty();

            setTimeout(() => {
                this.addIsoLine();
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
