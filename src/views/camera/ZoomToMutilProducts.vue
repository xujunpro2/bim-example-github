<template>
    <div class="rootDiv">
        <div class="messageDiv">
            点击按钮，聚焦三个风车
            <br/>
            <button @click="zoomMutilProducts">聚焦多个构件</button>
        </div>
        <div id="containerDiv"></div>

         <pre class="line-numbers"><code class="language-js">#代码示范
            /**
             * 聚焦多个构件的bbox
             * @param {*} modelId 模型ID
             * @param {Array} productIds 构件ID数组
             * @param {*} fly 是否飞行动画,默认true
             * @param {Object} customAngle 自定义固化视角，包括俯仰角和倾斜角，用x和y来表示,例如：{x:45,y:45}，该对象表示相机视角固定为 俯仰角(绕X轴)45°+倾斜角(绕Y轴)45°，默认是null
             */
            viewer.zoomToProducts(1,[10418977,10418985,10554644],true)</code></pre>
    </div>
	
</template>

<script>


export default {
	name: "ZoomToMutilProducts",
	data() {
		return {
        };
	},
	methods: {
        zoomMutilProducts(){
            var viewer = BIMI.ViewerHelper.getViewer();
            /**
             * 聚焦多个构件的bbox
             * @param {*} modelId 模型ID
             * @param {Array} productIds 构件ID数组
             * @param {*} fly 是否飞行动画,默认true
             * @param {Object} customAngle 自定义固化视角，包括俯仰角和倾斜角，用x和y来表示,例如：{x:45,y:45}，该对象表示相机视角固定为 俯仰角(绕X轴)45°+倾斜角(绕Y轴)45°，默认是null
             */
            viewer.zoomToProducts(1,[10418977,10418985,10554644],true)
        },
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
        height: 50px;
        font-size: 12px;
        padding: 5px;
        overflow: auto;
    }
</style>
