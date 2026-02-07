<template>
  <li class="relative group">
    <span
      class="cursor-pointer px-4 py-2 rounded-md border-2 border-red-600 dark:border-red-400 text-red-600 dark:text-red-400 hover:bg-red-600 hover:text-white transition-all duration-200 font-semibold inline-flex items-center gap-1">
      <span>Club</span>
      <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor"
        viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </span>

    <!-- DROPDOWN -->
    <ul class="absolute right-0 pt-2 hidden group-hover:block hover:block z-50">
      <div class="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-2xl rounded-lg overflow-hidden w-64 border-2 border-red-600 dark:border-red-400">

        <li v-for="(item, index) in clubMenuItems" :key="item.path">
          <RouterLink
            class="group/item flex items-center justify-between px-4 py-3 hover:bg-red-50 dark:hover:bg-gray-700 transition-all duration-200"
            :to="item.path">

            <div class="flex items-center gap-3">
              <!-- Point coloré -->
              <div class="w-2 h-2 rounded-full bg-red-600 group-hover/item:scale-150 transition-transform"></div>

              <!-- Texte -->
              <span class="font-semibold text-gray-800 dark:text-gray-200 group-hover/item:text-red-600 dark:group-hover/item:text-red-400 transition-colors">
                {{ item.label }}
              </span>
            </div>

            <!-- Flèche -->
            <svg
              class="w-4 h-4 text-gray-400 dark:text-gray-400 group-hover/item:text-red-600 dark:group-hover/item:text-red-400 opacity-0 group-hover/item:opacity-100 transform -translate-x-2 group-hover/item:translate-x-0 transition-all"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </RouterLink>

          <!-- Séparateur élégant (sauf pour le dernier) -->
          <div v-if="index < clubMenuItems.length - 1" class="mx-4 border-b border-gray-200 dark:border-gray-600"></div>
        </li>

      </div>
    </ul>
  </li>
</template>

<script setup lang="ts">
import { clubMenuItems } from '@/data/navigationData'
</script>
