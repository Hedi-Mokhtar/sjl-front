<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-red-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Hero Section -->
      <section class="text-center mb-12 sm:mb-16">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Nos bénévoles
        </h1>
        <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          L'équipe dévouée qui fait vivre Sport Joie Lille au quotidien
        </p>
      </section>

      <!-- Section Bureau -->
      <section class="mb-16 sm:mb-20">
        <div class="text-center mb-8 sm:mb-12">
          <div class="inline-flex items-center justify-center mb-4">
            <div class="h-1 w-12 bg-red-600 mr-3"></div>
            <h2 class="text-3xl sm:text-4xl font-bold text-gray-800">
              Le Bureau
            </h2>
            <div class="h-1 w-12 bg-red-600 ml-3"></div>
          </div>
          <p class="text-gray-600">Les membres de notre bureau exécutif</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <VolunteerCard v-for="volunteer in executiveVolunteers" :key="volunteer.id" :volunteer="volunteer"
            :description="volunteer.executiveDescription" badge-color="bg-gradient-to-r from-red-600 to-red-700"
            badge-text="Bureau" />
        </div>
      </section>

      <!-- Section Coachs et Entraîneurs -->
      <section class="mb-16 sm:mb-20">
        <div class="text-center mb-8 sm:mb-12">
          <div class="inline-flex items-center justify-center mb-4">
            <div class="h-1 w-12 bg-blue-600 mr-3"></div>
            <h2 class="text-3xl sm:text-4xl font-bold text-gray-800">
              Coachs & Entraîneurs
            </h2>
            <div class="h-1 w-12 bg-blue-600 ml-3"></div>
          </div>
          <p class="text-gray-600">Ceux qui transmettent leur passion sur le terrain</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          <VolunteerCard v-for="volunteer in coachVolunteers" :key="volunteer.id" :volunteer="volunteer"
            :description="volunteer.coachDescription" badge-color="bg-gradient-to-r from-blue-600 to-blue-700"
            badge-text="Coach" />
        </div>
      </section>

      <!-- Section Arbitres et Marqueurs -->
      <section class="mb-16 sm:mb-20">
        <div class="text-center mb-8 sm:mb-12">
          <div class="inline-flex items-center justify-center mb-4">
            <div class="h-1 w-12 bg-green-600 mr-3"></div>
            <h2 class="text-3xl sm:text-4xl font-bold text-gray-800">
              Arbitres & Marqueurs
            </h2>
            <div class="h-1 w-12 bg-green-600 ml-3"></div>
          </div>
          <p class="text-gray-600">Ils assurent le bon déroulement des matchs</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          <VolunteerCard v-for="volunteer in refereeVolunteers" :key="volunteer.id" :volunteer="volunteer"
            badge-color="bg-gradient-to-r from-green-600 to-green-700" badge-text="Arbitre" />
        </div>
      </section>

      <!-- Section Extras -->
      <section v-if="extraVolunteers.length > 0" class="mb-16">
        <div class="text-center mb-8 sm:mb-12">
          <div class="inline-flex items-center justify-center mb-4">
            <div class="h-1 w-12 bg-purple-600 mr-3"></div>
            <h2 class="text-3xl sm:text-4xl font-bold text-gray-800">
              Talents Multiples
            </h2>
            <div class="h-1 w-12 bg-purple-600 ml-3"></div>
          </div>
          <p class="text-gray-600">Nos bénévoles aux compétences variées</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          <VolunteerCard v-for="volunteer in extraVolunteers" :key="volunteer.id" :volunteer="volunteer"
            :description="volunteer.volunteerExtraDescription"
            badge-color="bg-gradient-to-r from-purple-600 to-purple-700" badge-text="Extra" />
        </div>
      </section>

      <!-- Call to Action - Rejoindre les bénévoles -->
      <section class="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Vous souhaitez nous rejoindre ?
          </h2>
          <p class="text-lg mb-8 max-w-2xl mx-auto text-red-50">
            Nous sommes toujours à la recherche de personnes motivées pour renforcer notre équipe de bénévoles !
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <RouterLink to="/contact"
              class="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
              Nous contacter
            </RouterLink>
            <a href="mailto:benevoles@sportjoielille.fr"
              class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all">
              Envoyer un email
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { volunteers } from '@/data/volunteer'
import VolunteerCard from '@/components/volunteers/VolunteerCard.vue'

// Filtrer les bénévoles par catégorie
const executiveVolunteers = computed(() =>
  volunteers.filter(v => v.executive)
)

const coachVolunteers = computed(() =>
  volunteers.filter(v => v.coach)
)

const refereeVolunteers = computed(() =>
  volunteers.filter(v => v.referee)
)

const extraVolunteers = computed(() =>
  volunteers.filter(v => v.volunteerExtra)
)
</script>
