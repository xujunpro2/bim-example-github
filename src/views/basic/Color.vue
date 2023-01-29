<template>
    <div class="rootDiv">
        <div class="messageDiv">
            选择一个颜色设置墙壁<br/>
            <el-color-picker v-model="color" @change="onChange"></el-color-picker>
            <p/>
            <el-button @click="onReset">恢复墙壁原始颜色</el-button>
        </div>
        <div id="containerDiv"></div>
            <pre class="line-numbers"><code class="language-js">#代码示范 设置构件颜色
        onChange(curColor){ 
            var viewer = BIMI.ViewerHelper.getViewer();
            //创建一个兰伯特材质，如果有多个构件都设置这个颜色，那么可以复用这个颜色对象，可节省内存
            var material = viewer.createLambertMaterial(curColor,1,true);
            //模型ID=1，在viewer的loaded回调参数中可以获取
            var modelId = 1;
            //墙壁构件ID=430 
            var wallProductId = 430;
            //设置构件颜色
            viewer.setProductsMaterial(modelId,[wallProductId],material);
            //刷新场景
            viewer.isDirty();
        }
        onReset(){
            var viewer = BIMI.ViewerHelper.getViewer();
            viewer.resetProductsMaterial(1,[430]);
            //刷新场景
            viewer.isDirty();
        }</code></pre>
    
    </div>
	
</template>

<script>


export default {
	name: "Color",
	data() {
		return {
           color:"#757575",
        };
	},
	methods: {
        onChange(curColor){
            var viewer = BIMI.ViewerHelper.getViewer();
            //创建一个兰伯特材质，如果有多个构件都设置这个颜色，那么可以复用这个颜色对象，可节省内存
            var material = viewer.createLambertMaterial(curColor,1,true);
            //模型ID=1，在viewer的loaded回调参数中可以获取
            var modelId = 1;
            //墙壁构件ID=430 
            var wallProductId = 430;
            //设置构件颜色
            viewer.setProductsMaterial(modelId,[wallProductId],material);
            //刷新场景
            viewer.isDirty();
        },
        onReset(){
            var viewer = BIMI.ViewerHelper.getViewer();
            viewer.resetProductsMaterial(1,[430]);
            //刷新场景
            viewer.isDirty();
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
        width: 200px;
        height: 120px;
        font-size: 12px;
        padding: 5px;
        overflow: auto;
        z-index: 100;
    }
</style>
