<template>
	<div class="rootDiv">
        <div class="messageDiv">
            <el-button @click="pauseOrPlay">暂停/播放</el-button>
        </div>
        <div id="containerDiv" ></div>
         <pre class="line-numbers"><code class="language-js">#功能说明
		addVideo(){
            let viewer = BIMI.ViewerHelper.getViewer();
            if(viewer)
            {
                let plugin = viewer.getPlugin('HlsPlugin');
                if(plugin == null)
                {
                    plugin  = new BIMI.HlsPlugin();
                    viewer.addPlugin(plugin);
                }
                
                plugin.createVideoMesh({
                    id:1,
                    src:'http://1257120875.vod2.myqcloud.com/0ef121cdvodtransgzp1257120875/3055695e5285890780828799271/v.f230.m3u8',
                    position:new BIMI.THREE.Vector3(7.255,9,0.5),//视频mesh的position,默认(0,0,0)
                    width:6,//视频mesh的宽度,默认16
                    height:3,//视频mesh的高度,默认9
                    lookAtCamera:false,//视频mesh是否始终面向camera,默认false
                })
                //设置这个视频mesh旋转90度，这样正好贴合在墙壁上，看起来像个大屏
                plugin.rotateYClockwise(1,90)
            }  
        },
        pauseOrPlay(){
            let viewer = BIMI.ViewerHelper.getViewer();
            if(viewer)
            {
                let plugin = viewer.getPlugin('HlsPlugin');
                if(plugin)
                {
                    plugin.pauseOrReplay(1);
                }
            }
        }
</code></pre>

    </div>
</template>

<script>

export default {
    name: "HLS",

	data() {
		return {
        };
	},

	methods: {
		addVideo(){
            let viewer = BIMI.ViewerHelper.getViewer();
            if(viewer)
            {
                let plugin = viewer.getPlugin('HlsPlugin');
                if(plugin == null)
                {
                    plugin  = new BIMI.HlsPlugin();
                    viewer.addPlugin(plugin);
                }
                
                plugin.createVideoMesh({
                    id:1,
                    src:'http://1257120875.vod2.myqcloud.com/0ef121cdvodtransgzp1257120875/3055695e5285890780828799271/v.f230.m3u8',
                    position:new BIMI.THREE.Vector3(7.255,9,0.5),//视频mesh的position,默认(0,0,0)
                    width:6,//视频mesh的宽度,默认16
                    height:3,//视频mesh的高度,默认9
                    lookAtCamera:false,//视频mesh是否始终面向camera,默认false
                })
                //设置这个视频mesh旋转90度，这样正好贴合在墙壁上，看起来像个大屏
                plugin.rotateYClockwise(1,90)
            }  
        },
        pauseOrPlay(){
            let viewer = BIMI.ViewerHelper.getViewer();
            if(viewer)
            {
                let plugin = viewer.getPlugin('HlsPlugin');
                if(plugin)
                {
                    plugin.pauseOrReplay(1);
                }
            }
        }
    },

    mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            viewer.load('datas/rac_basic_sample_project/bim.bin');
           
			viewer.on(BIMI.ViewerEvent.LOADED, model => {
                
                // //转到合适的位置
                let bbox = viewer.getProductBbox(1,849032);
                //构件是个墙壁，我们放vedio的地方离墙壁的中心点做个偏移，这样就把target对准vedio的中心点，写死的
                let target = bbox.getCenter( new BIMI.THREE.Vector3() ).sub (new BIMI.THREE.Vector3(0,0,-4.5)) ;
                viewer.zoomToPositionAndTarget(new BIMI.THREE.Vector3(0,9,0.5),target)
                this.addVideo();
                viewer.isDirty();
            });
            viewer.on('pick',event=>{
                var modelId = event.data[0].modelId;
                var productId = event.data[0].productId;
                console.info(productId)
                //viewer.getProductBbox(modelId,productId);
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

 .messageDiv {
     position: absolute;
     top: 5px;
     left: 10px;
     background: rgba(0, 0, 255, 0.3);
     border-radius: 5px;
     color: #fff;
     width: 100px;
     height: 60px;
     font-size: 12px;
     padding: 5px;
     overflow: hidden;
     z-index: 100;
 }

</style>
