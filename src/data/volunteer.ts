import clairePicture from '@/assets/images/volunteers/claire.jpg'
import frederiquePicture from '@/assets/images/volunteers/frederique.jpg'
import francoisPicture from '@/assets/images/volunteers/francois.jpg'
import yvonPicture from '@/assets/images/volunteers/yvon.jpg'
import marionPicture from '@/assets/images/volunteers/marion.jpg'
import hediPicture from '@/assets/images/volunteers/hedi.jpg'

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
    name: 'Hedi',
    picture: hediPicture,
    executive: true,
    executiveDescription: 'Responsable Communication interne et bénévolat',
    referee: true,
    coach: true,
    coachDescription: 'Entraîneur M18 féminine',
    volunteerExtra: true,
    volunteerExtraDescription: 'Développeur site web'
  }
]
