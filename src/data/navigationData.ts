export interface NavItem {
  label: string
  path: string
}

export interface TeamCategory {
  title: string
  teams: NavItem[]
}

export const mainNavItems: NavItem[] = [
  { label: 'Accueil', path: '/' },
  { label: 'Horaires', path: '/schedule' },
  { label: 'Inscriptions', path: '/subscription' },
  { label: 'Contact', path: '/contact' },
]

export const teamCategories: TeamCategory[] = [
  {
    title: 'Seniors',
    teams: [
      { label: 'Pré-Nationale Féminine', path: '/teams/prenational-fem' },
      { label: 'Régionale Masculine', path: '/teams/regional-masc' },
      { label: 'Régionale Féminine', path: '/teams/regional-fem' },
      { label: 'Départementale Masculine', path: '/teams/departemental-masc' },
    ],
  },
  {
    title: 'Jeunes',
    teams: [
      { label: 'M21 Féminine', path: '/teams/m21-fem' },
      { label: 'M18 Masculin', path: '/teams/m18-masc' },
      { label: 'M18 Féminine', path: '/teams/m18-fem' },
      { label: 'M15 Féminine', path: '/teams/m15-fem' },
      { label: 'M15 Masculin', path: '/teams/m15-masc' },
      { label: 'M13 Masculin', path: '/teams/m13-masc' },
    ],
  },
  {
    title: "Compet'lib",
    teams: [
      { label: "Compet'lib A", path: '/teams/competlib-a' },
      { label: "Compet'lib B", path: '/teams/competlib-b' },
      { label: "Compet'lib C", path: '/teams/competlib-c' },
      { label: "Compet'lib D", path: '/teams/competlib-d' },
    ],
  },
]

export const volunteersMenuItems: NavItem[] = [
  { path: '/volunteers', label: 'Nos bénévoles' },
  { path: '/volunteers#join', label: 'Devenir bénévole' }
]

export const partnersMenuItems: NavItem[] = [
  { path: '/partners', label: 'Nos partenaires' },
  { path: '/partners#become', label: 'Devenir partenaire' }
]
