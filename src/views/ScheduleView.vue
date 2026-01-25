<template>
  <div class="p-6">
    <h2 class="text-3xl font-bold mb-2">Horaires & Entraînements</h2>
    <p class="text-gray-600 mb-6">Retrouvez les créneaux de chaque équipe.</p>

    <div class="overflow-x-auto shadow-lg rounded-lg">
      <table class="min-w-full bg-white">
        <thead class="text-white" style="background-color: #e63946">
          <tr>
            <th class="py-3 px-4 text-left font-semibold">Section / Équipe</th>
            <th class="py-3 px-4 text-left font-semibold">Jours d'entraînement</th>
            <th class="py-3 px-4 text-left font-semibold">Tarifs</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(team, index) in teams" :key="index" :class="index % 2 === 0 ? 'bg-gray-50' : 'bg-white'"
            class="border-b border-gray-200 hover:bg-blue-50 transition-colors">
            <td class="py-4 px-4">
              <div class="font-semibold text-gray-800">{{ team.name }}</div>
              <div class="text-sm text-gray-500 mt-1">{{ team.details }}</div>
            </td>
            <td class="py-4 px-4">
              <div v-for="(schedule, idx) in team.schedules" :key="idx" class="mb-1">
                <span class="text-gray-700">{{ schedule }}</span>
              </div>
            </td>
            <td class="py-4 px-4">
              <span class="text-lg font-bold text-blue-600">{{ team.price }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="flex flex-col items-center w-full py-6 sm:py-10 px-4 sm:px-6 bg-gray-50">
    <!-- Image centrée et responsive -->
    <div class="w-full max-w-5xl bg-white p-4 sm:p-6 rounded-lg shadow-lg">
      <img src="/src/assets/schedule.png" alt="Horaires d'entraînement"
        class="w-full h-auto object-contain rounded-md" />
    </div>

    <!-- Note optionnelle -->
    <p class="text-xs sm:text-sm text-gray-500 text-center mt-4 max-w-2xl">
      Pour toute modification d'horaire ou information complémentaire, contactez-nous à
      <a href="mailto:contact@sportjoielille.fr" class="text-red-600 hover:underline">contact@sportjoielille.fr</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ScheduleTable',
  data() {
    return {
      teams: [
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
      ],
    }
  },
}
</script>

<style scoped>
table {
  border-collapse: collapse;
}
</style>
