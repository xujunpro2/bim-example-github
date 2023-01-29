<template>
  <div>
    <logo :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="true"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'
import {constants} from 'crypto';

export default {
	components: {
		SidebarItem,
		Logo
	},
	computed: {
		...mapGetters([
			'sidebar'
		]),
		routes() {
			//获得state的三种方式
			let routes = this.$store.state.uv.myRouter;
			return routes;
		},
		activeMenu() {
			const route = this.$route
			const {meta,path} = route
			// if set path, the sidebar will highlight the path you set
			if (meta.activeMenu) {
				return meta.activeMenu
			}
			return path
		},
		variables() {
			return variables
		},
		isCollapse() {
			return !this.sidebar.opened
		}
	}
}
</script>
