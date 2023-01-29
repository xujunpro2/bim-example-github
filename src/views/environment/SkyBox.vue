<template>
    <div class="rootDiv">
        <div id="containerDiv"></div>

        <pre class="line-numbers"><code class="language-js">#代码示范
            // options.dir 盒子的纹理贴图目录，默认值是平台自带天空盒资源目录：‘assets/skybox/’
            // options.files 盒子6个面的贴图，顺序为 px nx py ny pz nz，默认值是平台自带的天空盒图片，‘assets/skybox/’目录下的
            var sky = new BIMI.SkyBoxPlugin();
            viewer.addPlugin(sky);
            //大地插件，options.color 大地色，默认是土黄色
            var ground = new BIMI.GroundPlugin();
            viewer.addPlugin(ground);
                    </code></pre>
    </div>
	
</template>

<script>

export default {
	name: "SkyBox",
	data() {
		return {};
	},
	methods: {},
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            viewer.load('datas/rac_basic_sample_project/bim.bin');
            // options.dir 盒子的纹理贴图目录，默认值是平台自带天空盒资源目录：‘assets/skybox/’
            // options.files 盒子6个面的贴图，顺序为 px nx py ny pz nz，默认值是平台自带的天空盒图片，‘assets/skybox/’目录下的
            var sky = new BIMI.SkyBoxPlugin();
            viewer.addPlugin(sky);
            //大地插件，options.color 大地色，默认是土黄色
            var ground = new BIMI.GroundPlugin();
            viewer.addPlugin(ground);
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
