
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
                meta: { title: '奔牛水利枢纽工程' },
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
                meta: { title: '德化陶瓷城' },
                hidden: true 
            },
            {
                path: 'jingpeng',
                name: 'JingPeng',
                component: () => import('@/views/example/JingPeng'),
                meta: { title: '金鹏大楼' },
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
                name: 'LoadBim',
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
                path: 'multi',
                name: 'MultiModel',
                component: () => import('@/views/basic/MultiModel'),
                meta: { title: '加载多个模型' }
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
                path: 'zoomTo',
                name: 'ZoomTo',
                component: () => import('@/views/basic/ZoomTo'),
                meta: { title: '构件定位' }
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
                path: 'cameraPosition',
                name: 'CameraPosition',
                component: () => import('@/views/basic/CameraPosition'),
                meta: { title: '相机位置' }
            },
            {
                path: 'cameraFly',
                name: 'CameraFly',
                component: () => import('@/views/basic/CameraFly'),
                meta: { title: '飞行定位' }
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
                path: 'annotation',
                name: 'Annotation',
                component: () => import('@/views/basic/Annotation'),
                meta: { title: '批注' }
            },
            {
                path: 'map',
                name: 'Map',
                component: () => import('@/views/basic/Map'),
                meta: { title: '导航图' }
            },
        ]
    },
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
        path: '/404',
        component: () => import('@/views/404'),
        hidden: true
    },
    // 404 放路由最后
    { path: '*', redirect: '/404', hidden: true }
]


