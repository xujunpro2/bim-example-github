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
            var viewer = new BIMI.BimViewer(dom);

            viewer.load('datas/金鹏控股总部大楼/bim.bin');
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
