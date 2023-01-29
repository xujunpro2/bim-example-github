<template>
  <div class="navbar">
    <hamburger
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />

    <breadcrumb class="breadcrumb-container"/>

    <div class="right-menu">

      <!-- <div class="navbar-icon">
        <i class="el-icon-bell"></i>
      </div>
      <div class="navbar-icon">
        <i class="el-icon-refresh"></i>
      </div>
      <div class="navbar-icon">
        <i class="el-icon-help"></i>
      </div> -->

      <!-- <div class="navbar-icon"></div> -->
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <!-- <img src="user.jpg" class="user-avatar"> -->
          <el-avatar icon="el-icon-user-solid" size="small"></el-avatar>

          <i class="el-icon-caret-bottom"/>
        </div>
        <el-dropdown-menu slot="dropdown" class="fixedWidthDropdown">
          <router-link to="/">
            <el-dropdown-item>首页</el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">注销</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumb from "@/components/Breadcrumb";
import Hamburger from "@/components/Hamburger";

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters(["sidebar", "avatar"])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
    async logout() {
      this.$store.dispatch("uv/logout").then(resolve=>{
          this.$router.push("/login");
      });
      //导航到Home页面
      // this.$router.push({
      //   name: "Dashboard", //注意这里不是路由的path，而是要用路由的name
      //   params: { user: user, password: ps }
      // });
      
    }
  }
};
</script>

<style lang="scss" scoped>
.fixedWidthDropdown {
  width: 150px;
  text-align: center;
}
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    // line-height: 0px;  这个可以控制下拉菜单离按钮的高度

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 10px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 30px;
          height: 30px;
          border-radius: 15px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 15px;
          font-size: 12px;
        }
      }
    }
  }
}

.navbar-icon {
  display: inline-block;
  padding: 8px 8px;
  height: 100%;
  font-size: 24px;
  color: #5a5e66;
  vertical-align: text-bottom;
}
.navbar-icon i {
  cursor: pointer;
  padding-top: 8px;
}
</style>
