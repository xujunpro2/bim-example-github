<template>
    <div class="rootDiv">
        <div class="messageDiv">
           <el-button  @click="changeTexture">设置贴图</el-button>
        </div>
        <div id="containerDiv"></div>

         <pre class="line-numbers"><code class="language-js">#代码示范
            let viewer = BIMI.ViewerHelper.getViewer();
            viewer.createBasicTextureMaterial('datas/rac_basic_sample_project/984397.png').then(material=>{
                //设置构件新的材质，临时材质
                viewer.setProductsMaterial(1,[10411452],material);
                viewer.isDirty();
            })
</code></pre>
    </div>
	
</template>

<script>


export default {
	name: "SetTexture",
	data() {
		return {
        };
	},
	methods: {
        changeTexture(){
            let viewer = BIMI.ViewerHelper.getViewer();
                /**
                 * 生成一个包含贴图的Basic材质，该材质不受光照的影响
                 * @param {*} imagePath 图片url
                 * @param {*} repeat true为重复填充，false为拉伸填充，默认true
                 * @param {*} side 默认值BIMI.THREE.FrontSide
                 * @param {*} deptTest 深度探测，默认是true
                 * @returns Promise对象
                 */
            viewer.createBasicTextureMaterial('datas/rac_basic_sample_project/984397.png').then(material=>{
                //设置构件新的材质，临时材质
                viewer.setProductsMaterial(1,[10411452],material);
                viewer.isDirty();
            })
        },
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            viewer.load('datas/rac_basic_sample_project/bim.bin');
   
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
        z-index: 100;
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
