<template>
    <div class="itemPanel">
        <!--注意 a标签千万别带href="#"  这样会导致$router.push失效-->
        <a class="xhz-link"   @click="onClick">
            <el-image class="xhz-area" fit="contain" :key="image" :src="image" :alt="title" :title="title" lazy></el-image>
            <!-- <img class="xhz-area" :src="image" :alt="title" :title="title" style="display: inline;"> -->
            <h2 class="col_52 xhz-title">{{title}}</h2>
        </a>
    </div>
</template>

<script>
export default {
    name: "Screen",
    props:{
        image: {
            type: String
        },
        title: {
            type: String
        },
        href:{
            type:String
        }
    },
	data() {
		return {};
	},
	methods: {
        onClick(){
            var routeName = this.href;
            this.$router.push({
                name: routeName //注意这里不是路由的path，而是要用路由的name
            });
        },
    },
	mounted() {
       // console.info(this.href)
    },
	beforeDestroy() {}
};
</script>

<style scoped>
    .itemPanel{
        width: 100%;
        max-width: 350px;
        margin: 0 auto 30px;
        border-radius: 2px;
        background-color: #f9f9f9;
        box-shadow: 0 1px 2px rgba(0,0,0,.1);
    }
    .itemPanel .xhz-link {
    position: relative;
    display: block;
    }
    .itemPanel .xhz-link .xhz-area {
        width: 100%;
        min-height: 100px;
        max-height: 180px;
        padding: 8px;
    }
    img {
        vertical-align: middle;
        border-style: none;
        /* object-fit:cover; */
    }
    .itemPanel .xhz-link .xhz-title {
        color: #606266;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 2px 10px 10px;
        margin: 0;
        font-weight: 400;
        font-size: 14px;
        text-align: center;
    }
</style>
