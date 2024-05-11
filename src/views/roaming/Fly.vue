
<template>
    <div class="rootDiv">
         <div class="messageDiv">
            鼠标按住移动控制方向、WSAD键移动、E升高、Q降低,ESC键退出漫游
            <br/>移动速度:<el-slider style="width:150px;margin-left:15px"  :min="1" :max="10" v-model="speed" @input="onChange"></el-slider>
        </div>
        <div id="containerDiv" ></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
        start(){
            var viewer = BIMI.ViewerHelper.getViewer();
            var plugin = viewer.getPlugin('FirstPersonPlugin');
            if(plugin == null)
            {
                plugin  = new BIMI.FirstPersonPlugin();
                viewer.addPlugin(plugin);
            }
            plugin.start();
        },
        //改变移动速度
        onChange(){
            var viewer = BIMI.ViewerHelper.getViewer();
            if(viewer)
            {
                var plugin = viewer.getPlugin('FirstPersonPlugin');
                if(plugin)
                {
                    var control = plugin.firstPersonControl;
                    if(control)
                    {
                        control.movementSpeed = this.speed;
                    }
                }
            }
            
        },
</code></pre>
    
    </div>
	
</template>

<script>


export default {
    name: "Fly",

	data() {
		return {
            speed:1,

        };
	},

	methods: {
        onChange(){
            var viewer = BIMI.ViewerHelper.getViewer();
            if(viewer)
            {
                var plugin = viewer.getPlugin('FlyPlugin');
                if(plugin)
                {
                    var control = plugin.control;
                    if(control)
                    {
                        control.movementSpeed = this.speed;
                    }
                }
            }
            
        },
        start(){
            var viewer = BIMI.ViewerHelper.getViewer();
            var plugin = viewer.getPlugin('FlyPlugin');
            if(plugin == null)
            {
                plugin  = new BIMI.FlyPlugin();
                viewer.addPlugin(plugin);
            }
            plugin.start();
        },
		
		//关闭页面，释放当前所有的bim模型
		destroyView() {
            let viewer = BIMI.ViewerHelper.getViewer();
            if(viewer)
            {
                viewer.dispose();

            }
		},
	},
	mounted() {
        var dom = document.getElementById('containerDiv');
        var viewer = new BIMI.BimViewer(dom,{debug:false});
        viewer.load('datas/rac_basic_sample_project/bim.bin');
        viewer.on("loaded", model => {
            let startCamera = {
                position: {x: 8.161841956545432, y: 11.974899522342245, z: 25.170655378224986},
                quaternion: {x: -0.1375746771486283, y: -0.02272461763993469, z: -0.0031571914385477083, w: 0.990225647063734},
                target: {x: 8.390136609619185, y: 6.184924659093118, z: 9.9242138145289},
                zoom: 1
            }
            viewer.setOrbitState(startCamera)
            setTimeout(this.start,1000);
		});
        document.oncontextmenu = function() {
			return false;
        };
        this.$nextTick(()=>{
            Prism.highlightAll();
        })
    },
    beforeDestroy() {
		this.destroyView();
    },
};
</script>


<style scoped>
.bimDiv {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
   background-color: #f8f8f8;
}

.loading_bg {
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background: rgba(255, 255, 255, 0.9);
	z-index: 99;
}
.loading {
	position: absolute;
	/* background-color: #ffff; */
	left: 50%;
	top: 50%;
	margin: -100px 0 0 -140px; /*50%为自身尺寸的一半*/
	width: 280px;
	color: #606266;
	z-index: 100;
}
   .messageDiv{
        position: absolute;
        top: 5px;
        left: 10px;
        background:rgba(0, 0, 255, 0.3);
        border-radius: 5px;
        color: #fff;
        width: 250px;
        height: 100px;
        font-size: 12px;
        padding: 5px;
        overflow: auto;
        z-index: 100;
    }

</style>
