<template>
    <div class="screenDiv">
        <div class="group-title col_80 px32 f_bold">模型样例</div>
        <el-row :gutter="10">
            <el-col :span="6">
                <screen image="screens/examples/民宅建筑.png" title="rac_basic_sample_project.rvt" href="Design" ></screen>
            </el-col>
            <el-col :span="6">
                <screen image="screens/examples/办公建筑.png" title="Arch Link Model.rvt" href="ArchLink" ></screen>
            </el-col>
            <el-col :span="6">
                <screen image="screens/examples/机械模型.png" title="机电房设备.rvt" href="Machine" ></screen>
            </el-col>
            <el-col :span="6">
                <screen image="screens/examples/科技感着色.png" title="KZJ厂区一期.rvt" href="KZJ" ></screen>
            </el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="6">
                <screen image="screens/examples/IDC机房.png" title="上海电信IDC机房.rvt" href="IDC" ></screen>
            </el-col>
            <el-col :span="6">
                <screen image="screens/examples/厦门天马路地下管廊.png" title="厦门天马路地下管廊.rvt" href="Pipe" ></screen>
            </el-col>
            <el-col :span="6">
                <screen image="screens/examples/TeKa.png" title="TeKa中心.ifc" href="TeKa" ></screen>
            </el-col>
            <el-col :span="6">
                <screen image="screens/examples/奔牛水利枢纽工程.png" title="奔牛水利枢纽工程.ifc" href="BenLiu" ></screen>
            </el-col>
        </el-row>
         <el-row :gutter="10">
            <el-col :span="6">
                <screen image="screens/examples/一期地下室机电.png" title="一期地下室机电.rvt" href="ZouMeng" ></screen>
            </el-col>
            <el-col :span="6">
                <screen image="screens/examples/学生宿舍机电.png" title="学生宿舍机电模型.rvt" href="Student" ></screen>
            </el-col>
            <el-col :span="6">
                <screen image="screens/examples/德化陶瓷艺术城.png" title="德化国际陶瓷艺术城.rvt" href="DeHua" ></screen>
            </el-col>
            <el-col :span="6">
                <screen image="screens/examples/金鹏.png" title="金鹏控股总部大楼.rvt" href="JingPeng" ></screen>
            </el-col>
        </el-row>

        
        
        <div class="group-title col_80 px32 f_bold">基础功能</div>
        <el-row :gutter="10">
            <el-col :span="6">
                <screen image="screens/1.jpg" title="加载模型" href="LoadBim" ></screen>
            </el-col>
            <el-col :span="6">
                <screen image="screens/2.jpg" title="加载事件" href="LoadEvent" ></screen>
            </el-col>
            <el-col :span="6">
                <screen image="screens/multiModel.png" title="加载多个模型" href="MultiModel" ></screen>
            </el-col>
            <el-col :span="6">
                <screen image="screens/rightMenu.png" title="右键菜单" href="RightMenu" ></screen>
            </el-col>
           
        </el-row>
        <el-row :gutter="10">
             <el-col :span="6">
                <screen image="screens/3.jpg" title="构件拾取" href="Pick" ></screen>
            </el-col>
            <el-col :span="6">
                <screen image="screens/4.jpg" title="构件聚焦" href="ZoomTo" ></screen>
            </el-col>
            <el-col :span="6">
                <screen image="screens/5.png" title="构件隐藏/显示" href="Visible" ></screen>
            </el-col>
            <el-col :span="6">
                <screen image="screens/6.png" title="设置构件颜色" href="Color" ></screen>
            </el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="6">
                <screen image="screens/7.png" title="设置相机位置" href="CameraPosition" ></screen>
            </el-col>
            <el-col :span="6">
                <screen image="screens/8.png" title="框选构件" href="SelectionBox" ></screen>
            </el-col>
            <el-col :span="6">
                <screen image="screens/15.png" title="方向指示器" href="NavCube" ></screen>
            </el-col>
            <el-col :span="6">
                <screen image="screens/clip.JPG" title="剖切" href="Clip" ></screen>
            </el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="6">
                <screen image="screens/BoxClip.png" title="剖切盒" href="FirstPerson" ></screen>
            </el-col>
            <el-col :span="6">
                <screen image="screens/gltf.png" title="融合GLTF模型" href="GLTF" ></screen>
            </el-col>
        </el-row>
        
        <div class="group-title col_80 px32 f_bold">标签标记</div>
        <el-row :gutter="10">
            <el-col :span="6">
                <screen image="screens/9.png" title="二维标签" href="HtmlLabel" ></screen>
            </el-col>
            <el-col :span="6">
                <screen image="screens/11.png" title="锚定标签" href="HtmlAnchorLabel" ></screen>
            </el-col>
            <el-col :span="6">
                <screen image="screens/12.png" title="标记标签" href="HtmlMarker" ></screen>
            </el-col>
             <el-col :span="6">
                <screen image="screens/10.png" title="三维标签" href="SpriteLabel" ></screen>
            </el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="6">
                <screen image="screens/pictureSprite.png" title="三维图片" href="SpritePicture" ></screen>
            </el-col>
            <el-col :span="6">
                <screen image="screens/domSprite.png" title="三维Dom" href="SpriteDom" ></screen>
            </el-col>
            <el-col :span="6">
                <screen image="screens/billboard.png" title="广告牌" href="Billboard" ></screen>
            </el-col>
        </el-row>

        <div class="group-title col_80 px32 f_bold">样式</div>
        <el-row :gutter="10">
            <el-col :span="6">
                <screen image="screens/14.png" title="显示模式" href="ModeStyle" ></screen>
            </el-col>
            <el-col :span="6">
                <screen image="screens/replaceStyle.png" title="替换构件材质" href="OverrideProductStyle" ></screen>
            </el-col>
            <el-col :span="6">
                <screen image="screens/updateStyleByType.png" title="按类型替换构件样式" href="UpdateStyleByType" ></screen>
            </el-col>
            <el-col :span="6">
                <screen image="screens/productEdge.png" title="构件边框" href="ProductEdge" ></screen>
            </el-col>
        </el-row>

        <div class="group-title col_80 px32 f_bold">动画</div>
        <el-row :gutter="10">
            <el-col :span="6">
                <screen image="screens/13.png" title="构件透明" href="TweenTransparent" ></screen>
            </el-col>
            <el-col :span="6">
                <screen image="screens/16.png" title="构件闪烁" href="Flash" ></screen>
            </el-col>
            <el-col :span="6">
                <screen image="screens/17.png" title="构件移动" href="Translate" ></screen>
            </el-col>
            <el-col :span="6">
                <screen image="screens/rotate.png" title="构件旋转" href="Rotate" ></screen>
            </el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="6">
                <screen image="screens/explodeLevel.png" title="楼层分解" href="ExplodeLevel" ></screen>
            </el-col>
            <el-col :span="6">
                <screen image="screens/explodeModel.png" title="模型爆炸" href="ExplodeModel" ></screen>
            </el-col>
        </el-row>

        <div class="group-title col_80 px32 f_bold">漫游</div>
        <el-row :gutter="10">
            <el-col :span="6">
                <screen image="screens/fly.png" title="飞行漫游" href="Fly" ></screen>
            </el-col>
            <el-col :span="6">
                <screen image="screens/pathRoaming.png" title="路径漫游" href="PathRoaming" ></screen>
            </el-col>
            <el-col :span="6">
                <screen image="screens/fps.png" title="FPS漫游" href="Fps" ></screen>
            </el-col>
            <el-col :span="6">
                <screen image="screens/man.png" title="第三人称视角漫游" href="Man" ></screen>
            </el-col>
        </el-row>

        <div class="group-title col_80 px32 f_bold">环境</div>
        <el-row :gutter="10">
            <el-col :span="6">
                <screen image="screens/太阳.png" title="太阳" href="Sun" ></screen>
            </el-col>
            <el-col :span="6">
                <screen image="screens/下雨.png" title="下雨" href="Rain" ></screen>
            </el-col>
            <el-col :span="6">
                <screen image="screens/snow.png" title="下雪" href="Snow" ></screen>
            </el-col>
            <el-col :span="6">
                <screen image="screens/Fog.png" title="雾天" href="Fog" ></screen>
            </el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="6">
                <screen image="screens/天空盒.png" title="天空盒" href="SkyBox" ></screen>
            </el-col>
        </el-row>

        
        <div class="group-title col_80 px32 f_bold">特效</div>
        <el-row :gutter="10">
            <el-col :span="6">
                <screen image="screens/flow.png" title="管道流向" href="TubeFlow" ></screen>
            </el-col>
            <el-col :span="6">
                <screen image="screens/Outline.png" title="轮廓光线" href="Outline" ></screen>
            </el-col>
            <el-col :span="6">
                <screen image="screens/unrealbloom.png" title="辉光" href="UnrealBloom" ></screen>
            </el-col>
        </el-row>
  </div>
</template>

<script>
import Screen from './Screen'
export default {
    name: "Dashbord",
    components: {Screen},
    data() {
        return {
        
        };
    },

    methods: {
        
    },
    mounted() {
    
    }
};
</script>

<style scoped>
    .group-title {
        margin-bottom: 30px;
        padding-top: 10px;
    }
    .f_bold {
        font-weight: 800;
    }
    .col_80 {
        color: #808797;
    }
    .px32 {
        font-size: 32px;
    }
</style>
