<template>
	<div v-show="this.bindObj.visiable" ref="dragPanel" :class="this.bindObj.color" :style="{width:this.bindObj.width,left:this.bindObj.left,top:this.bindObj.top,
            right:this.bindObj.right,bottom:this.bindObj.bottom,zIndex:this.bindObj.zIndex}">
		<div class="box-header with-border" @mousedown="onDrag">
			<span class="box-title"><i :class="bindObj.icon"></i> {{this.bindObj.title}}</span>
			<div class="box-tools pull-right">
				<button type="button" class="btn btn-box-tool" @click="onChangeSize">
					<i :class="sizeIcon"></i>
				</button>
				<button type="button" class="btn btn-box-tool">
					<i class="el-icon-close" @click="onClose"></i>
				</button>
			</div>
		</div>
        <vertical-toggle>
            <div v-show ="sizeIcon === 'el-icon-minus'" class="box-body" :style="{height:this.bindObj.height}">
                <slot></slot>
            </div>
        </vertical-toggle>
	</div>
</template>

<script>
import VerticalToggle from '@/utils/verticalToggle'
export default {
    name: "",
    components: {VerticalToggle},
    props: 
    {
        bindObj: {
        type: Object,
        default:()=>{
          return {
                visiable:true,
                title: "标题",
                icon:"el-icon-folder-opened",
                color:"box box-primary",
                width:"300px",
                height:"200px",
                top:"150px",
                left:"200px",
                right:"100px",
                botton:"10px",
                zIndex:1
          };
        }
      }
    },
    data() {
		return {
            sizeIcon:'el-icon-minus',
        };
    },
    computed:{
        isLeft(){
            if(this.$refs.dragPanel.style.left !== "" && this.$refs.dragPanel.style.right === "")
            {
                return true;
            }
            return false;
        },
        isTop(){
            if(this.$refs.dragPanel.style.top !== "" && this.$refs.dragPanel.style.bottom === "")
            {
                return true;
            }
            return false;
        }
    },

	methods: {
        //面板展开缩放更换icon
        onChangeSize(){
            //要收起
            if(this.sizeIcon === 'el-icon-minus')
            {
                this.sizeIcon = 'el-icon-plus';
            }
            //要展开
            else
            {
                this.sizeIcon = 'el-icon-minus'
            }
        },
        onClose(){
            this.bindObj.visiable = false;
        },
        //拖动面板
        onDrag(event){
            const dialogHeaderEl = event.target;
            const dragDom = this.$refs.dragPanel;
            //判断left还是right定位
            let left = this.isLeft;
            let top = this.isTop;
            dialogHeaderEl.onmousedown = (e) => {
                let startX = e.clientX;
                let startY = e.clientY;
                document.onmousemove = function (e) {
                    let moveX = e.clientX - startX;
                    let moveY = e.clientY - startY;
                    if(left)
                    {
                        let nowLeft = getStyle(dragDom.style.left) + moveX
                        dragDom.style.left = nowLeft+"px";
                    }
                    else
                    {
                        let nowRight = getStyle(dragDom.style.right) - moveX
                        dragDom.style.right = nowRight+"px";
                    }
                    if(top)
                    {
                        let nowTop = getStyle(dragDom.style.top) + moveY
                        dragDom.style.top = nowTop+"px";
                    }
                    else
                    {
                        let nowBottom = getStyle(dragDom.style.bottom) - moveY
                        dragDom.style.bottom = nowBottom+"px";
                    }
                    startX = e.clientX;
                    startY = e.clientY;
                }

                document.onmouseup = function (e) {
                    document.onmousemove = null
                    document.onmouseup = null
                }
                //截取px之前的number
                function getStyle(pxStr){
                    let s = pxStr.substring(0,pxStr.length-2);
                    return Number(s);
                }
            }
        }
    },
    
	mounted() {
       
    },
    updated() {

	}
};
</script>

<style scoped>
.box {
	position: absolute;
	border-radius: 3px;
	background:  rgba(255, 255, 255, 0.8);;
	border-top: 3px solid #d2d6de;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    border-right: 1px solid rgba(0, 0, 0, 0.1);
	margin-bottom: 20px;
	width: 100%;
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.box.box-default {
	border-top-color: #d2d6de;
}
.box.box-primary {
	border-top-color: #409EFF;
}
.box.box-danger {
	border-top-color: #F56C6C;
}
.box.box-success {
	border-top-color: #67C23A;
}
.box-header.with-border {
	border-bottom: 1px solid #f4f4f4;
}
.box-header {
    color:#606266;
	display: block;
	padding: 10px;
    position: relative;
    cursor:move;
    /*以下4行设置title不可选中*/
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
}

.box-header > .fa,
.box-header > .glyphicon,
.box-header > .ion,
.box-header .box-title {
	display: inline-block;
	font-size: 14px;
    font-weight: bold;
	margin: 0;
	line-height: 1;
}
.box-header > .box-tools {
	position: absolute;
	right: 10px;
	top: 5px;
}
.box-body {
	border-top-left-radius: 0;
	border-top-right-radius: 0;
	border-bottom-right-radius: 3px;
	border-bottom-left-radius: 3px;
	padding: 10px;
    overflow: auto;
}
.btn {
    cursor: pointer;
    border-radius: 3px;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: 1px solid transparent;
}
.btn:focus,
.btn:active:focus,
.btn.active:focus,
.btn.focus,
.btn:active.focus,
.btn.active.focus {
    outline: none;
    border-color: transparent;
    box-shadow:none;
}

.btn-box-tool {
    padding: 5px;
    font-size: 12px;
    background: transparent;
    color: #97a0b3;
}

</style>
