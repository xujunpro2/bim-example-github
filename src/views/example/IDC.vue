<template>
	<div id="containerDiv">
       
    </div>
</template>

<script>

export default {
    name: "IDC",

	data() {
		return {
            
        };
	},

	methods: {
		initView() {
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom,{enableInstancedMesh:false});
            viewer.load('datas/二层整合无桥架/bim.bin');
            let toolbar = new BIMI.Toolbar(viewer);
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


</style>
