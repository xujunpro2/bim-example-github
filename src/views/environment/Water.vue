<template>
    <div class="rootDiv">
        <div id="containerDiv"></div>

        <pre class="line-numbers"><code class="language-js">#代码示范
        addWater(){
            let viewer = BIMI.ViewerHelper.getViewer();
            let jsonStr = ' [{"x":-20.908,"y":7.092,"z":-4.571},{"x":-12.382,"y":6.736,"z":-5.4},{"x":-4.839,"y":6.127,"z":-2.77},{"x":0.903,"y":6.392,"z":0.696},{"x":2.514,"y":6.127,"z":5.714},{"x":-5.442,"y":6.127,"z":10.706},{"x":-11.837,"y":6.127,"z":10.728},{"x":-17.035,"y":6.013,"z":7.376},{"x":-20.578,"y":6.342,"z":5.095},{"x":-22.097,"y":6.736,"z":-0.223}]'
            let json = JSON.parse(jsonStr)
            let plugin = viewer.getPlugin('WaterPlugin');
            if(!plugin)
            {
                plugin = new BIMI.WaterPlugin();
                viewer.addPlugin(plugin);
            }
            let vertices = [];
            json.forEach(item=>{
                vertices.push(new BIMI.THREE.Vector2(item.x,item.z));
            })
            
            /**
             * 添加Water
             * @param {*} vertices 
             * @param {*} options 
             * {
             *      id:Number/String water id
             *      speed: Number 水流速度 默认值1.0
             *      direction: Number 水流方向 取值为1或者-1，默认是1，-1表示反方向
             *      height:Number 水面高程 默认值是0
             * }
             */
            plugin.addWater(vertices,{
                id:123,
                speed:1.0,
                direction:1,
                height:6.15
            })
            viewer.isDirty();
        }          
                    </code></pre>
    </div>
	
</template>

<script>

export default {
	name: "Water",
	data() {
		return {};
	},
	methods: {
        addWater(){
            let viewer = BIMI.ViewerHelper.getViewer();
            let jsonStr = ' [{"x":-20.908,"y":7.092,"z":-4.571},{"x":-12.382,"y":6.736,"z":-5.4},{"x":-4.839,"y":6.127,"z":-2.77},{"x":0.903,"y":6.392,"z":0.696},{"x":2.514,"y":6.127,"z":5.714},{"x":-5.442,"y":6.127,"z":10.706},{"x":-11.837,"y":6.127,"z":10.728},{"x":-17.035,"y":6.013,"z":7.376},{"x":-20.578,"y":6.342,"z":5.095},{"x":-22.097,"y":6.736,"z":-0.223}]'
            let json = JSON.parse(jsonStr)
            let plugin = viewer.getPlugin('WaterPlugin');
            if(!plugin)
            {
                plugin = new BIMI.WaterPlugin();
                viewer.addPlugin(plugin);
            }
            let vertices = [];
            json.forEach(item=>{
                vertices.push(new BIMI.THREE.Vector2(item.x,item.z));
            })
            
            /**
             * 添加Water
             * @param {*} vertices 
             * @param {*} options 
             * {
             *      id:Number/String water id
             *      speed: Number 水流速度 默认值1.0
             *      direction: Number 水流方向 取值为1或者-1，默认是1，-1表示反方向
             *      height:Number 水面高程 默认值是0
             * }
             */
            plugin.addWater(vertices,{
                id:123,
                speed:1.0,
                direction:1,
                height:6.15
            })
            viewer.isDirty();
        }
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            viewer.load('datas/rac_basic_sample_project/bim.bin');
            viewer.on(BIMI.ViewerEvent.LOADED, model => {
                this.addWater();
			});
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
</style>
