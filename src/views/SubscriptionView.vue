<template>
  <div class="flex flex-col items-center w-full min-h-screen bg-gray-50">

    <!-- BANNIÈRE TITRE -->
    <div class="w-full bg-red-900 text-white py-12 sm:py-16 text-center">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-2"
        style="font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.05em;">
        INSCRIPTIONS 2025-2026
      </h1>
      <p class="text-base sm:text-lg text-red-100">
        Rejoignez Sport Joie Lille et vivez votre passion du volley !
      </p>
    </div>

    <!-- SECTIONS D'INSCRIPTION -->
    <section class="mt-8 sm:mt-12 w-full max-w-6xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 pb-12">

      <!-- LOISIR -->
      <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
        <div class="bg-gradient-to-r from-blue-500 to-blue-600 p-6 sm:p-8">
          <h2 class="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            🏐 LOISIR
          </h2>
        </div>

        <div class="p-6 sm:p-8 space-y-4">
          <p class="text-gray-700 leading-relaxed">
            Vous souhaitez jouer au volley dans une ambiance conviviale et décontractée ?
            Nos séances loisir sont faites pour vous ! Aucun niveau requis, venez vous amuser.
          </p>

          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              📋 Pièces à fournir :
            </h3>
            <ul class="space-y-2 text-sm sm:text-base text-gray-700">
              <li class="flex items-start gap-2">
                <span class="text-red-600 font-bold">•</span>
                Certificat médical de non contre-indication à la pratique du volley-ball
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-600 font-bold">•</span>
                Photo d'identité récente
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-600 font-bold">•</span>
                Formulaire d'inscription complété
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-600 font-bold">•</span>
                Règlement (chèque ou espèces)
              </li>
            </ul>
          </div>

          <a href="https://forms.example.com/loisir" target="_blank" rel="noopener noreferrer"
            class="block w-full bg-blue-600 text-white text-center py-3 sm:py-4 rounded-lg font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-200">
            S'inscrire en Loisir →
          </a>
        </div>
      </div>

      <!-- COMPÉTITIONS -->
      <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
        <div class="bg-gradient-to-r from-red-600 to-red-700 p-6 sm:p-8">
          <h2 class="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            🏆 COMPÉTITIONS
          </h2>
        </div>

        <div class="p-6 sm:p-8 space-y-4">
          <p class="text-gray-700 leading-relaxed">
            Envie de vous challenger et de participer à des championnats officiels ?
            Rejoignez nos équipes compétitives et représentez le club en championnat FFVB !
          </p>

          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              📋 Pièces à fournir :
            </h3>
            <ul class="space-y-2 text-sm sm:text-base text-gray-700">
              <li class="flex items-start gap-2">
                <span class="text-red-600 font-bold">•</span>
                Certificat médical de non contre-indication à la pratique du volley-ball en compétition
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-600 font-bold">•</span>
                Photo d'identité récente
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-600 font-bold">•</span>
                Licence FFVB (si renouvellement, indiquer le numéro)
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-600 font-bold">•</span>
                Formulaire d'inscription complété
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-600 font-bold">•</span>
                Règlement (chèque ou espèces)
              </li>
            </ul>
          </div>

          <a href="https://forms.example.com/competition" target="_blank" rel="noopener noreferrer"
            class="block w-full bg-red-600 text-white text-center py-3 sm:py-4 rounded-lg font-semibold shadow-md hover:bg-red-700 hover:shadow-lg transition-all duration-200">
            S'inscrire en Compétition →
          </a>
        </div>
      </div>

      <!-- COMPET'LIB -->
      <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
        <div class="bg-gradient-to-r from-orange-500 to-orange-600 p-6 sm:p-8">
          <h2 class="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            ⚡ COMPET'LIB
          </h2>
        </div>

        <div class="p-6 sm:p-8 space-y-4">
          <p class="text-gray-700 leading-relaxed">
            Le meilleur des deux mondes ! Compet'lib combine esprit compétitif et liberté.
            Jouez en tournoi sans les contraintes d'un engagement hebdomadaire strict.
          </p>

          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              📋 Pièces à fournir :
            </h3>
            <ul class="space-y-2 text-sm sm:text-base text-gray-700">
              <li class="flex items-start gap-2">
                <span class="text-orange-600 font-bold">•</span>
                Certificat médical de non contre-indication à la pratique du volley-ball
              </li>
              <li class="flex items-start gap-2">
                <span class="text-orange-600 font-bold">•</span>
                Photo d'identité récente
              </li>
              <li class="flex items-start gap-2">
                <span class="text-orange-600 font-bold">•</span>
                Licence FFVB Compet'lib
              </li>
              <li class="flex items-start gap-2">
                <span class="text-orange-600 font-bold">•</span>
                Formulaire d'inscription complété
              </li>
              <li class="flex items-start gap-2">
                <span class="text-orange-600 font-bold">•</span>
                Règlement (chèque ou espèces)
              </li>
            </ul>
          </div>

          <a href="https://forms.example.com/competlib" target="_blank" rel="noopener noreferrer"
            class="block w-full bg-orange-600 text-white text-center py-3 sm:py-4 rounded-lg font-semibold shadow-md hover:bg-orange-700 hover:shadow-lg transition-all duration-200">
            S'inscrire en Compet'lib →
          </a>
        </div>
      </div>

      <!-- JEUNES -->
      <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
        <div class="bg-gradient-to-r from-green-500 to-green-600 p-6 sm:p-8">
          <h2 class="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            👦👧 JEUNES
          </h2>
        </div>

        <div class="p-6 sm:p-8 space-y-4">
          <p class="text-gray-700 leading-relaxed">
            Catégories M13, M15, M18 et M21 ! Nous formons les champions de demain dans un cadre
            éducatif et sportif. Initiation, perfectionnement et compétition adaptés à chaque âge.
          </p>

          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              📋 Pièces à fournir :
            </h3>
            <ul class="space-y-2 text-sm sm:text-base text-gray-700">
              <li class="flex items-start gap-2">
                <span class="text-green-600 font-bold">•</span>
                Certificat médical de non contre-indication à la pratique du volley-ball
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-600 font-bold">•</span>
                Photo d'identité récente
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-600 font-bold">•</span>
                Autorisation parentale (pour les mineurs)
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-600 font-bold">•</span>
                Licence FFVB jeune
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-600 font-bold">•</span>
                Formulaire d'inscription complété
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-600 font-bold">•</span>
                Règlement (chèque ou espèces)
              </li>
            </ul>
          </div>

          <a href="https://forms.example.com/jeunes" target="_blank" rel="noopener noreferrer"
            class="block w-full bg-green-600 text-white text-center py-3 sm:py-4 rounded-lg font-semibold shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-200">
            S'inscrire Jeunes →
          </a>
        </div>
      </div>

    </section>

    <!-- INFORMATIONS COMPLÉMENTAIRES -->
    <section class="w-full bg-white py-12 px-4 sm:px-6">
      <div class="max-w-4xl mx-auto text-center space-y-4">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
          Besoin d'aide ?
        </h2>
        <p class="text-gray-700 text-base sm:text-lg leading-relaxed">
          Pour toute question concernant les inscriptions, n'hésitez pas à nous contacter
          par email à <a href="mailto:contact@sportjoielille.fr"
            class="text-red-600 hover:underline font-semibold">contact@sportjoielille.fr</a>
          ou par téléphone au <span class="font-semibold">06 XX XX XX XX</span>.
        </p>
        <p class="text-sm text-gray-500">
          Les certificats médicaux doivent dater de moins de 3 mois.
        </p>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
// Page inscription - Sport Joie Lille
</script>

<style scoped>
/* Styles optionnels */
</style>
