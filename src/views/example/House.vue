<template>
	<div id="containerDiv" class="bimDiv">
       
    </div>
</template>

<script>

export default {
    name: "House",

	data() {
		return {
           
        };
	},

	methods: {
		initView() {
            var dom = document.getElementById('containerDiv');
            var viewer = new BimViewer(dom,{debug:false,enableInstancedMesh:true});
            viewer.load('datas/rac_basic_sample_project/bim.bin');
            viewerHelper.setViewer(viewer);
			viewer.on("error", error => {
				if (error.message === "bim file not found") {
					this.$message.error(
						"无法访问模型，请检查BIM服务器!"
					);
				} else {
					console.error(error.message);
				}
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
            let viewer = viewerHelper.getViewer();
            if(viewer)
            {
                viewer.dispose();
                //清除ViewerHelper
                viewerHelper.setViewer(null);
            }
           
		},
       
	},
	mounted() {
        this.$nextTick(()=>{
            this.initView();
        });
        
        document.oncontextmenu = function() {
			return false;
        };
    },
    beforeDestroy() {
		this.destroyView();
		document.oncontextmenu = function() {
			return true;
        };
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


</style>
