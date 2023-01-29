<template>
	    <div class="rootDiv">
        <div class="messageDiv">
            点击下面开关体验机柜爆炸/恢复<br/>
            <el-switch v-model="explode" @change="onChange"></el-switch>
        </div>
        <div id="containerDiv"></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
        //分解模型
        explodeModel(){
            let viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('ExplodePlugin');
            if(plugin == null)
            {
                plugin = new BIMI.ExplodePlugin();
                viewer.addPlugin(plugin);
            }
            //爆炸modelId为1的整个模型对象
            plugin.explodeModel(1);
            //也可以指定某些构件爆炸
            //plugin.explodeProducts(1,[290321,290320,290319,290318,290313,290314,290315,290316,290317]);//9个单板爆炸
            //启动分解动画
            plugin.start();
        },
        //恢复
        reset(){
            let viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('ExplodePlugin');
            if(plugin)
            {
                plugin.reset();
            }
        }
</code></pre>
    
    </div>
</template>

<script>


export default {
	name: "ExplodeModel",
	data() {
		return {
            explode:false
        };
	},
	methods: {
        onChange(curState){
            if(curState === true)
            {
                this.explodeModel();
            }
            else
            {
                this.reset();
            }
        },
        //分解模型
        explodeModel(){
            let viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('ExplodePlugin');
            if(plugin == null)
            {
                plugin = new BIMI.ExplodePlugin();
                viewer.addPlugin(plugin);
            }
            //爆炸modelId为1的整个模型对象
            plugin.explodeModel(1);
            //也可以指定某些构件爆炸
            //plugin.explodeProducts(1,[290321,290320,290319,290318,290313,290314,290315,290316,290317]);//9个单板爆炸
            //启动分解动画
            plugin.start();
        },
        //恢复
        reset(){
            let viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('ExplodePlugin');
            if(plugin)
            {
                plugin.reset();
            }
        }
    },
	mounted() {
         this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            let viewer = new BIMI.BimViewer(dom,{loading:true});
            viewer.load('datas/机柜/bim.bin');
			viewer.on("loaded", model => {
                
            });
            Prism.highlightAll();
        })
    },
	beforeDestroy() {
        let viewer = BIMI.ViewerHelper.getViewer();
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
        height: 50px;
        font-size: 12px;
        padding: 5px;
        overflow: auto;
        z-index: 100;
    }
</style>
