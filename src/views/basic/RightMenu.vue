<template>
    <div class="rootDiv">
        <div class="messageDiv">
            通过监听BimViewer的contextmenu事件，可实现自定义菜单,右键快速短击才会触发该事件
            <br/>
            右键菜单需要开发者开发，平台会在contextmenu事件中返回mouseEvent,
            通过mouseEvent可拿到当前鼠标点击位置，从而可以让开发者决定自定义右键菜单Div放置的屏幕位置
        </div>
        <div id="containerDiv"></div>

        <pre class="line-numbers"><code class="language-js">#代码示范
 viewer.on('contextmenu',contextEvent=>{
    var mouseEvent = contextEvent.mouseEvent
    var clientX = mouseEvent.clientX;
    var clientY = mouseEvent.clientY;
    alert('右键菜单事件,鼠标clientX:'+clientX+" clientY:"+clientY)
})
</code></pre>
    </div>
	
</template>

<script>

export default {
	name: "RightMenu",
	data() {
		return {
           
        };
	},
	methods: {},
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            viewer.load('datas/代码测试用/bim.bin');
            
            viewer.on('contextmenu',contextEvent=>{
                var mouseEvent = contextEvent.mouseEvent
                var clientX = mouseEvent.clientX;
                var clientY = mouseEvent.clientY;
                alert('右键菜单事件,鼠标clientX:'+clientX+" clientY:"+clientY)
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
        height: 150px;
        font-size: 12px;
        padding: 5px;
        overflow: auto;
    }
</style>
