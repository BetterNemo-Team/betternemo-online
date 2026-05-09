<template>
  <div>
    <CodeEditor ref="editorRef" class="code-editor" v-model:value="code" language="json" theme="vs-dark"
      :options="editorOptions" />
  </div>
</template>

<script setup lang="ts">
import { CodeEditor } from 'monaco-editor-vue3';
import zhHans from '../assets/monacoEditor/langs/main.i18n.json'
import { ref } from 'vue';
const code = defineModel()
const editorRef = ref(null)
const editorOptions = {
  fontSize: 14,
  minimap: { enabled: false },
  automaticLayout: true,
  fontFamily: "'JetBrains Mono', 'JetBrains Mono', monospace",
  locale: 'zh-hans',
};
</script>

<style scoped></style>
