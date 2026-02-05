import allwaysportLogo from '@/assets/images/partners/allwaysport.jpg'
import dahliapinnataLogo from '@/assets/images/partners/dahliapinnata.jpg'
import affamesassoiffesLogo from '@/assets/images/partners/affameassoiffes.jpg'

export interface Partner {
  id: string
  name: string
  logo: string
  description: string
  website: string
  address: string
}

export const partners: Partner[] = [
  {
    id: '1',
    name: 'Allwaysport',
    logo: allwaysportLogo,
    description: 'Magasin en ligne spécialiste dans le matériel de volleyball, handball et hockey sur gazon et en salle. Équipements pour enfants et adultes',
    website: 'https://www.allwaysport.com/',
    address: '122 Rue Colbert, 59000 Lille, France'
  },
  {
    id: '2',
    name: 'Dahlia Pinnata',
    logo: dahliapinnataLogo,
    description: 'Passion des fleurs colorées et de saison, amour des plantes, et des jolies choses !',
    website: 'https://www.instagram.com/dahliapinnata_fleuriste/',
    address: '280 Avenue de Dunkerque, 59130 Lambersart, France'
  },
  {
    id: '3',
    name: 'Affamés Assoiffés',
    logo: affamesassoiffesLogo,
    description: 'Les midis "Affamés" sont réservés aux gourmands et gourmets, le soir "Assoiffés" se transforme en un bar animé. ',
    website: 'https://affames-assoiffes.fr/',
    address: '1 Boulevard Bigo Danel, Lille, FR 59000'
  }
]
