<template>
	<div id="containerDiv">
       
    </div>
</template>

<script>

export default {
    name: "JingPeng",

	data() {
		return {
            
        };
	},

	methods: {
		initView() {
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom,{grid:false,debug:false,loading:true,enableInstancedMesh:true});

            viewer.load('datas/金鹏控股总部大楼/bim.bin');
            let toolbar = new BIMI.Toolbar(viewer);
            viewer.on('pick',event=>{
                // console.info(event);
                // var modelId = event.data[0].modelId;
                // var productId = event.data[0].productId;
                // var product = viewer.getProduct(modelId,productId);
                // console.info(product)
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


</style>
