<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Hero Section -->
    <section class="text-center mb-12 sm:mb-16">
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4">
        Nos partenaires
      </h1>
      <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
        Ils nous font confiance et soutiennent Sport Joie Lille
      </p>
    </section>

    <!-- Grille des partenaires -->
    <section class="mb-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        <div v-for="(partner, index) in partners" :key="partner.id" :class="index % 2 === 1 ? 'md:mt-8' : ''"
          class="partner-card group">

          <!-- Logo avec hover description -->
          <div class="relative mb-6">
            <!-- Logo -->
            <div
              class="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-xl ring-4 ring-gray-100 group-hover:ring-red-200 transition-all duration-300">
              <img :src="partner.logo" :alt="`Logo ${partner.name}`"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            </div>

            <!-- Description en overlay (apparaît au hover) -->
            <div
              class="absolute inset-0 w-48 h-48 mx-auto rounded-full bg-red-600 bg-opacity-95 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-2xl">
              <p class="text-white text-sm text-center leading-relaxed">
                {{ partner.description }}
              </p>
            </div>
          </div>

          <!-- Informations partenaire -->
          <div class="text-center space-y-3">
            <!-- Nom -->
            <h3 class="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-red-600 transition-colors">
              {{ partner.name }}
            </h3>

            <!-- Site web -->
            <a :href="partner.website" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center text-red-600 hover:text-red-700 font-semibold text-sm sm:text-base group/link">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <span class="group-hover/link:underline">Visiter le site</span>
              <svg class="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            <!-- Adresse -->
            <div class="flex items-start justify-center text-gray-600 text-sm">
              <svg class="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-red-600" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="text-left max-w-xs">{{ partner.address }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action - Devenir partenaire -->
    <section class="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Devenez partenaire
          </h2>
          <p class="text-lg mb-6 text-red-50">
            Associez votre image à celle d'un club dynamique et en pleine croissance.
            Plusieurs formules de partenariat sont disponibles.
          </p>

          <!-- Avantages partenaires -->
          <div class="space-y-3 mb-6">
            <div class="flex items-start">
              <svg class="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Visibilité sur nos supports de communication</span>
            </div>
            <div class="flex items-start">
              <svg class="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Logo sur les équipements sportifs</span>
            </div>
            <div class="flex items-start">
              <svg class="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Présence lors des événements du club</span>
            </div>
            <div class="flex items-start">
              <svg class="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Mise en avant sur notre site web</span>
            </div>
          </div>
        </div>

        <div class="bg-white text-gray-800 rounded-xl p-6 sm:p-8">
          <h3 class="text-2xl font-bold mb-4">Contactez-nous</h3>
          <p class="text-gray-600 mb-6">
            Échangeons sur les opportunités de partenariat adaptées à vos besoins.
          </p>

          <div class="space-y-4">
            <div class="flex items-center">
              <svg class="w-6 h-6 text-red-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:partenariat@sportjoielille.fr"
                class="text-red-600 hover:underline font-semibold break-all">
                partenariat@sportjoielille.fr
              </a>
            </div>

            <RouterLink to="/contact"
              class="block w-full bg-red-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all mt-6">
              Formulaire de contact
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Message info hover desktop -->
    <div class="text-center mt-8 text-gray-500 text-sm hidden md:block">
      <span aria-hidden="true">💡</span> Survolez les logos pour découvrir les descriptions
    </div>
  </div>
</template>

<script setup lang="ts">
import { partners } from '@/data/partner'
</script>

<style scoped>
.partner-card {
  @apply transition-all duration-300;
}

/* Animation subtile au chargement */
.partner-card {
  animation: fadeInUp 0.6s ease-out backwards;
}

.partner-card:nth-child(1) {
  animation-delay: 0.1s;
}

.partner-card:nth-child(2) {
  animation-delay: 0.2s;
}

.partner-card:nth-child(3) {
  animation-delay: 0.3s;
}

.partner-card:nth-child(4) {
  animation-delay: 0.4s;
}

.partner-card:nth-child(5) {
  animation-delay: 0.5s;
}

.partner-card:nth-child(6) {
  animation-delay: 0.6s;
}
</style>
