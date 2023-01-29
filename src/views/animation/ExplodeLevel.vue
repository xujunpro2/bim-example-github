<template>
	    <div class="rootDiv">
        <div class="messageDiv">
            点击下面开关体验楼层分解/恢复<br/>
            <el-switch v-model="explode" @change="onChange"></el-switch>
        </div>
        <div id="containerDiv"></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
        //按照层高数据分解模型
        explodeLevels(){
            let viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('ExplodePlugin');
            if(plugin == null)
            {
                plugin = new BIMI.ExplodePlugin();
                viewer.addPlugin(plugin);
            }
            //分解各个楼层,参数1为modelId,参数2为levelName，参数3为分解偏移距离
            plugin.explodeLevel(1,'02 - Floor',new BIMI.THREE.Vector3(0,20,0))
            plugin.explodeLevel(1,'03 - Floor',new BIMI.THREE.Vector3(0,30,0))
            plugin.explodeLevel(1,'Roof',new BIMI.THREE.Vector3(0,40,0))
            plugin.explodeLevel(1,'Parapet',new BIMI.THREE.Vector3(0,50,0))
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
	name: "ExplodeLevel",
	data() {
		return {
            explode:false
        };
	},
	methods: {
        onChange(curState){
            if(curState === true)
            {
                this.explodeLevels();
            }
            else
            {
                this.reset();
            }
        },
        //按照层高数据分解模型
        explodeLevels(){
            let viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('ExplodePlugin');
            if(plugin == null)
            {
                plugin = new BIMI.ExplodePlugin();
                viewer.addPlugin(plugin);
            }
            //分解各个楼层,参数1为modelId,参数2为levelName，参数3为分解偏移距离
            plugin.explodeLevel(1,'02 - Floor',new BIMI.THREE.Vector3(0,20,0))
            plugin.explodeLevel(1,'03 - Floor',new BIMI.THREE.Vector3(0,30,0))
            plugin.explodeLevel(1,'Roof',new BIMI.THREE.Vector3(0,40,0))
            plugin.explodeLevel(1,'Parapet',new BIMI.THREE.Vector3(0,50,0))
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
            viewer.load('datas/Arch Link Model/bim.bin');
			viewer.on("loaded", model => {
                viewer.zFighting(1,137425);//处理构件的z-fighting问题
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
