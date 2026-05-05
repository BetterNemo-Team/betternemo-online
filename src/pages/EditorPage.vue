<script setup lang="ts">
import { ref, inject } from "vue";
import type { Dialog } from 'mdui/components/dialog.js';

import { useBNStateStore } from "@/stores/bnState";

import BN from "@/components/BN.vue";

const bnState = useBNStateStore()
const aboutDialog = inject('aboutDialog', ref<Dialog | null>(null))
const openAbout = () => {
  if (!aboutDialog.value) {
    return
  };
  aboutDialog.value.open = true;
}

const playWork = () => {
  bnState.isPlay = !bnState.isPlay
  bnState.isActorPage = !bnState.isActorPage
}
</script>

<template>
  <mdui-navigation-rail contained divider :value="bnState.isActorPage ? 'actor' : 'code'" class="navigation-rail">
    <mdui-dropdown placement="right-start">
      <div slot="trigger">
        <mdui-button-icon icon="menu" slot="top" class="phone-menu-button"></mdui-button-icon>
      </div>
      <mdui-menu>
        <mdui-menu-item>新建作品</mdui-menu-item>
        <mdui-menu-item>打开作品</mdui-menu-item>
        <mdui-divider></mdui-divider>
        <mdui-menu-item @click="openAbout()">关于 BetterNemo-Online</mdui-menu-item>
      </mdui-menu>
    </mdui-dropdown>
    <mdui-navigation-rail-item icon="code" value="code"
      @click="bnState.isActorPage = false"></mdui-navigation-rail-item>
    <mdui-navigation-rail-item icon="people" value="actor"
      @click="bnState.isActorPage = true"></mdui-navigation-rail-item>
    <mdui-button-icon :icon="!bnState.isPlay ? 'play_arrow' : 'pause'" slot="bottom" variant="filled"
      @click="playWork()"></mdui-button-icon>
  </mdui-navigation-rail>
  <mdui-layout-main class="bn">
    <BN />
  </mdui-layout-main>
</template>

<style scoped>
.navigation-rail {
  z-index: 0;
}

.bn {
  height: 100vh;
}

.phone-menu-button {
  display: none;
}

@media (max-width: 768px) {
  .phone-menu-button {
    display: block;
  }
}
</style>
