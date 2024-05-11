<template>
    <div class="rootDiv">

        <div id="containerDiv" >
            
        </div>
       
        <pre class="line-numbers"><code class="language-js">#代码示范
            这个功能是一个展示全景图通过鼠标左键双击动态添加标签的示例。
</code></pre>
    
    </div>
	
</template>

<script>


export default {
	name: "PanoramicLabel",
	data() {
		return {
           
        };
	},
	methods: {
        //创建全景
        createPanoramic(){
            let dom = document.getElementById('containerDiv');
            let viewer = new BIMI.BimViewer(dom,{id:'main'});
            //启用鼠标双击事件
            viewer.setScenePanoramic('datas/skybox/1235.jpg',true);
            viewer.on(BIMI.ViewerEvent.PANORAMIC_DOUBLE_CLICK,vec3=>{
                 //使用HtmlLabelPlugin做测试，可以换成任何你想要的标签
                var plugin = viewer.getPlugin('HtmlLabelPlugin');
                if(!plugin)
                {
                    plugin = new BIMI.HtmlLabelPlugin();
                    viewer.addPlugin(plugin);
                }

                plugin.addLabel({
                    id:new Date().getTime(),
                    position:vec3,
                    text:'标签',
                    fontColor:'#fff',
                    backgroundColor:'#485663',
                    fontSize:'14px',
                })
                viewer.isDirty();
            })
            this.setPanoramicDefaultOrbit();
        },
        //设置全景图的初始视角
        setPanoramicDefaultOrbit(){
            let viewer = BIMI.ViewerHelper.getViewer('main');
            let state = {"position":{"x":0,"y":0,"z":0},"quaternion":{"x":-0.06635499364895026,"y":0.11403174830228421,"z":0.007633527392872102,"w":0.9912292895473359},"target":{"x":0,"y":0,"z":0},"zoom":1};
            viewer.setDefaultOrbitState(state);
            viewer.isDirty();
        },

    },
	mounted() {
        
        this.$nextTick(()=>{
            this.createPanoramic();
            Prism.highlightAll();
        })
         
    },
	beforeDestroy() {
        
        let viewer = BIMI.ViewerHelper.getViewer('main');
        viewer.dispose();
    }
};
</script>

<style scoped>
    #containerDiv {
	    width: 100%;
	    height: 500px;
	    overflow: hidden;
	}

</style>
