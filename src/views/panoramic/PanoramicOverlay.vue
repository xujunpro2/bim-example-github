<template>
    <div class="rootDiv">

        <div id="containerDiv" >
            <div id="panoramicNavigation"></div>
            <div id="ui">
                <el-slider v-model="opacity" @input="onChange"></el-slider>
            </div>
        </div>
       
    
    </div>
	
</template>

<script>

var syncControl;
export default {
	name: "PanoramicOverlay",
	data() {
		return {
           opacity:80,
           position:new BIMI.THREE.Vector3(-43.4,16.35,6.291),
           yaw:72,
           pitch:0,
           loaded:false
        };
	},
	methods: {
       
        onChange(v){
            if(this.loaded)
            {
                //slider控件返回的是100进制数值
                syncControl.setOverlayOpacity(v/100);
            }
            

        },
    },
	mounted() {
        
        this.$nextTick(()=>{
            let containerDiv = document.getElementById('containerDiv');
            //采用覆盖重叠模式
            syncControl = new BIMI.PanoramicAndSceneSync(containerDiv,true)
            //初始化控件
            syncControl.init({
                image:'datas/skybox/1235.jpg',
                bim:'datas/半径项目Revit文件/bim.bin' ,
                defaultQuaternion:{"x":-0.06635499364895026,"y":0.11403174830228421,"z":0.007633527392872102,"w":0.9912292895473359},
                position:this.position,
                pitch: this.pitch,
                yaw:this.yaw,
                level:{
                    containerDiv:document.getElementById('panoramicNavigation'),
                    dataUrl:'datas/半径项目Revit文件/bimi-level-map.json',
                    level:'B1'
                },
                poi:[
                {
                    id:101,
                    name:'地库第一出口',
                    data:
                    {
                        image:'datas/skybox/1235.jpg',
                        bim:'datas/半径项目Revit文件/bim.bin' ,
                        defaultQuaternion:{"x":-0.06635499364895026,"y":0.11403174830228421,"z":0.007633527392872102,"w":0.9912292895473359},
                        position:new BIMI.THREE.Vector3(-43.0,16.55,6.491),
                        pitch: 0,
                        yaw:75
                    }
                },
                {
                    id:102,
                    name:'我的测试位置',
                    data:{
                        image:'datas/skybox/1236.jpg',
                        bim:'datas/半径项目Revit文件/bim.bin' ,
                        defaultQuaternion:{"x":0,"y":0,"z":0,"w":1},
                        position:new BIMI.THREE.Vector3(-45.0,16.55,26.491),
                        pitch: 0,
                        yaw:75,
                    }
                }]
            })

            //ElementUI的silder控件有bug，它的input事件在初始化数据绑定的时候也会触发一次，所以我这里加一个标记位
            //全景图和三维模型都加载完毕后的回调事件
            syncControl.on('loaded',modelId=>{
                this.loaded = true;
                //设置默认的透明度，不设置就是完全不透明
                syncControl.setOverlayOpacity(this.opacity/100);
            })
        })
         
         
    },
	beforeDestroy() {
        if(syncControl)
        {
            syncControl.dispose();
        }
    }
};
</script>

<style scoped>
    #containerDiv {
	    width: 100%;
	    height: 100%;
	}
    #panoramicNavigation{
        position:absolute;
        left: 50px;
        top: 50px;
    }

    #ui{
        position: absolute;
        right: 100px;
        top: 100px;
        width: 200px;
        height: 50px;
        z-index: 10;
    }

</style>
