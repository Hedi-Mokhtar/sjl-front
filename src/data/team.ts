// TeamPics
import pnfTeamPic from '@/assets/images/teams/pnf/teampic.jpg'
import r1mTeamPic from '@/assets/images/teams/r1m/teampic.jpg'
import r1fTeamPic from '@/assets/images/teams/r1f/teampic.jpg'
import m13mTeamPic from '@/assets/images/teams/m13m/teampic.jpg'
import m18mTeamPic from '@/assets/images/teams/m18m/teampic.jpg'
import m18fTeamPic from '@/assets/images/teams/m18f/teampic.jpg'
import competlibATeamPic from '@/assets/images/teams/competliba/teampic.jpg'
import competlibBTeamPic from '@/assets/images/teams/competlibb/teampic.jpg'
import competlibCTeamPic from '@/assets/images/teams/competlibc/teampic.jpg'
import competlibDTeamPic from '@/assets/images/teams/competlibd/teampic.jpg'
import ecoleVolleyTeamPic from '@/assets/images/teams/ecole-volley/teampic.jpg'
import loisirTeamPic from '@/assets/images/teams/loisir/teampic.jpg'

import defaultTeamPic from '@/assets/images/teams/default-teampic.jpg'

// TrainerPics
import pnfTrainerPic from '@/assets/images/teams/pnf/trainer.jpg'
import r1mTrainerPic from '@/assets/images/teams/r1m/trainer.jpg'
import m13mTrainerPic from '@/assets/images/teams/m13m/trainer.jpg'
import m15fTrainerPic from '@/assets/images/teams/m15f/trainer.jpg'
import m18fTrainerPic from '@/assets/images/teams/m18f/trainer.jpg'
import m18mTrainerPic from '@/assets/images/teams/m18m/trainer.jpg'
import r1fTrainerPic from '@/assets/images/teams/r1f/trainer.jpg'

//CoTrainerPics
import m18fcoTrainerPic from '@/assets/images/teams/m18f/cotrainer.jpg'

//LeaderPics
import competlibALeaderPic from '@/assets/images/teams/competliba/leaderpic.jpg'
import competlibBLeaderPic from '@/assets/images/teams/competlibb/leaderpic.jpg'
import competlibCLeaderPic from '@/assets/images/teams/competlibc/leaderpic.jpg'
import competlibDLeaderPic from '@/assets/images/teams/competlibd/leaderpic.jpg'

// LoisirTrainerPics (from volunteer photos)
import loisirPierrePic from '@/assets/images/volunteers/pierre.jpg'
import loisirLudivinePic from '@/assets/images/volunteers/ludivine.jpg'
import loisirVincentPic from '@/assets/images/volunteers/vincent.jpg'
import loisirQuentinPic from '@/assets/images/volunteers/quentin.jpg'

export interface TeamSchedule {
  day: string
  time: string
  location: string
}

export interface TeamData {
  id: string
  title: string
  teamPic: string
  trainerPic?: string
  trainerName?: string
  subTrainerPic?: string
  subTrainerName?: string
  leaderPic?: string
  leaderName?: string
  trainers?: { name: string; pic: string }[]
  schedule: TeamSchedule[]
  widgetVersion?: 'modern' | 'legacy'
  widgetId?: string
  clubUrl?: string
  ffvbUrl?: string
  recruitmentStatus?: 'full' | 'forming'
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
    clubUrl: 'https://scorenco.com/volley/clubs/as-sport-et-joie-lille/',
    ffvbUrl:
      'https://www.ffvbbeach.org/ffvbapp/resu/vbspo_calendrier.php?saison=2025/2026&codent=LIFL&poule=PFA',
    recruitmentStatus: 'forming'
  },
  'regional-masc': {
    id: 'regional-masc',
    title: 'Régionale Masculine',
    teamPic: r1mTeamPic,
    trainerPic: r1mTrainerPic,
    trainerName: 'Fred',
    schedule: [
      { day: 'Mardi', time: '20h45 – 22h30', location: 'Salle Pacome' },
      { day: 'Jeudi', time: '20h45 – 22h30', location: 'Salle Pacome' }
    ],
    widgetId: '5dcdb6a0aa8a1a0a1dc40b5d',
    widgetVersion: 'legacy',
    clubUrl: 'https://scorenco.com/volley/clubs/as-sport-et-joie-lille/',
    ffvbUrl:
      'https://www.ffvbbeach.org/ffvbapp/resu/vbspo_calendrier.php?saison=2025/2026&codent=LIFL&poule=1MB',
    recruitmentStatus: 'full'
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
    clubUrl: 'https://scorenco.com/volley/clubs/as-sport-et-joie-lille/',
    ffvbUrl:
      'https://www.ffvbbeach.org/ffvbapp/resu/vbspo_calendrier.php?saison=2025/2026&codent=LIFL&poule=1FA',
    recruitmentStatus: 'full'
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
    clubUrl: 'https://scorenco.com/volley/clubs/as-sport-et-joie-lille/',
    ffvbUrl:
      'https://www.ffvbbeach.org/ffvbapp/resu/vbspo_calendrier.php?saison=2025/2026&codent=LIFL&poule=CMI',
    recruitmentStatus: 'forming'
  },
  'm18-fem': {
    id: 'm18-fem',
    title: 'M18 Féminine',
    teamPic: m18fTeamPic,
    trainerPic: m18fTrainerPic,
    trainerName: 'Aude',
    subTrainerPic: m18fcoTrainerPic,
    subTrainerName: 'Hedi',
    schedule: [
      { day: 'Mardi', time: '19h00 – 20h45', location: 'Salle Pacome' },
      { day: 'Jeudi', time: '18h00 – 19h15', location: 'Salle Pacome' }
    ],
    widgetId: '5dcdb79ed0bf830a19fa30f7',
    clubUrl: 'https://scorenco.com/volley/clubs/as-sport-et-joie-lille/',
    recruitmentStatus: 'full'
  },
  'm13-m15-fem': {
    id: 'm13-m15-fem',
    title: 'M13 - M15 Féminine',
    teamPic: defaultTeamPic, // TODO: Remplacer par la vraie image
    trainerPic: m15fTrainerPic, // TODO: Remplacer par la vraie image
    trainerName: 'Marion',
    schedule: [
      { day: 'Mercredi', time: '18h00 – 19H00', location: 'Salle Pacome' },
      { day: 'Jeudi', time: '18h00 – 19h15', location: 'Salle Pacome' }
    ],
    widgetId: '5dcdb79ed0bf830a19fa30f7',
    clubUrl: 'https://scorenco.com/volley/clubs/as-sport-et-joie-lille/',
    recruitmentStatus: 'forming',
    ffvbUrl:
      'https://www.ffvbbeach.org/ffvbapp/resu/vbspo_calendrier.php?saison=2025/2026&codent=PTFL59&poule=MFY'
  },
  'm15-masc': {
    id: 'm15-masc',
    title: 'M15 Masculin',
    teamPic: m13mTeamPic, // TODO: Remplacer par la vraie image
    trainerPic: m13mTrainerPic,
    trainerName: 'Aymeric',
    schedule: [
      { day: 'Mercredi', time: '18h00 – 19h00', location: 'Salle Pacome' },
      { day: 'Jeudi', time: '18h00 – 19h15', location: 'Salle Pacome' }
    ],
    widgetId: '5dcdb79ed0bf830a19fa30f7',
    clubUrl: 'https://scorenco.com/volley/clubs/as-sport-et-joie-lille/',
    ffvbUrl:
      'https://www.ffvbbeach.org/ffvbapp/resu/vbspo_calendrier.php?saison=2025/2026&codent=PTFL59&poule=BMI'
  },
  'ecole-volley': {
    id: 'ecole-volley',
    title: 'Ecole de volley',
    teamPic: ecoleVolleyTeamPic,
    trainerPic: loisirVincentPic,
    trainerName: 'Vincent',
    schedule: [{ day: 'Mercredi', time: '18h00 – 19h00', location: 'Salle Pacôme' }],
    recruitmentStatus: 'full'
  },
  'competlib-a': {
    id: 'competlib-a',
    title: "Compet'lib A",
    teamPic: competlibATeamPic,
    schedule: [
      { day: 'Lundi', time: '20h00 – 22h00', location: 'Salle Pacome' },
      { day: 'Jeudi', time: '20h45 – 22h30', location: 'Salle Pacome' }
    ],
    leaderPic: competlibALeaderPic,
    leaderName: 'Marion',
    widgetId: '5dce96e6e3f1b20a1c1b92dd',
    widgetVersion: 'legacy',
    clubUrl: 'https://scorenco.com/volley/clubs/as-sport-et-joie-lille/',
    ffvbUrl:
      'https://www.ffvbbeach.org/ffvbapp/resu/vbspo_calendrier.php?saison=2025/2026&codent=LIFL&poule=RC1',
    recruitmentStatus: 'full'
  },
  'competlib-b': {
    id: 'competlib-b',
    title: "Compet'lib B",
    teamPic: competlibBTeamPic,
    leaderPic: competlibBLeaderPic,
    leaderName: 'Yseult',
    schedule: [
      { day: 'Lundi', time: '20h00 – 22h00', location: 'Salle Pacome' },
      { day: 'Jeudi', time: '20h45 – 22h30', location: 'Salle Pacome' }
    ],
    widgetId: '107173',
    widgetVersion: 'modern',
    clubUrl: 'https://scorenco.com/volley/clubs/as-sport-et-joie-lille/',
    ffvbUrl:
      'https://www.ffvbbeach.org/ffvbapp/resu/vbspo_calendrier.php?saison=2025/2026&codent=PTFL59&poule=DLB',
    recruitmentStatus: 'full'
  },
  'competlib-c': {
    id: 'competlib-c',
    title: "Compet'lib C",
    teamPic: competlibCTeamPic,
    leaderPic: competlibCLeaderPic,
    leaderName: 'Jonathan',
    schedule: [
      { day: 'Lundi', time: '20h00 – 22h00', location: 'Salle Pacome' },
      { day: 'Jeudi', time: '20h45 – 22h30', location: 'Salle Pacome' }
    ],
    widgetId: '107172',
    widgetVersion: 'modern',
    clubUrl: 'https://scorenco.com/volley/clubs/as-sport-et-joie-lille/',
    ffvbUrl:
      'https://www.ffvbbeach.org/ffvbapp/resu/vbspo_calendrier.php?saison=2025/2026&codent=LIFL&poule=RC1',
    recruitmentStatus: 'full'
  },
  'competlib-d': {
    id: 'competlib-d',
    title: "Compet'lib D",
    teamPic: competlibDTeamPic,
    leaderPic: competlibDLeaderPic,
    leaderName: 'Jeanne',
    schedule: [
      { day: 'Lundi', time: '20h00 – 22h00', location: 'Salle Pacome' },
      { day: 'Jeudi', time: '20h45 – 22h30', location: 'Salle Pacome' }
    ],
    widgetId: '6361553f9d5e1509ceb57fcd',
    widgetVersion: 'legacy',
    clubUrl: 'https://scorenco.com/volley/clubs/as-sport-et-joie-lille/',
    ffvbUrl:
      'https://www.ffvbbeach.org/ffvbapp/resu/vbspo_calendrier.php?saison=2025/2026&codent=PTFL59&poule=DLA',
    recruitmentStatus: 'full'
  },
  'loisir': {
    id: 'loisir',
    title: "Loisir",
    teamPic: loisirTeamPic,
    trainers: [
      { name: 'Pierre', pic: loisirPierrePic },
      { name: 'Ludivine', pic: loisirLudivinePic },
      { name: 'Vincent', pic: loisirVincentPic },
      { name: 'Quentin', pic: loisirQuentinPic }
    ],
    schedule: [
      { day: 'Mercredi', time: '19h00 – 20h45', location: 'Salle Pacome' },
      { day: 'Mercredi', time: '20h45 – 22h30', location: 'Salle Pacome' },
      { day: 'Samedi', time: '15h00 – 17h30', location: 'Salle Lestiboudois' }
    ],
    recruitmentStatus: 'full'
  }
}
