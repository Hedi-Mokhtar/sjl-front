<template>
  <div class="volunteer-card group relative">
    <!-- Carte -->
    <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">

      <!-- Gradient background au hover -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-gray-500/5 to-gray-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      </div>

      <div class="relative p-6 flex flex-col items-center" :class="compact ? 'p-4' : 'p-6'">

        <!-- Photo avec badge -->
        <div class="relative mb-4">
          <!-- Photo ronde -->
          <div :class="compact ? 'w-24 h-24 sm:w-28 sm:h-28' : 'w-32 h-32 sm:w-36 sm:h-36'"
            class="rounded-full overflow-hidden shadow-xl ring-4 ring-white group-hover:ring-gray-100 transition-all duration-500 transform group-hover:scale-110">
            <img :src="volunteer.picture" :alt="volunteer.name" class="w-full h-full object-cover" />
          </div>

          <!-- Badge de rôle -->
          <div :class="[badgeColor, compact ? 'text-xs px-2 py-0.5' : 'text-xs px-3 py-1']"
            class="absolute -bottom-2 left-1/2 -translate-x-1/2 text-white font-bold rounded-full shadow-lg whitespace-nowrap">
            {{ badgeText }}
          </div>
        </div>

        <!-- Nom -->
        <h3 :class="compact ? 'text-base sm:text-lg' : 'text-xl sm:text-2xl'"
          class="font-bold text-gray-800 mb-2 text-center mt-2">
          {{ volunteer.name }}
        </h3>

        <!-- Description (seulement si pas compact OU si hover sur mobile) -->
        <p v-if="description && !compact" class="text-gray-600 text-sm text-center leading-relaxed">
          {{ description }}
        </p>

        <!-- Tooltip description en mode compact (desktop hover) -->
        <div v-if="description && compact"
          class="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-gray-900 text-white text-xs rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 w-48 text-center shadow-xl hidden md:block">
          {{ description }}
          <div class="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 transform rotate-45"></div>
        </div>

        <!-- Badges multiples (si la personne a plusieurs rôles) -->
        <div v-if="!compact" class="flex flex-wrap gap-2 mt-4 justify-center">
          <span v-if="volunteer.executive && badgeText !== 'Bureau'"
            class="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded-full">
            Bureau
          </span>
          <span v-if="volunteer.coach && badgeText !== 'Coach'"
            class="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-full">
            Coach
          </span>
          <span v-if="volunteer.referee && badgeText !== 'Arbitre'"
            class="bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded-full">
            Arbitre
          </span>
          <span v-if="volunteer.volunteerExtra && badgeText !== 'Extra'"
            class="bg-purple-100 text-purple-600 text-xs font-semibold px-2 py-1 rounded-full">
            Extra
          </span>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Volunteer } from '@/data/volunteer'

interface Props {
  volunteer: Volunteer
  description?: string
  badgeColor: string
  badgeText: string
  compact?: boolean
}

withDefaults(defineProps<Props>(), {
  compact: false
})
</script>

<style scoped>
.volunteer-card {
  animation: fadeInUp 0.6s ease-out backwards;
}

/* Animations décalées */
.volunteer-card:nth-child(1) {
  animation-delay: 0.05s;
}

.volunteer-card:nth-child(2) {
  animation-delay: 0.1s;
}

.volunteer-card:nth-child(3) {
  animation-delay: 0.15s;
}

.volunteer-card:nth-child(4) {
  animation-delay: 0.2s;
}

.volunteer-card:nth-child(5) {
  animation-delay: 0.25s;
}

.volunteer-card:nth-child(6) {
  animation-delay: 0.3s;
}

.volunteer-card:nth-child(7) {
  animation-delay: 0.35s;
}

.volunteer-card:nth-child(8) {
  animation-delay: 0.4s;
}

.volunteer-card:nth-child(9) {
  animation-delay: 0.45s;
}

.volunteer-card:nth-child(10) {
  animation-delay: 0.5s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
