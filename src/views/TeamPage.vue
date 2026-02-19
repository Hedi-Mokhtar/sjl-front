<template>
  <div v-if="teamData" class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8 sm:space-y-12">

    <!-- TITRE -->
    <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-red-600">
      {{ teamData.title }}
    </h1>

    <!-- PHOTO D'ÉQUIPE -->
    <div class="w-full">
      <img :src="teamData.teamPic" :alt="`Photo équipe ${teamData.title}`"
        class="rounded-lg sm:rounded-xl shadow-lg w-full object-cover max-h-96 sm:max-h-[500px]" />
    </div>

    <!-- HORAIRES D'ENTRAÎNEMENT -->
    <section>
      <h2 class="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800">
        Horaires d'entraînement
      </h2>
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
            <tr v-for="(slot, index) in teamData.schedule" :key="index"
              :class="{ 'border-b': index < teamData.schedule.length - 1 }" class="hover:bg-gray-50 transition">
              <td class="px-4 py-3 font-medium">{{ slot.day }}</td>
              <td class="px-4 py-3">{{ slot.time }}</td>
              <td class="px-4 py-3">{{ slot.location }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="sm:hidden space-y-3">
        <div v-for="(slot, index) in teamData.schedule" :key="index" class="bg-white p-4 rounded-lg shadow-md">
          <div class="flex justify-between items-center mb-2">
            <span class="font-bold text-red-600">{{ slot.day }}</span>
            <span class="text-sm text-gray-600">{{ slot.time }}</span>
          </div>
          <p class="text-sm text-gray-700">📍 {{ slot.location }}</p>
        </div>
      </div>
    </section>

    <!-- ENTRAÎNEUR -->
    <section>
      <h2 class="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800">
        Entraîneur
      </h2>
      <div class="flex items-center gap-3 sm:gap-4 bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <img :src="teamData.trainerPic" alt="Photo entraîneur"
          class="w-14 h-14 sm:w-20 sm:h-20 rounded-full object-cover shadow-md flex-shrink-0" />
        <div>
          <p class="text-base sm:text-lg font-bold text-gray-800">{{ teamData.trainerName }}</p>
          <p class="text-sm sm:text-base text-gray-600">Entraîneur principal</p>
        </div>
      </div>
    </section>

    <!-- RÉSULTATS SCORE'N'CO -->
    <section v-if="teamData.widgetId && teamData.widgetVersion">
      <h2 class="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800">
        Résultats & Classement
      </h2>
      <div class="bg-white p-2 sm:p-4 rounded-lg shadow-md">
        <ScoreNCoWidget :widget-id="teamData.widgetId" :widget-version="teamData.widgetVersion"
          :club-url="teamData.clubUrl" :club-name="teamData.title" />
      </div>
    </section>

    <!-- LIEN VERS FFVB -->
    <div class="text-center pt-4">
      <a href="https://www.ffvb.org" target="_blank" rel="noopener noreferrer"
        class="inline-block bg-red-600 text-white px-5 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold shadow-lg hover:bg-red-700 hover:shadow-xl transition-all duration-200 text-sm sm:text-base">
        Voir le tableau complet sur FFVB →
      </a>
    </div>

  </div>

  <!-- Message d'erreur si équipe introuvable -->
  <div v-else class="max-w-6xl mx-auto px-4 py-20 text-center">
    <h1 class="text-2xl font-bold text-gray-800 mb-4">Équipe introuvable</h1>
    <RouterLink to="/" class="text-red-600 hover:underline">
      Retour à l'accueil
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { teamsData } from '@/data/team'
import ScoreNCoWidget from '@/components/common/ScoreNCoWidget.vue'

const route = useRoute()
const teamId = computed(() => route.params.teamId as string)
const teamData = computed(() => teamsData[teamId.value])
</script>
