<template>
    <div class="rootDiv">
        <div id="containerDiv"></div>

         <pre class="line-numbers"><code class="language-js">#代码示范

</code></pre>
    </div>
	
</template>

<script>


export default {
	name: "Load",
	data() {
		return {};
	},
	methods: {
        loadLevelMaps(){
            let viewer = BIMI.ViewerHelper.getViewer();
            let plugin = viewer.getPlugin('NavigationLevelPlugin');
            if(plugin == null)
            {
                plugin  = new BIMI.NavigationLevelPlugin();
                viewer.addPlugin(plugin);
            }
            plugin.loadLevelMaps(1,'datas/半径项目Revit文件/bimi-level-map.json');
            /**
             * 点击楼层地图时，控制三维场景中的相机orbit的参数，包括pitch和yaw角度，高度设置
             * @param {*} prameters 
             * @example 参数对象格式
             * {
             *      pitch: 绕X轴角度，如果设置pitch和yaw，必须两个都设置，单设置一个，不生效
             *      yaw: 绕Y轴角度，如果设置pitch和yaw，必须两个都设置，单设置一个，不生效
             *      verticalFlag: 点击楼层地图时，视角orbit控件的位置高度计算方式，枚举值NavigationLevelPlugin.Vertical_Top、NavigationLevelPlugin.Vertical_Middle、NavigationLevelPlugin.Vertical_Bottom ，默认是NavigationLevelPlugin.Vertical_Middle;
             *      verticalOffset:针对verticalFlag设定的高度微调偏移值
             *      verticalLevelDefine: 如果统一设置verticalFlag和verticalOffset不满足需求，也可以针对某个楼层特殊定义verticalFlag和verticalOffset
             *      {
             *             "1F":
             *              {
             *                  verticalFlag:NavigationLevelPlugin.Vertical_Bottom ,
             *                  verticalOffset:1.3
             *              }
             *              .....
             *      }
             * }
             */
            plugin.setOrbitpPrameters({
                pitch:-10,
                yaw:0,
                verticalLevelDefine:{
                    'B1':{
                        verticalFlag:BIMI.NavigationLevelPlugin.Vertical_TOP ,
                        verticalOffset:-5
                    },
                    '1F':{
                        verticalFlag:BIMI.NavigationLevelPlugin.Vertical_TOP ,
                        verticalOffset:-5
                    }
                }
            })
        },
    },
	mounted() {
        
        this.$nextTick(()=>{
            var dom = document.getElementById('containerDiv');
            var viewer = new BIMI.BimViewer(dom);
            //启用SDK自带的UI套件
            let toolbar = new BIMI.Toolbar(viewer);
           
            //load返回Promise对象
            viewer.load('datas/半径项目Revit文件/bim.bin').then(event=>{
                this.loadLevelMaps();
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
	    height: 100%;
	    overflow: hidden;
	}
</style>
