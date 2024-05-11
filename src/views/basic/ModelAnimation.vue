<template>
    <div class="rootDiv">
        <div class="messageDiv">
            支持FBX和GLTF/GLB包含的骨骼动画
            <p/>
            测试模型包含的动画列表:
            <el-select v-model="curAction" filterable placeholder="请选择" @change="onChange">
                <el-option v-for="item in actions" :key="item.name" :label="item.name"
                    :value="item.name"></el-option>
            </el-select>
        </div>
        <div id="containerDiv"></div>

         <pre class="line-numbers"><code class="language-js">#代码示范
            viewer.loadGLTF('datas/glb/RobotExpressive.glb').then(event=>{
                //根据事件参数，获得模型对象
                let model = viewer._getModelById(event.modelId);
                if(model)
                {
                    //创建骨骼动画对象
                    let animation = new BIMI.ModelAnimation(model,false,null);

                    //得到动画列表
                    this.actions = animation.actions;
                    //当前使用的动画名称
                    this.curAction = animation.activeAction.name;
                    //启动动画
                    animation.startAnimation();

                    this.animation = animation;
                }
            })

            //停止动画，调用模型对象的ModelAnimation.stopAnimation


</code></pre>
    </div>
	
</template>

<script>


export default {
	name: "modelAnimation",
	data() {
		return {
            animation:null,
            curAction:null,
            actions:[]
        };
	},
	methods: {
        onChange(){
           this.animation.setAction(this.curAction)
        }
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom,{grid:false});

            viewer.loadGLTF('datas/glb/RobotExpressive.glb').then(event=>{
                //根据事件参数，获得模型对象
                let model = viewer._getModelById(event.modelId);
                if(model)
                {
                    //创建骨骼动画对象
                    let animation = new BIMI.ModelAnimation(model,false,null);

                    //得到动画列表
                    this.actions = animation.actions;
                    //当前使用的动画名称
                    this.curAction = animation.activeAction.name;
                    //启动动画
                    animation.startAnimation();

                    this.animation = animation;
                }
            })
            Prism.highlightAll();
        })
         
    },
	beforeDestroy() {
        this.model = null;
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
        height: 350px;
        font-size: 12px;
        padding: 5px;
        overflow: auto;
    }
</style>
