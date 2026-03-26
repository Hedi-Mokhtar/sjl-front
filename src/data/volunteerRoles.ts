export interface VolunteerRole {
  id: string
  title: string
  description: string
  missions: string[]
  ideal: string
}

export interface VolunteerCategory {
  id: string
  label: string
  icon: string
  color: string
  bgColor: string
  accentBg: string
  contentBorder: string
  roles: VolunteerRole[]
}

export const volunteerCategories: VolunteerCategory[] = [
  {
    id: 'encadrement',
    label: 'Encadrement sportif',
    icon: '🏐',
    color: 'text-red-600',
    bgColor: 'bg-red-50 border-red-200',
    accentBg: 'bg-red-600',
    contentBorder: 'border-red-200',
    roles: [
      {
        id: 'coach-adjoint',
        title: 'Entraîneur adjoint',
        description:
          "Tu veux te lancer dans l'encadrement sportif ? Le rôle d'adjoint est la porte d'entrée idéale pour apprendre aux côtés d'un coach expérimenté.",
        missions: [
          "Assister l'entraîneur principal lors des séances",
          'Préparer les exercices et ateliers techniques',
          'Observer et donner des retours aux joueurs',
          'Participer aux réunions de préparation des matchs',
        ],
        ideal: "Joueur(se) souhaitant se former à l'encadrement, pas de diplôme requis pour commencer.",
      },
      {
        id: 'coach-jeunes',
        title: 'Entraîneur jeunes',
        description:
          "Transmettre le goût du volley aux plus jeunes, c'est une aventure unique. Tu encadres une catégorie d'âge et construis les bases techniques et humaines des futures générations.",
        missions: [
          "Animer les entraînements de la catégorie choisie (U9 à U18)",
          'Suivi de la progression individuelle des jeunes',
          'Accompagnement lors des compétitions',
          'Communication avec les parents',
        ],
        ideal: "Toute personne aimant travailler avec les enfants et adolescents, passionné(e) de volley.",
      },
      {
        id: 'benevole-apprendre-coach',
        title: 'Bénévole en formation coaching',
        description:
          "Pas encore prêt(e) à prendre une équipe seul(e) ? Rejoins-nous en observateur/participant pour découvrir le métier de coach progressivement.",
        missions: [
          "Observer des séances d'entraînement",
          'Aider à l\'animation sous supervision',
          'Participer aux formations proposées par le club',
          'Monter en compétences à ton rythme',
        ],
        ideal: "Idéal pour les joueurs en fin de carrière ou toute personne curieuse de l'encadrement.",
      },
      {
        id: 'arbitre',
        title: 'Arbitre',
        description:
          "Garantir le fair-play et le bon déroulement des matchs, c'est un rôle essentiel et valorisant. Le club accompagne la formation.",
        missions: [
          'Arbitrer les matchs de championnat (jeunes et/ou séniors)',
          'Suivre les formations arbitrage proposées par le comité',
          'Assurer la fonction de marqueur / libéro-contrôleur',
          'Encadrer et former les jeunes arbitres',
        ],
        ideal: 'Toute personne connaissant les règles du volley, formation prise en charge par le club.',
      },
    ],
  },
  {
    id: 'communication',
    label: 'Communication & Événementiel',
    icon: '📣',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 border-blue-200',
    accentBg: 'bg-blue-600',
    contentBorder: 'border-blue-200',
    roles: [
      {
        id: 'photographe',
        title: 'Photographe / Vidéaste',
        description:
          'Immortalise les moments forts du club : matchs, tournois, soirées. Tes photos et vidéos font rayonner Sport Joie Lille sur les réseaux et dans la mémoire collective.',
        missions: [
          'Couvrir les matchs et événements du club',
          'Retoucher et livrer les photos/vidéos',
          'Alimenter les réseaux sociaux avec du contenu visuel',
          'Constituer une photothèque du club',
        ],
        ideal: "Amateur(e) ou professionnel(le) de photo/vidéo passionné(e) de sport.",
      },
      {
        id: 'communication',
        title: 'Chargé(e) de communication',
        description:
          "Gère la présence digitale du club : réseaux sociaux, site web, visuels. Tu es la voix de Sport Joie Lille auprès du public et des partenaires.",
        missions: [
          'Animation des réseaux sociaux (Instagram, Facebook…)',
          'Création de visuels et affiches (Canva, Photoshop…)',
          'Rédaction de newsletters et communiqués',
          'Mise à jour du site web',
        ],
        ideal: "Toute personne créative à l'aise avec les outils digitaux.",
      },
      {
        id: 'evenementiel-interne',
        title: "Organisation d'événements internes",
        description:
          'Crée du lien au sein du club en organisant les moments conviviaux : soirées, repas de fin de saison, challenges entre équipes.',
        missions: [
          'Planification et logistique des soirées club',
          'Organisation des repas et pots de fin de saison',
          'Animation de challenges et activités inter-équipes',
          'Gestion des inscriptions et de la communication interne',
        ],
        ideal: 'Personnes dynamiques aimant fédérer et créer de la bonne humeur.',
      },
      {
        id: 'tournois',
        title: 'Organisation de tournois',
        description:
          'Participe à l\'organisation des tournois accueillis par le club : un vrai projet collectif qui met en valeur Sport Joie Lille.',
        missions: [
          'Préparation logistique (planning, salles, terrains)',
          'Accueil des équipes participantes',
          'Gestion des tableaux de compétition',
          'Tenue de la buvette et animation',
        ],
        ideal: 'Disponible le week-end pour des événements ponctuels, aucune compétence particulière requise.',
      },
    ],
  },
  {
    id: 'gestion',
    label: 'Gestion & Logistique',
    icon: '⚙️',
    color: 'text-green-600',
    bgColor: 'bg-green-50 border-green-200',
    accentBg: 'bg-green-600',
    contentBorder: 'border-green-200',
    roles: [
      {
        id: 'gestion-club',
        title: 'Aide à la gestion du club',
        description:
          'Le club fonctionne grâce à une gestion rigoureuse en coulisses : inscriptions, licences, comptabilité… Tu peux apporter une aide précieuse même quelques heures par mois.',
        missions: [
          'Gestion des licences et inscriptions (FFVB)',
          'Suivi administratif et comptable',
          'Correspondance avec le comité régional',
          'Organisation des assemblées générales',
        ],
        ideal: "Personnes organisées avec des notions d'administration ou de comptabilité.",
      },
      {
        id: 'local-materiel',
        title: 'Gestion du local & matériel',
        description:
          'Range, entretien et inventaire du matériel sportif : filets, ballons, poteaux, équipements… Un rôle concret et indispensable.',
        missions: [
          'Rangement et entretien du local sportif',
          'Inventaire et suivi du matériel',
          'Signalement et gestion des réparations',
          'Sortie / rentrée du matériel lors des tournois',
        ],
        ideal: 'Tout le monde peut aider ! Idéal pour les parents ou licenciés disponibles.',
      },
      {
        id: 'partenariat',
        title: 'Développement partenariats',
        description:
          'Contribue à la recherche de sponsors et partenaires locaux pour assurer la pérennité financière du club.',
        missions: [
          'Prospection de partenaires locaux (entreprises, commerçants)',
          'Présentation des offres de partenariat du club',
          'Suivi des relations avec les partenaires existants',
          'Participation aux actions de visibilité partenaires',
        ],
        ideal: 'Personnes à l\'aise dans le relationnel et le commercial.',
      },
    ],
  },
  {
    id: 'ponctuel',
    label: 'Bénévolat ponctuel',
    icon: '🤝',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 border-purple-200',
    accentBg: 'bg-purple-600',
    contentBorder: 'border-purple-200',
    roles: [
      {
        id: 'buvette',
        title: 'Buvette & Accueil matchs',
        description:
          "Le jour de match, la buvette c'est le cœur battant du gymnase. Viens créer de l'ambiance et accueillir les visiteurs !",
        missions: [
          'Tenue de la buvette lors des matchs à domicile',
          'Préparation et service des boissons/snacks',
          'Accueil des équipes adverses et du public',
          'Rangement après les matchs',
        ],
        ideal: 'Parents, licenciés, supporters : tout le monde est bienvenu !',
      },
      {
        id: 'transport',
        title: 'Covoiturage & Transport',
        description:
          'Un coup de pouce ponctuel pour aider les jeunes à se déplacer en compétition quand les parents ne peuvent pas.',
        missions: [
          'Transport des jeunes vers les compétitions extérieures',
          'Aide logistique lors des déplacements',
        ],
        ideal: 'Disponible le week-end occasionnellement, permis B requis.',
      },
      {
        id: 'soutien-general',
        title: 'Coup de main général',
        description:
          "Pas d'engagement particulier mais envie d'aider quand le besoin se présente ? C'est parfait, le club a toujours besoin de bras !",
        missions: [
          'Installation / démontage pour les événements',
          'Aide logistique ponctuelle',
          'Renfort pour les tournois et soirées',
          'Toute autre aide selon les besoins du moment',
        ],
        ideal: 'Toute personne de bonne volonté, sans compétence requise.',
      },
    ],
  },
]
