<template>
    <div class="rootDiv">
        <div class="messageDiv">
            标记标签混合了标记图标和html div。
            <br/>你可以点击圆形标记设置内容面板显示/隐藏。
            <el-button @click="update">改变位置和标签内容</el-button>
        </div>
        <div id="containerDiv" ></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
            var viewer = BIMI.ViewerHelper.getViewer();
            var plugin = viewer.getPlugin('HtmlMarkerPlugin');
            if(!plugin)
            {
                plugin = new BIMI.HtmlMarkerPlugin();
                viewer.addPlugin(plugin);
            }
            /**
             * 添加一个标签
             * 参数说明:
             *      id:对象id 
             *      bindData:业务绑定数据object，可以在点击 falg的时候返回 
             *      flag: 圆形标记的文字，通常是数字或大写字母，单个字符 。flag和flagImg两者设置其一即可
             *      flagImg:圆形标记采用图片，最好是12*12的小图片。flag和flagImg两者设置其一即可
             *      flagColor: 圆形标记的背景填充色。默认值:'rgba(255, 0, 0, 0.8)'
             *      content:内容Div的内容文件，可以是Html文本，也可以是dom 
             *      contentVisible:内容Div默认是否可见，内容Div可通过点击圆形标记切换可见性。默认值: false
             *      width:内容Div的宽度css,如:'150PX'。如果不设置，就自适应 
             *      position: 位置,圆形标记的圆心将以这个位置为准 。BIMI.THREE.Vector3
             *      distance: 视距
             */
            plugin.addLabel({
                id:100,
                bindData:{name:'绑定数据'},
                //flag:'1',
                flagImg:'pictures/HtmlMarkerText.png',
                flagColor:'rgba(255, 0, 0, 0.8)',
                content:'可以支持html表达文本',
                contentVisible:false,
                position:new BIMI.THREE.Vector3(-3.5,3,-4.5),
                distance:50
            })
            //marker标记支持click事件
            plugin.on('click',event=>{
                console.info(event)
            })
            //移除标签
            // setTimeout(() => {
            //      plugin.removeLabel(100)
            // }, 2000);
           
</code></pre>
    
    </div>
	
</template>

<script>

export default {
	name: "HtmlMarkerText",
	data() {
		return {
           loading:true,
        };
	},
	methods: {
        update(){
            let viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('HtmlMarkerPlugin'); 
            //改变100标签的位置
            plugin.updatePosition(100,new BIMI.THREE.Vector3(-2,6.7,-4.5));
            //改变100标签的文本
            plugin.updateContent(100,{
                dom:'<div style="color:#ff0000">修改后的文本</div>'
            })
            //也可直接拿到标签对应的dom，随意修改
            let dom = plugin.getLabelDom(100);
            console.info(dom);
        },
        addLabel()
        {
            var viewer = BIMI.ViewerHelper.getViewer();
            var plugin = viewer.getPlugin('HtmlMarkerPlugin');
            if(!plugin)
            {
                plugin = new BIMI.HtmlMarkerPlugin();
                viewer.addPlugin(plugin);
            }
            /**
             * 添加一个标签
             * 参数说明:
             *      id:对象id 
             *      bindData:业务绑定数据object，可以在点击 falg的时候返回 
             *      flag: 圆形标记的文字，通常是数字或大写字母，单个字符 。flag和flagImg两者设置其一即可
             *      flagImg:圆形标记采用图片，最好是12*12的小图片。flag和flagImg两者设置其一即可
             *      flagColor: 圆形标记的背景填充色。默认值:'rgba(255, 0, 0, 0.8)'
             *      content:内容Div的内容文件，可以是Html文本，也可以是dom 
             *      contentVisible:内容Div默认是否可见，内容Div可通过点击圆形标记切换可见性。默认值: false
             *      width:内容Div的宽度css,如:'150PX'。如果不设置，就自适应 
             *      position: 位置,圆形标记的圆心将以这个位置为准 。BIMI.THREE.Vector3
             *      distance: 视距
             */
            plugin.addLabel({
                id:100,
                bindData:{name:'绑定数据'},
                //flag:'1',
                flagImg:'pictures/HtmlMarkerText.png',
                flagColor:'rgba(255, 0, 0, 0.8)',
                content:'可以支持html表达文本',
                contentVisible:false,
                position:new BIMI.THREE.Vector3(-3.5,3,-4.5),
                distance:50
            })
            //marker标记支持click事件
            plugin.on('click',event=>{
                console.info(event)
            })
            //移除标签
            // setTimeout(() => {
            //      plugin.removeLabel(100)
            // }, 2000);
           
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
            viewer.on("pick", eventData => {
                console.info(eventData)
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
