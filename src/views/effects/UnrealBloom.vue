<template>
    <div class="rootDiv">
        
        <div id="containerDiv" ></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
        addBloom(){
            let viewer =  BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('UnrealBloomPlugin')
            if(plugin == null)
            {
                //构造参数可调整辉光强度和半径，默认值是{strength:1.0,radius:0.4}
                plugin = new BIMI.UnrealBloomPlugin({
                    strength:1.0,
                    radius:0.4
                });
                viewer.addPlugin(plugin);
            }
            //左边灯泡设置暖黄光
            plugin.addBlooms('bloom1',1,[3505],'#ffba7a');
            //右边灯泡设置淡蓝光
            plugin.addBlooms('bloom2',1,[4026],'#7ae7ff');
            //开启辉光特效
            plugin.start();
            //关闭辉光特效可调用plugin.stop();
        }
</code></pre>
    
    </div>
	
</template>

<script>



export default {
	name: "UnrealBloom",
	data() {
		return {
        };
	},
	methods: {
        addBloom(){
            let viewer =  BIMI.ViewerHelper.getViewer();
            //辉光效果开启时，设置场景偏暗会好看一些
            //viewer.setSceneBackground('#333333');
            //辉光效果开启时，场景光照弱一点会好看一些
            // viewer._mainLight.intensity = 0.1;
            // viewer._assistLight.intensity = 0.1;
            //添加辉光插件
            let plugin = viewer.getPlugin('UnrealBloomPlugin')
            if(plugin == null)
            {
                //构造参数可调整辉光强度和半径，默认值是{strength:1.0,radius:0.4}
                plugin = new BIMI.UnrealBloomPlugin({
                    strength:1.0,
                    radius:0.4,
                    keepMaterial:false //如果构件材质有贴图，那么辉光亮度是偏暗的，可以通过放弃贴图增加亮度keepMaterial = true
                });
                viewer.addPlugin(plugin);
            }
            
            //左边灯泡设置暖黄光
            plugin.addBlooms('bloom1',1,[103505],'#ffba7a');
            //右边灯泡设置淡蓝光
            plugin.addBlooms('bloom2',1,[104026],'#7ae7ff');
            //开启辉光特效
            plugin.start();
            //关闭辉光特效可调用plugin.stop();
        }
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            let viewer = new BIMI.BimViewer(dom,{grid:false,debug:true,loading:true,antiAliasing:'smaa'});
            viewer.load('datas/双臂路灯/bim.bin');
            viewer.on(BIMI.ViewerEvent.LOADED,event=>{
                this.addBloom();
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
        background:-webkit-gradient(linear, 0% 0%, 0% 100%,from(#333), to(#969696));
	}

</style>
