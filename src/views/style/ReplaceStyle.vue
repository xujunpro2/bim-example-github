<template>
    <div class="rootDiv">
        <div class="messageDiv">
            替换构件原始材质，在load之前调用该函数，可以实现在渐进性加载过程中使用指定的替换材质效果。
        </div>
        <div id="containerDiv" ></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
        setPlaceStyleBeforLoad(){
            let viewer = BIMI.ViewerHelper.getViewer();
            viewer.setReplaceStyle({
                byModel:[
                    {
                        modelId:1,
                        style:{color:'#ffffff',opacity:0.5}
                    }
                ],
                byType:[
                    //场地和主体
                    {
                        types:['IfcBuildingElementProxy'],
                        style:{color:'#0b4161',opacity:0.2}
                    },
                    //楼顶、墙壁、窗户、门都蓝色透明
                    {
                        types:['IfcRoof','IfcBeam','IfcColumn','IfcWallStandardCase','IfcWindow','IfcSlab','IfcDoor'],
                        style:{color:'#0f628c', opacity:0.5}
                    },
                    //管道、弯头 黄色透明
                    {
                        types:['IfcFlowSegment','IfcFlowFitting'],
                        style:{color:'rgb(255, 173, 33)', opacity:0.2}
                    },
                ],
                byProduct:[
                    //厂区围栏黄色透明
                    {
                        modelId:1,
                        productIds:[1165376],
                        style:{color:'rgb(255, 173, 33)',opacity:0.2}
                    },
                    //换气管道
                    {
                        modelId:1,
                        productIds:[42579,42599,42532,42554,42415,42460,42440,42507,42485,
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
                            21467,21447,21487,21400,21420,21287,21375,21262,21039,20953,21124,21064,21237,21149],
                        style:{color:'#341132',opacity:1}
                    },
                    //生产罐
                    {
                        modelId:1,
                        productIds:[921443,921468,921393,921418,921368,921342,899778,
                            899804,877691,877716,877641,877666,877591,877616,877566,877541,877490,877516],
                        style:{color:'#f28129',opacity:1.0}
                    }
                ]
            })
        }       
       
        //vue mounted
        mounted() {
        
            this.$nextTick(()=>{
                var dom = document.getElementById('containerDiv');
                var viewer = new BIMI.BimViewer(dom);
                //在load之前调用，可以实现在load过程中替换样式
                this.setPlaceStyleBeforLoad();
                viewer.load('datas/KZJ整体模型/bim.bin');
            
                
                Prism.highlightAll();
            })
            
        },
</code></pre>
    
    </div>
	
</template>

<script>


export default {
	name: "ReplaceStyle",
	data() {
		return {
           
        };
	},
	methods: {
        setPlaceStyleBeforLoad(){
            let viewer = BIMI.ViewerHelper.getViewer();
            viewer.setReplaceStyle({
                byModel:[
                    {
                        modelId:1,
                        //style:{opacity:0.5} //如果这里不设置color,只有透明度,那么就针对构件的原始材质做透明化处理，该功能只对byModel起效
                        style:{color:'#ffffff',opacity:0.5}
                    }
                ],
                byType:[
                    //场地和主体
                    {
                        types:['IfcBuildingElementProxy'],
                        style:{color:'#0b4161',opacity:0.2}
                    },
                    //楼顶、墙壁、窗户、门都蓝色透明
                    {
                        types:['IfcRoof','IfcBeam','IfcColumn','IfcWallStandardCase','IfcWindow','IfcSlab','IfcDoor'],
                        style:{color:'#0f628c', opacity:0.5}
                    },
                    //管道、弯头 黄色透明
                    {
                        types:['IfcFlowSegment','IfcFlowFitting'],
                        style:{color:'rgb(255, 173, 33)', opacity:0.2}
                    },
                ],
                byProduct:[
                    //厂区围栏黄色透明
                    {
                        modelId:1,
                        productIds:[1165376],
                        style:{color:'rgb(255, 173, 33)',opacity:0.2}
                    },
                    //换气管道
                    {
                        modelId:1,
                        productIds:[42579,42599,42532,42554,42415,42460,42440,42507,42485,
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
                            21467,21447,21487,21400,21420,21287,21375,21262,21039,20953,21124,21064,21237,21149],
                        style:{color:'#341132',opacity:1}
                    },
                    //生产罐
                    {
                        modelId:1,
                        productIds:[921443,921468,921393,921418,921368,921342,899778,
                            899804,877691,877716,877641,877666,877591,877616,877566,877541,877490,877516],
                        style:{color:'#f28129',opacity:1.0}
                    }
                ]
            })
        }
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            //在load之前调用，可以实现在load过程中替换样式
            this.setPlaceStyleBeforLoad();
            viewer.load('datas/KZJ整体模型/bim.bin');
           
			
            Prism.highlightAll();
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
	    height: 500px;
	    overflow: hidden;
	}
    .messageDiv{
        position: absolute;
        top: 5px;
        left: 10px;
        background:rgba(0, 0, 255, 0.3);
        border-radius: 5px;
        color: #fff;
        width: 210px;
        height: 140px;
        font-size: 12px;
        padding: 5px;
        overflow:hidden;
        z-index: 100;
    }
</style>
