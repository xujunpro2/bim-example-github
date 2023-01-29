<template>
    <div class="rootDiv">
        <div class="messageDiv">
            锚定标记是采用html div的方式在场景中放置带锚点和指示线的文本标签。锚线指向可以上、下、左、右。
        </div>
        <div id="containerDiv" ></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
        addLabel()
        {
            var viewer = BIMI.ViewerHelper.getViewer();
            var plugin = viewer.getPlugin('HtmlAnchorDivPlugin');
            if(!plugin)
            {
                plugin = new BIMI.HtmlAnchorPlugin();
                viewer.addPlugin(plugin);
            }
           
            /**
            * 参数说明 
            *  id:100
            *  width:内容div的宽度 例如'110px',
            *  height:内容div的高度 例如'25px',
            *  html:支持html内容，例如'<label style="font-size:12px">离心机的锚定标记</label>',
            *  position:锚点坐标 
            *  vd: top/bottom 锚线垂直方向：朝上/朝下 默认top
            *  hd: left/right 锚线水平方向：左/右 默认right
            */
            plugin.addAnchor({
                id:100,
                width:'110px',
                height:'25px',
                html:'<div style="height:100%;width:100%;"><label style="font-size:12px">离心机的锚定标记</label></div>',
                position:new BIMI.THREE.Vector3(-2.1,3.2,-4.5),
                vd:'top',
                hd:'right',
                distance:40
            })

            plugin.addAnchor({
                id:101,
                width:'110px',
                height:'25px',
                html:'<div style="height:100%;width:100%;"><label style="font-size:12px">左下</label></div>',
                position:new BIMI.THREE.Vector3(-2.1184211174520864,  3.215939428033156,  -5.212586303774104),
                vd:'bottom',
                hd:'left'
            })

            //隐藏某个锚定标签 setVisible(id,visible)
            //移除某个锚定标签 removeAnchor(id)
            //移除所有 removeAll()
            //因为内容支持html文本，所以事件交由开发者自己在html文本中编写
        }  
</code></pre>
    
    </div>
	
</template>

<script>

export default {
	name: "HtmlAnchorLabel",
	data() {
		return {
        };
	},
	methods: {
        addLabel()
        {
            var viewer = BIMI.ViewerHelper.getViewer();
            var plugin = viewer.getPlugin('HtmlAnchorDivPlugin');
            if(!plugin)
            {
                plugin = new BIMI.HtmlAnchorPlugin();
                viewer.addPlugin(plugin);
            }
           
            /**
            * 参数说明 
            *  id:100
            *  width:内容div的宽度 例如'110px',
            *  height:内容div的高度 例如'25px',
            *  html:支持html内容，例如'<label style="font-size:12px">广联达的锚定标记</label>',
            *  position:锚点坐标 
            *  vd: top/bottom 锚线垂直方向：朝上/朝下 默认top
            *  hd: left/right 锚线水平方向：左/右 默认right
            */
            plugin.addAnchor({
                id:100,
                width:'110px',
                height:'25px',
                html:'<div style="height:100%;width:100%;"><label style="font-size:12px">离心机的锚定标记</label></div>',
                position:new BIMI.THREE.Vector3(-2.1,3.2,-4.5),
                vd:'top',
                hd:'right',
                distance:40
            })

            plugin.addAnchor({
                id:101,
                width:'110px',
                height:'25px',
                html:'<div style="height:100%;width:100%;"><label style="font-size:12px">左下</label></div>',
                position:new BIMI.THREE.Vector3(-2.1184211174520864,  3.215939428033156,  -5.212586303774104),
                vd:'bottom',
                hd:'left'
            })

            //隐藏某个锚定标签 setVisible(id,visible)
            //移除某个锚定标签 removeAnchor(id)
            //移除所有 removeAll()
            //因为内容支持html文本，所以事件交由开发者自己在html文本中编写
        }   
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            viewer.load('datas/冷站/bim.bin');
           
			viewer.on("loaded", model => {
                this.addLabel();
            });
            viewer.on('pick',event=>{
                console.info(event)
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
        height: 120px;
        font-size: 12px;
        padding: 5px;
        overflow:hidden;
    }
</style>
