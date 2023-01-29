<template>
    <div class="rootDiv">
        <div class="messageDiv">
            点击下面开关体验隐藏/显示构件<br/>
            <el-switch v-model="hidden" @change="onChange"></el-switch>
        </div>
        <div id="containerDiv"></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
//构件是否可见，bool类型
var visible = !hidden;
//模型ID=1，在viewer的loaded回调参数中可以获取
var modelId = 1;
//墙壁构件ID=430 玻璃门构件ID=104494
var wallProductId = 430;
var doorProductId = 104494
//设置这两个构件可见性
viewer.setProductsVisible(modelId,[wallProductId,doorProductId],visible);
//刷新场景
viewer.isDirty();</code></pre>
    
    </div>
	
</template>

<script>


export default {
	name: "Visible",
	data() {
		return {
           hidden:false,
        };
	},
	methods: {
        
        onChange(hidden)
        {
           
            var viewer = BIMI.ViewerHelper.getViewer();

            //构件是否可见，bool类型
            var visible = !hidden;
            //模型ID=1，在viewer的loaded回调参数中可以获取
            var modelId = 1;
            //墙壁构件ID=430 玻璃门构件ID=104494
            var wallProductId = 430;
            var doorProductId = 104494
            var machineId = 42673;
            //设置这两个构件可见性
            viewer.setProductsVisible(modelId,[wallProductId,doorProductId],visible);
            //刷新场景
            viewer.isDirty();
        }
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            viewer.load('datas/冷站/bim.bin');
           
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
        height: 50px;
        font-size: 12px;
        padding: 5px;
        overflow: auto;
        z-index: 100;
    }
</style>
