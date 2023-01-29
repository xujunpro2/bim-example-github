<template>
	<div id="containerDiv" class="bimDiv">
    </div>
</template>

<script>

export default {
    name: "Machine",

	data() {
		return {
            
        };
	},

	methods: {
		initView() {
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            viewer.setBoxShadow();//DIV增加一个阴影效果，只是好看一些，没啥用
            let toolbar = new BIMI.Toolbar(viewer);
            viewer.enableDamping(true,0.08);
			viewer.load('datas/Machine/bim.bin');
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


</style>
