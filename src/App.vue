<script setup lang="ts">
import { ref, provide, watchEffect, onMounted } from "vue";
import type { Dialog } from 'mdui/components/dialog.js';
import { useBNStateStore } from "@/stores/bnState";

import AppBarMenu from "./components/AppBarMenu.vue";
import { useAuthStore } from "./stores/auth";
//import { useBNStateStore } from "@/stores/bnState";
//const bnState = useBNStateStore()

const bnState = useBNStateStore()
const authStore = useAuthStore()
const aboutDialog = ref<Dialog | null>(null)
const loginDialog = ref<Dialog | null>(null)
const showOperate = ref(window.localStorage.getItem('showOperate') == 'true')
const isChangeWorkName = ref(false)

const closeAbout = () => {
  if (!aboutDialog.value) {
    return
  };
  aboutDialog.value.open = false;
}

watchEffect(() => {
  window.localStorage.setItem("showOperate", String(showOperate.value))
})

document.title = `BetterNemo-Online : ${bnState.bcmJson.project_name}`

const loginCodemao = async (e: SubmitEvent) => {
  e.preventDefault();
  const form = e.target;
  if (!form) {
    return
  }
  const formValue = new FormData(form as HTMLFormElement);
  authStore.loginUser(String(formValue.get('identity')), String(formValue.get('password')))
}

onMounted(() => {
  if (!loginDialog.value) {
    return
  }
  if (!localStorage.getItem('token') || !localStorage.getItem('userId')) {
    loginDialog.value.open = true
  }
})

provide('aboutDialog', aboutDialog)
provide('loginDialog', loginDialog)
</script>

<template>
  <mdui-layout>
    <mdui-top-app-bar class="top-app-bar" scroll-behavior="elevate" scroll-threshold="0">
      <mdui-button-icon icon="web"></mdui-button-icon>
      <mdui-top-app-bar-title>
        <div class="top-app-bar-title">
          <span>BetterNemo-Online :</span>
          <span v-if="!isChangeWorkName" @click="isChangeWorkName = true">{{ bnState?.bcmJson?.project_name }}</span>
          <mdui-text-field class="top-app-bar-work-name-field" v-else variant="outlined"
            @change="bnState.bcmJson.project_name = $event.target.value; isChangeWorkName = false" :value="bnState?.bcmJson?.project_name ??
              '默认作品名'"></mdui-text-field>
          <AppBarMenu v-if="!showOperate" />
        </div>
      </mdui-top-app-bar-title>
      <div class="show-more-operate">
        <span>展开</span>
        <mdui-switch checked-icon="" :checked="showOperate" @change="showOperate = $event.target.checked"></mdui-switch>
      </div>
    </mdui-top-app-bar>
    <mdui-top-app-bar class="operate-top-app-bar" v-if="showOperate">
      <AppBarMenu />
    </mdui-top-app-bar>
    <RouterView />
  </mdui-layout>
  <mdui-dialog class="about-dialog" ref="aboutDialog" close-on-overlay-click>
    <span class="about-dialog-description">BetterNemo-Online<br>
      Powered By BetterNemo开发组<br>
      产品任何疑惑及问题其最终解释权归BetterNemo团队所有
    </span>
    <mdui-button slot="action" @click="closeAbout()">确定</mdui-button>
  </mdui-dialog>
  <mdui-dialog class="login-dialog" ref="loginDialog" headline="登录Nemo小宇宙">
    <form @submit="loginCodemao" id="loginDialogForm">
      <mdui-text-field label="账号" name="identity" form="loginDialogForm" required></mdui-text-field>
      <mdui-text-field label="密码" toggle-password name="password" type="password" form="loginDialogForm"
        required></mdui-text-field>
    </form>
    <mdui-button slot="action" @click="loginDialog!.open = false" variant="text">取消</mdui-button>
    <mdui-button slot="action" type="submit" form="loginDialogForm">确定</mdui-button>
  </mdui-dialog>
</template>

<style scoped>
.top-app-bar-title {
  display: flex;
  align-items: center;
  gap: 16px;
}

.top-app-bar-work-name-field {
  height: 40px;
  max-width: 300px;
}

.show-more-operate {
  display: flex;
  align-items: center;
  gap: 8px;
}

.operate-top-app-bar {
  gap: 16px;
  padding-left: 24px;
  padding-top: 2px;
  height: 52px;
  z-index: 1;
}

@media (max-width: 768px) {

  .top-app-bar,
  .operate-top-app-bar {
    display: none;
  }
}
</style>
