<template>
  <header class="bg-white text-red-600 shadow-xl border-b-4 border-red-600">
    <div class="p-4">
      <div class="flex items-center justify-between">

        <!-- Logo -->
        <RouterLink to="/" class="flex items-center">
          <img src="/src/assets/logo.png" alt="Logo Club" class="h-16 w-16 md:h-20 md:w-20 object-contain" />
        </RouterLink>

        <!-- Titre -->
        <h1 class="text-3xl md:text-5xl lg:text-6xl text-center flex-1 mx-4 tracking-wider font-extrabold text-red-600"
          style="font-family: 'Bebas Neue', sans-serif; text-shadow: 2px 2px 4px rgba(220, 38, 38, 0.2); letter-spacing: 0.1em;">
          SPORT JOIE LILLE
        </h1>

        <!-- Burger Menu (Mobile) -->
        <button @click="menuOpen = !menuOpen" class="md:hidden focus:outline-none text-red-600">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

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

const menuOpen = ref(false)

// Déclarer le nom du composant
defineOptions({
  name: 'AppHeader',
})
</script>
