<template>
    <div class="rootDiv">
        <div class="messageDiv">
            <el-button size="mini" @click="setEdge">设置边框</el-button>
            <p/>
            <el-button size="mini" @click="clearEdge">清除边框</el-button>
        </div>
        <div id="containerDiv" ></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
        //设置边框
        setEdge(){
            var viewer = BIMI.ViewerHelper.getViewer();
            if(viewer)
            {
                let plugin =viewer.getPlugin('EdgePlugin');
                if(plugin == null)
                {
                    plugin = new BIMI.EdgePlugin();
                    viewer.addPlugin(plugin);
                }
                //设置边框可以重复调用，每次都会自动先清除边框并根据场景重新计算并绘制构件边框，该过程是异步的
                plugin.setEdge();
            }   
        },
        //清除边框
        clearEdge(){
            var viewer = BIMI.ViewerHelper.getViewer();
            if(viewer)
            {
                let plugin =viewer.getPlugin('EdgePlugin');
                if(plugin == null)
                {
                    plugin = new BIMI.EdgePlugin();
                    viewer.addPlugin(plugin);
                }
                plugin.clearEdge();
            }   
        }

        //可通过EdgePlguin的enabled属性设置插件是否可用
        //可指定哪些类型的构件需要绘制边框
        /**
        * 指定以下类型的构件才绘制边框,该函数必须在setEdge()之前调用才起效
        * @param {Array} categoryArray 一个可包含Revit或IFC类型定义的数组
        */
        setCategory(categoryArray)

        //可指定边框线的颜色
        /**
        * 设置边框线颜色,该函数必须在setEdge()之前调用才起效
        * @param {string} color 颜色，默认值是'#000000'
        */
        setLineColor(color)
  
</code></pre>
    
    </div>
	
</template>

<script>


export default {
	name: "ModeStyle",
	data() {
		return {
           curModel:'normal',
        };
	},
	methods: {
        //设置边框
        setEdge(){
            var viewer = BIMI.ViewerHelper.getViewer();
            if(viewer)
            {
                let plugin =viewer.getPlugin('EdgePlugin');
                if(plugin == null)
                {
                    plugin = new BIMI.EdgePlugin();
                    viewer.addPlugin(plugin);
                }
                //设置边框可以重复调用，每次都会自动先清除边框并根据场景重新计算并绘制构件边框，该过程是异步的
                plugin.setEdge();
            }   
        },
        //清除边框
        clearEdge(){
            var viewer = BIMI.ViewerHelper.getViewer();
            if(viewer)
            {
                let plugin =viewer.getPlugin('EdgePlugin');
                if(plugin == null)
                {
                    plugin = new BIMI.EdgePlugin();
                    viewer.addPlugin(plugin);
                }
                plugin.clearEdge();
            }   
        }
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            viewer.load('datas/rac_basic_sample_project/bim.bin');
           
			viewer.on(BIMI.ViewerEvent.LOADED, model => {
                console.info(model)
            });
            viewer.on(BIMI.ViewerEvent.PICK,eventData=>{
                
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
        width: 210px;
        height: 140px;
        font-size: 12px;
        padding: 5px;
        overflow:hidden;
        z-index: 100;
    }
</style>
