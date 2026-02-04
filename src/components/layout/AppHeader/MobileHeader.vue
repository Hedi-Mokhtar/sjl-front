<template>
  <nav v-if="menuOpen" class="md:hidden bg-gray-50 rounded-b-lg p-4 shadow-inner border-t border-red-200">
    <ul class="space-y-3">

      <!-- Accueil -->
      <li>
        <RouterLink to="/" @click="closeMenu"
          class="block py-2 px-4 rounded-md border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200 font-semibold text-center">
          Accueil
        </RouterLink>
      </li>

      <!-- Équipe avec sous-menu mobile -->
      <li>
        <button @click="equipeOpen = !equipeOpen"
          class="w-full py-2 px-4 rounded-md border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200 font-semibold flex justify-center items-center relative">
          <span>Équipe</span>
          <svg class="w-4 h-4 transition-transform absolute right-4" :class="{ 'rotate-180': equipeOpen }" fill="none"
            stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <!-- Sous-menu mobile -->
        <div v-if="equipeOpen" class="ml-4 mt-2 space-y-3">
          <div v-for="category in teamCategories" :key="category.title">
            <h3 class="font-bold text-sm mb-2 uppercase tracking-wide text-red-600">
              {{ category.title }}
            </h3>
            <ul class="space-y-2 ml-2">
              <li v-for="team in category.teams" :key="team.path">
                <RouterLink @click="closeMenu" class="block py-1 text-sm hover:text-red-600 text-gray-700"
                  :to="team.path">
                  {{ team.label }}
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </li>

      <!-- Autres liens de navigation -->
      <li v-for="item in mainNavItems.slice(1)" :key="item.path">
        <RouterLink :to="item.path" @click="closeMenu"
          class="block py-2 px-4 rounded-md border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200 font-semibold text-center">
          {{ item.label }}
        </RouterLink>
      </li>

    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { mainNavItems, teamCategories } from '../../../data/navigationData'

interface Props {
  menuOpen: boolean
}

interface Emits {
  (e: 'close'): void
}

defineProps<Props>()
const emit = defineEmits<Emits>()

const equipeOpen = ref(false)

const closeMenu = () => {
  equipeOpen.value = false
  emit('close')
}
</script>
