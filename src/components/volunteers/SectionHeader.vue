<template>
  <div class="text-center mb-8 sm:mb-12">
    <div class="inline-flex items-center justify-center mb-4">
      <div class="h-1 w-12" :class="lineColor"></div>
      <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200 mx-3">
        {{ title }}
      </h2>
      <div class="h-1 w-12" :class="lineColor"></div>
    </div>
    <p v-if="subtitle" class="text-gray-600 dark:text-gray-400">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  interface Props {
    title: string
    subtitle?: string
    color?: 'red' | 'blue' | 'green' | 'purple'
  }

  const props = withDefaults(defineProps<Props>(), {
    color: 'red',
  })

  const lineColor = computed(() => {
    const colors = {
      red: 'bg-red-600',
      blue: 'bg-blue-600',
      green: 'bg-green-600',
      purple: 'bg-purple-600',
    }
    return colors[props.color]
  })
</script>
