<template>
    <div class="rootDiv">
        <div class="messageDiv">
            Billboard广告牌采用了CSS3Render渲染。
            <br/>也是采用Dom渲染，但能随三维场景同步缩放变形。
            <br/>因为底层是Dom，所以无法遮挡。
        </div>
        <div id="containerDiv" ></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
        addBillboard(){
            var viewer = BIMI.ViewerHelper.getViewer();
            var plugin = viewer.getPlugin('BillboardPlugin');
            if(!plugin)
            {
                plugin = new BIMI.BillboardPlugin();
                viewer.addPlugin(plugin);
            }
          
            //使用自带的billboard样式dom，也可以自己创建好dom或html文本作为参数。
            let dom = plugin.createBillboard2('主离心机','温度:-12℃')
            plugin.add({
                id:1,
                dom:dom,
                position:new BIMI.THREE.Vector3(-7,4,-6),
                scale:0.05,
                distance:50
            });

            let dom2 = plugin.createBillboard2('备离心机','温度:-7℃')
            plugin.add({
                id:2,
                dom:dom2,
                position:new BIMI.THREE.Vector3(7,4,-6),
                scale:0.05,
                distance:50
            });

            viewer.isDirty();

            

            //如果想移除某个广告牌,可以通过remove(id)实现
            //plugin.remove(100)     
            //移除所有
            //plugin.removeAll();
            //获得场景中的某个广告牌,可以通过get(id)实现
            //plugin.get(100);
        }   
</code></pre>
    
    </div>
	
</template>

<script>

export default {
	name: "Billboard",
	data() {
		return {
        };
	},
	methods: {
        addBillboard()
        {
            var viewer = BIMI.ViewerHelper.getViewer();
            var plugin = viewer.getPlugin('BillboardPlugin');
            if(!plugin)
            {
                plugin = new BIMI.BillboardPlugin();
                viewer.addPlugin(plugin);
            }
          
            //使用自带的billboard样式dom，也可以自己创建好dom或html文本作为参数。
            let dom = plugin.createBillboard2('主离心机','温度:-12℃')
            plugin.add({
                id:1,
                dom:dom,
                position:new BIMI.THREE.Vector3(-7,4,-6),
                scale:0.05,
                distance:50
            });

            let dom2 = plugin.createBillboard2('备离心机','温度:-7℃')
            plugin.add({
                id:2,
                dom:dom2,
                position:new BIMI.THREE.Vector3(7,4,-6),
                scale:0.05,
                distance:50
            });

            viewer.isDirty();

            

            //如果想移除某个广告牌,可以通过remove(id)实现
            //plugin.remove(100)     
            //移除所有
            //plugin.removeAll();
            //获得场景中的某个广告牌,可以通过get(id)实现
            //plugin.get(100);
        }   
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom,{grid:false});
            viewer.load('datas/冷站/bim.bin');
           
			viewer.on("loaded", model => {
                this.addBillboard();
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
