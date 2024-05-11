<template>
    <div class="rootDiv">
        <div class="messageDiv" v-html="message"></div>
        <div id="containerDiv" ></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
        FencePluginTest(){
            let viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('FencePlugin');
            if(!plugin)
            {
                plugin = new BIMI.FencePlugin();
                plugin.animation = true;//电子围栏是否需要闪烁的动画效果，开启后会增加性能开销
                viewer.addPlugin(plugin);
            }
            /**
             * 添加一个多边形结构的电子围栏
             * @param {*} options 
             * id:Number/String 围栏ID
             * points:Array 围栏底座的一组Vector3,注意首尾要重合形成闭环
             * height:Number 围栏高度
             * color1:String 围栏底部颜色
             * color2:String 围栏顶部颜色 
             * opacity:Numher 围栏不透明度
             */
            plugin.addPolygonFence({
                id:1234,
                points:[
                    new BIMI.THREE.Vector3(-5,0,-5),
                    new BIMI.THREE.Vector3(5,0,-5),
                    new BIMI.THREE.Vector3(5,0,5),
                    new BIMI.THREE.Vector3(-5,0,5),
                    new BIMI.THREE.Vector3(-8,0,1),
                ],
                height:2,
                color1:'#ff0000',
                color2:'#ffffff',
                opacity:0.8
            });

            let air = this.airMesh;

            setInterval(() => {
                air.position.x = air.position.x + 0.1;
                let result = plugin.validateBox([air]);
                let fence = result.get(air);
                if(fence)
                {
                    this.message = '飞机进入电子围栏(围栏ID:'+fence.id+')'
                }
                else
                {
                    this.message = '飞机在电子围栏外面'
                }
                viewer.isDirty();
            }, 100); 
        },
</code></pre>
    
    </div>
	
</template>

<script>



export default {
	name: "Fence",
	data() {
		return {
            airMesh:null,
            message:'飞机在电子围栏外面',
        };
	},
	methods: {
        FencePluginTest(){
            let viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('FencePlugin');
            if(!plugin)
            {
                plugin = new BIMI.FencePlugin();
                plugin.animation = true;//电子围栏是否需要闪烁的动画效果，开启后会增加性能开销
                viewer.addPlugin(plugin);
            }
            /**
             * 添加一个多边形结构的电子围栏
             * @param {*} options 
             * id:Number/String 围栏ID
             * points:Array 围栏底座的一组Vector3,注意首尾要重合形成闭环
             * height:Number 围栏高度
             * color1:String 围栏底部颜色
             * color2:String 围栏顶部颜色 
             * opacity:Numher 围栏不透明度
             */
            plugin.addPolygonFence({
                id:1234,
                points:[
                    new BIMI.THREE.Vector3(-5,0,-5),
                    new BIMI.THREE.Vector3(5,0,-5),
                    new BIMI.THREE.Vector3(5,0,5),
                    new BIMI.THREE.Vector3(-5,0,5),
                    new BIMI.THREE.Vector3(-8,0,1),
                ],
                height:4,
                color1:'#ff0000',
                color2:'#ffffff',
                opacity:0.8
            });

            let air = this.airMesh;
            //每隔100毫秒，让飞机位置移动一点，并且验证一下飞机是否在电子围栏内
            setInterval(() => {
                //移动飞机位置
                air.position.x = air.position.x + 0.1;
                //判断飞机是否在围栏内部，参数是一组mesh对象
                let result = plugin.validateBox([air]);
                //判断结果是个Map，key是mesh,value是bool
                let fence = result.get(air);
                if(fence)
                {
                    this.message = '飞机进入电子围栏(围栏ID:'+fence.id+')'
                }
                else
                {
                    this.message = '飞机在电子围栏外面'
                }
                viewer.isDirty();
            }, 100); 
        },
        getAirMesh(){
            let viewer = BIMI.ViewerHelper.getViewer();
            //获得glb模型中的飞机mesh对象，并设置好scale和postion
            var product = viewer.getProduct(1,'Cesium_Air');
            if(product)
            {
                var meshs = product.meshs;
                let airMesh = meshs[0];
                airMesh.scale.set(0.2,0.2,0.2)
                airMesh.position.set(-12,1,0);
                return airMesh;
            }
        },
       
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            let viewer = new BIMI.BimViewer(dom,{grid:true,debug:true,loading:true,enableInstancedMesh:true});
            viewer.loadGLTF('datas/glb/Cesium_Air.glb');
            viewer.on(BIMI.ViewerEvent.LOADED,event=>{
                this.airMesh = this.getAirMesh();
                this.FencePluginTest();
            })
            viewer.on(BIMI.ViewerEvent.PICK,event=>{
                console.info(event)
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
        height: 100px;
        font-size: 12px;
        padding: 5px;
        overflow: auto;
    }
</style>
