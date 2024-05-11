<template>
    <div class="rootDiv">
        <div class="messageDiv">
            三维图片标记是使用图片作为三维标签。
            <br/>优点是和三维场景融为一体，能被BIM构件遮挡。通过zoom属性，可让标签具备景深特点。
            <br/>因为WebGL限制导致图片清晰度会降低，如果需要提高清晰度可以将width和height设置为图片尺寸的一半。
            <el-button @click="update">改变位置和标签内容</el-button>
        </div>
        <div id="containerDiv" ></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
        addLabel()
        {
            var viewer = BIMI.ViewerHelper.getViewer();
            var plugin = viewer.getPlugin('SpritePicturePlugin');
            if(!plugin)
            {
                plugin = new BIMI.SpritePicturePlugin();
                viewer.addPlugin(plugin);
            }
            /**
             * 创建三维图片标签，为了保证图片的清晰度，建议图片原始尺寸是指定width和height的2倍，譬如想显示为32*32的标签，图片的原始尺寸为64*64
             * @param {Object} options
             * @example 参数结构：
             * {
             *      id:Number 对象的ID，可以通过该ID来查询、删除标签 
             *      url: string 图片url 
             *      position:位置 BIMI.THREE.Vector3 
             *      zoom:true/false 是否跟随视距缩放 默认false 
             *      bindData:object 业务绑定数据，可以在pick的时候返回 
             *      width:Number 标签宽度，如果不设置，采用图片本身宽度，建议设置为图片宽度的1/2，清晰。
             *      height:Number 标签高度，如果不设置，采用图片本身高度，建议设置为图片高度的1/2，清晰。
             *      distance:Number 视距 
             * }
             */
            plugin.addLabel({
                id:100,
                bindData:{name:'jack'},
                position:new BIMI.THREE.Vector3(-2,3.7,-4.5),
                url:'pictures/picturePlugin2.png',
                width:32,
                height:32,
                zoom:false,
                distance:50
            })
        }   
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
        update(){
            let viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('SpritePicturePlugin'); 
            //改变100标签的位置
            plugin.updatePosition(100,new BIMI.THREE.Vector3(-2,6.7,-4.5));
            /**
             * 修改既有Label的内容dom
             * @param {*} id 
             * @param {*} options 
             * @example 参数结构：
             * {
             *      url:图片url
             *      width：指定标签的width，如果不设置，默认就使用图片的宽度，建议width是图片宽度的1/2，清晰度高。
             *      height: 指定标签的height，如果不设置，默认就使用图片的高度，建议width是图片高度的1/2，清晰度高。
             * }
             */
            plugin.updateContent(100,{
                url:'pictures/user3-128x128.jpg',
                width:64,
                height:64
            })
            //SpriteLabel不提供getLabelDom
        },
        addLabel()
        {
            var viewer = BIMI.ViewerHelper.getViewer();
            var plugin = viewer.getPlugin('SpritePicturePlugin');
            if(!plugin)
            {
                plugin = new BIMI.SpritePicturePlugin();
                viewer.addPlugin(plugin);
            }
            /**
             * 创建三维图片标签，为了保证图片的清晰度，建议图片原始尺寸是指定width和height的2倍，譬如想显示为32*32的标签，图片的原始尺寸为64*64
             * @param {Object} options
             * @example 参数结构：
             * {
             *      id:Number 对象的ID，可以通过该ID来查询、删除标签 
             *      url: string 图片url 
             *      position:位置 BIMI.THREE.Vector3 
             *      zoom:true/false 是否跟随视距缩放 默认false 
             *      bindData:object 业务绑定数据，可以在pick的时候返回 
             *      width:Number 标签宽度，如果不设置，采用图片本身宽度，建议设置为图片宽度的1/2，清晰。
             *      height:Number 标签高度，如果不设置，采用图片本身高度，建议设置为图片高度的1/2，清晰。
             *      distance:Number 视距 
             * }
             */
            plugin.addLabel({
                id:100,
                bindData:{name:'jack'},
                position:new BIMI.THREE.Vector3(-2,3.7,-4.5),
                url:'pictures/picturePlugin2.png',
                width:32,
                height:32,
                zoom:false,
                distance:50
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
        height: 200px;
        font-size: 12px;
        padding: 5px;
        overflow:hidden;
        z-index: 1;
    }
</style>
