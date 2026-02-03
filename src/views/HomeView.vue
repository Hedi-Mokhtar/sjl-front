<template>
  <div class="flex flex-col items-center w-full">
    <!-- Carrousel d'images - Pleine largeur avec hauteur responsive -->
    <div class="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] relative overflow-hidden">
      <img :src="currentImage" alt="Photo du club" class="w-full h-full object-cover transition-opacity duration-500" />

      <!-- Boutons de navigation - Cachés sur mobile, visibles sur desktop -->
      <button @click="prevImage"
        class="hidden md:block absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all hover:scale-110">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button @click="nextImage"
        class="hidden md:block absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all hover:scale-110">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Indicateurs de pagination (dots) -->
      <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        <button v-for="(img, index) in images" :key="index" @click="goToImage(index)"
          :class="currentIndex === index ? 'bg-white w-8' : 'bg-white/50 w-3'"
          class="h-3 rounded-full transition-all duration-300 hover:bg-white">
        </button>
      </div>

      <!-- Overlay gradient pour meilleure lisibilité -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
    </div>

    <!-- Section des cartes - Responsive -->
    <section class="mt-6 sm:mt-8 md:mt-12 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

        <!-- Carte Résultats -->
        <div
          class="group p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <div class="flex items-center mb-3">
            <div class="bg-red-100 p-3 rounded-full mr-3">
              <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="font-bold text-xl text-gray-800 group-hover:text-red-600 transition-colors">Résultats</h3>
          </div>
          <p class="text-gray-600">Consultez les résultats des équipes du club</p>
          <div class="mt-4 flex items-center text-red-600 font-semibold">
            <span>Voir plus</span>
            <svg class="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        <!-- Carte FFVB -->
        <div
          class="group p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <div class="flex items-center mb-3">
            <div class="bg-red-100 p-3 rounded-full mr-3">
              <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 class="font-bold text-xl text-gray-800 group-hover:text-red-600 transition-colors">FFVB</h3>
          </div>
          <p class="text-gray-600">Lien vers le site officiel de la Fédération Française de Volley</p>
          <div class="mt-4 flex items-center text-red-600 font-semibold">
            <span>Accéder</span>
            <svg class="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        <!-- Carte Autres services -->
        <div
          class="group p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer sm:col-span-2 lg:col-span-1">
          <div class="flex items-center mb-3">
            <div class="bg-red-100 p-3 rounded-full mr-3">
              <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 class="font-bold text-xl text-gray-800 group-hover:text-red-600 transition-colors">Autres services</h3>
          </div>
          <p class="text-gray-600">Liens vers inscriptions, réservations ou informations diverses</p>
          <div class="mt-4 flex items-center text-red-600 font-semibold">
            <span>Découvrir</span>
            <svg class="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

      </div>
    </section>

    <LocationMap />

    <!-- Section supplémentaire (optionnelle) -->
    <section class="mt-8 sm:mt-12 md:mt-16 w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
      <div
        class="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-6 sm:p-8 md:p-12 text-white text-center shadow-xl">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Rejoignez-nous !</h2>
        <p class="text-base sm:text-lg mb-6 max-w-2xl mx-auto">
          Le Sport Joie Lille vous accueille pour pratiquer le volley-ball dans une ambiance conviviale et compétitive.
        </p>
        <button
          class="bg-white text-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
          Nous rejoindre
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

import clubPic1 from '@/assets/clubpic1.jpg'
import clubPic2 from '@/assets/clubpic2.jpg'

import LocationMap from '@/components/LocationMap.vue'

const images = [clubPic1, clubPic2]

const currentIndex = ref(0)
const currentImage = ref(images[currentIndex.value])

let interval: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  interval = setInterval(nextImage, 5000)
})

onUnmounted(() => {
  if (interval !== null) {
    clearInterval(interval)
  }
})

function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % images.length
  currentImage.value = images[currentIndex.value]
}

function prevImage() {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
  currentImage.value = images[currentIndex.value]
}

function goToImage(index: number) {
  currentIndex.value = index
  currentImage.value = images[currentIndex.value]
}
</script>
