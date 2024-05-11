<template>
    <div class="rootDiv">

        <div id="containerDiv" >
            
        </div>
        <div class="messageDiv">
            <el-row>
                <el-col :span="2">位置：</el-col>
                <el-col :span="7"><el-input-number v-model="position.x" @change="update" :step="0.01" size="mini"></el-input-number></el-col>
                <el-col :span="7"><el-input-number v-model="position.y" @change="update" :step="0.01" size="mini"></el-input-number></el-col>
                <el-col :span="7"><el-input-number v-model="position.z" @change="update" :step="0.01" size="mini"></el-input-number></el-col>
            </el-row>
            <el-row>
               <el-col :span="2">pitch：</el-col>
               <el-col :span="16"><el-slider v-model="pitch" :min="0" :max="360" @input="update()"></el-slider></el-col>
            </el-row>
            <el-row>
               <el-col :span="2">yaw：</el-col>
               <el-col :span="16"><el-slider v-model="yaw" :min="0" :max="360" @input="update()"></el-slider></el-col>
            </el-row>
            <el-row>
                <el-col :span="2">透明度：</el-col>
                <el-col :span="16"> <el-slider v-model="opacity" @input="onOpacityChange"></el-slider></el-col>
            </el-row>
        </div>
    </div>
	
</template>

<script>

var syncControl;
export default {
	name: "SetPosition",
	data() {
		return {
            opacity:50,
            loaded:false,
            defaultQuaternion:{"x":-0.06635499364895026,"y":0.11403174830228421,"z":0.007633527392872102,"w":0.9912292895473359},
            position: new BIMI.THREE.Vector3(-43.4,16.35,6.291),
            pitch:0,
            yaw:72,
        };
	},
	methods: {
        update(){
            //全景图和模型都加载完毕后，才能做操作
            if(!this.loaded)
            {
                return;
            }
            let defaultQuaternion = {"x":0,"y":0,"z":0,"w":1};//这个一般不用调
            let position = this.position;
            let pitch = this.pitch;
            let yaw = this.yaw;
            //修改全景图的开场默认视角四元数
            //syncControl.setPanoramicDefaultQuaternion(defaultQuaternion);
            //修改三维场景的位置、pitch绕X轴俯仰角、yaw绕Y轴旋转角
            syncControl.setPositionPitchYaw(position,pitch,yaw);
            //修改后需要更新一下
            syncControl.updateOrbit();
        },
       
        onOpacityChange(v){
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
            syncControl = new BIMI.PanoramicAndSceneSync(containerDiv,true)
            //初始化控件
            syncControl.init({
                image:'datas/skybox/1235.jpg',
                bim:'datas/半径项目Revit文件/bim.bin' ,
                defaultQuaternion:this.defaultQuaternion,
                position:this.position,
                pitch: this.pitch,
                yaw:this.yaw
            })
            //全景图和bim模型都加载完毕后，才可以开始修改定位数据
            syncControl.on('loaded',modelId=>{
                console.info('全景图和模型都加载完毕了');
                this.loaded = true;
                //设置默认的透明度，不设置就是完全不透明
                syncControl.setOverlayOpacity(this.opacity/100);
            })
        })
         
    },
	beforeDestroy() {
        syncControl.dispose();
    }
};
</script>

<style scoped>
   #containerDiv{
        width: 100%;
        height: 100%;
    } 
    .messageDiv{
        position: absolute;
        right: 10px;
        top: 10px;
        background:rgba(0, 0, 255, 0.3);
        border-radius: 5px;
        color: #fff;
        width: 500px;
        height: 250px;
        font-size: 12px;
        padding: 5px;
        overflow: auto;
        z-index: 100;
    }
    
</style>
