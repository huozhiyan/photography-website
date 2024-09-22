<script lang="ts" setup>
import NavigationBar from "../layouts/components/NavigationBar/index.vue";
import Footer from "../layouts/components/Footer/index.vue";
</script>

<template>
  <div class="app-wrapper">
    <!-- 头部导航栏 -->
    <div class="fixed-header layout-header">
      <div class="content">
        <NavigationBar class="navigation-bar" />
      </div>
    </div>
    <div class="main-container">
      <!-- 主容器 -->
      <section class="app-main">
        <div class="app-scrollbar">
          <!-- key 采用 route.path 和 route.fullPath 有着不同的效果，大多数时候 path 更通用 -->
          <!-- <router-view v-slot="{ Component, route }">
            <transition name="el-fade-in" mode="out-in">
              <keep-alive>
                <component
                  :is="Component"
                  :key="route.path"
                  class="app-container-grow"
                />
              </keep-alive>
            </transition>
          </router-view> -->
          <router-view></router-view>
          <!-- 页脚 -->
          <Footer />
        </div>
        <!-- 返回顶部 -->
        <el-backtop target=".app-scrollbar" />
      </section>
    </div>
  </div>
</template>

<style scoped>
.app-wrapper {
  width: 100%;
}

.app-main {
  /* transition: padding-left $transition-time; */
  padding-top: 50px;
  height: 100vh;
  overflow: auto;
}

.main-container {
  min-height: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1002;
  width: 100%;
  .logo {
    width: 200px;
  }
  .content {
    display: flex;
    .navigation-bar {
      flex: 1;
    }
  }
}

.layout-header {
  background-color: #fff;
}
</style>
