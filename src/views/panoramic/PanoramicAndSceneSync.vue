<template>
    <div class="rootDiv">
        
        <div id="containerDiv" >
            <div id="panoramicNavigation"></div>
        </div>

    </div>
	
</template>

<script>

var syncControl;
export default {
	name: "PanoramicAndSceneSync",
	data() {
		return {
           
        };
	},
	methods: {
      
       
    },
	mounted() {
        
        this.$nextTick(()=>{
            let containerDiv = document.getElementById('containerDiv');
            syncControl = new BIMI.PanoramicAndSceneSync(containerDiv)
            //初始化控件
            syncControl.init({
                image:'datas/skybox/1235.jpg',
                bim:'datas/半径项目Revit文件/bim.bin' ,
                defaultQuaternion:{"x":-0.06635499364895026,"y":0.11403174830228421,"z":0.007633527392872102,"w":0.9912292895473359},
                position:new BIMI.THREE.Vector3(-43.0,16.55,6.491),
                pitch: 0,
                yaw:75,
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

            //POI热点图片click事件可以回调扩展
            syncControl.on('POIClick',poi=>{
                //console.info('hahhah')
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
   #containerDiv{
        width: 100%;
        height: 100%;
        /* background-color: black; */
    } 

    #panoramicNavigation{
        position:absolute;
        left: 50px;
        top: 50px;
    }

</style>
