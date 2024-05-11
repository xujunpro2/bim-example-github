<template>
    <div class="rootDiv">

        <div id="containerDiv" >
            <div id="panoramicNavigation"></div>
            <div id="ui">
                <button @click="setLayout">变动布局</button>
                <p/>
                重叠模式下全景图透明度：<el-slider v-model="opacity" @input="onChange"></el-slider>
            </div>
        </div>
       
    
    </div>
	
</template>

<script>

var syncControl;
export default {
	name: "SwitchMode",
	data() {
		return {
            opacity:100,
            position: new BIMI.THREE.Vector3(-43.4,16.35,6.291),
            pitch:0,
            yaw:72,
            loaded:false,
            overlay:false,
        };
	},
	methods: {
        setLayout(){
            if(this.loaded)
            {
                this.overlay = !this.overlay;
                syncControl.setLayout(this.overlay);
                
            }
           
        },
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
            syncControl = new BIMI.PanoramicAndSceneSync(containerDiv)
            //初始化控件
            syncControl.init({
                image:'datas/skybox/1235.jpg',
                bim:'datas/半径项目Revit文件/bim.bin' ,
                position:this.position,
                pitch: this.pitch,
                yaw:this.yaw,
            })

            //ElementUI的silder控件有bug，它的input事件在初始化数据绑定的时候也会触发一次，所以我这里加一个标记位
            //全景图和三维模型都加载完毕后的回调事件
            syncControl.on('loaded',modelId=>{
                this.loaded = true;
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
