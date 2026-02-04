// src/data/teams.ts

// Imports des images - Pré-Nationale Féminine (images existantes)
import pnfTeamPic from '@/assets/images/teams/pnf/teampic.jpg'
import pnfTrainerPic from '@/assets/images/teams/pnf/trainer.jpg'
import pnfCalendarPic from '@/assets/images/teams/pnf/calendar.png'

// TODO: Remplacer par les vraies images quand elles seront disponibles
// Pour l'instant, on utilise les images de PNF comme placeholder

import r1mTrainerPic from '@/assets/images/teams/r1m/trainer.jpg'

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
    teamPic: pnfTeamPic,
    trainerPic: pnfTrainerPic,
    trainerName: 'Wail Roudani',
    calendarPic: pnfCalendarPic,
    schedule: [
      { day: 'Mardi', time: '20h00 – 22h00', location: 'Salle Colysée' },
      { day: 'Jeudi', time: '20h00 – 22h00', location: 'Salle Colysée' }
    ]
  },
  'regional-masc': {
    id: 'regional-masc',
    title: 'Régionale Masculine',
    teamPic: pnfTeamPic, // TODO: Remplacer par la vraie image
    trainerPic: r1mTrainerPic, // TODO: Remplacer par la vraie image
    trainerName: 'Nom Entraîneur', // À remplacer
    calendarPic: pnfCalendarPic, // TODO: Remplacer par la vraie image
    schedule: [
      { day: 'Lundi', time: '19h00 – 21h00', location: 'Salle XXX' }
    ]
  },
  'regional-fem': {
    id: 'regional-fem',
    title: 'Régionale Féminine',
    teamPic: pnfTeamPic, // TODO: Remplacer par la vraie image
    trainerPic: pnfTrainerPic, // TODO: Remplacer par la vraie image
    trainerName: 'Nom Entraîneur', // À remplacer
    calendarPic: pnfCalendarPic, // TODO: Remplacer par la vraie image
    schedule: [
      { day: 'Mercredi', time: '20h00 – 22h00', location: 'Salle XXX' }
    ]
  },
  'departemental-masc': {
    id: 'departemental-masc',
    title: 'Départementale Masculine',
    teamPic: pnfTeamPic, // TODO: Remplacer par la vraie image
    trainerPic: pnfTrainerPic, // TODO: Remplacer par la vraie image
    trainerName: 'Nom Entraîneur', // À remplacer
    calendarPic: pnfCalendarPic, // TODO: Remplacer par la vraie image
    schedule: [
      { day: 'Vendredi', time: '20h00 – 22h00', location: 'Salle XXX' }
    ]
  },
  'm21-fem': {
    id: 'm21-fem',
    title: 'M21 Féminine',
    teamPic: pnfTeamPic, // TODO: Remplacer par la vraie image
    trainerPic: pnfTrainerPic, // TODO: Remplacer par la vraie image
    trainerName: 'Nom Entraîneur', // À remplacer
    calendarPic: pnfCalendarPic, // TODO: Remplacer par la vraie image
    schedule: [
      { day: 'Samedi', time: '14h00 – 16h00', location: 'Salle XXX' }
    ]
  },
  'm18-masc': {
    id: 'm18-masc',
    title: 'M18 Masculin',
    teamPic: pnfTeamPic, // TODO: Remplacer par la vraie image
    trainerPic: pnfTrainerPic, // TODO: Remplacer par la vraie image
    trainerName: 'Nom Entraîneur', // À remplacer
    calendarPic: pnfCalendarPic, // TODO: Remplacer par la vraie image
    schedule: [
      { day: 'Samedi', time: '16h00 – 18h00', location: 'Salle XXX' }
    ]
  },
  'm18-fem': {
    id: 'm18-fem',
    title: 'M18 Féminine',
    teamPic: pnfTeamPic, // TODO: Remplacer par la vraie image
    trainerPic: pnfTrainerPic, // TODO: Remplacer par la vraie image
    trainerName: 'Nom Entraîneur', // À remplacer
    calendarPic: pnfCalendarPic, // TODO: Remplacer par la vraie image
    schedule: [
      { day: 'Mercredi', time: '18h00 – 20h00', location: 'Salle XXX' }
    ]
  },
  'm15-fem': {
    id: 'm15-fem',
    title: 'M15 Féminine',
    teamPic: pnfTeamPic, // TODO: Remplacer par la vraie image
    trainerPic: pnfTrainerPic, // TODO: Remplacer par la vraie image
    trainerName: 'Nom Entraîneur', // À remplacer
    calendarPic: pnfCalendarPic, // TODO: Remplacer par la vraie image
    schedule: [
      { day: 'Lundi', time: '17h00 – 19h00', location: 'Salle XXX' }
    ]
  },
  'm15-masc': {
    id: 'm15-masc',
    title: 'M15 Masculin',
    teamPic: pnfTeamPic, // TODO: Remplacer par la vraie image
    trainerPic: pnfTrainerPic, // TODO: Remplacer par la vraie image
    trainerName: 'Nom Entraîneur', // À remplacer
    calendarPic: pnfCalendarPic, // TODO: Remplacer par la vraie image
    schedule: [
      { day: 'Mardi', time: '17h00 – 19h00', location: 'Salle XXX' }
    ]
  },
  'm13-masc': {
    id: 'm13-masc',
    title: 'M13 Masculin',
    teamPic: pnfTeamPic, // TODO: Remplacer par la vraie image
    trainerPic: pnfTrainerPic, // TODO: Remplacer par la vraie image
    trainerName: 'Nom Entraîneur', // À remplacer
    calendarPic: pnfCalendarPic, // TODO: Remplacer par la vraie image
    schedule: [
      { day: 'Jeudi', time: '17h00 – 19h00', location: 'Salle XXX' }
    ]
  },
  'competlib-a': {
    id: 'competlib-a',
    title: "Compet'lib A",
    teamPic: pnfTeamPic, // TODO: Remplacer par la vraie image
    trainerPic: pnfTrainerPic, // TODO: Remplacer par la vraie image
    trainerName: 'Nom Entraîneur', // À remplacer
    calendarPic: pnfCalendarPic, // TODO: Remplacer par la vraie image
    schedule: [
      { day: 'Samedi', time: '10h00 – 12h00', location: 'Salle XXX' }
    ]
  },
  'competlib-b': {
    id: 'competlib-b',
    title: "Compet'lib B",
    teamPic: pnfTeamPic, // TODO: Remplacer par la vraie image
    trainerPic: pnfTrainerPic, // TODO: Remplacer par la vraie image
    trainerName: 'Nom Entraîneur', // À remplacer
    calendarPic: pnfCalendarPic, // TODO: Remplacer par la vraie image
    schedule: [
      { day: 'Samedi', time: '12h00 – 14h00', location: 'Salle XXX' }
    ]
  },
  'competlib-c': {
    id: 'competlib-c',
    title: "Compet'lib C",
    teamPic: pnfTeamPic, // TODO: Remplacer par la vraie image
    trainerPic: pnfTrainerPic, // TODO: Remplacer par la vraie image
    trainerName: 'Nom Entraîneur', // À remplacer
    calendarPic: pnfCalendarPic, // TODO: Remplacer par la vraie image
    schedule: [
      { day: 'Dimanche', time: '10h00 – 12h00', location: 'Salle XXX' }
    ]
  },
  'competlib-d': {
    id: 'competlib-d',
    title: "Compet'lib D",
    teamPic: pnfTeamPic, // TODO: Remplacer par la vraie image
    trainerPic: pnfTrainerPic, // TODO: Remplacer par la vraie image
    trainerName: 'Nom Entraîneur', // À remplacer
    calendarPic: pnfCalendarPic, // TODO: Remplacer par la vraie image
    schedule: [
      { day: 'Dimanche', time: '12h00 – 14h00', location: 'Salle XXX' }
    ]
  }
}
