<template>
  <nav class="hidden md:flex md:items-center md:gap-4">
    <!-- Navigation principale -->
    <ul class="flex items-center space-x-3 lg:space-x-4">

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

    <!-- Séparateur vertical -->
    <div class="h-8 w-px bg-gray-300 mx-2"></div>

    <!-- Réseaux sociaux -->
    <SocialMediaLinks />
  </nav>
</template>

<script setup lang="ts">
import { mainNavItems } from '@data/navigationData'
import TeamDropdown from '@/components/team/TeamDropdown.vue'
import VolunteersDropdown from '@/components/volunteers/VolunteerDropdown.vue'
import PartnersDropdown from '@/components/partners/PartnersDropdown.vue'
import ClubDropdown from '@/components/club/ClubDropdown.vue'
import SocialMediaLinks from './SocialMediaLinks.vue'
</script>
