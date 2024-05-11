<template>
	<div id="containerDiv">
       
    </div>
</template>

<script>

export default {
    name: "ZouMeng",

	data() {
		return {
            
        };
	},

	methods: {
		initView() {
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            viewer.load('datas/一期地下室机电/bim.bin');
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


</style>
