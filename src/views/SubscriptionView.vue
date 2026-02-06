<template>
  <div class="flex flex-col items-center w-full min-h-screen bg-gray-50">

    <!-- BANNIÈRE TITRE -->
    <div class="w-full bg-red-900 text-white py-12 sm:py-16 text-center">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-2"
        style="font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.05em;">
        INSCRIPTIONS 2025-2026
      </h1>
      <p class="text-base sm:text-lg text-red-100">
        Rejoignez Sport Joie Lille !
      </p>
    </div>

    <!-- SECTIONS D'INSCRIPTION -->
    <section class="mt-8 sm:mt-12 w-full max-w-6xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 pb-12">

      <!-- LOISIR -->
      <div
        class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col">
        <div class="bg-gradient-to-r from-blue-500 to-blue-600 p-6 sm:p-8">
          <h2 class="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            🏐 Loisir
          </h2>
          <p class="text-blue-50 text-sm mt-2">Pour tous niveaux</p>
        </div>

        <div class="p-6 sm:p-8 space-y-4 flex-1 flex flex-col">
          <p class="text-gray-700 leading-relaxed">
            Vous souhaitez jouer au volley dans une <strong>ambiance conviviale et décontractée</strong> ?
            Participez à des cours encadrés par nos bénévoles <strong>sans la pression de la compétition</strong>.
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <div class="flex items-start">
              <svg class="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div class="text-sm text-blue-900">
                <p class="font-semibold mb-1">⚠️ Places limitées</p>
                <p>Inscrivez-vous rapidement pour garantir votre place ! Seules les demandes via le formulaire en ligne
                  seront prises en compte (pas d'email ou téléphone).</p>
              </div>
            </div>
          </div>

          <div class="space-y-2 text-sm text-gray-600">
            <div class="flex items-center">
              <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Aucun niveau requis
            </div>
            <div class="flex items-center">
              <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Ambiance conviviale
            </div>
            <div class="flex items-center">
              <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Cours encadrés
            </div>
          </div>

          <RouterLink :to="{ name: 'contact', query: { type: 'loisir' } }"
            class="mt-auto block w-full bg-blue-600 text-white text-center py-3 sm:py-4 rounded-lg font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-200">
            S'inscrire en Loisir →
          </RouterLink>


        </div>
      </div>

      <!-- COMPÉTITIONS -->
      <div
        class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col">
        <div class="bg-gradient-to-r from-red-600 to-red-700 p-6 sm:p-8">
          <h2 class="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            🏆 Compétition
          </h2>
          <p class="text-red-50 text-sm mt-2">Championnats FFVB</p>
        </div>

        <div class="p-6 sm:p-8 space-y-4 flex-1 flex flex-col">
          <p class="text-gray-700 leading-relaxed">
            Envie de vous challenger et de participer à des <strong>championnats officiels</strong> ?
            Rejoignez nos équipes compétitives et représentez le club en championnat FFVB !
          </p>

          <div class="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <div class="flex items-start">
              <svg class="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div class="text-sm text-amber-900">
                <p class="font-semibold mb-1">📋 Procédure obligatoire</p>
                <p>Vous devez d'abord demander un essai dans l'équipe souhaitée. Le coach validera votre demande avant
                  l'inscription définitive.</p>
              </div>
            </div>
          </div>

          <div class="space-y-2 text-sm text-gray-600">
            <div class="flex items-center">
              <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Matchs officiels FFVB
            </div>
            <div class="flex items-center">
              <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Entraînements réguliers
            </div>
            <div class="flex items-center">
              <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Esprit d'équipe
            </div>
          </div>
          <RouterLink :to="{ name: 'contact', query: { type: 'competition' } }"
            class="mt-auto block w-full bg-red-600 text-white text-center py-3 sm:py-4 rounded-lg font-semibold shadow-md hover:bg-red-700 hover:shadow-lg transition-all duration-200">
            Demander un essai →
          </RouterLink>
        </div>
      </div>

      <!-- COMPET'LIB -->
      <div
        class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col">
        <div class="bg-gradient-to-r from-orange-500 to-orange-600 p-6 sm:p-8">
          <h2 class="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            ⚡ Compet'lib
          </h2>
          <p class="text-orange-50 text-sm mt-2">Compétition flexible</p>
        </div>

        <div class="p-6 sm:p-8 space-y-4 flex-1 flex flex-col">
          <p class="text-gray-700 leading-relaxed">
            Le meilleur des deux mondes ! Compet'lib combine <strong>esprit compétitif et liberté</strong>.
            Jouez en matchs <strong>sans contrainte d'engagement strict</strong> le week-end.
          </p>

          <div class="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <div class="flex items-start">
              <svg class="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div class="text-sm text-amber-900">
                <p class="font-semibold mb-1">📋 Procédure obligatoire</p>
                <p>Vous devez d'abord demander un essai. L'équipe doit avoir la place nécessaire et valider votre
                  demande.</p>
              </div>
            </div>
          </div>

          <div class="space-y-2 text-sm text-gray-600">
            <div class="flex items-center">
              <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Flexibilité des engagements
            </div>
            <div class="flex items-center">
              <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Matchs réguliers
            </div>
            <div class="flex items-center">
              <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Ambiance conviviale
            </div>
          </div>

          <RouterLink :to="{ name: 'contact', query: { type: 'competlib' } }"
            class="mt-auto block w-full bg-orange-600 text-white text-center py-3 sm:py-4 rounded-lg font-semibold shadow-md hover:bg-orange-700 hover:shadow-lg transition-all duration-200">
            Demander un essai →
          </RouterLink>

        </div>
      </div>

      <!-- JEUNES -->
      <div
        class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col">
        <div class="bg-gradient-to-r from-green-500 to-green-600 p-6 sm:p-8">
          <h2 class="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            👦👧 Jeunes
          </h2>
          <p class="text-green-50 text-sm mt-2">M13, M15, M18, M21</p>
        </div>

        <div class="p-6 sm:p-8 space-y-4 flex-1 flex flex-col">
          <p class="text-gray-700 leading-relaxed">
            Catégories M13, M15, M18 et M21 ! Nous formons les <strong>champions de demain</strong> dans un cadre
            éducatif et sportif. Initiation, perfectionnement et compétition adaptés à chaque âge.
          </p>

          <div class="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <div class="flex items-start">
              <svg class="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div class="text-sm text-amber-900">
                <p class="font-semibold mb-1">📋 Procédure obligatoire</p>
                <p>Vous devez d'abord demander un essai et vérifier les places restantes. Le coach validera votre
                  demande avant l'inscription définitive.</p>
              </div>
            </div>
          </div>

          <div class="space-y-2 text-sm text-gray-600">
            <div class="flex items-center">
              <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Formation adaptée par âge
            </div>
            <div class="flex items-center">
              <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Encadrement qualifié
            </div>
            <div class="flex items-center">
              <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Esprit éducatif
            </div>
          </div>

          <RouterLink :to="{ name: 'contact', query: { type: 'jeunes' } }"
            class="mt-auto block w-full bg-green-600 text-white text-center py-3 sm:py-4 rounded-lg font-semibold shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-200">
            Demander un essai →
          </RouterLink>

        </div>
      </div>

    </section>

    <!-- INFORMATIONS COMPLÉMENTAIRES -->
    <section class="w-full bg-white py-12 px-4 sm:px-6 border-t border-gray-200">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-8">
          <h2 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Besoin d'aide ?
          </h2>
          <p class="text-gray-700 text-base sm:text-lg leading-relaxed">
            Pour toute question concernant les inscriptions, n'hésitez pas à nous contacter
            par email à <a href="mailto:contact@sportjoielille.fr"
              class="text-red-600 hover:underline font-semibold">contact@sportjoielille.fr</a>
          </p>
        </div>

        <!-- Infos importantes -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <div class="flex items-start">
              <svg class="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <div>
                <h3 class="font-semibold text-blue-900 mb-1">Certificat médical</h3>
                <p class="text-sm text-blue-800">Obligatoire et datant de moins de 3 mois</p>
              </div>
            </div>
          </div>

          <div class="bg-green-50 p-4 rounded-lg border border-green-200">
            <div class="flex items-start">
              <svg class="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 class="font-semibold text-green-900 mb-1">Délai de réponse</h3>
                <p class="text-sm text-green-800">Nous traiterons votre demande sous 48h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
// Page inscription - Sport Joie Lille
</script>
