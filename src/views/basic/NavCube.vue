<template>
    <div class="rootDiv">
        <div class="messageDiv">
            SDK UI套件自带。方向指示器默认在场景的右上角。可以点击方块上的各个面，同步场景
        </div>
        <div id="containerDiv" ></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
//方向指示器是NavCubePlugin插件，默认是启用的，可以通过new BimViewer({navCube:false})禁用
 var viewer = new BIMI.BimViewer(dom,{navCube:false});
</code></pre>
    
    </div>
	
</template>

<script>


export default {
	name: "ModeStyle",
	data() {
		return {
        };
	},
	methods: {
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom,{navCube:true});
            viewer.load('datas/冷站/bim.bin');
           
			viewer.on("loaded", model => {
               
            });
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
        width: 150px;
        height: 100px;
        font-size: 12px;
        padding: 5px;
        overflow:hidden;
    }
</style>
