<template>
	<div id="containerDiv" class="bimDiv">
       
    </div>
</template>

<script>

export default {
    name: "KZJ",

	data() {
		return {
           
        };
	},

	methods: {
		initView() {
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom,{streamRender:false});
 
			viewer.load( 'datas/KZJ整体模型/bim.bin');
            let sun = new BIMI.SunPlugin({position:new BIMI.THREE.Vector3(-250, 100, -50)});
            viewer.addPlugin(sun);
		
			viewer.on("loaded", model => {
                 this.excuteZFighting();
                 this.setProductStyle();
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
