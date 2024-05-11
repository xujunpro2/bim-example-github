<template>
    <div class="rootDiv">
        <div id="containerDiv"></div>
        <div id="btnDiv">
            <button @click="mapTransparent">地表透明</button>
            <button @click="noTransparent">取消透明</button>
        </div>
       
    </div>
	
</template>

<script>


export default {
	name: "LoadBim",
	data() {
		return {
            
        };
	},
	methods: {
        addBIM(){
            var viewer = BIMI.ViewerHelper.getViewer();
            viewer.load('datas/rac_basic_sample_project/bim.bin',{
                updateRegion:false,
                modelId:1234,
                latitude:39.90960456049752,
                longitude:116.3972282409668,
                offset:new BIMI.THREE.Vector3(0,-6,0),
                scale:new BIMI.THREE.Vector3(1,1,1),
                rotate:new BIMI.THREE.Vector3(0,0,0)
            })
        },
        //给BIM加一个html label
        addHtmlLabel(){
            var viewer = BIMI.ViewerHelper.getViewer();
            //经纬度转世界坐标，世界坐标的Y值为0
            let vec = BIMI.MapTools.latlngToVector(39.90960456049752,116.3972282409668);
            var plugin = viewer.getPlugin('HtmlLabelPlugin');
            if(!plugin)
            {
                plugin = new BIMI.HtmlLabelPlugin();
                viewer.addPlugin(plugin);
            }
            plugin.addLabel({
                id:100,
                bindData:{name:'我是绑定数据A'},
                position:new BIMI.THREE.Vector3(vec.x,10,vec.z),
                text:'BIM模型',
                fontColor:'#fff',
                backgroundColor:'#485663',
                fontSize:'14px'
            })
        },
        //给BIM加一个图片sprite标记
        addSpritePicture(){
            var viewer = BIMI.ViewerHelper.getViewer();
            let vec = BIMI.MapTools.latlngToVector(39.9096,116.3972);
            var plugin = viewer.getPlugin('SpritePicturePlugin');
            if(!plugin)
            {
                plugin = new BIMI.SpritePicturePlugin();
                viewer.addPlugin(plugin);
            }
            plugin.addLabel({
                id:101,
                bindData:{name:'jack'},
                position:new BIMI.THREE.Vector3(vec.x,20,vec.z),
                url:'pictures/user3-128x128.jpg',
                width:64,
                height:64,
                zoom:false,
                distance:null
            })
        },
       
        noTransparent(){
            var viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('MapPlugin');
            plugin.setMapOpacity(1.0);
        },

        mapTransparent(){
            var viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('MapPlugin');
            plugin.setMapOpacity(0.3);
        },
       
    },
	mounted() {
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom,{alwaysRefresh:true});

            let plugin = viewer.getPlugin('MapPlugin')
            if(plugin == null)
            {
                plugin = new BIMI.MapPlugin();
                viewer.addPlugin(plugin);
            }
            //设置默认视角
            plugin.setDefaultCamera({latitude:39.90960456049752, longitude:116.3972282409668,height:500, pitch:-90,yaw:0});
            viewer.isDirty();
            this.addBIM();
            //this.addSpritePicture()
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
	    height: 100%;
	    overflow: hidden;
	}
    #btnDiv{
        position: absolute;
        left: 20px;
        top: 20px;
        width: 600px;
    }
</style>
