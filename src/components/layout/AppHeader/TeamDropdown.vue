<template>
  <li class="relative group">
    <span
      class="cursor-pointer px-4 py-2 rounded-md border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200 font-semibold inline-flex items-center gap-1">
      <span>Équipe</span>
      <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor"
        viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </span>

    <!-- DROPDOWN -->
    <ul class="absolute right-0 pt-2 hidden group-hover:block hover:block z-50">
      <div class="bg-white text-gray-800 shadow-2xl rounded-lg overflow-hidden w-72 border-2 border-red-600">

        <li v-for="(category) in teamCategories" :key="category.title" class="py-2">

          <!-- CATÉGORIE -->
          <h3 class="px-4 py-2 text-xs font-bold text-red-600 uppercase tracking-wider bg-red-50">
            {{ category.title }}
          </h3>

          <!-- TEAMS -->
          <ul>
            <li v-for="(team, teamIndex) in category.teams" :key="team.path">
              <RouterLink :to="team.path"
                class="group/item flex items-center justify-between px-4 py-3 hover:bg-red-50 transition-all duration-200">

                <div class="flex items-center gap-3">
                  <!-- Point -->
                  <div class="w-2 h-2 rounded-full bg-red-600 group-hover/item:scale-150 transition-transform">
                  </div>

                  <!-- Texte -->
                  <span class="font-semibold text-gray-800 group-hover/item:text-red-600 transition-colors">
                    {{ team.label }}
                  </span>
                </div>

                <!-- Flèche -->
                <svg
                  class="w-4 h-4 text-gray-400 group-hover/item:text-red-600 opacity-0 group-hover/item:opacity-100 transform -translate-x-2 group-hover/item:translate-x-0 transition-all"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </RouterLink>

              <!-- Séparateur interne -->
              <div v-if="teamIndex < category.teams.length - 1" class="mx-4 border-b border-gray-200">
              </div>
            </li>
          </ul>

        </li>

      </div>
    </ul>
  </li>
</template>

<script setup lang="ts">
import { teamCategories } from '@data/navigationData'
</script>
