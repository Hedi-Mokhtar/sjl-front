<template>
  <header class="bg-white dark:bg-gray-800 text-red-600 shadow-xl border-b-4 border-red-600">
    <div class="px-4">
      <div class="flex items-center justify-between">

        <!-- Logo -->
        <RouterLink to="/" class="flex items-center flex-shrink-0">
          <img src="/src/assets/images/logo.png" alt="Logo Club"
            class="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 object-contain drop-shadow-2xl hover:scale-105 transition-transform" />
        </RouterLink>

        <!-- Titre -->
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-red-600 leading-tight"
          style="font-family: 'Bebas Neue', sans-serif; text-shadow: 2px 2px 8px rgba(220, 38, 38, 0.2); letter-spacing: 0.08em;">
          SPORT JOIE
          <span class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-700 dark:text-gray-300">LILLE</span>
        </h1>

        <div class="flex items-center space-x-2">
          <!-- Night Mode Toggle Button -->
          <button @click="toggleDarkMode"
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all focus:outline-none"
            aria-label="Toggle dark mode">
            <!-- Sun icon for light mode -->
            <svg v-if="isDark" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <!-- Moon icon for dark mode -->
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>

          <!-- Burger Menu (Mobile) -->
          <button @click="menuOpen = !menuOpen" class="md:hidden focus:outline-none text-red-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- NAVIGATION DESKTOP -->
        <DesktopNav />

      </div>
    </div>

    <!-- Barre de transition décorative -->
    <div class="h-2 bg-gradient-to-r from-red-500 via-red-600 to-red-700"></div>

    <!-- MENU MOBILE -->
    <MobileNav :menu-open="menuOpen" @close="menuOpen = false" />
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DesktopNav from './DekstopHeader.vue'
import MobileNav from './MobileHeader.vue'
import { useDarkMode } from '@/composables/useDarkMode'

const menuOpen = ref(false)
const { isDark, toggleDarkMode } = useDarkMode()

// Déclarer le nom du composant
defineOptions({
  name: 'AppHeader',
})
</script>
