<template>
    <div class="rootDiv">
        <div class="messageDiv">
            标记标签混合了标记图标和html div。
            <br/>你可以点击圆形标记设置内容面板显示/隐藏。
            <br/>和文本标签一样支持视距，但视距操纵的是透明度而非可见性。
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
             * 添加一个MarkerText
             * 参数说明:
             * id:'1234',                              //对象id
             * flag:'1',                                //圆形标记采用文字，通常是数字或大写字母，单个字符
             * flagImg:'xx.png',                        //圆形标记采用图片，最好是12*12的小图片
             * flagColor:'rgba(255, 0, 0, 0.8)',        //marker的背景填充色
             * title:'标题',                            //内容Div的标题文字
             * content:'可以支持html表达文本',           //内容Div的内容文件，支持Html格式
             * contentVisible:false,                    //内容Div默认是否可见，内容Div可通过点击marker切换可见性
             * width:'150px',                          //内容Div的宽度css,height不需要，会自动计算
             * position:new THREE.Vector3(1.5,3.5,0),  //坐标位置,marker的圆心将以这个位置为准
             * distance:50                             //视距
             */
            plugin.addMarker({
                id:100,
                bindData:{name:'绑定数据'},
                //flag:'1',
                flagImg:'pictures/HtmlMarkerText.png',
                flagColor:'rgba(255, 0, 0, 0.8)',
                title:'标题',
                content:'可以支持html表达文本',
                contentVisible:false,
                width:'150px',
                position:new BIMI.THREE.Vector3(-3.5,3,-4.5),
                distance:50
            })
            //marker标记支持click事件
            plugin.on('click',event=>{
                console.info(event)
            })

            //移除标签
            plugin.removeMarker(100)
            //清空所有标签
            plugin.removeAll();
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
             * 添加一个MarkerText
             * 参数说明:
             * id:'1234',                              //对象id
             * flag:'1',                                //圆形标记采用文字，通常是数字或大写字母，单个字符
             * flagImg:'xx.png',                        //圆形标记采用图片，最好是12*12的小图片
             * flagColor:'rgba(255, 0, 0, 0.8)',        //marker的背景填充色
             * title:'标题',                            //内容Div的标题文字
             * content:'可以支持html表达文本',           //内容Div的内容文件，支持Html格式
             * contentVisible:false,                    //内容Div默认是否可见，内容Div可通过点击marker切换可见性
             * width:'150px',                          //内容Div的宽度css,height不需要，会自动计算
             * position:new THREE.Vector3(1.5,3.5,0),  //坐标位置,marker的圆心将以这个位置为准
             * distance:50                             //视距
             */
            plugin.addMarker({
                id:100,
                bindData:{name:'绑定数据'},
                //flag:'1',
                flagImg:'pictures/HtmlMarkerText.png',
                flagColor:'rgba(255, 0, 0, 0.8)',
                title:'标题',
                content:'可以支持html表达文本',
                contentVisible:false,
                width:'150px',
                position:new BIMI.THREE.Vector3(-3.5,3,-4.5),
                distance:50
            })
            //marker标记支持click事件
            plugin.on('click',event=>{
                console.info(event)
            })
            //移除标签
            // setTimeout(() => {
            //      plugin.removeMarker(100)
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
    }
</style>
