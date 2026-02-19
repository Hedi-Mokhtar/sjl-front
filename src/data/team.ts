// TeamPics
import pnfTeamPic from '@/assets/images/teams/pnf/teampic.jpg'
import r1fTeamPic from '@/assets/images/teams/r1f/teampic.jpg'
import dmTeamPic from '@/assets/images/teams/dm/teampic.jpg'
import m13mTeamPic from '@/assets/images/teams/m13m/teampic.jpg'
import m18mTeamPic from '@/assets/images/teams/m18m/teampic.jpg'

// TrainerPics

import pnfTrainerPic from '@/assets/images/teams/pnf/trainer.jpg'
import r1mTrainerPic from '@/assets/images/teams/r1m/trainer.jpg'
import dmTrainerPic from '@/assets/images/teams/dm/trainer.jpg'
import m13mTrainerPic from '@/assets/images/teams/m13m/trainer.jpg'
import m15fTrainerPic from '@/assets/images/teams/m15f/trainer.jpg'
import m15mTrainerPic from '@/assets/images/teams/m15m/trainer.jpg'
import m18fTrainerPic from '@/assets/images/teams/m18f/trainer.jpg'
import m18mTrainerPic from '@/assets/images/teams/m18m/trainer.jpg'
import m21fTrainerPic from '@/assets/images/teams/m21f/trainer.jpg'
import r1fTrainerPic from '@/assets/images/teams/r1f/trainer.jpg'

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
  schedule: TeamSchedule[]
  widgetVersion?: 'modern' | 'legacy'
  widgetId?: string
  clubUrl?: string
}

export const teamsData: Record<string, TeamData> = {
  'prenational-fem': {
    id: 'prenational-fem',
    title: 'Pré-Nationale Féminine',
    teamPic: pnfTeamPic,
    trainerPic: pnfTrainerPic,
    trainerName: 'Wail',
    schedule: [
      { day: 'Mardi', time: '20h00 – 22h00', location: 'Salle Pacome' },
      { day: 'Jeudi', time: '20h00 – 22h00', location: 'Salle Pacome' }
    ],
    widgetId: '5dcdb79ed0bf830a19fa30f7',
    widgetVersion: 'legacy',
    clubUrl: 'https://scorenco.com/volley/clubs/as-sport-et-joie-lille/'
  },
  'regional-masc': {
    id: 'regional-masc',
    title: 'Régionale Masculine',
    teamPic: pnfTeamPic, // TODO: Remplacer par la vraie image
    trainerPic: r1mTrainerPic,
    trainerName: 'Fred',
    schedule: [
      { day: 'Mardi', time: '20h45 – 22h30', location: 'Salle Pacome' },
      { day: 'Jeudi', time: '20h45 – 22h30', location: 'Salle Pacome' }
    ],
    widgetId: '5dcdb6a0aa8a1a0a1dc40b5d',
    widgetVersion: 'legacy',
    clubUrl: 'https://scorenco.com/volley/clubs/as-sport-et-joie-lille/'
  },
  'regional-fem': {
    id: 'regional-fem',
    title: 'Régionale Féminine',
    teamPic: r1fTeamPic,
    trainerPic: r1fTrainerPic,
    trainerName: 'Elodie',
    schedule: [
      { day: 'Mardi', time: '19h00 – 20h45', location: 'Salle Pacome' },
      { day: 'Jeudi', time: '19h00 – 20h45', location: 'Salle Pacome' }
    ],
    widgetId: '80634',
    widgetVersion: 'modern',
    clubUrl: 'https://scorenco.com/volley/clubs/as-sport-et-joie-lille/'
  },
  'departemental-masc': {
    id: 'departemental-masc',
    title: 'Départementale Masculine',
    teamPic: dmTeamPic,
    trainerPic: dmTrainerPic,
    trainerName: 'Claire',
    schedule: [
      { day: 'Mardi', time: '19h00 – 20h45', location: 'Salle Pacome' },
      { day: 'Jeudi', time: '19h00 – 20h45', location: 'Salle Pacome' }
    ],
    widgetId: '5dce969e5841e10a2a76aea0',
    widgetVersion: 'legacy',
    clubUrl: 'https://scorenco.com/volley/clubs/as-sport-et-joie-lille/'
  },
  'm21-fem': {
    id: 'm21-fem',
    title: 'M21 Féminine',
    teamPic: pnfTeamPic, // TODO: Remplacer par la vraie image
    trainerPic: m21fTrainerPic, // TODO: Remplacer par la vraie image
    trainerName: 'Aude', // À remplacer
    schedule: [
      { day: 'Samedi', time: '14h00 – 16h00', location: 'Salle XXX' }
    ],
    widgetId: '5dcdb79ed0bf830a19fa30f7',
    clubUrl: 'https://scorenco.com/volley/clubs/as-sport-et-joie-lille/'
  },
  'm18-masc': {
    id: 'm18-masc',
    title: 'M18 Masculin',
    teamPic: m18mTeamPic,
    trainerPic: m18mTrainerPic,
    trainerName: 'Aymeric',
    schedule: [
      { day: 'Mardi', time: '19h00 – 20h45', location: 'Salle Pacome' },
      { day: 'Jeudi', time: '19h15 – 20h45', location: 'Salle Pacome' }
    ],
    widgetId: '5dcdb79ed0bf830a19fa30f7',
    clubUrl: 'https://scorenco.com/volley/clubs/as-sport-et-joie-lille/'
  },
  'm18-fem': {
    id: 'm18-fem',
    title: 'M18 Féminine',
    teamPic: pnfTeamPic, // TODO: Remplacer par la vraie image
    trainerPic: m18fTrainerPic, // TODO: Remplacer par la vraie image
    trainerName: 'Aude', // À remplacer
    schedule: [
      { day: 'Mercredi', time: '18h00 – 20h00', location: 'Salle XXX' }
    ],
    widgetId: '5dcdb79ed0bf830a19fa30f7',
    clubUrl: 'https://scorenco.com/volley/clubs/as-sport-et-joie-lille/'
  },
  'm15-fem': {
    id: 'm15-fem',
    title: 'M15 Féminine',
    teamPic: pnfTeamPic, // TODO: Remplacer par la vraie image
    trainerPic: m15fTrainerPic, // TODO: Remplacer par la vraie image
    trainerName: 'Marion', // À remplacer
    schedule: [
      { day: 'Lundi', time: '17h00 – 19h00', location: 'Salle XXX' }
    ],
    widgetId: '5dcdb79ed0bf830a19fa30f7',
    clubUrl: 'https://scorenco.com/volley/clubs/as-sport-et-joie-lille/'
  },
  'm15-masc': {
    id: 'm15-masc',
    title: 'M15 Masculin',
    teamPic: pnfTeamPic, // TODO: Remplacer par la vraie image
    trainerPic: m15mTrainerPic, // TODO: Remplacer par la vraie image
    trainerName: 'Aymeric', // À remplacer
    schedule: [
      { day: 'Mardi', time: '17h00 – 19h00', location: 'Salle XXX' }
    ],
    widgetId: '5dcdb79ed0bf830a19fa30f7',
    clubUrl: 'https://scorenco.com/volley/clubs/as-sport-et-joie-lille/'
  },
  'm13-masc': {
    id: 'm13-masc',
    title: 'M13 Masculin',
    teamPic: m13mTeamPic, // TODO: Remplacer par la vraie image
    trainerPic: m13mTrainerPic,
    trainerName: 'Aymeric',
    schedule: [
      { day: 'Mercredi', time: '18h00 – 19h00', location: 'Salle Pacome' },
      { day: 'Jeudi', time: '18h00 – 19h15', location: 'Salle Pacome' }
    ],
    widgetId: '5dcdb79ed0bf830a19fa30f7',
    clubUrl: 'https://scorenco.com/volley/clubs/as-sport-et-joie-lille/'
  },
  'competlib-a': {
    id: 'competlib-a',
    title: "Compet'lib A",
    teamPic: pnfTeamPic, // TODO: Remplacer par la vraie image
    trainerPic: pnfTrainerPic, // TODO: Remplacer par la vraie image
    trainerName: 'Nom Entraîneur', // À remplacer
    schedule: [
      { day: 'Lundi', time: '20h00 – 22h00', location: 'Salle Pacome' },
      { day: 'Jeudi', time: '20h45 – 22h30', location: 'Salle Pacome' }
    ],
    widgetId: '5dce96e6e3f1b20a1c1b92dd',
    widgetVersion: 'legacy',
    clubUrl: 'https://scorenco.com/volley/clubs/as-sport-et-joie-lille/'
  },
  'competlib-b': {
    id: 'competlib-b',
    title: "Compet'lib B",
    teamPic: pnfTeamPic, // TODO: Remplacer par la vraie image
    trainerPic: pnfTrainerPic, // TODO: Remplacer par la vraie image
    trainerName: 'Nom Entraîneur', // À remplacer
    schedule: [
      { day: 'Lundi', time: '20h00 – 22h00', location: 'Salle Pacome' },
      { day: 'Jeudi', time: '20h45 – 22h30', location: 'Salle Pacome' }
    ],
    widgetId: '107173',
    widgetVersion: 'modern',
    clubUrl: 'https://scorenco.com/volley/clubs/as-sport-et-joie-lille/'
  },
  'competlib-c': {
    id: 'competlib-c',
    title: "Compet'lib C",
    teamPic: pnfTeamPic, // TODO: Remplacer par la vraie image
    trainerPic: pnfTrainerPic, // TODO: Remplacer par la vraie image
    trainerName: 'Nom Entraîneur', // À remplacer
    schedule: [
      { day: 'Lundi', time: '20h00 – 22h00', location: 'Salle Pacome' },
      { day: 'Jeudi', time: '20h45 – 22h30', location: 'Salle Pacome' }
    ],
    widgetId: '107172',
    widgetVersion: 'modern',
    clubUrl: 'https://scorenco.com/volley/clubs/as-sport-et-joie-lille/'
  },
  'competlib-d': {
    id: 'competlib-d',
    title: "Compet'lib D",
    teamPic: pnfTeamPic, // TODO: Remplacer par la vraie image
    trainerPic: pnfTrainerPic, // TODO: Remplacer par la vraie image
    trainerName: 'Nom Entraîneur', // À remplacer
    schedule: [
      { day: 'Lundi', time: '20h00 – 22h00', location: 'Salle Pacome' },
      { day: 'Jeudi', time: '20h45 – 22h30', location: 'Salle Pacome' }
    ],
    widgetId: '6361553f9d5e1509ceb57fcd',
    widgetVersion: 'legacy',
    clubUrl: 'https://scorenco.com/volley/clubs/as-sport-et-joie-lille/'
  }
}
