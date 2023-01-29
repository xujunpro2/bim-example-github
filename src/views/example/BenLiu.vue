<template>
	<div id="containerDiv">
       
    </div>
</template>

<script>

export default {
    name: "BenLiu",

	data() {
		return {
            
        };
	},

	methods: {
		initView() {
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom,{grid:false,fps:false,debug:true,loading:true,enableInstancedMesh:true});
            let sun = new BIMI.SunPlugin({position:new BIMI.THREE.Vector3(-250, 400, -150)});
            viewer.addPlugin(sun);
             
            viewer.load('datas/奔牛枢纽模型/bim.bin');
            let toolbar = new BIMI.Toolbar(viewer);
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
