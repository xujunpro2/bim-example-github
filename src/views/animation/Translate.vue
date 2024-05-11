<template>
    <div class="rootDiv">
        <div class="messageDiv">
            点击按钮,体验构件移动。
            <br/>
            <el-button size="mini" @click="onXYZ">墙壁X方向2秒移动4米</el-button>
        </div>
        <div id="containerDiv" ></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
        onXYZ(){
            var viewer = BIMI.ViewerHelper.getViewer();
            var plugin = viewer.getPlugin('TranslatePlugin');
            if(!plugin)
            {
                plugin = new BIMI.TranslatePlugin();
                viewer.addPlugin(plugin);
            }
            /**
             * 指定XYZ方向上各自移动的距离
             * @param {object} option 参数对象
             * @example
             * {
             *      modelId:模型ID
             *      productIds:构件ID数组
             *      x: X方向位移 默认0 
             *      y: Y方向位移 默认0 
             *      z: Z方向位移 默认0 
             *      time: 动画执行时长 毫秒,默认0，表示无动画过程 
             * }
             */
            plugin.translateXYZ({
                modelId:1,
                productIds:[430],
                x:4,y:0,z:0,
                time:2000
            })
        },
</code></pre>
    
    </div>
	
</template>

<script>


export default {
	name: "Translate",
	data() {
		return {

        };
	},
	methods: {
        onXYZ(){
            var viewer = BIMI.ViewerHelper.getViewer();
            var plugin = viewer.getPlugin('TranslatePlugin');
            if(!plugin)
            {
                plugin = new BIMI.TranslatePlugin();
                viewer.addPlugin(plugin);
            }
            /**
             * 指定XYZ方向上各自移动的距离
             * @param {object} option 参数对象
             * @example
             * {
             *      modelId:模型ID
             *      productIds:构件ID数组
             *      x: X方向位移 默认0 
             *      y: Y方向位移 默认0 
             *      z: Z方向位移 默认0 
             *      time: 动画执行时长 毫秒,默认0，表示无动画过程 
             * }
             */
            plugin.translateXYZ({
                modelId:1,
                productIds:[430],
                x:4,y:0,z:0,
                time:2000
            })
        },
      
       
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom,{grid:true});
            viewer.load('datas/冷站/bim.bin');
           
			viewer.on("loaded", model => {
            });
            viewer.on('pick',event=>{
                console.info(event)
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
        width: 260px;
        height: 100px;
        font-size: 12px;
        padding: 5px;
        overflow:hidden;
        z-index: 100;
    }
</style>
