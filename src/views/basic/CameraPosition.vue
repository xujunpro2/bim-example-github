<template>
    <div class="rootDiv">
        <div class="messageDiv">
            虽然BimViewer会根据加载的模型自动计算相机位置，但很多时候计算出来的位置并不一定是开发者想要的位置，所以开发者也可以通过该功能针对特定的模型设置满意的相机位置
            <br/>
            每个模型在加载完成头文件之后并且在加载构件数据之前会触发事件BIMI.ViewerEvent.HEAD_LOADED，这个事件回调中可以修改相机默认位置
        </div>
        <div id="containerDiv" ></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
            // 调整到喜欢的视角后，通过这个函数可以获得当前视角数据
            // let data = viewer.getOrbitState();
            // console.info(data);

            viewer.on(BIMI.ViewerEvent.HEAD_LOADED,model=>{
                let startCamera = {
                    position: {x: 8.161841956545432, y: 11.974899522342245, z: 25.170655378224986},
                    quaternion: {x: -0.1375746771486283, y: -0.02272461763993469, z: -0.0031571914385477083, w: 0.990225647063734},
                    target: {x: 8.390136609619185, y: 6.184924659093118, z: 9.9242138145289},
                    zoom: 1
                }
                viewer.setOrbitState(startCamera);
                viewer.isDirty();
            })
</code></pre>
    
    </div>
	
</template>

<script>


export default {
	name: "Visible",
	data() {
		return {
          
        };
	},
	methods: {
        onChange()
        {
            let viewer = BIMI.ViewerHelper.getViewer();
            // 调整到喜欢的视角后，通过这个函数可以获得当前视角数据
            // let data = viewer.getOrbitState();
            // console.info(data);

            //setOrbitState设置视角数据
            let state = {
                    position: {x: 0.4194466629681155, y: 7.952028669142746, z: -19.468074386890358},
                    quaternion: {x: -0.005780236218022065, y: 0.98357237286405, z: 0.17755770332132784, w: 0.032019341016062845},
                    target: {x: -1.1096738901504175, y: 1.0091187896226979, z: -7.406810723554603},
                    zoom: 1
            };
            let fly =true;//视角切换过程是否有飞行动画
            let time = 1000;//飞行动画时长
            viewer.setOrbitState(state,fly,time);
        }
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            viewer.load('datas/rac_basic_sample_project/bim.bin');
           
			viewer.on(BIMI.ViewerEvent.HEAD_LOADED,model=>{
                let startCamera = {
                    position: {x: 8.161841956545432, y: 11.974899522342245, z: 25.170655378224986},
                    quaternion: {x: -0.1375746771486283, y: -0.02272461763993469, z: -0.0031571914385477083, w: 0.990225647063734},
                    target: {x: 8.390136609619185, y: 6.184924659093118, z: 9.9242138145289},
                    zoom: 1
                }
                viewer.setOrbitState(startCamera);
                viewer.isDirty();
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
        height: 200px;
        font-size: 12px;
        padding: 5px;
        overflow:hidden;
        z-index: 100;
    }
</style>
