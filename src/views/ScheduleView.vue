<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-red-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <!-- Header -->
      <section class="text-center mb-8 sm:mb-12">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Horaires & Entraînements
        </h1>
        <p class="text-lg text-gray-600">
          Retrouvez les créneaux de chaque équipe
        </p>
      </section>

      <!-- Vue Desktop : Tableau (visible uniquement sur écrans larges) -->
      <div class="hidden lg:block mb-12">
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <div class="overflow-x-auto">
            <table class="min-w-full">
              <thead class="bg-gradient-to-r from-red-600 to-red-700 text-white">
                <tr>
                  <th class="py-4 px-6 text-left font-semibold">Section / Équipe</th>
                  <th class="py-4 px-6 text-left font-semibold">Jours d'entraînement</th>
                  <th class="py-4 px-6 text-left font-semibold">Tarifs</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(team, index) in teams" :key="index" :class="index % 2 === 0 ? 'bg-gray-50' : 'bg-white'"
                  class="border-b border-gray-200 hover:bg-red-50 transition-colors">
                  <td class="py-4 px-6">
                    <div class="font-semibold text-gray-800">{{ team.name }}</div>
                    <div v-if="team.details" class="text-sm text-gray-500 mt-1">{{ team.details }}</div>
                  </td>
                  <td class="py-4 px-6">
                    <div v-for="(schedule, idx) in team.schedules" :key="idx" class="mb-1">
                      <span class="text-gray-700">{{ schedule }}</span>
                    </div>
                  </td>
                  <td class="py-4 px-6">
                    <span class="text-xl font-bold text-red-600">{{ team.price }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Vue Mobile/Tablette : Cartes (visible sur petits écrans) -->
      <div class="block lg:hidden space-y-4 mb-12">
        <div v-for="(team, index) in teams" :key="index"
          class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-all hover:shadow-xl">

          <!-- Header de la carte -->
          <div class="bg-gradient-to-r from-red-600 to-red-700 px-4 py-3">
            <h3 class="font-bold text-white text-lg">{{ team.name }}</h3>
            <p v-if="team.details" class="text-red-50 text-sm mt-1">{{ team.details }}</p>
          </div>

          <!-- Contenu de la carte -->
          <div class="p-4 space-y-4">

            <!-- Horaires -->
            <div>
              <div class="flex items-center gap-2 mb-2">
                <svg class="w-5 h-5 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="font-semibold text-gray-800">Horaires</span>
              </div>
              <div class="space-y-1 ml-0">
                <div v-for="(schedule, idx) in team.schedules" :key="idx"
                  class="text-sm text-gray-700 bg-gray-50 px-3 py-2 rounded-lg">
                  {{ schedule }}
                </div>
              </div>
            </div>

            <!-- Prix -->
            <div class="flex items-center justify-between pt-3 border-t border-gray-200">
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="font-semibold text-gray-800">Tarif</span>
              </div>
              <span class="text-2xl font-bold text-red-600">{{ team.price }}</span>
            </div>

          </div>
        </div>
      </div>

      <!-- Image des horaires -->
      <section class="mb-12">
        <div class="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 text-center">
            Planning complet
          </h2>
          <div class="rounded-xl overflow-hidden border border-gray-200">
            <img src="/src/assets/images/schedule.png" alt="Horaires d'entraînement"
              class="w-full h-auto object-contain" />
          </div>
        </div>
      </section>

      <!-- Section Contact -->
      <section class="bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-center">
        <div class="max-w-2xl mx-auto">
          <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">
            Besoin d'informations ?
          </h3>
          <p class="text-gray-600 mb-4">
            Pour toute modification d'horaire ou information complémentaire
          </p>
          <a href="mailto:contact@sportjoielille.fr"
            class="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all shadow-lg hover:shadow-xl">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            secretariatsjl@gmail.com
          </a>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
const teams = [
  {
    name: 'École de volley',
    details: 'M7, M9, M11 (né(e)s entre 2015 et 2020)',
    schedules: ['Mercredi 18h00 - 19h00 (MIXTE)'],
    price: '45€',
  },
  {
    name: 'Minimes Filles',
    details: 'M13-M15 (né(e)s entre 2011 et 2014)',
    schedules: ['Mercredi 18h00 - 19h00', 'Jeudi 18h00 - 19h15'],
    price: '55€',
  },
  {
    name: 'Minimes Garçons',
    details: 'M13-M15 (né(e)s entre 2011 et 2014)',
    schedules: ['Mercredi 18h00 - 19h00', 'Jeudi 18h00 - 19h15'],
    price: '55€',
  },
  {
    name: 'Cadets Masculins',
    details: 'M18 (nés en 2008, 2009, 2010)',
    schedules: ['Mardi 19h00 - 20h45', 'Jeudi 19h15 - 20h45 (une semaine sur deux)'],
    price: '80€',
  },
  {
    name: 'Cadettes Féminines',
    details: 'M18 (nées en 2008, 2009, 2010)',
    schedules: ['Mardi 19h00 - 20h45', 'Jeudi 19h15 - 20h45 (une semaine sur deux)'],
    price: '80€',
  },
  {
    name: 'Juniors Féminines',
    details: 'M21 (nées entre 2005 et 2007)',
    schedules: ['Mardi 19h00 - 20h45', 'Jeudi 18h00 - 19h15'],
    price: '80€',
  },
  {
    name: 'Section Loisir',
    details: '',
    schedules: ['Mercredi 19h00 - 20h45 (encadré)', 'Mercredi 20h45 - 22h30 (jeu libre)'],
    price: '90€',
  },
  {
    name: "Section Compet'Lib",
    details: 'Mixte, 4 équipes',
    schedules: [
      'Lundi 20h00 - 22h30',
      'Jeudi 20h45 - 22h30 (2 terrains)',
      'Matchs à domicile le lundi',
      "Matchs à l'extérieur en semaine",
    ],
    price: '115€',
  },
  {
    name: 'Seniors 1 féminines',
    details: 'Régionale',
    schedules: ['Mardi 20h45 - 22h30', 'Jeudi 19h15 - 20h45', 'Matchs le week-end'],
    price: '125€',
  },
  {
    name: 'Seniors 2 féminines',
    details: 'Départementale',
    schedules: [
      'Mardi 20h45 - 22h30',
      'Jeudi 19h15 - 20h45 (une semaine sur deux)',
      'Matchs le week-end',
    ],
    price: '125€',
  },
  {
    name: 'Seniors 1 masculins',
    details: 'Régionale',
    schedules: ['Mardi 20h45 - 22h30', 'Jeudi 20h45 - 22h30', 'Matchs le week-end'],
    price: '125€',
  },
  {
    name: 'Seniors 2 masculins',
    details: 'Départementale',
    schedules: [
      'Mardi 19h00 - 20h45',
      'Jeudi 19h00 - 20h45 (une semaine sur deux)',
      'Matchs le week-end',
    ],
    price: '125€',
  },
]
</script>
