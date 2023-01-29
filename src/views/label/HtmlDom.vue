<template>
    <div class="rootDiv">
        <div class="messageDiv">
            自定义Dom的 DIV 标签。
            <br/>优点是清晰度高并且始终可见。
            <br/>缺点是因为div没有Z方向坐标，所以缺乏三维感。
        </div>
        <!-- <div id="hello" style="position: absolute;width: 120px;height: 60px;font-size: 14px;color:#fff;border-radius: 10px;border: 1px solid rgba(127,255,255,0.25);text-align: center;line-height: normal;background-color: rgba(0,127,127,0.5);" >
            <span>1#离心机</span>
            <br/>
            <img width="36" height="36" src="vue.png"/>
        </div> -->
        <div id="containerDiv" ></div>
            <pre class="line-numbers"><code class="language-js">#代码示范

            ar viewer = BIMI.ViewerHelper.getViewer();
            var plugin = viewer.getPlugin('HtmlDomPlugin');
            if(!plugin)
            {
                plugin = new BIMI.HtmlDomPlugin();
                viewer.addPlugin(plugin);
            }
            var domStr = `&lt;div id="hello" style="position: absolute;width: 120px;height: 60px;font-size: 14px;color:#fff;border-radius: 10px;border: 1px solid rgba(127,255,255,0.25);text-align: center;line-height: normal;background-color: rgba(0,127,127,0.5);" &gt;
                    &lt;span>1#离心机&lt;/span&gt;
                    &lt;br/&gt;
                    &lt;img width="36" height="36" src="vue.png"/&gt;
                &lt;/div&gt;`
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
            plugin.addDom({
                id:100,
                bindData:{name:'我是绑定数据A'},
                position:new BIMI.THREE.Vector3(-2,3.7,-4.5),
                offset:[0,-40],
                dom:domStr,
                distance:40 
            })
            

            //如果想移除某个Dom,可以通过removeDom(id)实现
            //plugin.removeDom(100)     
            //移除所有的Dom
            //plugin.removeAll();
            //获得场景中的某个Dom,可以通过getDom(id)实现
            //plugin.getDom(100);
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
        addDom()
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
            plugin.addDom({
                id:100,
                bindData:{name:'我是绑定数据A'},
                position:new BIMI.THREE.Vector3(-2,3.7,-4.5),
                offset:[0,-40],
                dom:domStr,
                distance:40 
            })
            

            //如果想移除某个Dom,可以通过removeDom(id)实现
            //plugin.removeDom(100)     
            //移除所有的Dom
            //plugin.removeAll();
            //获得场景中的某个Dom,可以通过getDom(id)实现
            //plugin.getDom(100);
            //label可以绑定点击事件
            plugin.on('click',event=>{
               console.info(event);
            })

        }   
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom,{grid:false});
            viewer.load('datas/冷站/bim.bin');
           
			viewer.on("loaded", model => {
                this.addDom();
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
