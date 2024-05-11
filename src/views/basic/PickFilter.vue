<template>
    <div class="rootDiv">
        <div class="messageDiv" v-html="message"></div>
        <div id="containerDiv"></div>

         <pre class="line-numbers"><code class="language-js">#代码示范
//拾取过滤通常用于需要屏蔽某些构件，同时重点突出某些构件的场景，通过过滤，可以设定某些构件才能被Pick
//建议在LOADED事件之后再设置
viewer.on(BIMI.ViewerEvent.LOADED,model=>{
    let viewer = BIMI.ViewerHelper.getViewer();
    //设置模型全部透明
    viewer.setTransparentModel(1);//因为load的时候没有指定modelId,那么这里应该就是1了（bad smell）
    //保留几个用于测试的构件
    viewer.resetProductsMaterial(1,[736435, 735739,981963,987167,701300]);

    //设置Pick过滤
    let plugin = viewer.getPlugin('PickPlugin');
    //这个是为了方便测试，先设置整个model都不可pick
    plugin.addFilterProductIdsByModel(1);
    //然后将可以pick的排除掉
    plugin.removeFilterProductIds(1,[736435, 735739,981963,987167,701300])
    viewer.isDirty();
})
</code></pre>
    </div>
	
</template>

<script>


export default {
	name: "PickFilter",
	data() {
		return {
            message:'鼠标左键单击模型构件<br/>事件消息:'
        };
	},
	methods: {
        setPickFilter(){
            let viewer = BIMI.ViewerHelper.getViewer();
            //设置模型全部透明
            viewer.setTransparentModel(1);//因为load的时候没有指定modelId,那么这里应该就是1了（bad smell）
            //保留几个用于测试的构件
            viewer.resetProductsMaterial(1,[10736435, 10735739,10981963,10987167,10701300]);

            //设置Pick过滤
            let plugin = viewer.getPlugin('PickPlugin');
            //这个是为了方便测试，先设置整个model都不可pick
            plugin.addFilterProductIdsByModel(1);
            //然后将可以pick的排除掉
            plugin.removeFilterProductIds(1,[10736435, 10735739,10981963,10987167,10701300])
            viewer.isDirty();
        },
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            viewer.load('datas/rac_basic_sample_project/bim.bin');
            viewer.on(BIMI.ViewerEvent.LOADED,model=>{
                this.setPickFilter();
            })
            viewer.on(BIMI.ViewerEvent.PICK,pickEvent=>{
                var source = pickEvent.source;
                if(source === 'bim')
                {
                    var pickObjects = pickEvent.data;
                    this.message = '鼠标左键单击模型构件<br/>事件消息:模型ID '+pickObjects[0].modelId+"  构件ID "+pickObjects[0].productId
                }
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
        width: 250px;
        height: 50px;
        font-size: 12px;
        padding: 5px;
        overflow: auto;
    }
</style>
