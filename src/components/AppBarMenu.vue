<script setup lang="ts">
import { ref, inject } from "vue";
import type { Dialog } from 'mdui/components/dialog.js';

import { useBNStateStore } from "@/stores/bnState";


const bnState = useBNStateStore()
const aboutDialog = inject('aboutDialog', ref<Dialog | null>(null))
const fileOpen = ref<HTMLInputElement | null>(null)
const openAbout = () => {
  if (!aboutDialog.value) {
    return
  };
  aboutDialog.value.open = true;
}

const openFileWindow = () => {
  if (!fileOpen.value) {
    return
  };
  fileOpen.value.click()
}

const openFile = () => {
  try {
    if (!fileOpen.value || !fileOpen.value.files || fileOpen.value.files.length <= 0) {
      return
    }
    const file = fileOpen.value.files[0]
    const reader = new FileReader()
    reader.onload = function () {
      const result = reader.result
      if (!result) {
        return
      }
      bnState.goWork(JSON.parse(String(result)), true)
    };
    if (!file) {
      return
    }
    reader.readAsText(file);
  } catch (e) {
    console.log(e)
  }
}

</script>
<template>
  <div class="top-app-bar-menu">
    <mdui-dropdown>
      <mdui-button variant="outlined" slot="trigger" class="pc-menu-button">文件</mdui-button>
      <mdui-menu>
        <mdui-menu-item @click="bnState.newWork(true)">新建作品</mdui-menu-item>
        <mdui-menu-item>打开作品</mdui-menu-item>
        <mdui-divider></mdui-divider>
        <mdui-menu-item @click="openFileWindow()">打开本地作品</mdui-menu-item>
      </mdui-menu>
    </mdui-dropdown>
    <mdui-dropdown>
      <mdui-button variant="outlined" slot="trigger" class="pc-menu-button">关于</mdui-button>
      <mdui-menu>
        <mdui-menu-item @click="openAbout()">关于 BetterNemo-Online</mdui-menu-item>
      </mdui-menu>
    </mdui-dropdown>
  </div>
  <input type="file" class="file-open" ref="fileOpen" accept=".json" title="打开本地作品" @change="openFile()" />
</template>
<style scoped>
.top-app-bar-menu {
  display: flex;
  align-items: center;
  gap: 8px;
}

.file-open {
  display: none;
}
</style>
