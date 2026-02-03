<template>
  <header class="bg-white text-red-600 shadow-xl border-b-4 border-red-600">
    <div class="p-4">
      <div class="flex items-center justify-between">

        <!-- Logo -->
        <RouterLink to="/" class="flex items-center">
          <img src="/src/assets/logo.png" alt="Logo Club" class="h-16 w-16 md:h-20 md:w-20 object-contain" />
        </RouterLink>

        <!-- Titre -->
        <h1 class="text-3xl md:text-5xl lg:text-6xl text-center flex-1 mx-4 tracking-wider font-extrabold text-red-600"
          style="font-family: 'Bebas Neue', sans-serif; text-shadow: 2px 2px 4px rgba(220, 38, 38, 0.2); letter-spacing: 0.1em;">
          SPORT JOIE LILLE
        </h1>

        <!-- Burger Menu (Mobile) -->
        <button @click="menuOpen = !menuOpen" class="md:hidden focus:outline-none text-red-600">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- NAVIGATION DESKTOP -->
        <nav class="hidden md:block">
          <ul class="flex items-center space-x-3 lg:space-x-4">

            <li>
              <RouterLink to="/"
                class="px-4 py-2 rounded-md border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200 font-semibold">
                Accueil
              </RouterLink>
            </li>

            <!-- DROPDOWN Équipe -->
            <li class="relative group">
              <span
                class="cursor-pointer px-4 py-2 rounded-md border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200 font-semibold inline-block">
                Équipe
              </span>

              <!-- DROPDOWN -->
              <ul class="absolute right-0 pt-2 hidden group-hover:block hover:block z-50">
                <div class="bg-white text-gray-800 shadow-2xl rounded-lg p-4 space-y-4 w-64 border-2 border-red-600">

                  <!-- SENIORS -->
                  <li>
                    <h3 class="font-bold text-red-600 text-sm mb-2 uppercase tracking-wide">Seniors</h3>
                    <ul class="space-y-1">
                      <li>
                        <RouterLink
                          class="block px-3 py-2 hover:bg-red-50 rounded-md transition-colors text-gray-700 hover:text-red-600"
                          to="/teams/prenational-fem">
                          Pré-Nationale Féminine
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink
                          class="block px-3 py-2 hover:bg-red-50 rounded-md transition-colors text-gray-700 hover:text-red-600"
                          to="/teams/regional-masc">
                          Régionale Masculine
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink
                          class="block px-3 py-2 hover:bg-red-50 rounded-md transition-colors text-gray-700 hover:text-red-600"
                          to="/teams/regional-fem">
                          Régionale Féminine
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink
                          class="block px-3 py-2 hover:bg-red-50 rounded-md transition-colors text-gray-700 hover:text-red-600"
                          to="/teams/departemental-masc">
                          Départementale Masculine
                        </RouterLink>
                      </li>
                    </ul>
                  </li>

                  <!-- JEUNES -->
                  <li>
                    <h3 class="font-bold text-red-600 text-sm mb-2 uppercase tracking-wide">Jeunes</h3>
                    <ul class="space-y-1">
                      <li>
                        <RouterLink
                          class="block px-3 py-2 hover:bg-red-50 rounded-md transition-colors text-gray-700 hover:text-red-600"
                          to="/teams/m21-fem">
                          M21 Féminine
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink
                          class="block px-3 py-2 hover:bg-red-50 rounded-md transition-colors text-gray-700 hover:text-red-600"
                          to="/teams/m18-masc">
                          M18 Masculin
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink
                          class="block px-3 py-2 hover:bg-red-50 rounded-md transition-colors text-gray-700 hover:text-red-600"
                          to="/teams/m18-fem">
                          M18 Féminine
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink
                          class="block px-3 py-2 hover:bg-red-50 rounded-md transition-colors text-gray-700 hover:text-red-600"
                          to="/teams/m15-fem">
                          M15 Féminine
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink
                          class="block px-3 py-2 hover:bg-red-50 rounded-md transition-colors text-gray-700 hover:text-red-600"
                          to="/teams/m15-masc">
                          M15 Masculin
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink
                          class="block px-3 py-2 hover:bg-red-50 rounded-md transition-colors text-gray-700 hover:text-red-600"
                          to="/teams/m13-masc">
                          M13 Masculin
                        </RouterLink>
                      </li>
                    </ul>
                  </li>

                  <!-- COMPET'LIB -->
                  <li>
                    <h3 class="font-bold text-red-600 text-sm mb-2 uppercase tracking-wide">Compet'lib</h3>
                    <ul class="space-y-1">
                      <li>
                        <RouterLink
                          class="block px-3 py-2 hover:bg-red-50 rounded-md transition-colors text-gray-700 hover:text-red-600"
                          to="/teams/competlib-a">
                          Compet'lib A
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink
                          class="block px-3 py-2 hover:bg-red-50 rounded-md transition-colors text-gray-700 hover:text-red-600"
                          to="/teams/competlib-b">
                          Compet'lib B
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink
                          class="block px-3 py-2 hover:bg-red-50 rounded-md transition-colors text-gray-700 hover:text-red-600"
                          to="/teams/competlib-c">
                          Compet'lib C
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink
                          class="block px-3 py-2 hover:bg-red-50 rounded-md transition-colors text-gray-700 hover:text-red-600"
                          to="/teams/competlib-d">
                          Compet'lib D
                        </RouterLink>
                      </li>
                    </ul>
                  </li>

                </div>
              </ul>
            </li>

            <li>
              <RouterLink to="/schedule"
                class="px-4 py-2 rounded-md border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200 font-semibold">
                Horaires
              </RouterLink>
            </li>

            <li>
              <RouterLink to="/subscription"
                class="px-4 py-2 rounded-md border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200 font-semibold">
                Inscriptions
              </RouterLink>
            </li>

            <li>
              <RouterLink to="/contact"
                class="px-4 py-2 rounded-md border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200 font-semibold">
                Contact
              </RouterLink>
            </li>

          </ul>
        </nav>

      </div>
    </div>

    <!-- Barre de transition décorative -->
    <div class="h-2 bg-gradient-to-r from-red-500 via-red-600 to-red-700"></div>

    <!-- MENU MOBILE -->
    <nav v-if="menuOpen" class="md:hidden bg-gray-50 rounded-b-lg p-4 shadow-inner border-t border-red-200">
      <ul class="space-y-3">

        <li>
          <RouterLink to="/" @click="menuOpen = false"
            class="block py-2 px-4 rounded-md border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200 font-semibold text-center">
            Accueil
          </RouterLink>
        </li>

        <!-- Équipe avec sous-menu mobile -->
        <li>
          <button @click="equipeOpen = !equipeOpen"
            class="w-full py-2 px-4 rounded-md border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200 font-semibold flex justify-center items-center relative">
            <span>Équipe</span>
            <svg class="w-4 h-4 transition-transform absolute right-4" :class="{ 'rotate-180': equipeOpen }" fill="none"
              stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <!-- Sous-menu mobile -->
          <div v-if="equipeOpen" class="ml-4 mt-2 space-y-3">

            <!-- SENIORS -->
            <div>
              <h3 class="font-bold text-sm mb-2 uppercase tracking-wide text-red-600">Seniors</h3>
              <ul class="space-y-2 ml-2">
                <li>
                  <RouterLink @click="menuOpen = false" class="block py-1 text-sm hover:text-red-600 text-gray-700"
                    to="/teams/prenational-fem">
                    Pré-Nationale Féminine
                  </RouterLink>
                </li>
                <li>
                  <RouterLink @click="menuOpen = false" class="block py-1 text-sm hover:text-red-600 text-gray-700"
                    to="/teams/regional-masc">
                    Régionale Masculine
                  </RouterLink>
                </li>
                <li>
                  <RouterLink @click="menuOpen = false" class="block py-1 text-sm hover:text-red-600 text-gray-700"
                    to="/teams/regional-fem">
                    Régionale Féminine
                  </RouterLink>
                </li>
                <li>
                  <RouterLink @click="menuOpen = false" class="block py-1 text-sm hover:text-red-600 text-gray-700"
                    to="/teams/departemental-masc">
                    Départementale Masculine
                  </RouterLink>
                </li>
              </ul>
            </div>

            <!-- JEUNES -->
            <div>
              <h3 class="font-bold text-sm mb-2 uppercase tracking-wide text-red-600">Jeunes</h3>
              <ul class="space-y-2 ml-2">
                <li>
                  <RouterLink @click="menuOpen = false" class="block py-1 text-sm hover:text-red-600 text-gray-700"
                    to="/teams/m21-fem">
                    M21 Féminine</RouterLink>
                </li>
                <li>
                  <RouterLink @click="menuOpen = false" class="block py-1 text-sm hover:text-red-600 text-gray-700"
                    to="/teams/m18-masc">
                    M18 Masculin</RouterLink>
                </li>
                <li>
                  <RouterLink @click="menuOpen = false" class="block py-1 text-sm hover:text-red-600 text-gray-700"
                    to="/teams/m18-fem">
                    M18 Féminine</RouterLink>
                </li>
                <li>
                  <RouterLink @click="menuOpen = false" class="block py-1 text-sm hover:text-red-600 text-gray-700"
                    to="/teams/m15-fem">
                    M15 Féminine</RouterLink>
                </li>
                <li>
                  <RouterLink @click="menuOpen = false" class="block py-1 text-sm hover:text-red-600 text-gray-700"
                    to="/teams/m15-masc">
                    M15 Masculin</RouterLink>
                </li>
                <li>
                  <RouterLink @click="menuOpen = false" class="block py-1 text-sm hover:text-red-600 text-gray-700"
                    to="/teams/m13-masc">
                    M13 Masculin</RouterLink>
                </li>
              </ul>
            </div>

            <!-- COMPET'LIB -->
            <div>
              <h3 class="font-bold text-sm mb-2 uppercase tracking-wide text-red-600">Compet'lib</h3>
              <ul class="space-y-2 ml-2">
                <li>
                  <RouterLink @click="menuOpen = false" class="block py-1 text-sm hover:text-red-600 text-gray-700"
                    to="/teams/competlib-a">Compet'lib A</RouterLink>
                </li>
                <li>
                  <RouterLink @click="menuOpen = false" class="block py-1 text-sm hover:text-red-600 text-gray-700"
                    to="/teams/competlib-b">Compet'lib B</RouterLink>
                </li>
                <li>
                  <RouterLink @click="menuOpen = false" class="block py-1 text-sm hover:text-red-600 text-gray-700"
                    to="/teams/competlib-c">Compet'lib C</RouterLink>
                </li>
                <li>
                  <RouterLink @click="menuOpen = false" class="block py-1 text-sm hover:text-red-600 text-gray-700"
                    to="/teams/competlib-d">Compet'lib D</RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li>
          <RouterLink to="/schedule" @click="menuOpen = false"
            class="block py-2 px-4 rounded-md border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200 font-semibold text-center">
            Horaires
          </RouterLink>
        </li>

        <li>
          <RouterLink to="/subscription" @click="menuOpen = false"
            class="block py-2 px-4 rounded-md border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200 font-semibold text-center">
            Inscriptions
          </RouterLink>
        </li>

        <li>
          <RouterLink to="/contact" @click="menuOpen = false"
            class="block py-2 px-4 rounded-md border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200 font-semibold text-center">
            Contact
          </RouterLink>
        </li>

      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const menuOpen = ref(false)
const equipeOpen = ref(false)

// Déclarer le nom du composant
defineOptions({
  name: 'AppHeader',
})
</script>
