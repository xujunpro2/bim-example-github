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
                let videoPlugin = viewer.getPlugin('VideoPlugin');
                if(videoPlugin == null)
                {
                    videoPlugin  = new BIMI.VideoPlugin();
                    viewer.addPlugin(videoPlugin);
                }
                
                videoPlugin.createVideoMesh({
                    id:1,
                    src:'/video/test.ogv',
                    position:new BIMI.THREE.Vector3(7.255,9,0.5),//视频mesh的position,默认(0,0,0)
                    width:6,//视频mesh的宽度,默认16
                    height:3,//视频mesh的高度,默认9
                    lookAtCamera:false,//视频mesh是否始终面向camera,默认false
                })
                //设置这个视频mesh旋转90度，这样正好贴合在墙壁上，看起来像个大屏
                videoPlugin.rotateYClockwise(1,90)
            }  
        },
        pauseOrPlay(){
            let viewer = BIMI.ViewerHelper.getViewer();
            if(viewer)
            {
                let videoPlugin = viewer.getPlugin('VideoPlugin');
                if(videoPlugin)
                {
                    videoPlugin.pauseOrReplay(1);
                }
            }
        }
</code></pre>

    </div>
</template>

<script>

export default {
    name: "Video",

	data() {
		return {
        };
	},

	methods: {
		addVideo(){
            let viewer = BIMI.ViewerHelper.getViewer();
            if(viewer)
            {
                let videoPlugin = viewer.getPlugin('VideoPlugin');
                if(videoPlugin == null)
                {
                    videoPlugin  = new BIMI.VideoPlugin();
                    viewer.addPlugin(videoPlugin);
                }
                //目前最新版本的chrome不支持ogv格式的视频了，不过对mp4的支持还是很不错的
                videoPlugin.createVideoMesh({
                    id:1,
                    src:'video/sintel.mp4',
                    position:new BIMI.THREE.Vector3(7.255,9,0.5),//视频mesh的position,默认(0,0,0)
                    width:6,//视频mesh的宽度,默认16
                    height:3,//视频mesh的高度,默认9
                    lookAtCamera:false,//视频mesh是否始终面向camera,默认false
                })
                //设置这个视频mesh旋转90度，这样正好贴合在墙壁上，看起来像个大屏
                videoPlugin.rotateYClockwise(1,90)
            }  
        },
        pauseOrPlay(){
            let viewer = BIMI.ViewerHelper.getViewer();
            if(viewer)
            {
                let videoPlugin = viewer.getPlugin('VideoPlugin');
                if(videoPlugin)
                {
                    videoPlugin.pauseOrReplay(1);
                }
            }
        }
    },

    mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            viewer.load('datas/rac_basic_sample_project/bim.bin').then(model=>{
                // 这段代码目的是为了飞行到面对视频的位置，但建议使用现在更简洁的方式，直接设置相机state数据到合适位置即可
                let bbox = viewer.getProductBbox(1,10849032);
                //构件是个墙壁，我们放vedio的地方离墙壁的中心点做个偏移，这样就把target对准vedio的中心点，写死的
                let target = bbox.getCenter( new BIMI.THREE.Vector3() ).sub (new BIMI.THREE.Vector3(0,0,-4.5)) ;
                viewer.zoomToPositionAndTarget(new BIMI.THREE.Vector3(0,9,0.5),target)

                //加载播放视频
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
