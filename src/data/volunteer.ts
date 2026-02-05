import clairePicture from '@/assets/images/volunteers/claire.jpg'
import frederiquePicture from '@/assets/images/volunteers/frederique.jpg'
import francoisPicture from '@/assets/images/volunteers/francois.jpg'
import yvonPicture from '@/assets/images/volunteers/yvon.jpg'
import marionPicture from '@/assets/images/volunteers/marion.jpg'
import hediPicture from '@/assets/images/volunteers/hedi.jpg'
import aymericPicture from '@/assets/images/volunteers/aymeric.jpg'
import marionCPicture from '@/assets/images/volunteers/marionC.jpg'
import elodiePicture from '@/assets/images/volunteers/elodie.jpg'
import audePicture from '@/assets/images/volunteers/aude.jpg'
import wailPicture from '@/assets/images/volunteers/wail.jpg'
import sorayaPicture from '@/assets/images/volunteers/soraya.jpg'
import julienPicture from '@/assets/images/volunteers/julien.jpg'
import manonicture from '@/assets/images/volunteers/manon.jpg'
import franckPicture from '@/assets/images/volunteers/franck.jpg'
import louisPicture from '@/assets/images/volunteers/louis.jpg'
import vincentPicture from '@/assets/images/volunteers/vincent.jpg'
import pierrePicture from '@/assets/images/volunteers/pierre.jpg'
import quentinPicture from '@/assets/images/volunteers/quentin.jpg'
import ludivinePicture from '@/assets/images/volunteers/ludivine.jpg'
import jeanYvesPicture from '@/assets/images/volunteers/jeanyves.jpg'
import marionRPicture from '@/assets/images/volunteers/marionR.jpg'

export interface Volunteer {
  id: string
  name: string
  picture: string
  executive?: boolean
  executiveDescription?: string
  referee?: boolean
  coach?: boolean
  coachDescription?: string
  volunteerExtra?: boolean
  volunteerExtraDescription?: string
}

export const volunteers: Volunteer[] = [
  {
    id: '1',
    name: 'Claire',
    picture: clairePicture,
    executive: true,
    executiveDescription: 'Présidente',
    referee: false,
    coach: true,
    coachDescription: 'Entraîneur de la Départementale Masculine',
    volunteerExtra: false
  },
  {
    id: '2',
    name: 'Frederique',
    picture: frederiquePicture,
    executive: true,
    executiveDescription: 'Responsable Sportive',
    referee: false,
    coach: true,
    coachDescription: 'Coach & Entraîneur de la Régionale Masculine',
    volunteerExtra: false
  },
  {
    id: '3',
    name: 'François',
    picture: francoisPicture,
    executive: true,
    executiveDescription: 'Trésorier',
    referee: true,
    coach: false,
    volunteerExtra: false
  },
  {
    id: '4',
    name: 'Yvon',
    picture: yvonPicture,
    executive: true,
    executiveDescription: 'Secrétaire',
    referee: false,
    coach: false,
    volunteerExtra: false
  },
  {
    id: '5',
    name: 'Marion',
    picture: marionPicture,
    executive: true,
    executiveDescription: 'Responsable Événementielle',
    referee: false,
    coach: false,
    volunteerExtra: false
  },
  {
    id: '6',
    name: 'Marion R',
    picture: marionRPicture,
    executive: false,
    referee: false,
    coach: false,
    volunteerExtra: true,
    volunteerExtraDescription: "Responsable de la section compet'libre"
  },
  {
    id: '7',
    name: 'Aymeric',
    picture: aymericPicture,
    executive: false,
    referee: false,
    coach: true,
    coachDescription: 'Coach et entraîneur de la M18, M15 et M13 masculine',
    volunteerExtra: true,
    volunteerExtraDescription: 'Responsable de la section jeune masculine'
  },
  {
    id: '8',
    name: 'Marion',
    picture: marionCPicture,
    executive: false,
    referee: true,
    coach: true,
    coachDescription: 'Coach & Entraîneur de la M15 et M13 féminine',
    volunteerExtra: true,
    volunteerExtraDescription: 'Responsable arbitrage'
  },
  {
    id: '9',
    name: 'Elodie',
    picture: elodiePicture,
    executive: false,
    referee: false,
    coach: true,
    coachDescription: 'Entraîneur de la Régionale Féminine',
    volunteerExtra: false
  },
  {
    id: '10',
    name: 'Aude',
    picture: audePicture,
    executive: false,
    referee: false,
    coach: true,
    coachDescription: 'Coach et Entraîneur des m21 et m18 féminine',
    volunteerExtra: true,
    volunteerExtraDescription: 'Responsable de la section jeune féminine'
  },
  {
    id: '11',
    name: 'Wail',
    picture: wailPicture,
    executive: false,
    referee: true,
    coach: true,
    coachDescription: 'Entraîneur de la Prénationale Féminine',
    volunteerExtra: false
  },
  {
    id: '12',
    name: 'Soraya',
    picture: sorayaPicture,
    executive: false,
    referee: false,
    coach: true,
    coachDescription: 'Coach & Entraîneur de la M21 féminine',
    volunteerExtra: false
  },
  {
    id: '13',
    name: 'Julien',
    picture: julienPicture,
    executive: false,
    referee: true,
    coach: false,
    volunteerExtra: false,
  },
  {
    id: '14',
    name: 'Manon',
    picture: manonicture,
    executive: false,
    referee: true,
    coach: false,
    volunteerExtra: false,
  },
  {
    id: '15',
    name: 'Franck',
    picture: franckPicture,
    executive: false,
    referee: true,
    coach: false,
    volunteerExtra: false,
  },
  {
    id: '16',
    name: 'Louis',
    picture: louisPicture,
    executive: false,
    referee: true,
    coach: false,
    volunteerExtra: false,
  },
  {
    id: '17',
    name: 'Vincent',
    picture: vincentPicture,
    executive: false,
    referee: false,
    coach: true,
    coachDescription: 'Entraîneur Ecole de volley & de la Section Loisir',
    volunteerExtra: false
  },
  {
    id: '18',
    name: 'Pierre',
    picture: pierrePicture,
    executive: false,
    referee: false,
    coach: true,
    coachDescription: 'Entraîneur de la Section Loisir',
    volunteerExtra: false
  },
  {
    id: '19',
    name: 'Quentin',
    picture: quentinPicture,
    executive: false,
    referee: true,
    coach: true,
    coachDescription: 'Entraîneur de la Section Loisir',
    volunteerExtra: false
  },
  {
    id: '20',
    name: 'Ludivine',
    picture: ludivinePicture,
    executive: false,
    referee: false,
    coach: true,
    coachDescription: 'Entraîneur de la Section Loisir',
    volunteerExtra: false
  },
  {
    id: '21',
    name: 'Jean-Yves',
    picture: jeanYvesPicture,
    executive: false,
    referee: false,
    coach: false,
    volunteerExtra: true,
    volunteerExtraDescription: 'Webmaster du site internet'
  },
  {
    id: '22',
    name: 'Hedi',
    picture: hediPicture,
    executive: true,
    executiveDescription: 'Responsable Communication interne et bénévolat',
    referee: true,
    coach: true,
    coachDescription: 'Entraîneur M18 féminine',
    volunteerExtra: true,
    volunteerExtraDescription: 'Développeur site web'
  },
]
