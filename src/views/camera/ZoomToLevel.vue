<template>
    <div class="rootDiv">
        <div class="messageDiv">
            点击按钮，只显示并聚焦某个层高
            <br/>
            <button @click="onlySeeAndZoomLevel('Foundation')">Foundation</button>
            <button @click="onlySeeAndZoomLevel('Ceiling')">Ceiling</button>
            <button @click="onlySeeAndZoomLevel('Level 1')">Level 1</button>
            <button @click="onlySeeAndZoomLevel('Level 1 Living Rm.')">Level 1 Living Rm.</button>
            <button @click="onlySeeAndZoomLevel('Level 2')">Level 2</button>
            <button @click="onlySeeAndZoomLevel('Roof Line')">Roof Line</button>
            <button @click="showAllProducts()">整个模型可见</button>
        </div>
        <div id="containerDiv"></div>

         <pre class="line-numbers"><code class="language-js">#代码示范
           viewer.zoomToLevels(1,[levelName],true,null,{x:45,y:0})</code></pre>
    </div>
	
</template>

<script>


export default {
	name: "ZoomToLevel",
	data() {
		return {
        };
	},
	methods: {
        onlySeeAndZoomLevel(levelName){
            console.info(levelName)
            var viewer = BIMI.ViewerHelper.getViewer();
            //modelId我这里就直接写1了，这不是好代码习惯
            viewer.onlySeeProductsByLevels(1,[levelName]);
            viewer.isDirty();
            /**
             * 聚焦层高
             * @param {Number} modelId 模型ID
             * @param {Array} levelNames 层高名称数组
             * @param {Boolean} fly 是否飞行动画,默认true
             * @param {Function} callback 飞行动画结束后的回调函数，默认null
             * @param {Object} customAngle 自定义固化视角，包括俯仰角和倾斜角，用x和y来表示,例如：{x:45,y:45}，该对象表示相机视角固定为 俯仰角(绕X轴)45°+倾斜角(绕Y轴)45°，默认是null
             */
            //viewer.zoomToLevels(1,[levelName])
            //固定针对box，绕X轴45°视角
            viewer.zoomToLevels(1,[levelName],true,null,{x:45,y:0})
        },
        showAllProducts(){
            var viewer = BIMI.ViewerHelper.getViewer();
            //modelId我这里就直接写1了，这不是好代码习惯
            viewer.setAllProductsVisible(1,true);
            viewer.isDirty();
            viewer.zoomToModel(1)
        }
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            viewer.load('datas/rac_basic_sample_project/bim.bin');

            

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
        z-index: 100;
        position: absolute;
        top: 5px;
        left: 10px;
        background:rgba(0, 0, 255, 0.3);
        border-radius: 5px;
        color: #fff;
        width: 250px;
        height: 150px;
        font-size: 12px;
        padding: 5px;
        overflow: auto;
    }
</style>
