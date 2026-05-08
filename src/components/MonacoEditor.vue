<template>
  <div style="height: 400px;">
    <CodeEditor v-model:value="code" language="javascript" theme="vs-dark" :options="editorOptions" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { CodeEditor } from 'monaco-editor-vue3';

const code = ref(`function hello() {
  console.log('Hello, Monaco Editor Vue3!');
}`);

const editorOptions = {
  fontSize: 14,
  minimap: { enabled: false },
  automaticLayout: true
};
</script>
