<template>
    <div class="rootDiv">
        <div class="messageDiv">
            Billboard广告牌采用了CSS3Render渲染。
            <br/>也是采用Dom渲染，但能随三维场景同步缩放变形。
            <br/>因为底层是Dom，所以无法遮挡。
            <el-button @click="update">改变位置和标签内容</el-button>
        </div>
        <div id="containerDiv" ></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
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
            plugin.addLabel({
                id:1,
                dom:dom,
                position:new BIMI.THREE.Vector3(-7,4,-6),
                scale:0.05,
                distance:50
            });

            let dom2 = plugin.createBillboard2('备离心机','温度:-7℃')
            plugin.addLabel({
                id:2,
                dom:dom2,
                position:new BIMI.THREE.Vector3(7,4,-6),
                scale:0.05,
                distance:50
            });

            viewer.isDirty();
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
        update(){
            let viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('BillboardPlugin'); 
           
            /**
             * 修改既有Label的位置
             * @param {*} id 标签ID
             * @param {*} position 位置，BIMI.THREE.Vector3
             * @param {*} rotate 旋转，BIMI.THREE.Vector3
             */
            plugin.updatePosition(100,new BIMI.THREE.Vector3(-2,6.7,-4.5),new BIMI.THREE.Vector3(0,0,0));
            //可以拿到之前的dom对象
            let dom = plugin.getLabelDom(100);
            dom.querySelector('.text').innerHTML="温度:34℃"
        },
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
            /**
             * 创建Billboard标签
             * @param {object} options 
             * @example 参数结构:
             * {
             *      id:Number 标签ID
             *      dom:dom对象或者是html文本 
             *      position:位置,默认BIMI.THREE.Vector3(0,0,0);
             *      scale:整体缩放，默认0.1，这个数据尽量小一点，清晰。
             *      rotate：旋转，默认BIMI.THREE.Vector3(0,0,0);
             *      bindData:object 业务绑定数据 
             *      distance:Number 视距 
             * }
             */
            plugin.addLabel({
                id:100,
                dom:dom,
                position:new BIMI.THREE.Vector3(-7,4,-6),
                scale:0.05,
                distance:50
            });

            let dom2 = plugin.createBillboard2('备离心机','温度:-7℃')
            plugin.addLabel({
                id:101,
                dom:dom2,
                position:new BIMI.THREE.Vector3(7,4,-6),
                scale:0.05,
                distance:50
            });

            viewer.isDirty();
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
        z-index: 1;
    }
</style>
