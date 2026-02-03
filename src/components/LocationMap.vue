<template>
  <section class="mt-8 sm:mt-12 md:mt-16 w-full bg-gray-50 py-12 sm:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Titre de la section -->
      <div class="text-center mb-8 sm:mb-12">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Venir à nos entraînements et à nos matchs
        </h2>
        <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Retrouvez-nous à la Salle Pacome
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

        <!-- Colonne gauche : Informations -->
        <div class="space-y-6">

          <!-- Carte adresse -->
          <div class="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <div class="flex items-start mb-4">
              <div class="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">Salle Pacome</h3>
                <p class="text-gray-600 mb-2">Boulevard de la Moselle</p>
                <p class="text-gray-600 mb-4">59000 Lille</p>
                <a href="https://www.google.com/maps/dir//Sport+Joie+Lille,+Bd+de+la+Moselle,+59000+Lille/@50.6245932,3.027235,16z/data=!4m16!1m7!3m6!1s0x47c2d56961b249ad:0xa7b5659aba5b3a29!2sSport+Joie+Lille!8m2!3d50.6245898!4d3.0298099!16s%2Fg%2F1thd5v6s!4m7!1m0!1m5!1m1!1s0x47c2d56961b249ad:0xa7b5659aba5b3a29!2m2!1d3.0298099!2d50.6245898?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank" class="inline-flex items-center text-red-600 hover:text-red-700 font-semibold">
                  <span>Obtenir l'itinéraire</span>
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>


          <!-- Carte contact rapide -->
          <div class="bg-gradient-to-r from-red-600 to-red-700 rounded-xl shadow-lg p-6 sm:p-8 text-white">
            <h3 class="text-xl font-bold mb-3">Première visite ?</h3>
            <p class="mb-4 text-red-50">
              N'hésitez pas à venir assister à un entraînement pour découvrir le club !
            </p>
            <button class="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all">
              Nous contacter
            </button>
          </div>

        </div>

        <!-- Colonne droite : Carte Google Maps -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden h-[400px] lg:h-auto">
          <div class="bg-white rounded-xl shadow-lg overflow-hidden h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10124.54410903276!2d3.0107581615448105!3d50.62458981427247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d56961b249ad%3A0xa7b5659aba5b3a29!2sSport%20Joie%20Lille!5e0!3m2!1sfr!2sfr!4v1770123576143!5m2!1sfr!2sfr"
              width="600" height="450" style="border:0;" allowfullscreen="false" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Pas de logique nécessaire pour l'embed simple
</script>
