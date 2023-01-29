<template>
    <div class="rootDiv">
        <div id="containerDiv"></div>

        <pre class="line-numbers"><code class="language-js">#代码示范
//options.background 背景色 建议使用深色，效果会更好,默认背景是黑色
//options.position 太阳的位置，Vector3
let sun = new BIMI.SunPlugin({position:new BIMI.THREE.Vector3(-50, 50, -50)});
viewer.addPlugin(sun);
</code></pre>
    </div>
	
</template>

<script>

export default {
	name: "Sum",
	data() {
		return {};
	},
	methods: {},
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            viewer.load('datas/rac_basic_sample_project/bim.bin');
            let sun = new BIMI.SunPlugin({position:new BIMI.THREE.Vector3(-50, 50, -50)});
            viewer.addPlugin(sun);
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
