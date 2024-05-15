<template>
    <div class="rootDiv">
        <div class="messageDiv">
            场景截图和工具栏上的截屏按钮不一样，截屏按钮只对三维场景进行截图，场景截图对三维场景、批注、数据标签截图
            <el-button size="mini" @click="testScreenPrint">场景截图</el-button>
        </div>
        <div id="containerDiv"></div>

         <pre class="line-numbers"><code class="language-js">#代码示范
        testScreenPrint(){
            let viewer = BIMI.ViewerHelper.getViewer();
            viewer.printScreen(image=>{
                //使用浏览器下载图片看看效果
                viewer.downloadImage(image);
            })
        },
</code></pre>
    </div>
	
</template>

<script>


export default {
	name: "ScreenPrint",
	data() {
		return {
            annotation:null
        };
	},
	methods: {
        testScreenPrint(){
            let viewer = BIMI.ViewerHelper.getViewer();
            viewer.printScreen(image=>{
                //使用浏览器下载图片看看效果
                viewer.downloadImage(image);
            })
        },

    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            let toolbar = new BIMI.Toolbar(viewer);
            viewer.load('datas/rac_basic_sample_project/bim.bin');


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
        z-index: 100;
        position: absolute;
        top: 5px;
        left: 80px;
        background:rgba(0, 0, 255, 0.3);
        border-radius: 5px;
        color: #fff;
        width: 350px;
        height: 80px;
        font-size: 12px;
        padding: 5px;
        overflow: auto;
    }
</style>
