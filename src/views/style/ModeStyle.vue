<template>
    <div class="rootDiv">
        <div class="messageDiv">
            点击按钮,切换模型不同样式。
            <br/>
            <el-button size="mini" @click="onTransparent">透明模式</el-button>
            <p/>
            <el-button size="mini" @click="onReset">原始模式</el-button>
        </div>
        <div id="containerDiv" ></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
        onTransparent(){
            //边线模式需要手工释放
            if(this.curModel === 'edge')
            {
                this.clearEdge();
            }
            var viewer = BIMI.ViewerHelper.getViewer();
            viewer.setTransparentModel(1);
            viewer.isDirty();
            this.curModel = 'transparent'
        },
        onEdge(){
            //边线模式需要手工释放
            if(this.curModel === 'edge')
            {
                this.clearEdge();
            }
            var viewer = BIMI.ViewerHelper.getViewer();
            viewer.setEdgeMode(1);
            viewer.isDirty();
            this.curModel = 'edge'
        },
 
        onReset(){
            //边线模式需要手工释放
            if(this.curModel === 'edge')
            {
                this.clearEdge();
            }
            var viewer = BIMI.ViewerHelper.getViewer();
            viewer.setNormalModel(1);
            viewer.isDirty();
            this.curModel = 'normal'
        },  

        clearEdge(){
            var viewer = BIMI.ViewerHelper.getViewer();
            viewer.disposeEdgeMode(1);
        }

</code></pre>
    
    </div>
	
</template>

<script>


export default {
	name: "ModeStyle",
	data() {
		return {
           curModel:'normal',
        };
	},
	methods: {
        onTransparent(){
            //边线模式需要手工释放
            if(this.curModel === 'edge')
            {
                this.clearEdge();
            }
            var viewer = BIMI.ViewerHelper.getViewer();
            viewer.setTransparentModel(1);
            viewer.isDirty();
            this.curModel = 'transparent'
        },
        onEdge(){
            //边线模式需要手工释放
            if(this.curModel === 'edge')
            {
                this.clearEdge();
            }
            var viewer = BIMI.ViewerHelper.getViewer();
            viewer.setEdgeMode(1);
            viewer.isDirty();
            this.curModel = 'edge'
        },
 
        onReset(){
            //边线模式需要手工释放
            if(this.curModel === 'edge')
            {
                this.clearEdge();
            }
            var viewer = BIMI.ViewerHelper.getViewer();
            viewer.setNormalModel(1);
            viewer.isDirty();
            this.curModel = 'normal'
        },  

        clearEdge(){
            var viewer = BIMI.ViewerHelper.getViewer();
            viewer.disposeEdgeMode(1);
        }
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            viewer.load('datas/冷站/bim.bin');
           
			viewer.on("loaded", model => {
    
            });
            viewer.on("pick",eventData=>{
                console.info(eventData)
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
        position: absolute;
        top: 5px;
        left: 10px;
        background:rgba(0, 0, 255, 0.3);
        border-radius: 5px;
        color: #fff;
        width: 210px;
        height: 140px;
        font-size: 12px;
        padding: 5px;
        overflow:hidden;
        z-index: 100;
    }
</style>
