<template>
    <div class="rootDiv">
        <div class="messageDiv">
            重写构件材质(替换原始材质，即永久材质),之后对构件进行reset()操作，恢复的也是设置的材质
            <br/>
           
        </div>
        <div id="containerDiv" ></div>
            <pre class="line-numbers"><code class="language-js">#代码示范
        replaceStyle(){
            //定义一个材质对象
            let viewer = BIMI.ViewerHelper.getViewer();
            var material =viewer.createLambertMaterial('#0499fd',0.5,true)
            //指定模型id，构件id使用该材质
            viewer.overrideProductsMaterial(1,[430,573],material);
            viewer.isDirty();
        }
</code></pre>
    
    </div>
	
</template>

<script>


export default {
	name: "OverrideProductStyle",
	data() {
		return {
        };
	},
	methods: {
        replaceStyle(){
            //定义一个材质对象
            let viewer = BIMI.ViewerHelper.getViewer();
            var material =viewer.createLambertMaterial('#0499fd',0.5,true)
            //指定模型id，构件id使用该材质
            viewer.overrideProductsMaterial(1,[430,573],material);
            viewer.isDirty();
        }
    },
	mounted() {
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            viewer.load('datas/冷站/bim.bin');
           
			viewer.on("loaded", model => {
                this.replaceStyle();
            });
            viewer.on('pick',event=>{
                console.info(event);
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
        height: 200px;
        font-size: 12px;
        padding: 5px;
        overflow:hidden;
    }
</style>
