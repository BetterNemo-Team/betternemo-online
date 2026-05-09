<template>
  <div>
    <CodeEditor v-model:value="code" language="json" theme="vs-dark" :options="editorOptions" />
  </div>
</template>

<script setup lang="ts">
import { CodeEditor } from 'monaco-editor-vue3';
const code = defineModel()
const editorOptions = {
  fontSize: 14,
  minimap: { enabled: false },
  automaticLayout: true
};
</script>
