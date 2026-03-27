// src/data/volunteerRoles.ts

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
  icon: string // emoji ou nom d'icône
  color: string // classe Tailwind pour la couleur accent (texte)
  bgColor: string // classe bg pour le header accordéon
  contentBorder: string // classe border pour le panneau ouvert
  accentBg: string // classe bg pour les puces de liste
  image: string // URL de l'image de la carte
  roles: VolunteerRole[]
}

export const volunteerCategories: VolunteerCategory[] = [
  {
    id: 'encadrement',
    label: 'Encadrement sportif',
    icon: '🏐',
    color: 'text-red-600',
    bgColor: 'bg-red-50 border-red-200',
    contentBorder: 'border-red-200',
    accentBg: 'bg-red-500',
    image: 'https://github.com/user-attachments/assets/9e011b23-7f07-4bc7-9843-d5c2dbe50089',
    roles: [
      {
        id: 'coach',
        title: 'Entraîneur',
        description:
          'Tu veux encadrer une équipe et transmettre ta passion du volley ? Le rôle d\'entraîneur peut prendre différentes formes selon ton expérience et ta disponibilité : entraîneur principal avec pleine responsabilité d\'un groupe, adjoint aux côtés d\'un coach expérimenté, ou simple observateur/participant pour découvrir le coaching progressivement. L\'important, c\'est de se lancer !',
        missions: [
          'Animer ou co-animer les séances d\'entraînement',
          'Préparer les exercices, ateliers techniques et plans de jeu',
          'Suivre la progression individuelle et collective des joueurs',
          'Participer aux réunions de préparation des matchs',
          'Accompagner l\'équipe en compétition',
          'Monter en compétences via les formations proposées par le club',
        ],
        ideal: 'Tout niveau de départ accepté — du joueur souhaitant se former au coach expérimenté. Aucun diplôme requis pour commencer.',
      },
      {
        id: 'coach-jeunes',
        title: 'Entraîneur jeunes',
        description:
          'Transmettre le goût du volley aux plus jeunes, c\'est une aventure unique. Tu encadres une catégorie d\'âge et construis les bases techniques et humaines des futures générations.',
        missions: [
          'Animer les entraînements de la catégorie choisie (U9 à U18)',
          'Suivi de la progression individuelle des jeunes',
          'Accompagnement lors des compétitions',
          'Communication avec les parents',
        ],
        ideal: 'Toute personne aimant travailler avec les enfants et adolescents, passionné(e) de volley.',
      },
      {
        id: 'responsable-equipe',
        title: 'Responsable d\'équipe',
        description:
          'Un rôle clé souvent dans l\'ombre : le responsable d\'équipe fait le lien entre les joueurs, le coach et le bureau. Il assure la bonne organisation du groupe au quotidien, sans forcément être sur le terrain.',
        missions: [
          'Gestion des convocations et feuilles de match',
          'Coordination des déplacements et covoiturages',
          'Relais d\'information entre le club et les joueurs',
          'Suivi des licences et disponibilités des joueurs',
          'Point de contact pour les questions pratiques de l\'équipe',
        ],
        ideal: 'Joueur(se) ou parent organisé(e), à l\'aise avec la communication. Rôle compatible avec une activité sportive dans le club.',
      },
      {
        id: 'arbitre',
        title: 'Arbitre',
        description:
          'Garantir le fair-play et le bon déroulement des matchs, c\'est un rôle essentiel et valorisant. Le club accompagne la formation.',
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
    contentBorder: 'border-blue-200',
    accentBg: 'bg-blue-500',
    image: 'https://github.com/user-attachments/assets/55d41773-9c59-40a8-b5f2-f30ea974a2fb',
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
        ideal: 'Amateur(e) ou professionnel(le) de photo/vidéo passionné(e) de sport.',
      },
      {
        id: 'communication',
        title: 'Chargé(e) de communication',
        description:
          'Gère la présence digitale du club : réseaux sociaux, site web, visuels. Tu es la voix de Sport Joie Lille auprès du public et des partenaires.',
        missions: [
          'Animation des réseaux sociaux (Instagram, Facebook…)',
          'Création de visuels et affiches (Canva, Photoshop…)',
          'Rédaction de newsletters et communiqués',
          'Mise à jour du site web',
        ],
        ideal: 'Toute personne créative à l\'aise avec les outils digitaux.',
      },
      {
        id: 'evenementiel-interne',
        title: 'Organisation d\'événements internes',
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
        title: 'Organisation de tournois & stages',
        description:
          'Participe à l\'organisation des tournois et stages accueillis par le club : un vrai projet collectif qui met en valeur Sport Joie Lille et enrichit la vie sportive des licenciés.',
        missions: [
          'Préparation logistique (planning, salles, terrains)',
          'Accueil des équipes participantes',
          'Gestion des tableaux de compétition',
          'Tenue de la buvette et animation',
          'Organisation des stages volley (planification, inscription des participants, encadrement logistique)',
          'Recherche d\'intervenants extérieurs pour les stages',
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
    contentBorder: 'border-green-200',
    accentBg: 'bg-green-500',
    image: 'https://github.com/user-attachments/assets/5079ac3d-db21-4973-adc7-afbf58682942',
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
        ideal: 'Personnes organisées avec des notions d\'administration ou de comptabilité.',
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
        id: 'securite-secourisme',
        title: 'Sécurité & Secourisme',
        description:
          'Un rôle essentiel souvent méconnu : chaque compétition et événement nécessite une personne formée aux premiers secours. Le club prend en charge les formations si besoin.',
        missions: [
          'Présence lors des matchs et tournois à domicile',
          'Application des procédures de sécurité en salle',
          'Premiers secours en cas d\'accident ou blessure',
          'Vérification du matériel de secours (trousse, défibrillateur…)',
          'Référent sécurité pour les événements du club',
        ],
        ideal: 'Titulaire du PSC1/PSE1 ou volontaire pour se former — formation prise en charge par le club.',
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
    id: 'web-informatique',
    label: 'Web & Informatique',
    icon: '💻',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50 border-indigo-200',
    contentBorder: 'border-indigo-200',
    accentBg: 'bg-indigo-500',
    image: 'https://github.com/user-attachments/assets/d69daf67-0da7-4eef-9eab-2a8815414283',
    roles: [
      {
        id: 'dev-web',
        title: 'Développeur(se) web',
        description:
          'Le site de Sport Joie Lille est un projet vivant qui évolue avec le club. Que tu sois développeur confirmé ou étudiant en informatique, tu peux contribuer à l\'améliorer, le maintenir et y ajouter de nouvelles fonctionnalités.',
        missions: [
          'Maintenance et évolution du site web du club',
          'Développement de nouvelles pages ou fonctionnalités',
          'Optimisation des performances et de l\'accessibilité',
          'Intégration des contenus fournis par l\'équipe communication',
          'Veille technique et proposition d\'améliorations',
        ],
        ideal: 'Développeur(se) web, étudiant(e) en informatique ou toute personne à l\'aise avec le code. Stack actuelle : Vue.js / TypeScript.',
      },
      {
        id: 'dev-outils',
        title: 'Développeur(se) d\'outils club',
        description:
          'Au-delà du site vitrine, le club a besoin d\'outils internes pour simplifier sa gestion au quotidien. C\'est l\'occasion de porter de vrais projets de A à Z, avec un impact concret sur la vie du club.',
        missions: [
          'Développement d\'un outil de gestion des licenciés',
          'Création d\'interfaces de suivi des plannings d\'entraînement',
          'Automatisation de tâches administratives (convocations, feuilles de match…)',
          'Mise en place d\'un espace membre sécurisé',
          'Proposition et développement de tout nouvel outil utile au club',
        ],
        ideal: 'Développeur(se) passionné(e) voulant construire des projets concrets et utiles. Liberté totale sur les technos — React, Vue, Node, Python, Supabase, et tout ce qui vous fait envie !',
      },
      {
        id: 'infra-donnees',
        title: 'Référent(e) infrastructure & données',
        description:
          'Assure la fiabilité, la sécurité et la disponibilité des outils numériques du club : hébergement, bases de données, sauvegardes et confidentialité des données membres.',
        missions: [
          'Gestion de l\'hébergement et des noms de domaine',
          'Mise en place et suivi des sauvegardes',
          'Sécurisation des données des licenciés (RGPD)',
          'Monitoring des services en ligne du club',
          'Support technique pour les bénévoles et le bureau',
        ],
        ideal: 'Profil DevOps, sysadmin ou étudiant(e) en infrastructure. Quelques heures par mois suffisent.',
      },
    ],
  },
  {
    id: 'ponctuel',
    label: 'Bénévolat ponctuel',
    icon: '🤝',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 border-purple-200',
    contentBorder: 'border-purple-200',
    accentBg: 'bg-purple-500',
    image: 'https://github.com/user-attachments/assets/a8b2a9e8-6728-4eda-9f54-56db8ccd32a3',
    roles: [
      {
        id: 'buvette',
        title: 'Buvette & Accueil matchs',
        description:
          'Le jour de match, la buvette c\'est le cœur battant du gymnase. Viens créer de l\'ambiance et accueillir les visiteurs !',
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
          'Pas d\'engagement particulier mais envie d\'aider quand le besoin se présente ? C\'est parfait, le club a toujours besoin de bras !',
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
