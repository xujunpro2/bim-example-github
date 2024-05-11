<template>
    <div class="rootDiv">
        <div class="messageDiv">
            二维标记是采用html div的方式在场景中放置文本标签。
            <br/>优点是文字清晰度高并且始终可见。
            <br/>缺点是因为div没有Z方向坐标，所以缺乏三维感。
            <el-button @click="update">改变位置和标签内容</el-button>
        </div>
        <div id="containerDiv" ></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
            var viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('HtmlIconLabelPlugin');
            if(!plugin)
            {
                plugin = new BIMI.HtmlIconLabelPlugin();
                viewer.addPlugin(plugin);
            }
            /**
             * 添加html label
             * @param {*} option
             * id:String/Number 标签ID <br/>
             * bindData:object 业务绑定数据，可以在pick的时候返回  <br/>
             * position:new BIMI.THREE.Vector3(0,0,0)  <br/>
             * icon: String icon-font css表达式  <br/>
             * text：String 标签文字  <br/>
             * color: String icon的背景色  <br/>
             * offset:Array 位置像素偏移量,默认[0,0]  <br/>
             * distance:100 视距，默认是null，就无限制  <br/>
             */
            plugin.addLabel({
                id:1234,
                bindData:{id:1234,worker:'jack'},
                position:new BIMI.THREE.Vector3(-2,3.7,-4.5),
                offset:[0,-30],
                icon:'myfont iconmarker',
                text:'一号离心机',
                color:'#00ffff',
                distance:null
            });
            

            plugin.on('click',data=>{
                alert(data.worker);
            })

            viewer.isDirty();
</code></pre>
    
    </div>
	
</template>

<script>

export default {
	name: "HtmlIconLabel",
	data() {
		return {
        };
	},
	methods: {
        update(){
            let viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('HtmlIconLabelPlugin'); 
            //改变100标签的位置
            plugin.updatePosition(100,new BIMI.THREE.Vector3(-2,6.7,-4.5));
            //改变100标签的文本
            plugin.updateContent(100,{
                color:'#00ff00',
                text:'修改后的文本'
            })
            //也可直接拿到标签对应的dom，随意修改
            let dom = plugin.getLabelDom(100);
            console.info(dom);
            
        },
        addLabel()
        {
            var viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('HtmlIconLabelPlugin');
            if(!plugin)
            {
                plugin = new BIMI.HtmlIconLabelPlugin();
                viewer.addPlugin(plugin);
            }
            /**
             * 添加html label
             * @param {*} option
             * id:String/Number 标签ID <br/>
             * bindData:object 业务绑定数据，可以在pick的时候返回  <br/>
             * position:new BIMI.THREE.Vector3(0,0,0)  <br/>
             * icon: String icon-font css表达式  <br/>
             * text：String 标签文字  <br/>
             * color: String icon的背景色  <br/>
             * offset:Array 位置像素偏移量,默认[0,0]  <br/>
             * distance:100 视距，默认是null，就无限制  <br/>
             */
            plugin.addLabel({
                id:100,
                bindData:{worker:'jack'},
                position:new BIMI.THREE.Vector3(-2,3.7,-4.5),
                offset:[0,-30],
                icon:'myfont iconmarker',
                text:'一号离心机',
                color:'#00ffff',
                distance:null
            });
            

            plugin.on('click',data=>{
                alert(data.worker);
            })

            viewer.isDirty();
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
        height: 220px;
        font-size: 12px;
        padding: 5px;
        overflow:hidden;
        z-index:1;
    }
</style>
