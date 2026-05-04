<script setup lang="ts"></script>

<template>
  <div class="editor">
    <mdui-navigation-rail contained divider value="code">
      <mdui-button-icon icon="menu" slot="top"></mdui-button-icon>
      <mdui-navigation-rail-item icon="code" value="code"></mdui-navigation-rail-item>
      <mdui-navigation-rail-item icon="people" value="actor"></mdui-navigation-rail-item>
      <mdui-button-icon icon="play_arrow" slot="bottom" variant="filled"></mdui-button-icon>
    </mdui-navigation-rail>
    <div class="bn">
      <h1>占位符</h1>
    </div>
  </div>
</template>

<style scoped>
.editor {
  display: flex;
  height: 100%;
  width: 100%;
  padding-left: 0px !important;
}

.bn {
  margin: 0;
  height: 100vh;
}
</style>
