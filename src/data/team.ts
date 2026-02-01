// src/data/teams.ts

export interface TeamSchedule {
  day: string
  time: string
  location: string
}

export interface TeamData {
  id: string
  title: string
  teamPic: string
  trainerPic: string
  trainerName: string
  calendarPic: string
  schedule: TeamSchedule[]
}

export const teamsData: Record<string, TeamData> = {
  'prenational-fem': {
    id: 'prenational-fem',
    title: 'Pré-Nationale Féminine',
    teamPic: new URL('@/assets/teams/pnf/teampic.jpg', import.meta.url).href,
    trainerPic: new URL('@/assets/teams/pnf/trainer.jpg', import.meta.url).href,
    trainerName: 'Wail Roudani',
    calendarPic: new URL('@/assets/teams/pnf/calendar.png', import.meta.url).href,
    schedule: [
      { day: 'Mardi', time: '20h00 – 22h00', location: 'Salle Colysée' },
      { day: 'Jeudi', time: '20h00 – 22h00', location: 'Salle Colysée' }
    ]
  },
  'regional-masc': {
    id: 'regional-masc',
    title: 'Régionale Masculine',
    teamPic: new URL('@/assets/teams/regional-masc-pic.jpg', import.meta.url).href,
    trainerPic: new URL('@/assets/teams/r1m/trainer.jpg', import.meta.url).href,
    trainerName: 'Nom Entraîneur', // À remplacer
    calendarPic: new URL('@/assets/teams/calendrier-regional-masc.png', import.meta.url).href,
    schedule: [
      { day: 'Lundi', time: '19h00 – 21h00', location: 'Salle XXX' }
    ]
  },
  'regional-fem': {
    id: 'regional-fem',
    title: 'Régionale Féminine',
    teamPic: new URL('@/assets/teams/regional-fem-pic.jpg', import.meta.url).href,
    trainerPic: new URL('@/assets/teams/regional-fem-trainer.jpg', import.meta.url).href,
    trainerName: 'Nom Entraîneur', // À remplacer
    calendarPic: new URL('@/assets/teams/calendrier-regional-fem.png', import.meta.url).href,
    schedule: [
      { day: 'Mercredi', time: '20h00 – 22h00', location: 'Salle XXX' }
    ]
  },
  'departemental-masc': {
    id: 'departemental-masc',
    title: 'Départementale Masculine',
    teamPic: new URL('@/assets/teams/departemental-masc-pic.jpg', import.meta.url).href,
    trainerPic: new URL('@/assets/teams/departemental-masc-trainer.jpg', import.meta.url).href,
    trainerName: 'Nom Entraîneur', // À remplacer
    calendarPic: new URL('@/assets/teams/calendrier-departemental-masc.png', import.meta.url).href,
    schedule: [
      { day: 'Vendredi', time: '20h00 – 22h00', location: 'Salle XXX' }
    ]
  },
  'm21-fem': {
    id: 'm21-fem',
    title: 'M21 Féminine',
    teamPic: new URL('@/assets/teams/m21-fem-pic.jpg', import.meta.url).href,
    trainerPic: new URL('@/assets/teams/m21-fem-trainer.jpg', import.meta.url).href,
    trainerName: 'Nom Entraîneur', // À remplacer
    calendarPic: new URL('@/assets/teams/calendrier-m21-fem.png', import.meta.url).href,
    schedule: [
      { day: 'Samedi', time: '14h00 – 16h00', location: 'Salle XXX' }
    ]
  },
  'm18-masc': {
    id: 'm18-masc',
    title: 'M18 Masculin',
    teamPic: new URL('@/assets/teams/m18-masc-pic.jpg', import.meta.url).href,
    trainerPic: new URL('@/assets/teams/m18-masc-trainer.jpg', import.meta.url).href,
    trainerName: 'Nom Entraîneur', // À remplacer
    calendarPic: new URL('@/assets/teams/calendrier-m18-masc.png', import.meta.url).href,
    schedule: [
      { day: 'Samedi', time: '16h00 – 18h00', location: 'Salle XXX' }
    ]
  },
  'm18-fem': {
    id: 'm18-fem',
    title: 'M18 Féminine',
    teamPic: new URL('@/assets/teams/m18-fem-pic.jpg', import.meta.url).href,
    trainerPic: new URL('@/assets/teams/m18-fem-trainer.jpg', import.meta.url).href,
    trainerName: 'Nom Entraîneur', // À remplacer
    calendarPic: new URL('@/assets/teams/calendrier-m18-fem.png', import.meta.url).href,
    schedule: [
      { day: 'Mercredi', time: '18h00 – 20h00', location: 'Salle XXX' }
    ]
  },
  'm15-fem': {
    id: 'm15-fem',
    title: 'M15 Féminine',
    teamPic: new URL('@/assets/teams/m15-fem-pic.jpg', import.meta.url).href,
    trainerPic: new URL('@/assets/teams/m15-fem-trainer.jpg', import.meta.url).href,
    trainerName: 'Nom Entraîneur', // À remplacer
    calendarPic: new URL('@/assets/teams/calendrier-m15-fem.png', import.meta.url).href,
    schedule: [
      { day: 'Lundi', time: '17h00 – 19h00', location: 'Salle XXX' }
    ]
  },
  'm15-masc': {
    id: 'm15-masc',
    title: 'M15 Masculin',
    teamPic: new URL('@/assets/teams/m15-masc-pic.jpg', import.meta.url).href,
    trainerPic: new URL('@/assets/teams/m15-masc-trainer.jpg', import.meta.url).href,
    trainerName: 'Nom Entraîneur', // À remplacer
    calendarPic: new URL('@/assets/teams/calendrier-m15-masc.png', import.meta.url).href,
    schedule: [
      { day: 'Mardi', time: '17h00 – 19h00', location: 'Salle XXX' }
    ]
  },
  'm13-masc': {
    id: 'm13-masc',
    title: 'M13 Masculin',
    teamPic: new URL('@/assets/teams/m13-masc-pic.jpg', import.meta.url).href,
    trainerPic: new URL('@/assets/teams/m13-masc-trainer.jpg', import.meta.url).href,
    trainerName: 'Nom Entraîneur', // À remplacer
    calendarPic: new URL('@/assets/teams/calendrier-m13-masc.png', import.meta.url).href,
    schedule: [
      { day: 'Jeudi', time: '17h00 – 19h00', location: 'Salle XXX' }
    ]
  },
  'competlib-a': {
    id: 'competlib-a',
    title: "Compet'lib A",
    teamPic: new URL('@/assets/teams/competlib-a-pic.jpg', import.meta.url).href,
    trainerPic: new URL('@/assets/teams/competlib-a-trainer.jpg', import.meta.url).href,
    trainerName: 'Nom Entraîneur', // À remplacer
    calendarPic: new URL('@/assets/teams/calendrier-competlib-a.png', import.meta.url).href,
    schedule: [
      { day: 'Samedi', time: '10h00 – 12h00', location: 'Salle XXX' }
    ]
  },
  'competlib-b': {
    id: 'competlib-b',
    title: "Compet'lib B",
    teamPic: new URL('@/assets/teams/competlib-b-pic.jpg', import.meta.url).href,
    trainerPic: new URL('@/assets/teams/competlib-b-trainer.jpg', import.meta.url).href,
    trainerName: 'Nom Entraîneur', // À remplacer
    calendarPic: new URL('@/assets/teams/calendrier-competlib-b.png', import.meta.url).href,
    schedule: [
      { day: 'Samedi', time: '12h00 – 14h00', location: 'Salle XXX' }
    ]
  },
  'competlib-c': {
    id: 'competlib-c',
    title: "Compet'lib C",
    teamPic: new URL('@/assets/teams/competlib-c-pic.jpg', import.meta.url).href,
    trainerPic: new URL('@/assets/teams/competlib-c-trainer.jpg', import.meta.url).href,
    trainerName: 'Nom Entraîneur', // À remplacer
    calendarPic: new URL('@/assets/teams/calendrier-competlib-c.png', import.meta.url).href,
    schedule: [
      { day: 'Dimanche', time: '10h00 – 12h00', location: 'Salle XXX' }
    ]
  },
  'competlib-d': {
    id: 'competlib-d',
    title: "Compet'lib D",
    teamPic: new URL('@/assets/teams/competlib-d-pic.jpg', import.meta.url).href,
    trainerPic: new URL('@/assets/teams/competlib-d-trainer.jpg', import.meta.url).href,
    trainerName: 'Nom Entraîneur', // À remplacer
    calendarPic: new URL('@/assets/teams/calendrier-competlib-d.png', import.meta.url).href,
    schedule: [
      { day: 'Dimanche', time: '12h00 – 14h00', location: 'Salle XXX' }
    ]
  }
}
