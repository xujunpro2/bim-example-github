<template>
    <div class="rootDiv">
        <div class="messageDiv" v-html="message"></div>
        <div id="containerDiv"></div>

        <pre class="line-numbers"><code class="language-js">#代码示范
        testRayPointPlugin(){
            var viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('RayPointPlugin');
            if(!plugin)
            {
                plugin = new BIMI.RayPointPlugin();
                viewer.addPlugin(plugin);
            }
            //plugin启动为start(),停止是stop()
            plugin.start();
            //注册回调
            plugin.on('click',vec3=>{
                if(vec3)
                {
                    //保留3位小数
                    this.message = '交点坐标:('+ vec3.x.toFixed(3)+','+vec3.y.toFixed(3)+','+vec3.z.toFixed(3)+')';
                }
            })

            //先禁用pick插件
            let pickPlugin = viewer.getPlugin('PickPlugin');
            pickPlugin.enabled = false;
        }</code></pre>
    </div>
	
</template>

<script>


export default {
	name: "RayPoint",
	data() {
		return {
            message:'交点坐标:'
        };
	},
	methods: {
        testRayPointPlugin(){
            var viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('RayPointPlugin');
            if(!plugin)
            {
                plugin = new BIMI.RayPointPlugin();
                viewer.addPlugin(plugin);
            }
            //plugin启动为start(),停止是stop()
            plugin.start();
            //注册回调
            plugin.on('click',vec3=>{
                if(vec3)
                {
                    //保留3位小数
                    this.message = '交点坐标:('+ vec3.x.toFixed(3)+','+vec3.y.toFixed(3)+','+vec3.z.toFixed(3)+')';
                }
            })

            //先禁用pick插件
            let pickPlugin = viewer.getPlugin('PickPlugin');
            pickPlugin.enabled = false;
        },
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            viewer.load('datas/长方体/bim.bin').then(model=>{
                this.testRayPointPlugin();
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
    .messageDiv{
        z-index: 1;
        position: absolute;
        top: 5px;
        left: 10px;
        background:rgba(0, 0, 255, 0.3);
        border-radius: 5px;
        color: #fff;
        width: 250px;
        height: 50px;
        font-size: 12px;
        padding: 5px;
        overflow: auto;
    }
</style>
