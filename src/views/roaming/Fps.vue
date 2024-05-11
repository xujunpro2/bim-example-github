<template>
    <div class="rootDiv">
        <div class="messageDiv">
            <el-button size="mini" @click="onStart">开始(ESC可退出)</el-button>
        </div>
        <div id="containerDiv"></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
        onStart(){
            var viewer = BIMI.ViewerHelper.getViewer();
            let plugin =viewer.getPlugin('FpsPlugin');
            if (!plugin) {
                //设置键盘移动速度值，默认是30
                plugin = new BIMI.FpsPlugin(30);
                viewer.addPlugin(plugin);
            }
            //设置无视碰撞检测的构件类型,设置门可以穿透
            plugin.addCollisionExceptionTypes([-2000023]);
            //设置漫游过程中关注的构件，在靠近这些构件并且视锥以内，会触发插件的'attentionChange'回调,该API必须在start()之前调用才会起效
            plugin.setAttentionProducts([
                {modelId:1,productId:954641,distance:2}//关注起居室阳台上的小人构件
            ])

            plugin.start();
            //启动重力感应
            plugin.enabledGravity(true);
            //启动碰撞检测
            plugin.enableCollision(true);

           
            //通过attentionChange回调事件，可以在靠近看到或者离开关注构件的时候接收到消息
            plugin.on('attentionChange', result=>{
                if(result.length > 0)
                {
                    new BIMI.Tip(viewer,'靠近并看见这个小人构件了');
                }
                else
                {
                    new BIMI.Tip(viewer,'离开或看不到这个小人构件了');
                }
            });
        }
</code></pre>
    
    </div>
	
</template>

<script>


export default {
	name: "Fps",
	data() {
		return {
           
        };
	},
	methods: {
        setStartCamera(){
            let viewer = BIMI.ViewerHelper.getViewer();
            let startCamera = {
                position: {x: 8.161841956545432, y: 7.974899522342245, z: 25.170655378224986},
                quaternion: {x: -0.1375746771486283, y: -0.02272461763993469, z: -0.0031571914385477083, w: 0.990225647063734},
                target: {x: 8.390136609619185, y: 6.184924659093118, z: 9.9242138145289},
                zoom: 1
            }
            viewer.setOrbitState(startCamera);
            viewer.isDirty();
        },

        onStart(){
            var viewer = BIMI.ViewerHelper.getViewer();
            let plugin =viewer.getPlugin('FpsPlugin');
            if (!plugin) {
                //设置键盘移动速度值，默认是30
                plugin = new BIMI.FpsPlugin(30);
                viewer.addPlugin(plugin);
            }
            //设置无视碰撞检测的构件类型,设置门可以穿透
            plugin.addCollisionExceptionTypes([-2000023]);
            //设置漫游过程中关注的构件，在靠近这些构件并且视锥以内，会触发插件的'attentionChange'回调,该API必须在start()之前调用才会起效
            plugin.setAttentionProducts([
                {modelId:1,productId:10954641,distance:2}//关注起居室阳台上的小人构件,小人构件的ID是10954641，当距离小人2米的时候触发事件
            ])

            plugin.start();
            //启动重力感应
            plugin.enabledGravity(true);
            //启动碰撞检测
            plugin.enableCollision(true);

           
            //通过attentionChange回调事件，可以在靠近看到或者离开关注构件的时候接收到消息
            plugin.on('attentionChange', result=>{
                if(result.length > 0)
                {
                    new BIMI.Tip(viewer,'靠近并看见这个小人构件了');
                }
                else
                {
                    new BIMI.Tip(viewer,'离开或看不到这个小人构件了');
                }
            });
        }
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            viewer.load('datas/rac_basic_sample_project/bim.bin');
            viewer.on(BIMI.ViewerEvent.LOADED,model=>{
                this.setStartCamera();
            })
            viewer.on(BIMI.ViewerEvent.PICK,pickEvent=>{
                console.info(pickEvent)
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
        border-radius: 5px;
        color: #fff;
        width: 140px;
        height: 40px;
        font-size: 12px;
        padding: 5px;
        overflow:hidden;
        z-index: 100;
    }
</style>
