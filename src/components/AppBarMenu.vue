<script setup lang="ts">
import { ref, inject } from "vue";
import type { Dialog } from 'mdui/components/dialog.js';

import { useBNStateStore } from "@/stores/bnState";


const bnState = useBNStateStore()
const aboutDialog = inject('aboutDialog', ref<Dialog | null>(null))
const openAbout = () => {
  if (!aboutDialog.value) {
    return
  };
  aboutDialog.value.open = true;
}
const closeAbout = () => {
  if (!aboutDialog.value) {
    return
  };
  aboutDialog.value.open = false;
}
</script>
<template>
  <div class="top-app-bar-menu">
    <mdui-dropdown>
      <mdui-button variant="outlined" slot="trigger" class="pc-menu-button">文件</mdui-button>
      <mdui-menu>
        <mdui-menu-item @click="bnState.newWork(true)">新建作品</mdui-menu-item>
        <mdui-menu-item>打开作品</mdui-menu-item>
      </mdui-menu>
    </mdui-dropdown>
    <mdui-dropdown>
      <mdui-button variant="outlined" slot="trigger" class="pc-menu-button">关于</mdui-button>
      <mdui-menu>
        <mdui-menu-item @click="openAbout()">关于 BetterNemo-Online</mdui-menu-item>
      </mdui-menu>
    </mdui-dropdown>
  </div>
</template>
<style scoped>
.top-app-bar-menu {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
