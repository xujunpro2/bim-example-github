<template>
    <div class="rootDiv">
        <div class="messageDiv">
            让相机飞行到指定的位置和旋转视角
            <br/>
            <button @click="setOrbitState1">去位置一</button>
            <button @click="setOrbitState2">去位置二</button>
            <button @click="setOrbitState3">去位置三</button>
        </div>
        <div id="containerDiv" ></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
            setOrbitState1(){
                // 先移动相机确定好目标位置和视角后，通过以下两行代码可以获得该位置和视角的数据，也可以通过工具栏上的相机状态按钮获得数据
                // let state = viewer.getOrbitState();
                // console.info(state);
                let state = {
                    position:{x: -45.054031306123164, y: 19.582117197919157, z: 38.61436964100547},
                    quaternion: {x: -0.06457825345949601, y: -0.5579432732627382, z: -0.04360984744989141, w: 0.8262125236320127},
                    target: {x: -12.249748752078268, y: 6.127399942779535, z: 8.27886206335957},
                    zoom: 1
                }
                var viewer = BIMI.ViewerHelper.getViewer();
                viewer.setOrbitState(state,true,1500,()=>{
                    console.info('位置一到达');
                })
            },
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
        setOrbitState1(){
            // 先移动相机确定好目标位置和视角后，通过以下两行代码可以获得该位置和视角的数据,也可以通过工具栏上的相机状态按钮获得数据
            // let state = viewer.getOrbitState();
            // console.info(state);
            let state = {
                position:{x: -45.054031306123164, y: 19.582117197919157, z: 38.61436964100547},
                quaternion: {x: -0.06457825345949601, y: -0.5579432732627382, z: -0.04360984744989141, w: 0.8262125236320127},
                target: {x: -12.249748752078268, y: 6.127399942779535, z: 8.27886206335957},
                zoom: 1
            }
            var viewer = BIMI.ViewerHelper.getViewer();
            viewer.setOrbitState(state,true,1500,()=>{
                console.info('位置一到达');
            })
        },

        setOrbitState2(){
            let state = {
                position: {x: -27.317136866045267, y: 24.18210881982428, z: -46.87462418760584},
                quaternion: {x: -0.03685089608091613, y: -0.9623401691173219, z: -0.16927960188927596, w: 0.20949421649650216},
                target: {x: -7.277678887093019, y: 11.764539888960432, z: -30.113289030207575},
                zoom: 1
            }
            var viewer = BIMI.ViewerHelper.getViewer();
            viewer.setOrbitState(state,true,1500,()=>{
                console.info('位置二到达');
            })
        },

        setOrbitState3(){
            let state = {
                position: {x: 41.061445819062456, y: 19.069645343120214, z: -25.0456135475305},
                quaternion: {x: 0.08537522593011962, y: -0.7609472866045284, z: -0.10231157142530903, w: -0.6349823935819464},
                target: {x: 21.04499015378671, y: 10.567105130179932, z: -14.13221687229258},
                zoom: 1
            }
            var viewer = BIMI.ViewerHelper.getViewer();
            viewer.setOrbitState(state,true,1500,()=>{
                console.info('位置三到达');
            })
        },
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            viewer.load('datas/rac_basic_sample_project/bim.bin');
           
			viewer.on(BIMI.ViewerEvent.HEAD_LOADED,model=>{
               
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
