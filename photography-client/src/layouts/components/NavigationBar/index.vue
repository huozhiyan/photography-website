<script lang="ts" setup>
import Logo from "../Logo/index.vue";
import { ref } from "vue";
import { useRoute, useRouter} from "vue-router"

const route = useRoute()
const router = useRouter()

const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const demo = () => {
  router.push({path: "/" + "login"})
}
</script>

<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    @select="handleSelect"
  >
    <Logo></Logo>
    <el-menu-item index="1" @click="demo">发现</el-menu-item>
    <el-sub-menu index="2">
      <template #title>外链</template>
      <el-menu-item index="2-1">GitHub 仓库</el-menu-item>
      <el-menu-item index="2-2">Gitee 仓库</el-menu-item>
      <el-menu-item index="2-3">手摸手教程</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="3">教程</el-menu-item>
  </el-menu>
</template>

<style scoped>
.el-menu--horizontal > .el-menu-item,
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal > .el-sub-menu.is-active .el-sub-menu__title,
.el-sub-menu.is-active .el-sub-menu__title {
  background-color: transparent; /* 去除背景色 */
  border: none; /* 去除边框 */
  border-bottom: none;
}
</style>
