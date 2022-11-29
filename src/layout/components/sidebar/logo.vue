<script setup lang="ts">
import { useNav } from "@/layout/hooks/useNav";
import logoUrl from "@/assets/imgs/jyyx_logo.png";

const props = defineProps({
  collapse: Boolean
});

const { title } = useNav();
</script>

<template>
  <div class="sidebar-logo-container" :class="{ collapses: props.collapse }">
    <transition name="sidebarLogoFade">
      <router-link
        v-if="props.collapse"
        key="props.collapse"
        :title="title"
        class="sidebar-logo-link"
        to="/"
      >
        <!-- <FontIcon icon="team-iconlogo" svg style="width: 35px; height: 35px" />
        <span class="sidebar-title">{{ title }}</span> -->
        <!-- <el-image :src="logoUrl" fit="scale-down" /> -->
        <span class="sidebar-title">{{ title }}</span>
      </router-link>
      <router-link
        v-else
        key="expand"
        :title="title"
        class="sidebar-logo-link"
        to="/"
        style="display: inline-block; height: 55px"
      >
        <!-- <FontIcon icon="team-iconlogo" svg style="width: 35px; height: 35px" />
        <span class="sidebar-title">{{ title }}</span> -->
        <el-image :src="logoUrl" fit="scale-down" />
      </router-link>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 65px;
  text-align: center;
  overflow: hidden;

  .sidebar-logo-link {
    height: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 5px;

    .sidebar-title {
      display: block;
      width: 160px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: left;
      color: #1890ff;
      font-weight: 600;
      font-size: 20px;
      margin-top: 10px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    }
  }

  .collapses {
    .sidebar-logo {
      margin-right: 0;
    }
  }
}
</style>
