<template>
    <div class="rootDiv">
        <div class="messageDiv">
            自定义Dom的 DIV 标签。
            <br/>优点是清晰度高并且始终可见。
            <br/>缺点是因为div没有Z方向坐标，所以缺乏三维感。
            <el-button @click="update">改变位置和标签内容</el-button>
        </div>
        <!-- <div id="hello" style="position: absolute;width: 120px;height: 60px;font-size: 14px;color:#fff;border-radius: 10px;border: 1px solid rgba(127,255,255,0.25);text-align: center;line-height: normal;background-color: rgba(0,127,127,0.5);" >
            <span>1#离心机</span>
            <br/>
            <img width="36" height="36" src="vue.png"/>
        </div> -->
        <div id="containerDiv" ></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
        addLabel()
        {
            var viewer = BIMI.ViewerHelper.getViewer();
            var plugin = viewer.getPlugin('HtmlDomPlugin');
            if(!plugin)
            {
                plugin = new BIMI.HtmlDomPlugin();
                viewer.addPlugin(plugin);
            }
            var domStr = `<div id="hello" style="position: absolute;width: 120px;height: 60px;font-size: 14px;color:#fff;border-radius: 10px;border: 1px solid rgba(127,255,255,0.25);text-align: center;line-height: normal;background-color: rgba(0,127,127,0.5);" >
                    <span>1#离心机</span>
                    <br/>
                    <img width="36" height="36" src="vue.png"/>
                </div>`
            /**
             * 根据Dom创建并返回该三维对象
             * @param {Object} option 
             * id:Number 标签对象的ID，可以通过该ID来查询/删除标签
             * dom:dom对象或者是html文本
             * position:位置Vector3对象,该dom的中心点将置于position
             * offset:[x,y] dom位置偏移像素，默认是0,0
             * bindData:object 业务绑定数据，可以在pick的时候返回
             * distance:Number 视距
             */
            plugin.addLabel({
                id:100,
                bindData:{name:'我是绑定数据A'},
                position:new BIMI.THREE.Vector3(-2,3.7,-4.5),
                offset:[0,-40],
                dom:domStr,
                distance:40 
            })
        }   
</code></pre>
    
    </div>
	
</template>

<script>

export default {
	name: "HtmlDom",
	data() {
		return {
        };
	},
	methods: {
        update(){
            let viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('HtmlDomPlugin'); 
            //改变100标签的位置
            plugin.updatePosition(100,new BIMI.THREE.Vector3(-2,6.7,-4.5));
            //改变100标签的文本
            plugin.updateContent(100,{
                dom:`<div id="hello" style="position: absolute;width: 120px;height: 60px;font-size: 14px;color:#fff;border-radius: 10px;border: 1px solid rgba(127,255,255,0.25);text-align: center;line-height: normal;background-color: rgba(0,127,127,0.5);" >
                    <span>修改后的文本</span>
                    <br/>
                    <img width="36" height="36" src="vue.png"/>
                </div>`
            })
            //也可直接拿到标签对应的dom，随意修改
            let dom = plugin.getLabelDom(100);
            console.info(dom);
            setTimeout(() => {
                dom.querySelector('#hello span').innerHTML = '直接操作dom'
            }, 2000);
        },
        addLabel()
        {
            var viewer = BIMI.ViewerHelper.getViewer();
            var plugin = viewer.getPlugin('HtmlDomPlugin');
            if(!plugin)
            {
                plugin = new BIMI.HtmlDomPlugin();
                viewer.addPlugin(plugin);
            }
            var domStr = `<div id="hello" style="position: absolute;width: 120px;height: 60px;font-size: 14px;color:#fff;border-radius: 10px;border: 1px solid rgba(127,255,255,0.25);text-align: center;line-height: normal;background-color: rgba(0,127,127,0.5);" >
                    <span>1#离心机</span>
                    <br/>
                    <img width="36" height="36" src="vue.png"/>
                </div>`
            /**
             * 根据Dom创建并返回该三维对象
             * @param {Object} option 
             * id:Number 标签对象的ID，可以通过该ID来查询/删除标签
             * dom:dom对象或者是html文本
             * position:位置Vector3对象,该dom的中心点将置于position
             * offset:[x,y] dom位置偏移像素，默认是0,0
             * bindData:object 业务绑定数据，可以在pick的时候返回
             * distance:Number 视距
             */
            plugin.addLabel({
                id:100,
                bindData:{name:'我是绑定数据A'},
                position:new BIMI.THREE.Vector3(-2,3.7,-4.5),
                offset:[0,-40],
                dom:domStr,
                distance:40 
            })
        }   
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom,{grid:false});
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
        z-index: 1;
    }
</style>
