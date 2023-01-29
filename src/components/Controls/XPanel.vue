<template>
	<div :class="this.bindObj.color">
		<div class="box-header with-border">
			<span class="box-title">{{this.bindObj.title}}</span>
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
            <div v-show ="sizeIcon === 'el-icon-minus'" class="box-body" :style="this.bindObj.height">
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
            color:"box box-primary",
            height:"height:200px"
          };
        }
      }
    },
    data() {
		return {
            sizeIcon:'el-icon-minus'
        };
	},

	methods: {
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
        }
    },

	mounted() {}
};
</script>

<style scoped>
.box {
	position: relative;
	border-radius: 3px;
	background: #ffffff;
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
	color:#303133;
	display: block;
	padding: 10px;
    position: relative;
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
.fade-enter-active, .fade-leave-active {
  transition: 200px 2.0s
}
.fade-enter, .fade-leave-active {
  opacity: 0px
}
</style>
