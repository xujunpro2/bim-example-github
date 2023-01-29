<template>
    <div class="rootDiv">
        <div class="messageDiv">
            三维标记是真实的三维文本标签。
            <br/>优点是和三维场景融为一体，能被BIM构件遮挡。通过zoom属性，可让标签具备景深特点。
            <br/>缺点是文字清晰度不如二维标记。
        </div>
        <div id="containerDiv" ></div>
            <pre class="line-numbers"><code class="language-js">#代码示范

        addLabel()
        {
            var viewer = BIMI.ViewerHelper.getViewer();
            var spriteLabelPlugin = viewer.getPlugin('SpriteLabelPlugin');
            if(!spriteLabelPlugin)
            {
                spriteLabelPlugin = new BIMI.SpriteLabelPlugin();
                viewer.addPlugin(spriteLabelPlugin);
            }
            /**
             * 参数说明
             * id:label唯一标识
             * text:文字
             * position:sprite将来放置的postion的Vector3对象
             * fontSize：'16px'
             * fontColor：'#000000'
             * backgroundColor:'#32d3a6' 背景色，默认广联达的绿色背景
             * borderColor:'#ffffff' 边框色，默认白色
             * zoom:true/false 是否跟随缩放
             * bindData:object 业务绑定数据，可以在pick的时候返回
             * distance:Number/null 视距，单位米，相机距离该标签距离<=视距时，标签才可见。默认无视距控制
             */
            spriteLabelPlugin.addLabel({
                id:121,
                bindData:{name:'jack'},
                text:'1#离心机',
                position:new BIMI.THREE.Vector3(-2,3.7,-4.5),
                fontSize:'14px',
                fontColor:'#fff',
                backgroundColor:'#485663',
                borderColor:'#ffffff',
                zoom:false,
                distance:30 
            })
            spriteLabelPlugin.addLabel({
                id:122,
                bindData:{name:'tom'},
                text:'2#离心机',
                position:new BIMI.THREE.Vector3(1.3,3.7,-4.5),
                fontSize:'14px',
                fontColor:'#fff',
                backgroundColor:'#485663',
                borderColor:'#ffffff',
                zoom:false
            })
            viewer.isDirty();  
        }   

    //三维标记可以支持pick事件
    viewer.on('pick',function(eventData){
        console.info(eventData)
        if(eventData.source == 'sprite')//source可用于区分pick点击的是bim构件还是sprite三维标签
            alert(eventData.data.name);
    })

    //三维标记可以通过id remove
    spriteLabelPlugin.removeLabel(121);
    //也可以全部清除
    spriteLabelPlugin.removeAll();
</code></pre>
    
    </div>
	
</template>

<script>

export default {
	name: "POILabel",
	data() {
		return {
           loading:true,
        };
	},
	methods: {
        addLabel()
        {
            var viewer = BIMI.ViewerHelper.getViewer();
            var spriteLabelPlugin = viewer.getPlugin('SpriteLabelPlugin');
            if(!spriteLabelPlugin)
            {
                spriteLabelPlugin = new BIMI.SpriteLabelPlugin();
                viewer.addPlugin(spriteLabelPlugin);
            }
            /**
             * 参数说明
             * id:label唯一标识
             * text:文字
             * position:sprite将来放置的postion的Vector3对象
             * fontSize：'16px'
             * fontColor：'#000000'
             * backgroundColor:'#32d3a6' 背景色，默认广联达的绿色背景
             * borderColor:'#ffffff' 边框色，默认白色
             * zoom:true/false 是否跟随缩放
             * bindData:object 业务绑定数据，可以在pick的时候返回
             * distance:Number/null 视距，单位米，相机距离该标签距离<=视距时，标签才可见。默认无视距控制
             */
            spriteLabelPlugin.addLabel({
                id:121,
                bindData:{name:'jack'},
                text:'1#离心机',
                position:new BIMI.THREE.Vector3(-2,3.7,-4.5),
                fontSize:'14px',
                fontColor:'#fff',
                backgroundColor:'#485663',
                borderColor:'#ffffff',
                zoom:false,
                distance:30 
            })
            spriteLabelPlugin.addLabel({
                id:122,
                bindData:{name:'tom'},
                text:'2#离心机',
                position:new BIMI.THREE.Vector3(1.3,3.7,-4.5),
                fontSize:'14px',
                fontColor:'#fff',
                backgroundColor:'#485663',
                borderColor:'#ffffff',
                zoom:false
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
            //三维标记可以支持pick事件
            viewer.on('pick',function(eventData){
                console.info(eventData)
                if(eventData.source == 'sprite')//source可用于区分pick点击的是bim构件还是sprite三维标签
                    alert(eventData.data.name);
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
