<script setup lang="ts">
import { alert as mdAlert } from "mdui/functions/alert.js";
const openAbout = () => {
  mdAlert({
    headline: "关于 BetterNemo-Online",
    description: "",
    confirmText: "确定",
    closeOnEsc: true
  });
}
</script>

<template>
  <mdui-layout>
    <mdui-top-app-bar class="top-app-bar" scroll-behavior="elevate" scroll-threshold="0">
      <mdui-dropdown>
        <mdui-button-icon icon="menu" slot="trigger" class="pc-menu-button"></mdui-button-icon>
        <mdui-menu>
          <mdui-menu-item>新建作品</mdui-menu-item>
          <mdui-menu-item>打开作品</mdui-menu-item>
          <mdui-divider></mdui-divider>
          <mdui-menu-item @click="openAbout()">关于 BetterNemo-Online</mdui-menu-item>
        </mdui-menu>
      </mdui-dropdown>
      <mdui-top-app-bar-title>BetterNemo-Online</mdui-top-app-bar-title>
    </mdui-top-app-bar>
    <RouterView />
  </mdui-layout>
</template>

<style scoped>
@media (max-width: 768px) {
  .top-app-bar {
    display: none;
  }
}
</style>
