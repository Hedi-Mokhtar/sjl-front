<template>
  <li class="relative group">
    <span
      class="cursor-pointer px-4 py-2 rounded-md border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200 font-semibold inline-block">
      Équipe
    </span>

    <!-- DROPDOWN -->
    <ul class="absolute right-0 pt-2 hidden group-hover:block hover:block z-50">
      <div class="bg-white text-gray-800 shadow-2xl rounded-lg p-4 space-y-4 w-64 border-2 border-red-600">

        <li v-for="category in teamCategories" :key="category.title">
          <h3 class="font-bold text-red-600 text-sm mb-2 uppercase tracking-wide">
            {{ category.title }}
          </h3>
          <ul class="space-y-1">
            <li v-for="team in category.teams" :key="team.path">
              <RouterLink
                class="block px-3 py-2 hover:bg-red-50 rounded-md transition-colors text-gray-700 hover:text-red-600"
                :to="team.path">
                {{ team.label }}
              </RouterLink>
            </li>
          </ul>
        </li>

      </div>
    </ul>
  </li>
</template>

<script setup lang="ts">
import { teamCategories } from '../../../data/navigationData'
</script>
