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
        <div class="flex items-center justify-between mb-8 sm:mb-12">
          <div class="flex-1">
            <SectionHeader title="Le Bureau" subtitle="Les membres de notre bureau exécutif" color="red" />
          </div>
          <button
            @click="isExecutiveExpanded = !isExecutiveExpanded"
            class="ml-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            :aria-label="isExecutiveExpanded ? 'Réduire la section Bureau' : 'Développer la section Bureau'"
          >
            <svg 
              class="w-6 h-6 text-gray-600 transition-transform duration-300"
              :class="{ 'rotate-180': !isExecutiveExpanded }"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <div
          v-show="isExecutiveExpanded"
          class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 transition-all duration-300"
        >
          <VolunteerCard v-for="volunteer in executiveVolunteers" :key="volunteer.id" :volunteer="volunteer"
            :description="volunteer.executiveDescription" badge-color="bg-gradient-to-r from-red-600 to-red-700"
            badge-text="Bureau" :compact="true" />
        </div>
      </section>

      <!-- Section Coachs et Entraîneurs -->
      <section class="mb-16 sm:mb-20">
        <div class="flex items-center justify-between mb-8 sm:mb-12">
          <div class="flex-1">
            <SectionHeader title="Coachs & Entraîneurs" subtitle="Ceux qui transmettent leur passion sur le terrain"
              color="blue" />
          </div>
          <button
            @click="isCoachExpanded = !isCoachExpanded"
            class="ml-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            :aria-label="isCoachExpanded ? 'Réduire la section Coachs' : 'Développer la section Coachs'"
          >
            <svg 
              class="w-6 h-6 text-gray-600 transition-transform duration-300"
              :class="{ 'rotate-180': !isCoachExpanded }"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <div
          v-show="isCoachExpanded"
          class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 transition-all duration-300"
        >
          <VolunteerCard v-for="volunteer in coachVolunteers" :key="volunteer.id" :volunteer="volunteer"
            :description="volunteer.coachDescription" badge-color="bg-gradient-to-r from-blue-600 to-blue-700"
            badge-text="Coach" :compact="true" />
        </div>
      </section>

      <!-- Section Arbitres et Marqueurs -->
      <section class="mb-16 sm:mb-20">
        <div class="flex items-center justify-between mb-8 sm:mb-12">
          <div class="flex-1">
            <SectionHeader title="Arbitres & Marqueurs" subtitle="Ils assurent le bon déroulement des matchs"
              color="green" />
          </div>
          <button
            @click="isRefereeExpanded = !isRefereeExpanded"
            class="ml-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            :aria-label="isRefereeExpanded ? 'Réduire la section Arbitres' : 'Développer la section Arbitres'"
          >
            <svg 
              class="w-6 h-6 text-gray-600 transition-transform duration-300"
              :class="{ 'rotate-180': !isRefereeExpanded }"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <div
          v-show="isRefereeExpanded"
          class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 transition-all duration-300"
        >
          <VolunteerCard v-for="volunteer in refereeVolunteers" :key="volunteer.id" :volunteer="volunteer"
            badge-color="bg-gradient-to-r from-green-600 to-green-700" badge-text="Arbitre" :compact="true" />
        </div>
      </section>

      <!-- Section Extras -->
      <section v-if="extraVolunteers.length > 0" class="mb-16">
        <div class="flex items-center justify-between mb-8 sm:mb-12">
          <div class="flex-1">
            <SectionHeader title="Talents Multiples" subtitle="Nos bénévoles aux compétences variées" color="purple" />
          </div>
          <button
            @click="isExtraExpanded = !isExtraExpanded"
            class="ml-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            :aria-label="isExtraExpanded ? 'Réduire la section Extras' : 'Développer la section Extras'"
          >
            <svg 
              class="w-6 h-6 text-gray-600 transition-transform duration-300"
              :class="{ 'rotate-180': !isExtraExpanded }"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <div
          v-show="isExtraExpanded"
          class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 transition-all duration-300"
        >
          <VolunteerCard v-for="volunteer in extraVolunteers" :key="volunteer.id" :volunteer="volunteer"
            :description="volunteer.volunteerExtraDescription"
            badge-color="bg-gradient-to-r from-purple-600 to-purple-700" badge-text="Extra" :compact="true" />
        </div>
      </section>

      <!-- Call to Action - Rejoindre les bénévoles -->
      <section id="join" class="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Vous souhaitez nous rejoindre ?
          </h2>
          <p class="text-lg mb-8 max-w-2xl mx-auto text-red-50">
            Nous sommes toujours à la recherche de personnes motivées pour renforcer notre équipe de bénévoles !
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <RouterLink :to="{ name: 'contact', query: { type: 'benevole' } }"
              class="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
              Formulaire de contact
            </RouterLink>
            <a href="mailto:secretariatsjl@gmail.com"
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
import { computed, ref } from 'vue'
import { volunteers } from '@/data/volunteer'
import VolunteerCard from '@/components/volunteers/VolunteerCard.vue'
import SectionHeader from '@/components/volunteers/SectionHeader.vue'

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

// State for collapsible sections
const isExecutiveExpanded = ref(true)
const isCoachExpanded = ref(true)
const isRefereeExpanded = ref(true)
const isExtraExpanded = ref(true)
</script>
