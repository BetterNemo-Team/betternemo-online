<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watchEffect } from 'vue'
import { BNWorkspaceBridge } from '@/utils/bnWorkspaceBridge'
import { setBridgeInstance, getBridgeInstance, clearBridgeInstance } from '@/utils/bridgeInstance';

import { snackbar } from "mdui/functions/snackbar.js";

import { useBNStateStore } from "@/stores/bnState";

// 组件状态

const bnState = useBNStateStore()
const iframeSrc = ref('')
const iframeRef = ref<any>(null)

function onIframeLoad() {
  const iframeDom = iframeRef.value
  if (!iframeDom) return
  // 同步真实DOM到Store
  bnState.iframeRef = iframeDom
  // 初始化默认作品
  bnState.newWork()
}

function onIframeError() {
  console.error('iframe 加载失败')
  snackbar({ message: 'iframe页面加载失败', closeable: true })
}

onBeforeUnmount(() => {
  // 销毁bridge实例，移除监听
  clearBridgeInstance()
})

watchEffect(() => {
  const { isActorPage, isPlay } = bnState
  const bridgeInstance: any = getBridgeInstance()
  if (!bridgeInstance) {
    return
  }
  bridgeInstance.sendNativeMessage('SET_THEATRE_VISIBLE', isActorPage)
  bridgeInstance.sendNativeMessage('SET_RUN_STATE', isPlay)
})
</script>

<template>
  <div class="bn-webview">
    <iframe @error="onIframeError" @load="onIframeLoad" src="/bn/workspace.html" class="bn-webview-iframe"
      ref="iframeRef"></iframe>
  </div>
</template>

<style scoped>
.bn-webview {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.bn-webview-iframe {
  border: 0;
  height: 100%;
  width: 100%;
}
</style>
