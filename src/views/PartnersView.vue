<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Hero Section -->
    <section class="text-center mb-12 sm:mb-16">
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        Nos partenaires
      </h1>
      <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        Ils nous font confiance et soutiennent Sport Joie Lille
      </p>
    </section>

    <!-- Partner's grid -->
    <section class="mb-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        <div v-for="(partner, index) in partners" :key="partner.id" :class="index % 2 === 1 ? 'md:mt-8' : ''"
          :style="getAnimationDelay(index)" class="partner-card animate-fadeInUp group">

          <!-- Logo and hover description -->
          <div class="relative mb-6">
            <!-- Logo -->
            <div
              class="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-xl ring-4 ring-gray-100 dark:ring-gray-700 group-hover:ring-red-200 transition-all duration-300">
              <img :src="partner.logo" :alt="`Logo ${partner.name}`"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            </div>

            <!-- Description overlay (appears on hover) -->
            <div
              class="absolute inset-0 w-48 h-48 mx-auto rounded-full bg-red-600 bg-opacity-95 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-2xl">
              <p class="text-white text-sm text-center leading-relaxed">
                {{ partner.description }}
              </p>
            </div>
          </div>

          <!-- Partner information -->
          <div class="text-center space-y-3">
            <!-- Nom -->
            <h3 class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-red-600 transition-colors">
              {{ partner.name }}
            </h3>

            <!-- Website -->
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

            <!-- Address -->
            <div class="flex items-start justify-center text-gray-600 dark:text-gray-400 text-sm">
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

    <!-- Message info hover desktop -->
    <div class="text-center mb-16 text-gray-500 dark:text-gray-400 text-sm hidden md:block">
      <span aria-hidden="true">💡</span> Survolez les logos pour découvrir les descriptions
    </div>

    <!-- Call to Action - Become a Partner -->
    <section id="become"
      class="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white shadow-2xl scroll-mt-24 mb-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Devenez partenaire
          </h2>
          <p class="text-lg mb-6 text-red-50">
            Associez votre image à celle d'un club dynamique et en pleine croissance.
            Plusieurs formules de partenariat sont disponibles.
          </p>

          <!-- Partner benefits -->
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

        <div class="bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-200 rounded-xl p-6 sm:p-8">
          <h3 class="text-2xl font-bold mb-4 dark:text-gray-200">Contactez-nous</h3>
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            Échangeons sur les opportunités de partenariat adaptées à vos besoins.
          </p>

          <div class="space-y-4">
            <div class="flex items-center">
              <svg class="w-6 h-6 text-red-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:secretariatsjl@gmail.com" class="text-red-600 hover:underline font-semibold break-all">
                secretariatsjl@gmail.com
              </a>
            </div>

            <RouterLink :to="{ name: 'contact', query: { type: 'partenaire' } }"
              class="block w-full bg-red-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all mt-6">
              Formulaire de contact
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ✅ SECTION BROCHURE avec couleurs rouge adaptées -->
    <section>
      <div class="bg-white rounded-2xl p-8 md:p-12 shadow-2xl border-2 border-red-200 dark:bg-gray-800 dark:border-gray-600">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          <!-- Colonne gauche : Texte -->
          <div>
            <div
              class="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>Brochure officielle</span>
            </div>

            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Découvrez notre brochure partenaires
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Téléchargez notre brochure complète pour découvrir toutes les opportunités de partenariat avec le Sport
              Joie Lille.
              Vous y trouverez nos offres, notre vision et les avantages pour nos partenaires.
            </p>

            <!-- Stats -->
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div class="bg-red-50 rounded-lg p-4 shadow-sm border border-red-100 dark:bg-gray-700 dark:border-gray-600">
                <div class="text-2xl font-bold text-red-600">14 +</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Équipes</div>
              </div>
              <div class="bg-red-50 rounded-lg p-4 shadow-sm border border-red-100 dark:bg-gray-700 dark:border-gray-600">
                <div class="text-2xl font-bold text-red-600">250+</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Licenciés</div>
              </div>
            </div>
          </div>

          <!-- Colonne droite : Image preview + Bouton -->
          <div class="flex flex-col items-center">
            <!-- Image de prévisualisation -->
            <div class="relative group/pdf mb-6 w-full max-w-sm">
              <!-- Effet de profondeur -->
              <div
                class="absolute inset-0 bg-gradient-to-br from-red-600 to-red-700 rounded-xl transform rotate-3 opacity-20 group-hover/pdf:rotate-6 transition-transform">
              </div>
              <div
                class="absolute inset-0 bg-gradient-to-br from-red-600 to-red-700 rounded-xl transform rotate-1 opacity-30 group-hover/pdf:rotate-3 transition-transform">
              </div>

              <!-- Image -->
              <div
                class="relative bg-white rounded-xl shadow-2xl p-4 border-2 border-gray-200 dark:bg-gray-700 dark:border-gray-600 group-hover/pdf:shadow-3xl transition-all transform group-hover/pdf:-translate-y-2">
                <img :src="brochurePreview" alt="Aperçu brochure partenaires Sport Joie Lille"
                  class="w-full h-auto rounded-lg" />

                <!-- Badge PDF -->
                <div
                  class="absolute top-6 right-6 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  PDF
                </div>
              </div>
            </div>

            <!-- Bouton téléchargement -->
            <a :href="brochurePDF" download="Brochure_Partenaires_Sport_Joie_Lille.pdf"
              class="group inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
              <svg class="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Télécharger la brochure</span>
              <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            <p class="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
              Format PDF • Gratuit
            </p>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { partners } from '@/data/partner'
import { useStaggeredAnimation } from '@/composables/useStaggeredAnimation'
import brochurePDF from '@/assets/images/partners/BrochureSJL.pdf'
import brochurePreview from '@/assets/images/partners/brochurepreview.png'

const { getAnimationDelay } = useStaggeredAnimation(0.1)
</script>
