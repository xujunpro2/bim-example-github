
import Layout from '@/layout'


/**
 * Note: 考虑到权限控制的简洁，现在导航菜单只支持2级,并且注意path全局唯一
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */


export const constantRoutes = [
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [{
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '总览', icon: 'list' }
        }]
    },
    {
        path: '/example',
        component: Layout,
        redirect: 'noRedirect',
        meta: { title: '模型样例', icon: 'example' },
        alwaysShow:false,
        hidden: true,
        children: [
            {
                path: 'design',
                name: 'Design',
                component: () => import('@/views/example/Design'),
                meta: { title: '民宅建筑' },
                hidden: true 
            },
            {
                path: 'archLink',
                name: 'ArchLink',
                component: () => import('@/views/example/ArchLinkModel'),
                meta: { title: '办公建筑' },
                hidden: true 
            },
            {
                path: 'kzj',
                name: 'KZJ',
                component: () => import('@/views/example/KZJ'),
                meta: { title: '科技感着色' },
                hidden: true 
            },
            {
                path: 'machine',
                name: 'Machine',
                component: () => import('@/views/example/Machine'),
                meta: { title: '机械模型' },
                hidden: true 
            },
            {
                path: 'idc',
                name: 'IDC',
                component: () => import('@/views/example/IDC'),
                meta: { title: 'IDC机房(bimface比较)' },
                hidden: true 
            },
            {
                path: 'pipe',
                name: 'Pipe',
                component: () => import('@/views/example/Pipe'),
                meta: { title: '管廊' },
                hidden: true 
            },
            {
                path: 'teka',
                name: 'TeKa',
                component: () => import('@/views/example/TeKa'),
                meta: { title: 'TeKa会议中心' },
                hidden: true 
            },
            {
                path: 'benliu',
                name: 'BenLiu',
                component: () => import('@/views/example/BenLiu'),
                meta: { title: '水利工程' },
                hidden: true 
            },
            {
                path: 'zoumeng',
                name: 'ZouMeng',
                component: () => import('@/views/example/ZouMeng'),
                meta: { title: '一期地下室机电' },
                hidden: true 
            },
            {
                path: 'student',
                name: 'Student',
                component: () => import('@/views/example/Student'),
                meta: { title: '学生宿舍机电模型' },
                hidden: true 
            },
            {
                path: 'dehua',
                name: 'DeHua',
                component: () => import('@/views/example/DeHua'),
                meta: { title: '陶瓷城' },
                hidden: true 
            },
            {
                path: 'jingpeng',
                name: 'JingPeng',
                component: () => import('@/views/example/JingPeng'),
                meta: { title: '大楼' },
                hidden: true 
            },
        ]
    },
    {
        path: '/basic',
        component: Layout,
        redirect: 'noRedirect',
        meta: { title: '基础功能', icon: 'guide' },
        alwaysShow:true,
        children: [
            {
                path: 'load',
                name: 'Load',
                component: () => import('@/views/basic/Load'),
                meta: { title: '加载模型' }
            },
            {
                path: 'loadEvent',
                name: 'LoadEvent',
                component: () => import('@/views/basic/LoadEvent'),
                meta: { title: '加载事件' }
            },
            {
                path: 'rightmenu',
                name: 'RightMenu',
                component: () => import('@/views/basic/RightMenu'),
                meta: { title: '右键事件' }
            },
            {
                path: 'merge',
                name: 'MergeModel',
                component: () => import('@/views/basic/MergeModel'),
                meta: { title: '合模' }
            },
            {
                path: 'pick',
                name: 'Pick',
                component: () => import('@/views/basic/Pick'),
                meta: { title: '构件拾取' }
            },
            {
                path: 'pickFilter',
                name: 'PickFilter',
                component: () => import('@/views/basic/PickFilter'),
                meta: { title: '构件拾取过滤' }
            },
           
            {
                path: 'visible',
                name: 'Visible',
                component: () => import('@/views/basic/Visible'),
                meta: { title: '构件隐藏' }
            },
            {
                path: 'color',
                name: 'Color',
                component: () => import('@/views/basic/Color'),
                meta: { title: '构件颜色' }
            },
           
            {
                path: 'selectionBox',
                name: 'SelectionBox',
                component: () => import('@/views/basic/SelectionBox'),
                meta: { title: '框选构件' }
            },
            {
                path: 'navCube',
                name: 'NavCube',
                component: () => import('@/views/basic/NavCube'),
                meta: { title: '方向指示器' }
            },
            {
                path: 'clip',
                name: 'Clip',
                component: () => import('@/views/basic/Clip'),
                meta: { title: '剖切' }
            },
            {
                path: 'boxClip',
                name: 'BoxClip',
                component: () => import('@/views/basic/BoxClip'),
                meta: { title: '剖切盒' }
            },
            {
                path: 'rotateScene',
                name: 'RotateScene',
                component: () => import('@/views/basic/RotateScene'),
                meta: { title: '场景自动旋转' }
            },
            {
                path: 'gltf',
                name: 'GLTF',
                component: () => import('@/views/basic/GLTF'),
                meta: { title: 'GLTF模型' }
            },
            {
                path: 'modelAnimation',
                name: 'ModelAnimation',
                component: () => import('@/views/basic/ModelAnimation'),
                meta: { title: '骨骼动画' }
            },
            {
                path: 'annotation',
                name: 'Annotation',
                component: () => import('@/views/basic/Annotation'),
                meta: { title: '批注' }
            },
            {
                path: 'map',
                name: 'Map',
                component: () => import('@/views/basic/NavigationMap'),
                meta: { title: '导航图' }
            },
            {
                path: 'levelMap',
                name: 'NavigationLevelMap',
                component: () => import('@/views/basic/NavigationLevelMap'),
                meta: { title: '楼层导航图' }
            },
        ]
    },
    {
        path: '/camera',
        component: Layout,
        redirect: 'noRedirect',
        meta: { title: '相机视角', icon: 'eye-open' },
        alwaysShow:true,
        children: [
            {
                path: 'zoomTo',
                name: 'ZoomTo',
                component: () => import('@/views/camera/ZoomTo'),
                meta: { title: '聚焦构件' }
            },
            {
                path: 'zoomToAndCustomAngle',
                name: 'ZoomToAndCustomAngle',
                component: () => import('@/views/camera/ZoomToAndCustomAngle'),
                meta: { title: '聚焦构件并指定角度' }
            },
            {
                path: 'zoomToMutilProducts',
                name: 'ZoomToMutilProducts',
                component: () => import('@/views/camera/ZoomToMutilProducts'),
                meta: { title: '聚焦多个构件' }
            },
            {
                path: 'zoomToLevel',
                name: 'ZoomToLevel',
                component: () => import('@/views/camera/ZoomToLevel'),
                meta: { title: '聚焦层高' }
            },
            {
                path: 'zoomToModel',
                name: 'ZoomToModel',
                component: () => import('@/views/camera/ZoomToModel'),
                meta: { title: '聚焦模型' }
            },
            {
                path: 'cameraPosition',
                name: 'CameraPosition',
                component: () => import('@/views/camera/CameraPosition'),
                meta: { title: '相机初始位置' }
            },
            {
                path: 'cameraFly',
                name: 'CameraFly',
                component: () => import('@/views/camera/CameraFly'),
                meta: { title: '飞行定位' }
            }
        ]
    },
    // {
    //     path: '/panoramic',
    //     component: Layout,
    //     redirect: 'noRedirect',
    //     meta: { title: '全景图联动', icon: 'edit' },
    //     alwaysShow:true,
    //     children: [
    //         {
    //             path: 'panoramicLabel',
    //             name: 'PanoramicLabel',
    //             component: () => import('@/views/panoramic/PanoramicLabel'),
    //             meta: { title: '全景图添加标签' }
    //         },
    //         {
    //             path: 'panoramicAndSceneSync',
    //             name: 'PanoramicAndSceneSync',
    //             component: () => import('@/views/panoramic/PanoramicAndSceneSync'),
    //             meta: { title: '全景和三维视角同步' }
    //         },
    //         {
    //             path: 'panoramicOverlay',
    //             name: 'PanoramicOverlay',
    //             component: () => import('@/views/panoramic/PanoramicOverlay'),
    //             meta: { title: '全景和三维重叠' }
    //         },
    //         {
    //             path: 'setPosition',
    //             name: 'SetPosition',
    //             component: () => import('@/views/panoramic/SetPosition'),
    //             meta: { title: '校正位置' }
    //         },
    //         {
    //             path: 'switchMode',
    //             name: 'SwitchMode',
    //             component: () => import('@/views/panoramic/SwitchMode'),
    //             meta: { title: '分屏与重叠模式切换' }
    //         }
    //     ]
    // },
    {
        path: '/label',
        component: Layout,
        redirect: 'noRedirect',
        meta: { title: '标签标记', icon: 'edit' },
        alwaysShow:true,
        children: [
            {
                path: 'htmlLabel',
                name: 'HtmlLabel',
                component: () => import('@/views/label/HtmlLabel'),
                meta: { title: '二维标签' }
            },
            {
                path: 'htmlIconLabel',
                name: 'HtmlIconLabel',
                component: () => import('@/views/label/HtmlIconLabel'),
                meta: { title: 'iconfont标签' }
            },
            {
                path: 'htmlAnchorLabel',
                name: 'HtmlAnchorLabel',
                component: () => import('@/views/label/HtmlAnchorLabel'),
                meta: { title: '锚定标签' }
            },
            {
                path: 'htmlDom',
                name: 'HtmlDom',
                component: () => import('@/views/label/HtmlDom'),
                meta: { title: '自定义标签' }
            },
            {
                path: 'htmlMarker',
                name: 'HtmlMarker',
                component: () => import('@/views/label/HtmlMarker'),
                meta: { title: '标记标签' }
            },
            {
                path: 'spriteLabel',
                name: 'SpriteLabel',
                component: () => import('@/views/label/SpriteLabel'),
                meta: { title: '三维标签' }
            },
            {
                path: 'picture',
                name: 'SpritePicture',
                component: () => import('@/views/label/SpritePicture'),
                meta: { title: '三维图片' }
            },
            {
                path: 'spriteDom',
                name: 'SpriteDom',
                component: () => import('@/views/label/SpriteDom'),
                meta: { title: '三维DOM' }
            },
            {
                path: 'billboard',
                name: 'Billboard',
                component: () => import('@/views/label/Billboard'),
                meta: { title: '广告牌' }
            },
            {
                path: 'cluster',
                name: 'ClusterLabel',
                component: () => import('@/views/label/ClusterLabel'),
                meta: { title: '标签聚合' }
            },
        ]
    },
    {
        path: '/style',
        component: Layout,
        redirect: 'noRedirect',
        meta: { title: '样式', icon: 'star' },
        alwaysShow:true,
        children: [
            {
                path: 'modeStyle',
                name: 'ModeStyle',
                component: () => import('@/views/style/ModeStyle'),
                meta: { title: '显示模式' }
            },
            {
                path: 'overrideStyle',
                name: 'OverrideProductStyle',
                component: () => import('@/views/style/OverrideProductStyle'),
                meta: { title: '替换构件材质' }
            },
            {
                path: 'updateStyleByType',
                name: 'UpdateStyleByType',
                component: () => import('@/views/style/UpdateStyleByType'),
                meta: { title: '按类型替换构件样式' }
            },
            {
                path: 'productEdge',
                name: 'ProductEdge',
                component: () => import('@/views/style/ProductEdge'),
                meta: { title: '构件边框' }
            },
            {
                path: 'gradientStyle',
                name: 'GradientStyle',
                component: () => import('@/views/style/GradientStyle'),
                meta: { title: '构件渐变' }
            },
            {
                path: 'replaceStyle',
                name: 'ReplaceStyle',
                component: () => import('@/views/style/ReplaceStyle'),
                meta: { title: '加载之前替换样式' }
            },
            {
                path: 'setTexture',
                name: 'SetTexture',
                component: () => import('@/views/style/SetTexture'),
                meta: { title: '设置贴图' }
            },
        ]
    },

    {
        path: '/animation',
        component: Layout,
        redirect: 'noRedirect',
        meta: { title: '动画', icon: 'eye' },
        alwaysShow:true,
        children: [
            {
                path: 'tweenTransparent',
                name: 'TweenTransparent',
                component: () => import('@/views/animation/TweenTransparent'),
                meta: { title: '构件透明' }
            },
            {
                path: 'flash',
                name: 'Flash',
                component: () => import('@/views/animation/Flash'),
                meta: { title: '构件闪烁' }
            },
            {
                path: 'translate',
                name: 'Translate',
                component: () => import('@/views/animation/Translate'),
                meta: { title: '构件移动' }
            },
            {
                path: 'rotate',
                name: 'Rotate',
                component: () => import('@/views/animation/TweenRotate'),
                meta: { title: '构件旋转' }
            },
            {
                path: 'explodeLevel',
                name: 'ExplodeLevel',
                component: () => import('@/views/animation/ExplodeLevel'),
                meta: { title: '楼层分解' }
            },
            {
                path: 'explodeModel',
                name: 'ExplodeModel',
                component: () => import('@/views/animation/ExplodeModel'),
                meta: { title: '模型爆炸' }
            },
            {
                path: 'circleWave',
                name: 'CircleWave',
                component: () => import('@/views/animation/CircleWave'),
                meta: { title: '坐标涟漪' }
            },
            {
                path: 'flyLine',
                name: 'FlyLine',
                component: () => import('@/views/animation/FlyLine'),
                meta: { title: '粒子飞行线' }
            },
            {
                path: 'fence',
                name: 'Fence',
                component: () => import('@/views/animation/Fence'),
                meta: { title: '电子围栏' }
            }
        ]
    },
    {
        path: '/roaming',
        component: Layout,
        redirect: 'noRedirect',
        meta: { title: '漫游', icon: 'people' },
        alwaysShow:true,
        children: [
            {
                path: 'fly',
                name: 'Fly',
                component: () => import('@/views/roaming/Fly'),
                meta: { title: '飞行漫游' }
            },
            {
                path: 'fps',
                name: 'Fps',
                component: () => import('@/views/roaming/Fps'),
                meta: { title: 'FPS漫游' }
            },
            {
                path: 'path',
                name: 'PathRoaming',
                component: () => import('@/views/roaming/PathRoaming'),
                meta: { title: '路径漫游' }
            },
            {
                path: 'man',
                name: 'Man',
                component: () => import('@/views/roaming/Man'),
                meta: { title: '第三人称视角漫游' }
            },
        ]
    },
    {
        path: '/environment',
        component: Layout,
        redirect: 'noRedirect',
        meta: { title: '环境', icon: 'fullscreen' },
        alwaysShow:true,
        children: [
            {
                path: 'sun',
                name: 'Sun',
                component: () => import('@/views/environment/Sun'),
                meta: { title: '太阳' }
            },
            {
                path: 'skyBox',
                name: 'SkyBox',
                component: () => import('@/views/environment/SkyBox'),
                meta: { title: '天空盒' }
            },
            {
                path: 'rain',
                name: 'Rain',
                component: () => import('@/views/environment/Rain'),
                meta: { title: '下雨' }
            },
            {
                path: 'snow',
                name: 'Snow',
                component: () => import('@/views/environment/Snow'),
                meta: { title: '下雪' }
            },
            {
                path: 'fog',
                name: 'Fog',
                component: () => import('@/views/environment/Fog'),
                meta: { title: '雾天' }
            },
            {
                path: 'water',
                name: 'Water',
                component: () => import('@/views/environment/Water'),
                meta: { title: '水面' }
            }
        ]
    },

    {
        path: '/effects',
        component: Layout,
        redirect: 'noRedirect',
        meta: { title: '特效', icon: 'drag' },
        alwaysShow:true,
        children: [
            {
                path: 'smoke',
                name: 'Smoke',
                component: () => import('@/views/effects/Smoke'),
                meta: { title: '烟' }
            },
            {
                path: 'fire',
                name: 'Fire',
                component: () => import('@/views/effects/Fire'),
                meta: { title: '火' }
            },
            {
                path: 'fire2',
                name: 'Fire2',
                component: () => import('@/views/effects/Fire2'),
                meta: { title: '火2' }
            },
            {
                path: 'fire3',
                name: 'Fire3',
                component: () => import('@/views/effects/Fire3'),
                meta: { title: '火3' }
            },
            {
                path: 'tube',
                name: 'Tube',
                component: () => import('@/views/effects/TubeFlow'),
                meta: { title: '管道流向' }
            },
            {
                path: 'outline',
                name: 'Outline',
                component: () => import('@/views/effects/Outline'),
                meta: { title: '轮廓光线' }
            },
            {
                path: 'unrealBloom',
                name: 'UnrealBloom',
                component: () => import('@/views/effects/UnrealBloom'),
                meta: { title: '辉光' }
            },
            {
                path: 'sao',
                name: 'SAO',
                component: () => import('@/views/effects/SAO'),
                meta: { title: 'SAO' }
            },
            {
                path: 'saoPlugin',
                name: 'SAOPlugin',
                component: () => import('@/views/effects/SAOPluginExample'),
                meta: { title: 'SAOPlugin' }
            }
        ]
    },
    {
        path: '/media',
        component: Layout,
        redirect: 'noRedirect',
        meta: { title: '多媒体', icon: 'qq' },
        alwaysShow:true,
        children: [
            {
                path: 'video',
                name: 'Video',
                component: () => import('@/views/media/Video'),
                meta: { title: '本地视频' }
            },
            {
                path: 'hls',
                name: 'HLS',
                component: () => import('@/views/media/HLS'),
                meta: { title: 'HLS流视频' }
            }
        ]
    },
    {
        path: '/analysis',
        component: Layout,
        redirect: 'noRedirect',
        meta: { title: '数据分析', icon: 'dashboard' },
        alwaysShow:true,
        children: [
            {
                path: 'heatmapGrid',
                name: 'HeatmapGrid',
                component: () => import('@/views/analysis/HeatmapGrid'),
                meta: { title: '热力网格' }
            },
            {
                path: 'heatmap',
                name: 'Heatmap',
                component: () => import('@/views/analysis/Heatmap'),
                meta: { title: '热力图' }
            },
        ]
    },
    {
        path: '/map',
        component: Layout,
        redirect: 'noRedirect',
        meta: { title: '地图', icon: 'tab' },
        alwaysShow:true,
        children: [
            {
                path: 'mapProviders',
                name: 'MapProviders',
                component: () => import('@/views/map/MapProviders'),
                meta: { title: '地图图层' }
            },
            {
                path: 'loadBim',
                name: 'LoadBim',
                component: () => import('@/views/map/LoadBim'),
                meta: { title: '加载BIM模型' }
            },
            {
                path: 'loadGltf',
                name: 'LoadGltf',
                component: () => import('@/views/map/LoadGltf'),
                meta: { title: '加载GLTF模型' }
            },
            {
                path: 'flyTo',
                name: 'FlyTo',
                component: () => import('@/views/map/FlyTo'),
                meta: { title: '飞行定位' }
            },
            {
                path: 'sweepLight',
                name: 'SweepLight',
                component: () => import('@/views/map/SweepLight'),
                meta: { title: '城市扫光' }
            },
            {
                path: 'jump',
                name: 'Jump',
                component: () => import('@/views/map/Jump'),
                meta: { title: '大小场景跳转' }
            },
            {
                path: 'osgb',
                name: 'osgb',
                component: () => import('@/views/map/OSGB'),
                meta: { title: '倾斜摄影' }
            },
            {
                path: 'geojson',
                name: 'GeoJson',
                component: () => import('@/views/map/GeoJson'),
                meta: { title: 'GeoJson' }
            },
            {
                path: 'road',
                name: 'Road',
                component: () => import('@/views/map/Road'),
                meta: { title: '路网' }
            },
            {
                path: 'heatmapGridMap',
                name: 'HeatmapGridMap',
                component: () => import('@/views/map/HeatmapGridMap'),
                meta: { title: '热力网格地图' }
            },
            {
                path: 'heatmapMap',
                name: 'HeatmapMap',
                component: () => import('@/views/map/HeatmapMap'),
                meta: { title: '热力图地图' }
            },
            {
                path: 'isoline',
                name: 'IsoLine',
                component: () => import('@/views/map/IsoLine'),
                meta: { title: '等值线' }
            }
        ]
    },
    {
        path: '/404',
        component: () => import('@/views/404'),
        hidden: true
    },
    // 404 放路由最后
    { path: '*', redirect: '/404', hidden: true }
]


