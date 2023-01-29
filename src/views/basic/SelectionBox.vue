<template>
    <div class="rootDiv">
        <div class="messageDiv">
            SDK UI套件自带。点击下面按钮,然后在场景中使用鼠标左键框选构件<br/>如果构件中心位置落在框内就会被选中<br/>
            <el-button icon="el-icon-crop" circle @click="onClick"></el-button>
        </div>
        <div id="containerDiv" ></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
//在需要框选的时候，创建SelectionBoxPlugin
var selectionBoxPlugin = new SelectionBoxPlugin();
viewer.addPlugin(selectionBoxPlugin);
//调用start()之后，其他和鼠标相关的控件都暂停，在框选结束后自动恢复
selectionBoxPlugin.start(); 

//通过注册boxSelected事件监听，可以获得框选返回的构件数据
viewer.on(BIMI.ViewerEvent.BOX_SELECTED,function(data){
    console.info(data)
})
</code></pre>
    
    </div>
	
</template>

<script>

export default {
	name: "SelectionBox",
	data() {
		return {
        };
	},
	methods: {
        onClick()
        {
            var viewer = BIMI.ViewerHelper.getViewer();
            var plugin = viewer.getPlugin('SelectionBoxPlugin');
            if(!plugin)
            {
                plugin = new BIMI.SelectionBoxPlugin();
                viewer.addPlugin(plugin);
            }
          
            plugin.start(); 
        }
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            viewer.load('datas/冷站/bim.bin');
           
			viewer.on("loaded", model => {
             
            });
            viewer.on(BIMI.ViewerEvent.BOX_SELECTED,data=>{
                console.info(data)
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
