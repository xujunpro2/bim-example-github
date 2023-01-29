<template>
    <div class="rootDiv">
        <div class="messageDiv">
            点击按钮，体验墙壁构件的透明和恢复功能。
            <br/>
            <el-button @click="onTransparent">透明墙壁</el-button>
            <el-button @click="onReset">恢复墙壁</el-button>
        </div>
        <div id="containerDiv" ></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
        onTransparent(){
            var viewer = BIMI.ViewerHelper.getViewer();
            var transparentPlugin = viewer.getPlugin('TweenTransparentPlugin');
            if(!transparentPlugin)
            {
                transparentPlugin = new BIMI.TweenTransparentPlugin()
                viewer.addPlugin(transparentPlugin);
            }

            //模型ID=1，在viewer的loaded回调参数中可以获取
            var modelId = 1;
            //墙壁构件ID=430 
            var wallProductId = 430;
            var mathineId = 42673;
              //透明墙壁
            transparentPlugin.start({
                time:2000,
                startOpacity:1,
                endOpacity:0,
                productData:[{modelId:modelId,productIds:[wallProductId,mathineId]}]
            })
        },
        onReset(){
            var viewer = BIMI.ViewerHelper.getViewer();

            var transparentPlugin = viewer.getPlugin('TweenTransparentPlugin');
            if(transparentPlugin)
            {
                transparentPlugin.reset();
            }
        }  
</code></pre>
    
    </div>
	
</template>

<script>


export default {
	name: "TweenTransparent",
	data() {
		return {
        };
	},
	methods: {
        onTransparent(){
            var viewer = BIMI.ViewerHelper.getViewer();
            var transparentPlugin = viewer.getPlugin('TweenTransparentPlugin');
            if(!transparentPlugin)
            {
                transparentPlugin = new BIMI.TweenTransparentPlugin()
                viewer.addPlugin(transparentPlugin);
            }

            //模型ID=1，在viewer的loaded回调参数中可以获取
            var modelId = 1;
            //墙壁构件ID=430 
            var wallProductId = 430;
            var mathineId = 42673;
              //透明墙壁
            transparentPlugin.start({
                time:2000,
                startOpacity:1,
                endOpacity:0,
                productData:[{modelId:modelId,productIds:[wallProductId,mathineId]}]
            })
        },
        onReset(){
            var viewer = BIMI.ViewerHelper.getViewer();

            var transparentPlugin = viewer.getPlugin('TweenTransparentPlugin');
            if(transparentPlugin)
            {
                transparentPlugin.reset();
            }
        }  
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom,{debug:true});
            viewer.load('datas/冷站/bim.bin');
           
			viewer.on("pick", event => {
                console.info(event.data)
            });
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
        width: 200px;
        height: 120px;
        font-size: 12px;
        padding: 5px;
        overflow:hidden;
        z-index: 100;
    }
</style>
