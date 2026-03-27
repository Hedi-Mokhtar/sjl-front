<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-red-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Hero Section -->
      <section class="text-center mb-12 sm:mb-16">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Rôles bénévoles
        </h1>
        <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Découvrez toutes les façons de contribuer à la vie de Sport Joie Lille — cliquez sur une catégorie pour en
          savoir plus.
        </p>
      </section>

      <!-- Image Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
        <button
          v-for="category in volunteerCategories"
          :key="category.id"
          type="button"
          class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-red-300 aspect-[3/4] sm:aspect-auto sm:h-72 lg:h-80"
          :aria-label="`Voir les rôles : ${category.label}`"
          @click="openModal(category)"
        >
          <!-- Background image -->
          <img
            :src="category.image"
            :alt="category.label"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <!-- Gradient overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/90"
          ></div>

          <!-- Content overlay -->
          <div class="absolute inset-0 flex flex-col justify-end p-4 text-white">
            <span class="text-3xl mb-2" role="img" :aria-label="category.label">{{ category.icon }}</span>
            <h2 class="text-lg font-bold leading-tight mb-1">{{ category.label }}</h2>
            <p class="text-xs text-white/80">
              {{ category.roles.length }} rôle{{ category.roles.length > 1 ? 's' : '' }}
            </p>

            <!-- "Voir les rôles" hint -->
            <div
              class="mt-3 text-xs font-semibold text-white/70 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              <span>Voir les rôles</span>
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </button>
      </div>

      <!-- Call to Action -->
      <section
        id="join"
        class="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white shadow-2xl"
      >
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Un rôle vous inspire ?</h2>
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

    <!-- Modal Overlay -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="selectedCategory"
          class="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          :aria-label="selectedCategory.label"
          aria-modal="true"
          @click.self="closeModal"
          @keydown.esc="closeModal"
        >
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="closeModal"></div>

          <!-- Modal panel -->
          <div
            class="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden"
          >
            <!-- Modal header with image -->
            <div class="relative h-40 sm:h-52 flex-shrink-0 overflow-hidden">
              <img
                :src="selectedCategory.image"
                :alt="selectedCategory.label"
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              <!-- Close button -->
              <button
                type="button"
                class="absolute top-3 right-3 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                @click="closeModal"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <!-- Title overlay -->
              <div class="absolute bottom-4 left-5 text-white">
                <div class="flex items-center gap-2 mb-1">
                  <span class="text-2xl" role="img" :aria-label="selectedCategory.label">{{
                    selectedCategory.icon
                  }}</span>
                  <h2 class="text-2xl sm:text-3xl font-bold">{{ selectedCategory.label }}</h2>
                </div>
                <p class="text-sm text-white/80">
                  {{ selectedCategory.roles.length }} rôle{{ selectedCategory.roles.length > 1 ? 's' : '' }}
                  disponible{{ selectedCategory.roles.length > 1 ? 's' : '' }}
                </p>
              </div>
            </div>

            <!-- Modal body (scrollable) -->
            <div class="overflow-y-auto flex-1 p-5 sm:p-6 space-y-5">
              <div
                v-for="role in selectedCategory.roles"
                :key="role.id"
                class="bg-gray-50 rounded-xl p-5 border border-gray-100"
              >
                <h3 class="text-lg font-bold text-gray-800 mb-2" :class="selectedCategory.color">
                  {{ role.title }}
                </h3>
                <p class="text-gray-600 text-sm mb-4">{{ role.description }}</p>

                <!-- Missions -->
                <div class="mb-3">
                  <h4 class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Missions</h4>
                  <ul class="space-y-1">
                    <li v-for="mission in role.missions" :key="mission" class="flex items-start gap-2 text-sm text-gray-600">
                      <div
                        class="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                        :class="selectedCategory.accentBg"
                      ></div>
                      <span>{{ mission }}</span>
                    </li>
                  </ul>
                </div>

                <!-- Ideal profile -->
                <div class="flex items-start gap-2 bg-white rounded-lg px-4 py-3 border border-gray-100">
                  <span class="text-sm flex-shrink-0">✅</span>
                  <p class="text-sm text-gray-600 italic">{{ role.ideal }}</p>
                </div>
              </div>
            </div>

            <!-- Modal footer -->
            <div class="flex-shrink-0 border-t border-gray-100 px-5 py-4 flex justify-end gap-3 bg-white">
              <button
                type="button"
                class="px-5 py-2.5 rounded-lg border-2 border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 transition-all"
                @click="closeModal"
              >
                Fermer
              </button>
              <RouterLink
                :to="{ name: 'contact', query: { type: 'benevole' } }"
                class="px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold transition-all shadow-md hover:shadow-lg"
                @click="closeModal"
              >
                Je suis intéressé(e)
              </RouterLink>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'
import type { VolunteerCategory } from '@/data/volunteerRoles'
import { volunteerCategories } from '@/data/volunteerRoles'

const selectedCategory = ref<VolunteerCategory | null>(null)

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') closeModal()
}

const openModal = (category: VolunteerCategory) => {
  selectedCategory.value = category
  document.body.style.overflow = 'hidden'
  window.addEventListener('keydown', handleKeydown)
}

const closeModal = () => {
  selectedCategory.value = null
  document.body.style.overflow = ''
  window.removeEventListener('keydown', handleKeydown)
}

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>

