<template>
    <div class="rootDiv">
        <div class="messageDiv">
            先使用底部工具栏上的批注按钮进行模型批注，然后保存，之后可以通过‘还原批注’和‘退出批注状态’按钮测试<br/>
            <el-button size="mini" @click="resetAnnotation">还原批注</el-button>
            <el-button size="mini" @click="stopAnnotation">退出批注状态</el-button>
        </div>
        <div id="containerDiv"></div>

         <pre class="line-numbers"><code class="language-js">#代码示范
</code></pre>
    </div>
	
</template>

<script>


export default {
	name: "ZoomTo",
	data() {
		return {
            annotation:null
        };
	},
	methods: {
        //还原标记
        resetAnnotation(){
            if(this.annotation)
            {
                let viewer = BIMI.ViewerHelper.getViewer();
                let plugin =viewer.getPlugin('AnnotationPlugin');
                if(plugin)
                {
                    plugin.deserialize(this.annotation);
                }
            }
        },
        //停止标记状态
        stopAnnotation(){
            let viewer = BIMI.ViewerHelper.getViewer();
            let plugin =viewer.getPlugin('AnnotationPlugin');
            if(plugin)
            {
                plugin.stop();
            }
        },
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            let toolbar = new BIMI.Toolbar(viewer);
            viewer.load('datas/rac_basic_sample_project/bim.bin');
            //通过ViewerEvent.ANNOTATION_SAVE接受批注保存数据
            viewer.on(BIMI.ViewerEvent.ANNOTATION_SAVE,data=>{
                this.annotation = data;
                console.info(data);
            })
            

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
