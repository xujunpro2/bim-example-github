<template>
	<div id="containerDiv" class="bimDiv">
       
    </div>
</template>

<script>

export default {
    name: "Heatmap",

	data() {
		return {
           
        };
	},

	methods: {
        //添加热力网格插件
        addHeatmap(){
            let viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('HeatmapPlugin');
            if(!plugin)
            {
                plugin = new BIMI.HeatmapPlugin();
                viewer.addPlugin(plugin);
            }
            //设置热力图边界，一般建议边界比样本点的坐标范围更大一些，这样可以确保热力图渲染的更加完整
            plugin.setEnvelope(-100,-100,100,100);

            //设置样本点，产生50个随机样本点用于测试
            let simples = [];
            let count = 50;
            while (count--) 
            {
                var val = Math.floor(Math.random() * 50);
                var point = {
                    x: Math.floor(Math.random() * 100) - 50,//设置样本点坐标在-50到50之间，
                    y: Math.floor(Math.random() * 100) - 50,
                    value: val
                };
                simples.push(point);
            }
            //设置样本点
            plugin.setSimplePoints(simples);

            //热力图抬起的最大高度,默认值50
            plugin.maxHeight = 20.0;
             /**
             * 生成热力图
             * @param {Number} maxEdge 热力图图片的最大边长,默认值300。maxEdge和边界无关
             * @param {Number} radius 热点半径，默认值40
             * @param {Object} gradient  颜色过渡参数 ，默认值:{ 0.25: "rgb(0,0,255)", 0.55: "rgb(0,255,0)", 0.85: "yellow", 1.0: "rgb(255,0,0)" }
             */
            plugin.create(300,20,[0,10,0]);
 
        },

		initView() {
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom,{streamRender:false,grid:false});
 
			viewer.load( 'datas/KZJ整体模型/bim.bin');

			viewer.on("loaded", model => {
                this.excuteZFighting();
                this.setProductStyle();
                this.addHeatmap();
            });
            viewer.on('pick',event=>{
                // console.info(event);
                var modelId = event.data[0].modelId;
                var productId = event.data[0].productId;
                var product = viewer.getProduct(modelId,productId);
                console.info(product)
            })
		},
		//关闭页面，释放当前所有的bim模型
		destroyView() {
            let viewer = BIMI.ViewerHelper.getViewer();
            if(viewer)
            {
                viewer.dispose();
            }
           
		},
		
        //处理zFighting的几个构件
        excuteZFighting(){
            let viewer = BIMI.ViewerHelper.getViewer();
            viewer.zFighting(1,727481);
            viewer.zFighting(1,844346,true);
        },
        //设置构件样式
        setProductStyle(){
            let viewer = BIMI.ViewerHelper.getViewer();
            //设置类别样式，放前面

            //场地
            var types = ['IfcBuildingElementProxy']
            viewer.overrideProductsColorByType(types,'#0b4161',0.2)
            //楼顶、墙壁、窗户、门都蓝色透明
            viewer.overrideProductsColorByType([
                'IfcRoof',//楼顶
                'IfcBeam',//梁
                'IfcColumn',//立柱
                'IfcWallStandardCase',//墙
                'IfcWindow',//窗
                'IfcSlab',//楼板
                'IfcDoor'//门
            ],'#0f628c',0.5)//2290e0 0.2
            //管道、弯头 黄色透明
            viewer.overrideProductsColorByType(['IfcFlowSegment','IfcFlowFitting'],'rgb(255, 173, 33)',0.2)
            // //单个构件个性化设置
            viewer.setProductsVisible(1,[727481],false)//整个地面不可见
            
            viewer.overrideProductsColor(1,[1165376],'rgb(255, 173, 33)',0.2)//厂区围栏黄色透明
            //换气管道
            var changeFlows = [
            42579,42599,42532,42554,42415,42460,42440,42507,42485,
            42788,42808,42741,42763,42624,42669,42649,42716,42485,
            43656,43676,43631,43721,43701,43493,43317,43606,43518,
            43863,43883,43838,43928,43908,43766,43746,43813,43791,42694,
            44070,727499,44045,44115,44095,43973,43953,44020,43998,
            43227,43247,43202,43292,43272,43130,43110,43177,43155,
            43020,43040,42995,43085,43065,42923,42903,42970,42948,
            41253,41273,41228,42828,41427,41156,41136,41203,41181,
            41111,42181,41064,41086,40725,40926,40750,41039,40951,
            42370,42390,42323,42345,42206,42251,42231,42298,42276,
            15578,15607,20928,11071,11091,10958,11046,10933,10706,10617,10794,10732,10908,10820,
            21467,21447,21487,21400,21420,21287,21375,21262,21039,20953,21124,21064,21237,21149]
            viewer.overrideProductsColor(1,changeFlows,'#341132',1)
            //生产罐
             var guans = [921443,921468,921393,921418,921368,921342,899778,
             899804,877691,877716,877641,877666,877591,877616,877566,877541,877490,877516]
            viewer.overrideProductsColor(1,guans,'#f28129',1,true)
            

            
            viewer.isDirty();
        }
	},
	mounted() {
        this.$nextTick(()=>{
            this.initView();
        });
    },
    beforeDestroy() {
		this.destroyView();
    },
};
</script>


<style scoped>
.bimDiv {
   background-color: #070f22;
}
.bimDiv:after {
    pointer-events: none;
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    box-shadow:0 0 200px 50px #000 inset;
}
</style>
