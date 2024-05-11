<template>
    <div class="rootDiv">
        <div id="containerDiv"></div>

         <pre class="line-numbers"><code class="language-js">#代码示范
//设置BimViewer的dom容器
var dom = document.getElementById('containerDiv');
//创建核心类BimViewer,SDK所有的class都以BIMI为前缀
var viewer = new BIMI.BimViewer(dom);

//启用SDK自带的UI套件
let toolbar = new BIMI.Toolbar(viewer);
//启用操作阻尼效果
viewer.enableDamping(true,0.08)
//加载轻量化数据文件
//load返回Promise对象
viewer.load('datas/长方体/bim.bin').then(event=>{
    console.info(event);
});

//如果是VUE/React技术的单页应用,需要在页面销毁的时候释放资源
beforeDestroy() {
    //不要把BimViewer对象保持在Vue的data binding属性中,SDK针对Vue/React提供了ViewerHelper，
    //通过静态函数getViewer()可以获得当前BimViewer对象
    var viewer = BIMI.ViewerHelper.getViewer();
    if(viewer)
    {
        viewer.dispose();
    }
}

//卸载某个模型
viewer.unload(模型ID); 
</code></pre>
    </div>
	
</template>

<script>


export default {
	name: "Load",
	data() {
		return {};
	},
	methods: {},
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            //启用SDK自带的UI套件
            let toolbar = new BIMI.Toolbar(viewer);
            //启用操作阻尼效果
            viewer.enableDamping(true,0.08)
            //load返回Promise对象
            viewer.load('datas/长方体/bim.bin').then(event=>{
                console.info(event);
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
