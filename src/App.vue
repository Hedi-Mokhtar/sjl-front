<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-1 p-6 bg-gray-100 dark:bg-gray-900">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/layout/AppHeader/AppHeader.vue'
import AppFooter from './components/layout/AppFooter/AppFooter.vue'
import { useDarkMode } from './composables/useDarkMode'

// Initialize dark mode on app mount
const { initializeDarkMode } = useDarkMode()
initializeDarkMode()
</script>
