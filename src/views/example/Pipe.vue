<template>
	<div id="containerDiv" class="bimDiv">
        <!-- <div class="btnDiv" >
            <button @click="onTest">测试1</button>
        </div> -->
    </div>
</template>

<script>

export default {
    name: "Pipe",

	data() {
		return {
            
        };
	},

	methods: {
        setOrbit(){
            let viewer = BIMI.ViewerHelper.getViewer();
            // console.info(viewer.getOrbitState());
            let state = {
                position: {x: 551.4011721873928, y: 66.49635089954822, z: 707.3497565106819},
                quaternion: {x: -0.08049624849527354, y: 0.121133213732568, z: 0.00985605236413328, w: 0.9893179250073258},
                target: {x: 462.3807357875821, y: 17.279999732970698, z: 459.9149538649583},
                zoom: 1
            }
            viewer.setOrbitState(state);

        },
		initView() {
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);

            viewer.load('datas/大型管廊项目/bim.bin');
            let toolbar = new BIMI.Toolbar(viewer);
            let sun = new BIMI.SunPlugin({position:new BIMI.THREE.Vector3(-250, 300, -50)});
            viewer.addPlugin(sun);
            viewer.on(BIMI.ViewerEvent.LOADED,event=>{
                this.setOrbit();
            })
            viewer.on(BIMI.ViewerEvent.PICK,event=>{
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
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
   background-color: #f8f8f8;
}

.loading_bg {
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background: rgba(255, 255, 255, 0.9);
	z-index: 99;
}
.loading {
	position: absolute;
	/* background-color: #ffff; */
	left: 50%;
	top: 50%;
	margin: -100px 0 0 -140px; /*50%为自身尺寸的一半*/
	width: 280px;
	color: #606266;
	z-index: 100;
}

    .btnDiv{
        position: absolute;
        right: 10px;
        bottom: 10px;
        z-index: 1000;
    }

</style>
