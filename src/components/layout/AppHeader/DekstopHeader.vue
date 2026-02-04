<template>
  <nav class="hidden md:block">
    <ul class="flex items-center space-x-3 lg:space-x-4">

      <!-- Accueil -->
      <li>
        <RouterLink to="/"
          class="px-4 py-2 rounded-md border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200 font-semibold">
          Accueil
        </RouterLink>
      </li>

      <!-- Dropdown Équipe -->
      <TeamDropdown />

      <!-- Autres liens de navigation -->
      <li v-for="item in mainNavItems.slice(1)" :key="item.path">
        <RouterLink :to="item.path"
          class="px-4 py-2 rounded-md border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200 font-semibold">
          {{ item.label }}
        </RouterLink>
      </li>

    </ul>
  </nav>
</template>

<script setup lang="ts">
import { mainNavItems } from '../../../data/navigationData'
import TeamDropdown from './TeamDropdown.vue'
</script>
