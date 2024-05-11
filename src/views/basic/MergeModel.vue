<template>
    <div class="rootDiv">
        <div class="messageDiv">
            合模加载操作，常用于对建模时同属一个坐标系的多个分解模型文件进行合模加载，注意:这不是多个模型同时加载，而是合模加载操作，使用前请先理解BIM中合模的概念。
            <p/>
            鼠标单击BIM构件，弹出模型ID和构件ID。

           
        </div>
        <div id="containerDiv"></div>

         <pre class="line-numbers"><code class="language-js">#代码示范
            viewer.loadMerge( 
                [
                    {
                        url:'datas/合模/柱1/bim.bin',options:{modelId:'myMaster',name:'主模型',location:new BIMI.THREE.Vector3(0,10,0),scale:new BIMI.THREE.Vector3(10,10,10)}
                    },
                    {
                        url:'datas/合模/柱2/bim.bin',options:{modelId:'mySlave1',name:'从模型1'}
                    },
                ]
            ).then(()=>{
                console.info('模型组合加载完毕')
            })

</code></pre>
    </div>
	
</template>

<script>


export default {
	name: "MergeModel",
	data() {
		return {
           stationModelId:-1
        };
	},
	methods: {
       
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            
            viewer.loadMerge( 
                [
                    {
                        url:'datas/合模/柱1/bim.bin',options:{modelId:'myMaster',name:'主模型',location:new BIMI.THREE.Vector3(0,10,0),scale:new BIMI.THREE.Vector3(10,10,10)}
                    },
                    {
                        url:'datas/合模/柱2/bim.bin',options:{modelId:'mySlave1',name:'从模型1'}
                    },
                ]
            ).then(()=>{
                console.info('模型组合加载完毕')
            })

            viewer.on('pick',pickEvent=>{
               var pickObjects = pickEvent.data;
                var modelId = pickObjects[0].modelId;
                var productId = pickObjects[0].productId;
                alert('点击的构件:模型ID-'+modelId+"  构件ID-"+productId)
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
        height: 120px;
        font-size: 12px;
        padding: 5px;
        overflow: auto;
        z-index: 100;
    }
</style>
