<template>
  <nav class="hidden md:block">
    <ul class="flex items-center space-x-3 lg:space-x-4">

      <!-- Accueil -->

      <ClubDropdown />

      <!-- Dropdown Équipe -->
      <TeamDropdown />

      <VolunteersDropdown />

      <PartnersDropdown />

      <!-- Autres liens de navigation -->
      <li v-for="item in mainNavItems" :key="item.path">
        <RouterLink :to="item.path"
          class="px-4 py-2 rounded-md border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200 font-semibold">
          {{ item.label }}
        </RouterLink>
      </li>

    </ul>
  </nav>
</template>

<script setup lang="ts">
import { mainNavItems } from '@data/navigationData'
import TeamDropdown from './TeamDropdown.vue'
import VolunteersDropdown from '@/components/volunteers/VolunteerDropdown.vue'
import PartnersDropdown from '@/components/partners/PartnersDropdown.vue'
import ClubDropdown from '@/components/club/ClubDropdown.vue';
</script>
