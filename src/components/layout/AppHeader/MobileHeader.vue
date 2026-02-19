<template>
  <nav v-if="menuOpen"
    class="md:hidden bg-gray-50 rounded-b-lg p-4 shadow-inner border-t border-red-200 overflow-y-auto max-h-[80vh]">
    <!-- Réseaux sociaux en haut du menu mobile (visible uniquement sur très petit mobile) -->
    <div class="sm:hidden mb-4 pb-4 border-b border-gray-300">
      <div class="flex justify-center">
        <SocialMediaLinks />
      </div>
    </div>

    <ul class="space-y-3">

      <!-- Club avec sous-menu mobile -->
      <li>
        <button @click="clubOpen = !clubOpen"
          class="w-full py-2 px-4 rounded-md border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200 font-semibold flex justify-center items-center relative">
          <span>Club</span>
          <svg class="w-4 h-4 transition-transform absolute right-4" :class="{ 'rotate-180': clubOpen }" fill="none"
            stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <!-- Sous-menu club -->
        <div v-if="clubOpen" class="mt-2 space-y-1 bg-white rounded-lg p-3 border-2 border-gray-200">
          <RouterLink v-for="item in clubMenuItems" :key="item.path" :to="item.path" @click="closeMenu"
            class="flex items-center gap-2 px-3 py-2.5 rounded-md text-sm text-gray-700 bg-gray-50 hover:bg-red-50 hover:text-red-600 hover:border-l-4 hover:border-red-600 transition-all">
            <div class="w-1.5 h-1.5 rounded-full bg-red-600"></div>
            <span class="font-medium">{{ item.label }}</span>
          </RouterLink>
        </div>
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

        <!-- Sous-menu équipe -->
        <div v-if="equipeOpen" class="mt-2 space-y-2 bg-white rounded-lg p-3 border-2 border-gray-200">
          <div v-for="category in teamCategories" :key="category.title" class="space-y-1">

            <!-- Titre catégorie avec bordure gauche -->
            <div class="px-3 py-2 bg-red-50 rounded-md border-l-4 border-red-600">
              <h3 class="text-xs font-bold text-red-600 uppercase tracking-wider">
                {{ category.title }}
              </h3>
            </div>

            <!-- Équipes de la catégorie -->
            <div class="space-y-1 pl-1">
              <RouterLink v-for="team in category.teams" :key="team.path" :to="team.path" @click="closeMenu"
                class="flex items-center gap-2 px-3 py-2.5 rounded-md text-sm text-gray-700 bg-gray-50 hover:bg-red-50 hover:text-red-600 hover:border-l-4 hover:border-red-600 transition-all">
                <div class="w-1.5 h-1.5 rounded-full bg-red-600"></div>
                <span class="font-medium">{{ team.label }}</span>
              </RouterLink>
            </div>

          </div>
        </div>
      </li>

      <!-- Bénévoles avec sous-menu mobile -->
      <li>
        <button @click="volunteersOpen = !volunteersOpen"
          class="w-full py-2 px-4 rounded-md border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200 font-semibold flex justify-center items-center relative">
          <span>Bénévoles</span>
          <svg class="w-4 h-4 transition-transform absolute right-4" :class="{ 'rotate-180': volunteersOpen }"
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <!-- Sous-menu bénévoles -->
        <div v-if="volunteersOpen" class="mt-2 space-y-1 bg-white rounded-lg p-3 border-2 border-gray-200">
          <RouterLink v-for="item in volunteersMenuItems" :key="item.path" :to="item.path" @click="closeMenu"
            class="flex items-center gap-2 px-3 py-2.5 rounded-md text-sm text-gray-700 bg-gray-50 hover:bg-red-50 hover:text-red-600 hover:border-l-4 hover:border-red-600 transition-all">
            <div class="w-1.5 h-1.5 rounded-full bg-red-600"></div>
            <span class="font-medium">{{ item.label }}</span>
          </RouterLink>
        </div>
      </li>

      <!-- Partenaires avec sous-menu mobile -->
      <li>
        <button @click="partnersOpen = !partnersOpen"
          class="w-full py-2 px-4 rounded-md border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200 font-semibold flex justify-center items-center relative">
          <span>Partenaires</span>
          <svg class="w-4 h-4 transition-transform absolute right-4" :class="{ 'rotate-180': partnersOpen }" fill="none"
            stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <!-- Sous-menu partenaires -->
        <div v-if="partnersOpen" class="mt-2 space-y-1 bg-white rounded-lg p-3 border-2 border-gray-200">
          <RouterLink v-for="item in partnersMenuItems" :key="item.path" :to="item.path" @click="closeMenu"
            class="flex items-center gap-2 px-3 py-2.5 rounded-md text-sm text-gray-700 bg-gray-50 hover:bg-red-50 hover:text-red-600 hover:border-l-4 hover:border-red-600 transition-all">
            <div class="w-1.5 h-1.5 rounded-full bg-red-600"></div>
            <span class="font-medium">{{ item.label }}</span>
          </RouterLink>
        </div>
      </li>

      <!-- Autres liens de navigation (Accueil, Horaires, Inscriptions, Contact) -->
      <li v-for="item in mainNavItems" :key="item.path">
        <RouterLink :to="item.path" @click="closeMenu"
          class="block py-2 px-4 rounded-md border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200 font-semibold text-center">
          {{ item.label }}
        </RouterLink>
      </li>

    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref, watch, onUnmounted } from 'vue'
import { mainNavItems, clubMenuItems, teamCategories, volunteersMenuItems, partnersMenuItems } from '@/data/navigationData'
import SocialMediaLinks from './SocialMediaLinks.vue'

interface Props {
  menuOpen: boolean
}

interface Emits {
  (e: 'close'): void
}

defineProps<Props>()
const emit = defineEmits<Emits>()

const clubOpen = ref(false)
const equipeOpen = ref(false)
const volunteersOpen = ref(false)
const partnersOpen = ref(false)

watch(equipeOpen, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

onUnmounted(() => {
  document.body.style.overflow = ''
})

const closeMenu = () => {
  clubOpen.value = false
  equipeOpen.value = false
  volunteersOpen.value = false
  partnersOpen.value = false
  emit('close')
}
</script>
