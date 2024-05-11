<template>
    <div class="rootDiv">
        <div class="messageDiv">
            目前HtmlIconLabelPlugin、HtmlDomPlugin、HtmlLabelPlugin支持聚合。
            <br/>通过plugin.enableCluster = true;即可启用。
        </div>
        <div id="containerDiv" ></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
            //启用聚合
            plugin.enableCluster = true;
</code></pre>
    
    </div>
	
</template>

<script>

export default {
	name: "ClusterLabel",
	data() {
		return {
        };
	},
	methods: {
        addLabel()
        {
            var viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('HtmlIconLabelPlugin');
            if(!plugin)
            {
                plugin = new BIMI.HtmlIconLabelPlugin();
                viewer.addPlugin(plugin);
            }
            //创建100个随机位置的HtmlIconLabel
            for (let i=0;i<100;i++)
            {
                let x = BIMI.CommonTools.randomInt(40,-40);
                let y = BIMI.CommonTools.randomInt(30,20);
                let z = BIMI.CommonTools.randomInt(40,-40);
                let position = new BIMI.THREE.Vector3(x,y,z);
                let options = {
                    id:i,
                    position:position,
                    offset:[0,-30],
                    icon:'myfont iconmarker',
                    text:'视频监控'+i,
                    color:'#00ffff',
                    distance:null,//不启用视距
                    bindData:{index:i}
                };
                
                plugin.addLabel(options);
            }
            //启用聚合
            plugin.enableCluster = true;
            plugin.on('click',data=>{
                console.info(data)
            })
   
            viewer.isDirty();
        }   
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            viewer.load('datas/rac_basic_sample_project/bim.bin');
           
			viewer.on("loaded", model => {
                this.addLabel();
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
        width: 200px;
        height: 120px;
        font-size: 12px;
        padding: 5px;
        overflow:hidden;
    }
</style>
