<template>
  <div class="flex flex-col items-center w-full min-h-screen bg-gray-50">

    <!-- BANNIÈRE TITRE -->
    <div class="w-full bg-red-900 text-white py-12 sm:py-16 text-center">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-2"
        style="font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.05em;">
        CONTACTEZ-NOUS
      </h1>
    </div>

    <!-- CONTENU PRINCIPAL -->
    <div class="mt-8 sm:mt-12 w-full max-w-6xl px-4 sm:px-6 pb-12">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <!-- FORMULAIRE DE CONTACT -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Envoyez-nous un message</h2>

            <form @submit.prevent="handleSubmit" class="space-y-6">

              <!-- Type de demande -->
              <div>
                <label for="requestType" class="block text-sm font-semibold text-gray-700 mb-2">
                  Type de demande <span class="text-red-600">*</span>
                </label>
                <select id="requestType" v-model="formData.requestType" required
                  class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all">
                  <option value="">-- Sélectionnez votre demande --</option>
                  <option value="loisir">S'inscrire en Loisir</option>
                  <option value="competition">S'inscrire en Compétition</option>
                  <option value="competlib">S'inscrire en Compet'lib</option>
                  <option value="jeunes">S'inscrire pour les Jeunes</option>
                  <option value="benevole">Devenir bénévole</option>
                  <option value="partenaire">Devenir partenaire</option>
                  <option value="autre">Autre demande</option>
                </select>
              </div>

              <!-- Informations personnelles -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label for="firstName" class="block text-sm font-semibold text-gray-700 mb-2">
                    Prénom <span class="text-red-600">*</span>
                  </label>
                  <input type="text" id="firstName" v-model="formData.firstName" required
                    class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all" />
                </div>

                <div>
                  <label for="lastName" class="block text-sm font-semibold text-gray-700 mb-2">
                    Nom <span class="text-red-600">*</span>
                  </label>
                  <input type="text" id="lastName" v-model="formData.lastName" required
                    class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all" />
                </div>
              </div>

              <div>
                <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
                  Email <span class="text-red-600">*</span>
                </label>
                <input type="email" id="email" v-model="formData.email" required
                  class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all" />
              </div>

              <div>
                <label for="phone" class="block text-sm font-semibold text-gray-700 mb-2">
                  Téléphone
                </label>
                <input type="tel" id="phone" v-model="formData.phone"
                  class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all" />
              </div>

              <!-- CHAMPS SPÉCIFIQUES SELON LE TYPE DE DEMANDE -->

              <!-- Pour Compétition / Compet'lib / Jeunes -->
              <div v-if="['competition', 'competlib', 'jeunes'].includes(formData.requestType)"
                class="space-y-4 bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 class="font-semibold text-blue-900 mb-3">📋 Informations sportives</h3>

                <div>
                  <label for="experience" class="block text-sm font-semibold text-gray-700 mb-2">
                    Combien d'années avez-vous joué au volley ? <span class="text-red-600">*</span>
                  </label>
                  <input type="number" id="experience" v-model="formData.experience" required min="0"
                    class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all" />
                </div>

                <div>
                  <label for="level" class="block text-sm font-semibold text-gray-700 mb-2">
                    À quel niveau ? <span class="text-red-600">*</span>
                  </label>
                  <select id="level" v-model="formData.level" required
                    class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all">
                    <option value="">-- Sélectionnez --</option>
                    <option value="debutant">Débutant</option>
                    <option value="departemental">Départemental</option>
                    <option value="regional">Régional</option>
                    <option value="prenational">Pré-National</option>
                    <option value="national">National</option>
                  </select>
                </div>

                <div>
                  <label for="position" class="block text-sm font-semibold text-gray-700 mb-2">
                    Quel(s) poste(s) ? <span class="text-red-600">*</span>
                  </label>
                  <input type="text" id="position" v-model="formData.position" required
                    placeholder="Ex: Passeur, Central, Réceptionneur..."
                    class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all" />
                </div>

                <div v-if="formData.requestType === 'jeunes'">
                  <label for="birthYear" class="block text-sm font-semibold text-gray-700 mb-2">
                    Année de naissance <span class="text-red-600">*</span>
                  </label>
                  <input type="number" id="birthYear" v-model="formData.birthYear" required min="2000"
                    :max="new Date().getFullYear()" placeholder="Ex: 2010"
                    class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all" />
                </div>
              </div>

              <!-- Pour Bénévole -->
              <div v-if="formData.requestType === 'benevole'"
                class="space-y-4 bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h3 class="font-semibold text-purple-900 mb-3">🤝 Informations bénévolat</h3>

                <div>
                  <label for="availability" class="block text-sm font-semibold text-gray-700 mb-2">
                    Disponibilités <span class="text-red-600">*</span>
                  </label>
                  <textarea id="availability" v-model="formData.availability" required rows="3"
                    placeholder="Ex: Tous les mercredis soirs, week-ends..."
                    class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"></textarea>
                </div>

                <div>
                  <label for="skills" class="block text-sm font-semibold text-gray-700 mb-2">
                    Compétences / Motivations
                  </label>
                  <textarea id="skills" v-model="formData.skills" rows="3"
                    placeholder="Ex: Entraîneur, arbitre, gestion administrative..."
                    class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"></textarea>
                </div>
              </div>

              <!-- Pour Partenaire -->
              <div v-if="formData.requestType === 'partenaire'"
                class="space-y-4 bg-amber-50 p-4 rounded-lg border border-amber-200">
                <h3 class="font-semibold text-amber-900 mb-3">🤝 Informations entreprise</h3>

                <div>
                  <label for="companyName" class="block text-sm font-semibold text-gray-700 mb-2">
                    Nom de l'entreprise <span class="text-red-600">*</span>
                  </label>
                  <input type="text" id="companyName" v-model="formData.companyName" required
                    class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all" />
                </div>

                <div>
                  <label for="companyWebsite" class="block text-sm font-semibold text-gray-700 mb-2">
                    Site web de l'entreprise
                  </label>
                  <input type="url" id="companyWebsite" v-model="formData.companyWebsite" placeholder="https://..."
                    class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all" />
                </div>
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">
                  Message <span class="text-red-600">*</span>
                </label>
                <textarea id="message" v-model="formData.message" required rows="5"
                  placeholder="Décrivez votre demande..."
                  class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"></textarea>
              </div>

              <!-- Message de succès/erreur -->
              <div v-if="submitStatus === 'success'" class="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p class="text-sm text-green-800">
                    <strong>Message envoyé avec succès !</strong><br>
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              </div>

              <div v-if="submitStatus === 'error'" class="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p class="text-sm text-red-800">
                    <strong>Erreur lors de l'envoi.</strong><br>
                    Veuillez réessayer ou nous contacter par email.
                  </p>
                </div>
              </div>

              <!-- Bouton d'envoi -->
              <button type="submit" :disabled="isSubmitting"
                class="w-full bg-red-600 text-white py-4 rounded-lg font-semibold shadow-md hover:bg-red-700 hover:shadow-lg transition-all duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed">
                <span v-if="!isSubmitting">Envoyer le message</span>
                <span v-else class="flex items-center justify-center">
                  <svg class="animate-spin h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                    </path>
                  </svg>
                  Envoi en cours...
                </span>
              </button>

            </form>
          </div>
        </div>

        <!-- INFORMATIONS DE CONTACT -->
        <div class="space-y-6">

          <!-- Coordonnées -->
          <div class="bg-white rounded-xl shadow-lg p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-4">Nos coordonnées</h3>

            <div class="space-y-4">
              <div class="flex items-start">
                <svg class="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p class="font-semibold text-gray-800">Email</p>
                  <a href="mailto:secretariatsjl@gmail.com" class="text-red-600 hover:underline">
                    secretariatsjl@gmail.com
                  </a>
                </div>
              </div>

              <div class="flex items-start">
                <svg class="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p class="font-semibold text-gray-800">Adresse</p>
                  <p class="text-gray-600 text-sm">
                    Salle Pacome<br>
                    Quartier Vauban–Esquermes<br>
                    Lille, France
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Horaires -->
          <div class="bg-white rounded-xl shadow-lg p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-4">Horaires d'ouverture</h3>
            <p class="text-gray-600 text-sm mb-3">
              Le bureau répond aux emails dès que possible.
            </p>
          </div>

          <!-- Liens rapides -->
          <div class="bg-gradient-to-br from-red-600 to-red-700 rounded-xl shadow-lg p-6 text-white">
            <h3 class="text-lg font-bold mb-4">Liens rapides</h3>
            <div class="space-y-2">
              <RouterLink to="/subscription" class="block hover:underline">
                → Page inscriptions
              </RouterLink>
              <RouterLink to="/schedule" class="block hover:underline">
                → Horaires des entraînements
              </RouterLink>
            </div>
          </div>

        </div>

      </div>
    </div>

  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

interface FormData {
  requestType: string
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
  experience?: number
  level?: string
  position?: string
  birthYear?: number
  availability?: string
  skills?: string
  companyName?: string
  companyWebsite?: string
}

const emptyForm: FormData = {
  requestType: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: ''
}

const formData = ref<FormData>({ ...emptyForm })
const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')

onMounted(() => {
  const type = route.query.type as string
  if (type && ['loisir', 'competition', 'competlib', 'jeunes', 'benevole', 'partenaire'].includes(type)) {
    formData.value.requestType = type
  }
})

async function getRecaptchaToken(): Promise<string> {
  const siteKey = import.meta.env.VITE_RECAPTCHA_KEY

  if (!siteKey || !window.grecaptcha) {
    return ''
  }

  return new Promise<string>((resolve, reject) => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(siteKey, { action: 'contact' })
        .then(resolve)
        .catch(reject)
    })
  })
}

async function handleSubmit() {
  isSubmitting.value = true
  submitStatus.value = 'idle'

  try {
    const token = await getRecaptchaToken()

    const response = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData.value,
        ...(token && { 'g-recaptcha-response': token }),
        _subject: `[SJL] Nouvelle demande: ${getRequestTypeLabel(formData.value.requestType)}`,
        _replyto: formData.value.email,
        _cc: import.meta.env.VITE_CONTACT_EMAIL
      })
    })

    if (response.ok) {
      submitStatus.value = 'success'
      formData.value = { ...emptyForm }
    } else {
      submitStatus.value = 'error'
    }
  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error)
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}

function getRequestTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    loisir: 'Inscription Loisir',
    competition: 'Inscription Compétition',
    competlib: "Inscription Compet'lib",
    jeunes: 'Inscription Jeunes',
    benevole: 'Devenir bénévole',
    partenaire: 'Devenir partenaire',
    autre: 'Autre demande'
  }
  return labels[type] ?? 'Demande de contact'
}
</script>
