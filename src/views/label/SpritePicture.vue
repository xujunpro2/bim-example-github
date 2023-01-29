<template>
    <div class="rootDiv">
        <div class="messageDiv">
            三维图片标记是使用图片作为三维标签。
            <br/>优点是和三维场景融为一体，能被BIM构件遮挡。通过zoom属性，可让标签具备景深特点。
            <br/>因为WebGL限制导致图片清晰度会降低，如果需要提高清晰度可以将width和height设置为图片尺寸的一半。
        </div>
        <div id="containerDiv" ></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
var viewer = BIMI.ViewerHelper.getViewer();
var plugin = viewer.getPlugin('SpritePicturePlugin');
if(!plugin)
{
    plugin = new BIMI.SpritePicturePlugin();
    viewer.addPlugin(plugin);
}
/**
* 创建三维图片
* @param {Object} option 
* id:Number 对象的ID，可以通过该ID来删除图片
* url: string 图片url
* position:sprite将来放置的postion的Vector3对象
* zoom:true/false 是否跟随缩放 默认false
* bindData:object 业务绑定数据，可以在pick的时候返回
* width:Number 指定宽度，默认是图片本身宽度
* height:Number 指定高度，默认是图片本身高度
* distance:Number 视距
*/
plugin.addPicture({
    id:100,
    bindData:{name:'jack'},
    position:new BIMI.THREE.Vector3(-2,3.7,-4.5),
    url:'pictures/picturePlugin2.png',
    width:32,
    height:32,
    zoom:false,
    distance:40
})

//可以支持pick事件
viewer.on('pick',function(eventData){
    if(eventData.type == 'sprite')
        alert(eventData.data.id);
})

//可以删除某个图片
plugin.removePicture(100)
//可以删除所有图片
plugin.removeAll()

//和三维标记一样,支持pick事件
</code></pre>
    
    </div>
	
</template>

<script>

export default {
	name: "SpritePicture",
	data() {
		return {
           loading:true,
        };
	},
	methods: {
        addPicture()
        {
            var viewer = BIMI.ViewerHelper.getViewer();
            var plugin = viewer.getPlugin('SpritePicturePlugin');
            if(!plugin)
            {
                plugin = new BIMI.SpritePicturePlugin();
                viewer.addPlugin(plugin);
            }
           /**
             * 创建三维图片
             * @param {Object} option 
             * id:Number 对象的ID，可以通过该ID来删除图片
             * url: string 图片url
             * position:sprite将来放置的postion的Vector3对象
             * zoom:true/false 是否跟随缩放 默认false
             * bindData:object 业务绑定数据，可以在pick的时候返回
             * width:Number 指定宽度，默认是图片本身宽度
             * height:Number 指定高度，默认是图片本身高度
             * distance:Number 视距
             */
            plugin.addPicture({
                id:100,
                bindData:{name:'jack'},
                position:new BIMI.THREE.Vector3(-2,3.7,-4.5),
                url:'pictures/picturePlugin2.png',
                width:32,
                height:32,
                zoom:false,
                distance:40
            })
        }   
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            viewer.load('datas/冷站/bim.bin');
           
			viewer.on("loaded", model => {
                this.addPicture();
            });
            //三维标记可以支持pick事件
            viewer.on('pick',function(eventData){
                if(eventData.type == 'sprite')
                alert(eventData.data.id);
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
        height: 160px;
        font-size: 12px;
        padding: 5px;
        overflow:hidden;
    }
</style>
