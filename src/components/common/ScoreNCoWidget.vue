<template>
  <div class="scorenco-widget-wrapper">

    <!-- Nouveau widget (data-*) -->
    <div v-if="widgetVersion === 'modern' && scriptReady" class="scorenco-widget" data-widget-type="team"
      :data-widget-id="widgetId"
      style="background: #F2F5F9; min-height: 500px; display: flex; align-items: center; justify-content: center; flex-direction: column; text-transform: uppercase; font-family: sans-serif; font-weight: bolder; gap: 9px; color:#1E457B;" />

    <!-- Ancien widget (iframe) -->
    <template v-else-if="widgetVersion === 'legacy'">
      <iframe ref="iframeRef" :id="widgetId" :src="iframeUrl" class="scorenco-iframe" />
      <a v-if="clubUrl && clubName" class="scorenco-link" :href="clubUrl" target="_blank" rel="noopener noreferrer">
        {{ clubName }} sur Score'n'co
      </a>
    </template>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const props = defineProps<{
  widgetId: string
  widgetVersion: 'modern' | 'legacy'
  clubUrl?: string
  clubName?: string
}>()

const iframeRef = ref<HTMLIFrameElement | null>(null)
const scriptReady = ref(false)

const iframeUrl = computed(
  () => `https://scorenco.com/widget/${props.widgetId}/?auto_height=true`
)

function loadModernScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector('script[src="https://widgets.scorenco.com/host/widgets.js"]')) {
      resolve()
      return
    }
    const script = document.createElement('script')
    script.src = 'https://widgets.scorenco.com/host/widgets.js'
    script.async = true
    script.defer = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Failed to load widgets.js'))
    document.body.appendChild(script)
  })
}

function loadLegacyScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.iFrameResize) {
      resolve()
      return
    }
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.5/iframeResizer.min.js'
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Failed to load iframeResizer.js'))
    document.body.appendChild(script)
  })
}

onMounted(async () => {
  if (props.widgetVersion === 'modern') {
    await loadModernScript()
    scriptReady.value = true
  } else {
    await loadLegacyScript()
    if (iframeRef.value && window.iFrameResize) {
      ; window.iFrameResize({ checkOrigin: false, interval: 100 }, iframeRef.value)
    }
  }
})
</script>

<style scoped>
.scorenco-iframe {
  display: block;
  width: 100%;
  overflow: auto;
  margin: auto;
  border: 0;
}

.scorenco-link {
  font-size: 11px;
}
</style>
