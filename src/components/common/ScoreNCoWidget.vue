<template>
  <div class="scorenco-widget-wrapper">

    <!-- Nouveau widget (data-*) -->
    <div v-if="widgetVersion === 'modern'" ref="modernWidgetRef" class="scorenco-widget" data-widget-type="team"
      :data-widget-id="widgetId"
      style="background: #F2F5F9; min-height: 500px; display: flex; align-items: center; justify-content: center; flex-direction: column; text-transform: uppercase; font-family: sans-serif; font-weight: bolder; gap: 9px; color:#1E457B;">
    </div>

    <!-- Ancien widget (iframe) -->
    <template v-else-if="widgetVersion === 'legacy'">
      <iframe ref="iframeRef" :id="String(widgetId)" :src="iframeUrl" class="scorenco-iframe"></iframe>
      <template v-if="clubUrl && clubName">

        class="scorenco-link"
        :href="clubUrl"
        target="_blank"
        rel="noopener noreferrer"
        >
        {{ clubName }} sur Score'n'co
        `` </template>
    </template>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'

const props = defineProps<{
  widgetId: string | number
  widgetVersion: 'modern' | 'legacy'
  clubUrl?: string
  clubName?: string
}>()

const iframeRef = ref<HTMLIFrameElement | null>(null)
const modernWidgetRef = ref<HTMLDivElement | null>(null)

const iframeUrl = computed(
  () => `https://scorenco.com/widget/${props.widgetId}/?auto_height=true`
)

declare global {
  interface Window {
    iFrameResize?: (options: object, target: HTMLElement) => void
    ScoreNCoWidgets?: { init: () => void }
  }
}

function loadModernScript(): Promise<void> {
  return new Promise((resolve) => {
    // Script déjà chargé
    if (document.querySelector('script[src="https://widgets.scorenco.com/host/widgets.js"]')) {
      resolve()
      return
    }
    const script = document.createElement('script')
    script.src = 'https://widgets.scorenco.com/host/widgets.js'
    script.async = true
    script.defer = true
    script.onload = () => resolve()
    document.body.appendChild(script)
  })
}

function loadLegacyScript(): Promise<void> {
  return new Promise((resolve) => {
    if (window.iFrameResize) {
      resolve()
      return
    }
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.5/iframeResizer.min.js'
    script.onload = () => resolve()
    document.body.appendChild(script)
  })
}

onMounted(async () => {
  await nextTick() // ← s'assure que le div est bien dans le DOM

  if (props.widgetVersion === 'modern') {
    await loadModernScript()

    // Le script est chargé mais le div existait déjà avant lui,
    // on recrée le div pour forcer la détection
    if (modernWidgetRef.value) {
      const container = modernWidgetRef.value.parentElement
      if (container) {
        const newDiv = document.createElement('div')
        newDiv.className = 'scorenco-widget'
        newDiv.setAttribute('data-widget-type', 'team')
        newDiv.setAttribute('data-widget-id', String(props.widgetId))
        newDiv.style.cssText = modernWidgetRef.value.style.cssText
        modernWidgetRef.value.replaceWith(newDiv)
      }
    }
  } else {
    await loadLegacyScript()
    if (iframeRef.value && window.iFrameResize) {
      window.iFrameResize({ checkOrigin: false, interval: 100 }, iframeRef.value)
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
