<template>
    <div class="rootDiv">
        <div class="messageDiv">
            二维标记是采用html div的方式在场景中放置文本标签。
            <br/>优点是文字清晰度高并且始终可见。
            <br/>缺点是因为div没有Z方向坐标，所以缺乏三维感。
        </div>
        <div id="containerDiv" ></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
        addLabel()
        {
            var viewer = BIMI.ViewerHelper.getViewer();
            var plugin = viewer.getPlugin('HtmlLabelPlugin');
            if(!plugin)
            {
                plugin = new BIMI.HtmlLabelPlugin();
                viewer.addPlugin(plugin);
            }
            /**
            * 参数说明 
            * id:label标识，在click的时候会返回，文本类型
            * position:new THREE.Vector3(0,0,0)
            * text:文字
            * fontColor：#ffffff
            * backgroundColor：#32d3a6
            * fontSize：16px
            */
            plugin.addLabel({
                id:100,
                bindData:{name:'我是绑定数据A'},
                position:new BIMI.THREE.Vector3(-2,3.7,-4.5),
                text:'1#离心机',
                fontColor:'#fff',
                backgroundColor:'#485663',
                fontSize:'14px',
                distance:40 
            })
            plugin.addLabel({
                id:101,
                bindData:{name:'我是绑定数据B'},
                position:new BIMI.THREE.Vector3(1.3,3.7,-4.5),
                text:'2#离心机',
                fontColor:'#fff',
                backgroundColor:'#485663',
                fontSize:'14px'
            })

            //设置label可见性
            //labelPlugin.setVisible(100,false);

            //彻底移除某个Label
            //labelPlugin.removeLabel(100)     
            
            //label可以绑定点击事件
            plugin.on('click',function(data){
               alert(data.name);
            })
        }   
</code></pre>
    
    </div>
	
</template>

<script>

export default {
	name: "HtmlLabel",
	data() {
		return {
        };
	},
	methods: {
        addLabel()
        {
            var viewer = BIMI.ViewerHelper.getViewer();
            var plugin = viewer.getPlugin('HtmlLabelPlugin');
            if(!plugin)
            {
                plugin = new BIMI.HtmlLabelPlugin();
                viewer.addPlugin(plugin);
            }
            /**
            * 参数说明 
            * id:label标识，在click的时候会返回，文本类型
            * position:new THREE.Vector3(0,0,0)
            * text:文字
            * fontColor：#ffffff
            * backgroundColor：#32d3a6
            * fontSize：16px
            */
            plugin.addLabel({
                id:100,
                bindData:{name:'我是绑定数据A'},
                position:new BIMI.THREE.Vector3(-2,3.7,-4.5),
                text:'1#离心机',
                fontColor:'#fff',
                backgroundColor:'#485663',
                fontSize:'14px',
                distance:40 
            })
            plugin.addLabel({
                id:101,
                bindData:{name:'我是绑定数据B'},
                position:new BIMI.THREE.Vector3(1.3,3.7,-4.5),
                text:'2#离心机',
                fontColor:'#fff',
                backgroundColor:'#485663',
                fontSize:'14px'
            })

            //设置label可见性
            //labelPlugin.setVisible(100,false);

            //彻底移除某个Label
            //labelPlugin.removeLabel(100)     
            
            //label可以绑定点击事件
            plugin.on('click',function(data){
               alert(data.name);
            })
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
