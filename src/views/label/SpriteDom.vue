<template>
    <div class="rootDiv">
        
        <div class="messageDiv">
            将Dom直接转为三维平面，并且始终面向相机。支持Pick事件和绑定业务参数
            <br/><span style="color:red">注意：因为Dom转贴图是异步的，所以dom的remove操作在插件内部就完成了，开发者不需要在自己remove这个dom了</span>
            <br/>可通过zoom属性设置是否缩放，默认值为false。
            <br/>受限于当前WebGL能力，贴图清晰度不够完美。
        </div>
        
        <div id="containerDiv" >
            <div id="hello" class="sprite" >
            　　<span>1#离心机</span>
                <br/>
                <img width="36" height="36" src="vue.png"/>
            </div>
        </div>
            <pre class="line-numbers"><code class="language-js">#代码示范
 addDom()
        {
            var viewer = BIMI.ViewerHelper.getViewer();
            var plugin = viewer.getPlugin('SpriteDomPlugin');
            if(!plugin)
            {
                plugin = new BIMI.SpriteDomPlugin();
                viewer.addPlugin(plugin);
            }
            var divDom = document.getElementById('hello');
            /**
             * 根据Dom创建并返回该三维对象
             * @param {Object} option 
             * id:Number 标签对象的ID，可以通过该ID来删除标签
             * dom:需要转Sprite的Dom元素,可以通过css设置该dom不可见，请确保dom已经完全渲染后再调用该函数
             * position:位置Vector3对象,该dom的中心点将置于position
             * zoom:true/false 是否跟随缩放,默认不缩放
             * bindData:object 业务绑定数据，可以在pick的时候返回
             * distance:Number 视距
             */
            plugin.addDom({
                id:121,
                zoom:false,
                dom:divDom,
                position:new BIMI.THREE.Vector3(-2,3.7,-4.5),
                bindData:{'myId':1234,'myType':'业务类型ABC'},
                distance:40
            })
            viewer.isDirty();
        }   
        //设置可见性
        plugin.setVisible(id,visible);

        //三维标记可以通过id remove
        plugin.removeDom(121);

        //也可以全部清除
        plugin.removeAll();
        
        //dom也可以通过HTML文本创建
        let myDom = plugin.createDom(HTML字符串);//然后用这个dom去调用plugin.addDom

//和三维标记一样,支持pick事件
</code></pre>
    
    </div>
	
</template>

<script>

export default {
	name: "SpriteDom",
	data() {
		return {
           loading:true,
        };
	},
	methods: {
        addDom()
        {
            var viewer = BIMI.ViewerHelper.getViewer();
            var plugin = viewer.getPlugin('SpriteDomPlugin');
            if(!plugin)
            {
                plugin = new BIMI.SpriteDomPlugin();
                viewer.addPlugin(plugin);
            }
            var divDom = document.getElementById('hello');
            /**
             * 根据Dom创建并返回该三维对象
             * @param {Object} option 
             * id:Number 标签对象的ID，可以通过该ID来删除标签
             * dom:需要转Sprite的Dom元素,可以通过css设置该dom不可见，请确保dom已经完全渲染后再调用该函数
             * position:位置Vector3对象,该dom的中心点将置于position
             * zoom:true/false 是否跟随缩放,默认不缩放
             * bindData:object 业务绑定数据，可以在pick的时候返回
             * distance:Number 视距
             */
            plugin.addDom({
                id:121,
                zoom:false,
                dom:divDom,
                position:new BIMI.THREE.Vector3(-2,3.7,-4.5),
                bindData:{'myId':1234,'myType':'业务类型ABC'},
                distance:40
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
                this.addDom(); 
                
            });
            viewer.on("pick", event => {
                alert(event.data.myId+" "+event.data.myType)
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
        background: #fff;
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
    }
     .sprite
    {
        display: block;
        z-index: -999999;
        position: absolute;
        width: 120px;
        height: 60px;
        top: 10px;
        right: 10px;
        font-size: 14px;
        font-family:sans-serif;
        border-radius: 10px;
		border: 1px solid rgba(127,255,255,0.25);
		text-align: center;
		line-height: normal;
        background-color: rgba(0,127,127,0.5);
    }
</style>
