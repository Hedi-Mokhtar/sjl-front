<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-red-50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Hero Section -->
      <section class="text-center mb-12 sm:mb-16">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Rôles bénévoles
        </h1>
        <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Découvrez toutes les façons de contribuer à la vie de Sport Joie Lille
        </p>
      </section>

      <!-- Accordion Categories -->
      <div class="space-y-4">
        <div
          v-for="category in volunteerCategories"
          :key="category.id"
          class="bg-white rounded-2xl shadow-md overflow-hidden"
        >
          <!-- Category Header (toggle button) -->
          <button
            type="button"
            class="w-full flex items-center justify-between px-6 py-5 text-left border-2 rounded-2xl transition-all duration-200 focus:outline-none"
            :class="[category.bgColor, openCategories[category.id] ? 'rounded-b-none border-b-0' : '']"
            @click="toggleCategory(category.id)"
          >
            <div class="flex items-center gap-3">
              <span class="text-2xl" role="img" :aria-label="category.label">{{ category.icon }}</span>
              <span class="text-xl sm:text-2xl font-bold" :class="category.color">
                {{ category.label }}
              </span>
              <span class="text-sm font-medium text-gray-500 ml-1">
                ({{ category.roles.length }} rôle{{ category.roles.length > 1 ? 's' : '' }})
              </span>
            </div>
            <svg
              class="w-5 h-5 transition-transform duration-300 flex-shrink-0"
              :class="[category.color, openCategories[category.id] ? 'rotate-180' : '']"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <!-- Category Content -->
          <div v-if="openCategories[category.id]" class="border-2 border-t-0 rounded-b-2xl" :class="category.contentBorder">
            <div class="p-4 sm:p-6 space-y-4">
              <div
                v-for="role in category.roles"
                :key="role.id"
                class="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <h3 class="text-lg sm:text-xl font-bold text-gray-800 mb-2">{{ role.title }}</h3>
                <p class="text-gray-600 text-sm sm:text-base mb-4">{{ role.description }}</p>

                <!-- Missions -->
                <div class="mb-4">
                  <h4 class="text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Missions</h4>
                  <ul class="space-y-1">
                    <li
                      v-for="mission in role.missions"
                      :key="mission"
                      class="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <div class="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" :class="category.accentBg"></div>
                      <span>{{ mission }}</span>
                    </li>
                  </ul>
                </div>

                <!-- Ideal profile -->
                <div class="flex items-start gap-2 bg-gray-50 rounded-lg px-4 py-3">
                  <span class="text-base flex-shrink-0">✅</span>
                  <p class="text-sm text-gray-600 italic">{{ role.ideal }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <section
        id="join"
        class="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white shadow-2xl"
      >
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Un rôle vous inspire ?
          </h2>
          <p class="text-lg mb-8 max-w-2xl mx-auto text-red-50">
            Contactez-nous et rejoignez l'équipe de bénévoles qui fait vivre Sport Joie Lille !
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <RouterLink
              :to="{ name: 'contact', query: { type: 'benevole' } }"
              class="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
            >
              Formulaire de contact
            </RouterLink>
            <a
              href="mailto:secretariatsjl@gmail.com"
              class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all"
            >
              Envoyer un email
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { volunteerCategories } from '@/data/volunteerRoles'

const openCategories = reactive<Record<string, boolean>>({})

const toggleCategory = (id: string) => {
  openCategories[id] = !openCategories[id]
}
</script>
