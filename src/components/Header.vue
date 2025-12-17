<template>
    <header class="bg-red-600 text-white p-4">
        <div class="flex items-center justify-between">

            <!-- Logo -->
            <RouterLink to="/" class="flex items-center">
                <img src="/src/assets/logo.jpg" alt="Logo Club" class="h-16 w-16 md:h-20 md:w-20 object-contain" />
            </RouterLink>

            <!-- Titre -->
            <h1 class="text-2xl md:text-4xl text-center flex-1 mx-4 tracking-wider"
                style="font-family: 'Bebas Neue', sans-serif; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); letter-spacing: 0.05em;">
                SPORT JOIE LILLE
            </h1>

            <!-- Burger Menu (Mobile) -->
            <button @click="menuOpen = !menuOpen" class="md:hidden focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16" />
                    <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <!-- NAVIGATION DESKTOP -->
            <nav class="hidden md:block">
                <ul class="flex items-center space-x-6">

                    <li>
                        <RouterLink to="/" class="hover:underline">Accueil</RouterLink>
                    </li>

                    <!-- DROPDOWN Équipe -->
                    <li class="relative group">
                        <span class="cursor-pointer hover:underline">Équipe</span>

                        <!-- DROPDOWN -->
                        <ul class="absolute right-0 pt-2 hidden group-hover:block hover:block z-50">
                            <div class="bg-white text-black shadow-lg rounded-lg p-4 space-y-4 w-64">

                                <!-- SENIORS -->
                                <li>
                                    <h3 class="font-bold text-gray-700 text-sm mb-2">Seniors</h3>
                                    <ul class="space-y-1">
                                        <li>
                                            <RouterLink class="block px-3 py-2 hover:bg-gray-100 rounded"
                                                to="/teams/prenational-fem">
                                                Pré-Nationale Féminine
                                            </RouterLink>
                                        </li>
                                        <li>
                                            <RouterLink class="block px-3 py-2 hover:bg-gray-100 rounded"
                                                to="/equipes/regional-masc">
                                                Régionale Masculine
                                            </RouterLink>
                                        </li>
                                        <li>
                                            <RouterLink class="block px-3 py-2 hover:bg-gray-100 rounded"
                                                to="/equipes/regional-fem">
                                                Régionale Féminine
                                            </RouterLink>
                                        </li>
                                        <li>
                                            <RouterLink class="block px-3 py-2 hover:bg-gray-100 rounded"
                                                to="/equipes/departemental-masc">
                                                Départementale Masculine
                                            </RouterLink>
                                        </li>
                                    </ul>
                                </li>

                                <!-- JEUNES -->
                                <li>
                                    <h3 class="font-bold text-gray-700 text-sm mb-2">Jeunes</h3>
                                    <ul class="space-y-1">
                                        <li>
                                            <RouterLink class="block px-3 py-2 hover:bg-gray-100 rounded"
                                                to="/equipes/m21-fem">M21 Féminine</RouterLink>
                                        </li>
                                        <li>
                                            <RouterLink class="block px-3 py-2 hover:bg-gray-100 rounded"
                                                to="/equipes/m18-masc">M18 Masculin</RouterLink>
                                        </li>
                                        <li>
                                            <RouterLink class="block px-3 py-2 hover:bg-gray-100 rounded"
                                                to="/equipes/m18-fem">M18 Féminine</RouterLink>
                                        </li>
                                        <li>
                                            <RouterLink class="block px-3 py-2 hover:bg-gray-100 rounded"
                                                to="/equipes/m15-fem">M15 Féminine</RouterLink>
                                        </li>
                                        <li>
                                            <RouterLink class="block px-3 py-2 hover:bg-gray-100 rounded"
                                                to="/equipes/m15-masc">M15 Masculin</RouterLink>
                                        </li>
                                        <li>
                                            <RouterLink class="block px-3 py-2 hover:bg-gray-100 rounded"
                                                to="/equipes/m13-masc">M13 Masculin</RouterLink>
                                        </li>
                                    </ul>
                                </li>

                                <!-- COMPET'LIB -->
                                <li>
                                    <h3 class="font-bold text-gray-700 text-sm mb-2">Compet'lib</h3>
                                    <ul class="space-y-1">
                                        <li>
                                            <RouterLink class="block px-3 py-2 hover:bg-gray-100 rounded"
                                                to="/equipes/competlib-a">Compet'lib A</RouterLink>
                                        </li>
                                        <li>
                                            <RouterLink class="block px-3 py-2 hover:bg-gray-100 rounded"
                                                to="/equipes/competlib-b">Compet'lib B</RouterLink>
                                        </li>
                                        <li>
                                            <RouterLink class="block px-3 py-2 hover:bg-gray-100 rounded"
                                                to="/equipes/competlib-c">Compet'lib C</RouterLink>
                                        </li>
                                        <li>
                                            <RouterLink class="block px-3 py-2 hover:bg-gray-100 rounded"
                                                to="/equipes/competlib-d">Compet'lib D</RouterLink>
                                        </li>
                                    </ul>
                                </li>

                            </div>
                        </ul>
                    </li>

                    <li>
                        <RouterLink to="/schedule" class="hover:underline">Horaires</RouterLink>
                    </li>

                    <li>
                        <RouterLink to="/contact" class="hover:underline">Contact</RouterLink>
                    </li>

                </ul>
            </nav>

        </div>

        <!-- MENU MOBILE -->
        <nav v-if="menuOpen" class="md:hidden mt-4 bg-red-700 rounded-lg p-4">
            <ul class="space-y-3">

                <li>
                    <RouterLink to="/" @click="menuOpen = false" class="block py-2 hover:underline">
                        Accueil
                    </RouterLink>
                </li>

                <!-- Équipe avec sous-menu mobile -->
                <li>
                    <button @click="equipeOpen = !equipeOpen"
                        class="w-full text-left py-2 hover:underline flex justify-between items-center">
                        <span>Équipe</span>
                        <svg class="w-4 h-4 transition-transform" :class="{ 'rotate-180': equipeOpen }" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    <!-- Sous-menu mobile -->
                    <div v-if="equipeOpen" class="ml-4 mt-2 space-y-3">

                        <!-- SENIORS -->
                        <div>
                            <h3 class="font-bold text-sm mb-2">Seniors</h3>
                            <ul class="space-y-2 ml-2">
                                <li>
                                    <RouterLink @click="menuOpen = false" class="block py-1 text-sm hover:underline"
                                        to="/teams/prenational-fem">
                                        Pré-Nationale Féminine
                                    </RouterLink>
                                </li>
                                <li>
                                    <RouterLink @click="menuOpen = false" class="block py-1 text-sm hover:underline"
                                        to="/equipes/regional-masc">
                                        Régionale Masculine
                                    </RouterLink>
                                </li>
                                <li>
                                    <RouterLink @click="menuOpen = false" class="block py-1 text-sm hover:underline"
                                        to="/equipes/regional-fem">
                                        Régionale Féminine
                                    </RouterLink>
                                </li>
                                <li>
                                    <RouterLink @click="menuOpen = false" class="block py-1 text-sm hover:underline"
                                        to="/equipes/departemental-masc">
                                        Départementale Masculine
                                    </RouterLink>
                                </li>
                            </ul>
                        </div>

                        <!-- JEUNES -->
                        <div>
                            <h3 class="font-bold text-sm mb-2">Jeunes</h3>
                            <ul class="space-y-2 ml-2">
                                <li>
                                    <RouterLink @click="menuOpen = false" class="block py-1 text-sm hover:underline"
                                        to="/equipes/m21-fem">M21 Féminine</RouterLink>
                                </li>
                                <li>
                                    <RouterLink @click="menuOpen = false" class="block py-1 text-sm hover:underline"
                                        to="/equipes/m18-masc">M18 Masculin</RouterLink>
                                </li>
                                <li>
                                    <RouterLink @click="menuOpen = false" class="block py-1 text-sm hover:underline"
                                        to="/equipes/m18-fem">M18 Féminine</RouterLink>
                                </li>
                                <li>
                                    <RouterLink @click="menuOpen = false" class="block py-1 text-sm hover:underline"
                                        to="/equipes/m15-fem">M15 Féminine</RouterLink>
                                </li>
                                <li>
                                    <RouterLink @click="menuOpen = false" class="block py-1 text-sm hover:underline"
                                        to="/equipes/m15-masc">M15 Masculin</RouterLink>
                                </li>
                                <li>
                                    <RouterLink @click="menuOpen = false" class="block py-1 text-sm hover:underline"
                                        to="/equipes/m13-masc">M13 Masculin</RouterLink>
                                </li>
                            </ul>
                        </div>

                        <!-- COMPET'LIB -->
                        <div>
                            <h3 class="font-bold text-sm mb-2">Compet'lib</h3>
                            <ul class="space-y-2 ml-2">
                                <li>
                                    <RouterLink @click="menuOpen = false" class="block py-1 text-sm hover:underline"
                                        to="/equipes/competlib-a">Compet'lib A</RouterLink>
                                </li>
                                <li>
                                    <RouterLink @click="menuOpen = false" class="block py-1 text-sm hover:underline"
                                        to="/equipes/competlib-b">Compet'lib B</RouterLink>
                                </li>
                                <li>
                                    <RouterLink @click="menuOpen = false" class="block py-1 text-sm hover:underline"
                                        to="/equipes/competlib-c">Compet'lib C</RouterLink>
                                </li>
                                <li>
                                    <RouterLink @click="menuOpen = false" class="block py-1 text-sm hover:underline"
                                        to="/equipes/competlib-d">Compet'lib D</RouterLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>

                <li>
                    <RouterLink to="/schedule" @click="menuOpen = false" class="block py-2 hover:underline">
                        Horaires
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/contact" @click="menuOpen = false" class="block py-2 hover:underline">
                        Contact
                    </RouterLink>
                </li>

            </ul>
        </nav>
    </header>
</template>

<script setup>
import { ref } from 'vue';

const menuOpen = ref(false);
const equipeOpen = ref(false);
</script>