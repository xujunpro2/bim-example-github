<template>
    <div class="rootDiv">
        <div class="messageDiv">
            点击按钮,让构件闪烁。
            <br/>
            <el-button size="mini" @click="onStart">开始闪烁</el-button>
            <p/>
            <el-button size="mini" @click="onStop">停止闪烁</el-button>
        </div>
        <div id="containerDiv"></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
        onStart(){
            var viewer = BIMI.ViewerHelper.getViewer();

            //判断是否已经添加了FlashPlugin，如果没有就创建并添加
            var flashPlugin = viewer.getPlugin('FlashPlugin');
            if(!flashPlugin)
            {
                flashPlugin = new BIMI.FlashPlugin({
                    time:1000,//闪烁间隔时间，毫秒单位，默认1000毫秒
                    color:'#ff0000',//闪烁颜色，默认红色
                    opacity:0.5,//闪烁颜色透明度，默认0.5
                    depthTest:true//深度测试，默认false
                });
                viewer.addPlugin(flashPlugin);
            }
            //设置两台离心机闪烁
            var flashData = [{modelId:1,productIds:[42673,42582]}]
            flashPlugin.appendProducts(flashData)
            //启动闪烁
            flashPlugin.start();
        },
        onStop(){
            var viewer = BIMI.ViewerHelper.getViewer();

            //判断是否已经添加了FlashPlugin，如果没有就创建并添加
            var flashPlugin = viewer.getPlugin('FlashPlugin');
            if(flashPlugin)
            {
               flashPlugin.stop();
            }
        },

//FlashPlugin的pause()可以暂停闪烁,后续可以通过start()再次恢复，如果确定不再恢复闪烁，可调用stop()
</code></pre>
    
    </div>
	
</template>

<script>


export default {
	name: "Flash",
	data() {
		return {
        };
	},
	methods: {
        onStart(){
            var viewer = BIMI.ViewerHelper.getViewer();

            //判断是否已经添加了FlashPlugin，如果没有就创建并添加
            var flashPlugin = viewer.getPlugin('FlashPlugin');
            if(!flashPlugin)
            {
                flashPlugin = new BIMI.FlashPlugin({
                    time:1000,//闪烁间隔时间，毫秒单位，默认1000毫秒
                    color:'#ff0000',//闪烁颜色，默认红色
                    opacity:0.5,//闪烁颜色透明度，默认0.5
                    depthTest:true//深度测试，默认false
                });
                viewer.addPlugin(flashPlugin);
            }
            //设置两台离心机闪烁
            var flashData = [{modelId:1,productIds:[42673,42582]}]
            flashPlugin.appendProducts(flashData)
            //启动闪烁
            flashPlugin.start();
        },
        onStop(){
            var viewer = BIMI.ViewerHelper.getViewer();

            //判断是否已经添加了FlashPlugin，如果没有就创建并添加
            var flashPlugin = viewer.getPlugin('FlashPlugin');
            if(flashPlugin)
            {
               flashPlugin.stop();
            }
        },
       
       
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom,{debug:true});
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
        width: 200px;
        height: 100px;
        font-size: 12px;
        padding: 5px;
        overflow:hidden;
        z-index: 100;
    }
</style>
