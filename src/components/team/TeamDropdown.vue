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

    <!-- MEGA MENU -->
    <div class="absolute right-0 pt-2 hidden group-hover:block hover:block z-50">
      <div class="bg-white text-gray-800 shadow-2xl rounded-lg border-2 border-red-600 p-4"
        :style="{ width: `${teamCategories.length * 180}px`, minWidth: '480px' }">

        <div class="grid gap-4" :style="{ gridTemplateColumns: `repeat(${teamCategories.length}, 1fr)` }">

          <div v-for="category in teamCategories" :key="category.title">

            <!-- EN-TÊTE COLONNE -->
            <h3 class="px-3 py-2 text-xs font-bold text-red-600 uppercase tracking-wider bg-red-50 rounded-md mb-2">
              {{ category.title }}
            </h3>

            <!-- ÉQUIPES -->
            <ul class="space-y-1">
              <li v-for="team in category.teams" :key="team.path">
                <RouterLink :to="team.path"
                  class="group/item flex items-center gap-2 px-3 py-2 rounded-md hover:bg-red-50 transition-all duration-200">
                  <div
                    class="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0 group-hover/item:scale-150 transition-transform" />
                  <span
                    class="text-sm font-medium text-gray-700 group-hover/item:text-red-600 transition-colors leading-tight">
                    {{ team.label }}
                  </span>
                </RouterLink>
              </li>
            </ul>

          </div>

        </div>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import { teamCategories } from '@data/navigationData'
</script>
