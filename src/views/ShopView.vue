<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-red-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <!-- Hero Section -->
      <section class="text-center mb-12 sm:mb-16">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Boutique officielle
        </h1>
        <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Soutenez le club en achetant nos produits officiels
        </p>
      </section>

      <!-- Produit principal : Sweat -->
      <section class="max-w-6xl mx-auto">
        <div class="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">

            <!-- Colonne gauche : Image -->
            <div
              class="relative bg-gradient-to-br from-gray-100 to-gray-200 p-8 lg:p-12 flex items-center justify-center">
              <div class="relative group">
                <!-- Image du sweat -->
                <img :src="sweatImage" alt="Sweat Sport Joie Lille"
                  class="w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500" />

                <!-- Badge "Nouveau" -->
                <div
                  class="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse">
                  🔥 Nouveau
                </div>

                <!-- Badge "Édition limitée" (optionnel) -->
                <div
                  class="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                  Édition club
                </div>
              </div>
            </div>

            <!-- Colonne droite : Informations -->
            <div class="p-8 lg:p-12 flex flex-col justify-center">

              <!-- Titre -->
              <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                Sweat Sport Joie Lille
              </h2>

              <!-- Description -->
              <p class="text-gray-600 mb-6 leading-relaxed">
                Arborez fièrement les couleurs du Sport Joie Lille avec ce sweat de qualité premium.
                Confortable et élégant, parfait pour les entraînements ou le quotidien.
              </p>

              <!-- Caractéristiques -->
              <div class="space-y-3 mb-8">
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-gray-700">100% coton de qualité premium</span>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-gray-700">Logo du club</span>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-gray-700">Disponible en plusieurs tailles</span>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-gray-700">Soutenez votre club favori ❤️</span>
                </div>
              </div>

              <!-- Prix -->
              <div class="mb-8">
                <div class="flex items-baseline gap-3">
                  <span class="text-4xl font-bold text-red-600">25€</span>
                  <span class="text-lg text-gray-500 line-through">35€</span>
                  <span class="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm font-semibold">
                    -22%
                  </span>
                </div>
                <p class="text-sm text-gray-500 mt-2">
                  Prix de lancement • Livraison offerte dès 2 articles
                </p>
              </div>

              <!-- Bouton d'achat -->
              <div class="space-y-4">
                <a href="https://www.helloasso.com/associations/sport-joie-lille" target="_blank"
                  rel="noopener noreferrer"
                  class="group relative block w-full bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg text-center hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:shadow-2xl transform hover:-translate-y-1">

                  <!-- Effet de brillance -->
                  <div
                    class="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700">
                  </div>

                  <span class="relative flex items-center justify-center gap-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Commander sur HelloAsso
                    <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none"
                      stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>

                <!-- Note sécurité -->
                <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Paiement sécurisé via HelloAsso</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <!-- Section informations supplémentaires -->
      <section class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        <!-- Info 1 -->
        <div class="bg-white rounded-xl p-6 shadow-lg text-center">
          <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
          </div>
          <h3 class="font-bold text-gray-800 mb-2">Retrait au club</h3>
          <p class="text-sm text-gray-600">
            Récupérez votre commande lors des entraînements
          </p>
        </div>

        <!-- Info 2 -->
        <div class="bg-white rounded-xl p-6 shadow-lg text-center">
          <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 class="font-bold text-gray-800 mb-2">Soutenez le club</h3>
          <p class="text-sm text-gray-600">
            100% des bénéfices pour le développement du club
          </p>
        </div>

        <!-- Info 3 -->
        <div class="bg-white rounded-xl p-6 shadow-lg text-center">
          <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <h3 class="font-bold text-gray-800 mb-2">Besoin d'aide ?</h3>
          <p class="text-sm text-gray-600">
            <RouterLink to="/contact" class="text-red-600 hover:underline font-semibold">
              Contactez-nous
            </RouterLink>
          </p>
        </div>

      </section>


    </div>
  </div>
</template>

<script setup lang="ts">
import sweatImage from '@/assets/images/shop/sweat.jpg'
</script>
