<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8 sm:space-y-12">

    <!-- TITRE -->
    <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-red-600">
      Pré-Nationale Féminine
    </h1>

    <!-- PHOTO D'ÉQUIPE -->
    <div class="w-full">
      <img src="/src/assets/teams/teampic.jpg" alt="Photo équipe Pré-nationale Féminine"
        class="rounded-lg sm:rounded-xl shadow-lg w-full object-cover max-h-96 sm:max-h-[500px]" />
    </div>

    <!-- HORAIRES D'ENTRAÎNEMENT -->
    <section>
      <h2 class="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800">
        Horaires d'entraînement
      </h2>

      <!-- Version desktop : tableau -->
      <div class="hidden sm:block overflow-x-auto">
        <table class="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead class="bg-red-600 text-white">
            <tr>
              <th class="px-4 py-3 text-left">Jour</th>
              <th class="px-4 py-3 text-left">Horaire</th>
              <th class="px-4 py-3 text-left">Salle</th>
            </tr>
          </thead>

          <tbody>
            <tr class="border-b hover:bg-gray-50 transition">
              <td class="px-4 py-3 font-medium">Mardi</td>
              <td class="px-4 py-3">20h00 – 22h00</td>
              <td class="px-4 py-3">Salle Colysée</td>
            </tr>
            <tr class="hover:bg-gray-50 transition">
              <td class="px-4 py-3 font-medium">Jeudi</td>
              <td class="px-4 py-3">20h00 – 22h00</td>
              <td class="px-4 py-3">Salle Colysée</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Version mobile : cartes -->
      <div class="sm:hidden space-y-3">
        <div class="bg-white p-4 rounded-lg shadow-md">
          <div class="flex justify-between items-center mb-2">
            <span class="font-bold text-red-600">Mardi</span>
            <span class="text-sm text-gray-600">20h00 – 22h00</span>
          </div>
          <p class="text-sm text-gray-700">📍 Salle Colysée</p>
        </div>

        <div class="bg-white p-4 rounded-lg shadow-md">
          <div class="flex justify-between items-center mb-2">
            <span class="font-bold text-red-600">Jeudi</span>
            <span class="text-sm text-gray-600">20h00 – 22h00</span>
          </div>
          <p class="text-sm text-gray-700">📍 Salle Colysée</p>
        </div>
      </div>
    </section>

    <!-- ENTRAÎNEUR -->
    <section>
      <h2 class="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800">
        Entraîneur
      </h2>

      <div class="flex items-center gap-3 sm:gap-4 bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <img src="/src/assets/teams/teampnftrainer.jpg" alt="Photo entraîneur"
          class="w-14 h-14 sm:w-20 sm:h-20 rounded-full object-cover shadow-md flex-shrink-0" />

        <div>
          <p class="text-base sm:text-lg font-bold text-gray-800">Wail Roudani</p>
          <p class="text-sm sm:text-base text-gray-600">Entraîneur principal</p>
        </div>
      </div>
    </section>

    <!-- CALENDRIER DES MATCHS -->
    <section>
      <h2 class="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800">
        Calendrier des matchs
      </h2>

      <div class="bg-white p-2 sm:p-4 rounded-lg shadow-md">
        <img src="/src/assets/teams/calendrierpnf.png" alt="Calendrier FFVB PNF"
          class="rounded-lg w-full object-contain" />
      </div>

      <p class="text-xs sm:text-sm text-gray-500 text-center mt-2">
        Cliquez sur l'image pour l'agrandir
      </p>
    </section>

    <!-- LIEN VERS FFVB -->
    <div class="text-center pt-4">
      <a href="https://www.ffvb.org" target="_blank" rel="noopener noreferrer"
        class="inline-block bg-red-600 text-white px-5 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold shadow-lg hover:bg-red-700 hover:shadow-xl transition-all duration-200 text-sm sm:text-base">
        Voir le tableau complet sur FFVB →
      </a>
    </div>

  </div>
</template>

<script setup lang="ts">
// Composant Vue pour page d'équipe
</script>

<style scoped>
/* Styles optionnels */
</style>
