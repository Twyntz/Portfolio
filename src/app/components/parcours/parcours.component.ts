import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

export interface ParcoursItem {
  year: string;
  title: string;
  subtitle: string;
  logo: string;
  websiteUrl: string;
  description: string;
  status: string;
  missions: string[];
  vision: string;
  internalLinks: { label: string; route: string }[];
}

@Component({
  selector: 'app-parcours',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './parcours.component.html',
  styleUrls: ['./parcours.component.scss']
})
export class ParcoursComponent {

  parcoursPro: ParcoursItem[] = [
    {
      year: '2024 – 2026',
      title: 'Chargé de Développement Informatique',
      subtitle: 'Groupe Synergie Développement',
      logo: 'assets/img/SD.jpg',
      websiteUrl: 'https://synergiedev.fr/',
      description: 'Maintien et évolution du logiciel de dessin 2D (Java), intégration IA dans les processus (Claude / Gemini).',
      status: 'CDI',
      missions: [
        'Maintenance corrective et évolutive du logiciel 2D en Java',
        'Conteneurisation des services avec Docker',
        'Prompt engineering : génération de fichiers XML via Claude',
        'Gestion autonome d\'un service et reporting à la direction'
      ],
      vision: 'Intégrer Synergie m\'a fait passer d\'un profil junior à un profil senior en responsabilité. Travailler sur du legacy Java m\'a obligé à lire, comprendre et améliorer du code sans filet — une compétence que les formations n\'enseignent pas.',
      internalLinks: [
        { label: 'Java',         route: '/competences/java' },
        { label: 'Docker',       route: '/competences/docker' },
        { label: 'IA / XML',     route: '/realisations/ia-xml' }
      ]
    },
    {
      year: '2022 – 2024',
      title: 'Alternant Développeur Fullstack',
      subtitle: 'DGS Création – Mulhouse',
      logo: 'assets/img/dgs.jpg',
      websiteUrl: 'https://www.dgs-creation.fr',
      description: 'Création de sites web avec WordPress, PrestaShop et Symfony au sein d\'une agence web.',
      status: 'Alternant',
      missions: [
        'Développement de sites vitrines et e-commerce (WordPress, PrestaShop)',
        'Création de projets Symfony sur mesure',
        'Relation client et gestion des délais en agence',
        'Mise en place de bonnes pratiques Git en équipe'
      ],
      vision: 'L\'agence web est une école de l\'urgence et de l\'adaptabilité. Livrer des projets variés en temps contraint m\'a forgé une résilience et une capacité à monter en compétence rapidement sur des technologies inconnues.',
      internalLinks: [
        { label: 'PHP',          route: '/competences/php' },
        { label: 'WordPress',    route: '/competences/wordpress' },
        { label: 'PrestaShop',   route: '/competences/prestashop' }
      ]
    },
    {
      year: '2021 – 2022',
      title: 'Alternant Développeur Web',
      subtitle: 'Interpane – Hoerdt',
      logo: 'assets/img/interpane.png',
      websiteUrl: 'https://www.agc-interpane.com/fr/',
      description: 'Migration d\'un logiciel GPAO de PHP 3 vers PHP 8 / Symfony. Introduction du versioning Git et mise en place des bonnes pratiques.',
      status: 'Alternant',
      missions: [
        'Migration complète : PHP 3 → PHP 8 + Symfony',
        'Gestion du projet de migration de A à Z',
        'Intégration de GitHub pour le versionning',
        'Mise en place de standards de code et documentation',
        'Formation des équipes internes aux nouvelles pratiques'
      ],
      vision: 'Interpane m\'a appris ce que signifie prendre en charge un projet en totale autonomie. Voir un logiciel vieillissant reprendre vie grâce à des choix techniques modernes reste l\'une de mes plus grandes fiertés.',
      internalLinks: [
        { label: 'PHP',          route: '/competences/php' },
        { label: 'Angular',      route: '/competences/angular' }
      ]
    }
  ];

  parcoursScolaire: ParcoursItem[] = [
    {
      year: '2023 – 2025',
      title: 'Master Expert en Ingénierie Logicielle',
      subtitle: 'ISCOD',
      logo: 'assets/img/iscod.png',
      websiteUrl: 'https://www.iscod.fr/',
      description: 'Mastère orienté architecture logicielle, gestion de projet avancée et compétences techniques de haut niveau.',
      status: 'Alternance',
      missions: [
        'Conception et développement d\'applications d\'entreprise',
        'Gestion de projet en méthode Agile / Scrum',
        'Architecture microservices et conteneurisation Docker',
        'Veille technologique et rédaction de livrables professionnels'
      ],
      vision: 'L\'ISCOD offre une pédagogie axée sur la pratique industrielle. Les projets transversaux m\'ont permis de travailler en équipe sur des problématiques réelles, ce qui est selon moi le meilleur vecteur d\'apprentissage.',
      internalLinks: [
        { label: 'Java',         route: '/competences/java' },
        { label: 'Docker',       route: '/competences/docker' }
      ]
    },
    {
      year: '2022 – 2023',
      title: 'Licence Pro Développement Web et Conception d\'Interface',
      subtitle: 'IUT de Haguenau',
      logo: 'assets/img/IUT_Haguenau_logo.png',
      websiteUrl: 'https://iuthaguenau.unistra.fr/',
      description: 'Formation spécialisée en développement web, ergonomie des interfaces et qualité de l\'expérience utilisateur.',
      status: 'Alternance',
      missions: [
        'Développement front-end (HTML, CSS, JavaScript)',
        'Intégration Symfony / Frameworks PHP',
        'Conception UX/UI et maquettage',
        'Projet tuteuré en lien avec un commanditaire professionnel'
      ],
      vision: 'La LP DWEB m\'a réconcilié avec la rigueur académique en l\'ancrant dans des cas concrets. L\'alternance m\'a permis d\'appliquer immédiatement les concepts vus en cours.',
      internalLinks: [
        { label: 'PHP',          route: '/competences/php' },
        { label: 'WordPress',    route: '/competences/wordpress' }
      ]
    },
    {
      year: '2020 – 2022',
      title: 'DUT Métiers du Multimédia et de l\'Internet (MMI)',
      subtitle: 'IUT de Haguenau',
      logo: 'assets/img/IUT_Haguenau_logo.png',
      websiteUrl: 'https://iuthaguenau.unistra.fr/',
      description: 'Formation pluridisciplinaire : développement web, design multimédia, communication numérique et production audiovisuelle.',
      status: 'Formation initiale',
      missions: [
        'Développement de sites web et d\'applications mobiles',
        'Production multimédia (motion design, vidéo)',
        'Gestion de communautés et stratégie digitale',
        'Initiation à la conception de jeux vidéo'
      ],
      vision: 'Le MMI est une formation généraliste qui m\'a donné une culture numérique large. Même les modules éloignés du code m\'ont appris à penser la communication autour d\'un produit — un atout encore précieux aujourd\'hui.',
      internalLinks: [
        { label: 'Communication', route: '/competences/communication' }
      ]
    },
    {
      year: '2017 – 2020',
      title: 'Baccalauréat Scientifique – Mention Assez Bien',
      subtitle: 'Lycée Jean Rostand – Strasbourg',
      logo: 'assets/img/JR.png',
      websiteUrl: 'https://www.lycee-jean-rostand.fr/',
      description: 'Déclic fondateur grâce à la spécialité ISN (Informatique et Sciences du Numérique).',
      status: 'Formation initiale',
      missions: [
        'Spécialité ISN : initiation à la programmation Python',
        'Projet de groupe : création d\'un jeu en Python',
        'Mathématiques et Physique-Chimie'
      ],
      vision: 'L\'ISN a été un déclic. Comprendre que l\'on pouvait "donner des ordres à une machine" et obtenir un résultat visuel m\'a immédiatement passionné. Tout le reste en découle.',
      internalLinks: []
    }
  ];
}