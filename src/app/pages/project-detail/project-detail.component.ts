import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

type CompetenceRef = { id: string; label: string };

type ProjectDetail = {
  id: number;
  name: string;
  subtitle?: string;
  cover?: string;
  meta?: { label: string; value: string }[];

  // 7 notions
  presentation: string;
  contexte_objectifs_enjeux_risques: {
    contexte: string;
    objectifs: string[];
    enjeux?: string[];
    risques?: string[];
  };
  etapes: string[];
  acteurs_interactions: { acteur: string; role: string; interactions?: string }[];
  resultats: {
    pour_moi: string[];
    pour_entreprise: string[];
  };
  lendemains: {
    immediat?: string[];
    a_distance?: string[];
    aujourdhui?: string[];
  };
  regard_critique: string;

  // Compétences & technologies (une seule section)
  competences: CompetenceRef[];
};

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-detail.component.html'
})
export class ProjectDetailComponent {
  project?: ProjectDetail;
  private projects: ProjectDetail[] = [
    // ========= 1) Uberti =========
    {
      id: 1,
      name: 'Uberti.shop',
      subtitle: 'Site e-commerce PrestaShop pour Uberti (bio, naturel & bien-être)',
      cover: 'assets/img/uberti.png',
      meta: [
        { label: 'Client', value: 'Uberti' },
        { label: 'Agence', value: 'DGS Création' },
        { label: 'Type', value: 'E-commerce' },
        { label: 'Période', value: '2024' }
      ],
      presentation:
        'Uberti.shop est un site e-commerce développé pour la marque Uberti. Le projet remplace un ancien site daté et peu fluide par une plateforme moderne, performante et intuitive pour les clients comme pour les administrateurs.',
      contexte_objectifs_enjeux_risques: {
        contexte:
          'Le précédent site souffrait d’un design vieillissant, d’une navigation confuse et d’une administration complexe. Uberti avait besoin d’un outil adapté à sa croissance et aux bonnes pratiques e-commerce.',
        objectifs: [
          'Moderniser l’image en ligne de la marque.',
          'Améliorer l’UX sur desktop et mobile.',
          'Simplifier la gestion du catalogue, des commandes et des promotions.',
          'Optimiser le SEO et les performances techniques.'
        ],
        enjeux: [
          'Valoriser les produits et les valeurs de la marque (transparence, bien-être, qualité).',
          'Augmenter la conversion et réduire les frictions du tunnel de commande.',
          'Assurer la continuité des ventes pendant la migration.'
        ],
        risques: [
          'Régression SEO lors du basculement.',
          'Erreurs catalogues (prix/stock) ou commandes.',
          'Complexité future des connecteurs externes.'
        ]
      },
      etapes: [
        'Ateliers de cadrage et analyse des besoins avec le client.',
        'Intégration du catalogue complet (catégories, variantes, fiches détaillées).',
        'Création d’un thème PrestaShop 100 % personnalisé (base classic).',
        'Développement de modules sur mesure pour faciliter la maintenance.',
        'Intégration fidèle de toutes les pages selon les maquettes UI.',
        'Optimisations SEO (balises, structure, vitesse).',
        'Responsive design + animations.',
        'Tests du parcours client et compatibilité navigateurs.',
        'Formation du client à l’utilisation du back-office.'
      ],
      acteurs_interactions: [
        {
          acteur: 'Responsable dev. commercial & marketing',
          role: 'Recueil des besoins, priorisation',
          interactions: 'Consultations, ateliers de cadrage'
        },
        {
          acteur: 'Chef de produit web',
          role: 'Faisabilité, suivi de production',
          interactions: 'Points réguliers et arbitrages'
        },
        {
          acteur: 'Graphiste',
          role: 'Conception et maquettes UI',
          interactions: 'Allers-retours de validation visuelle'
        },
        { acteur: 'Moi-même (développeur)', role: 'Intégration & développement', interactions: 'Échanges quotidiens' }
      ],
      resultats: {
        pour_moi: [
          'Expérience complète sur un projet e-commerce réel.',
          'Montée en compétences PrestaShop (thème + modules).',
          'Collaboration interdisciplinaire renforcée.',
          'Compétences pédagogiques via la formation client.'
        ],
        pour_entreprise: [
          'Site plus rapide, moderne et responsive.',
          'Administration simplifiée et autonomie grâce à la formation.',
          'Parcours d’achat optimisé et SEO renforcé.',
          'Image de marque consolidée.'
        ]
      },
      lendemains: {
        immediat: ['Accompagnement post-mise en ligne', 'Suivi des retours utilisateurs'],
        a_distance: ['Évolutions sur les connecteurs et le catalogue', 'Roadmap back-office marketing'],
        aujourdhui: ['Site de référence pour l’agence', 'Base solide, pérenne et maintenable']
      },
      regard_critique:
        'J’aurais pu anticiper davantage certains besoins évolutifs (connecteurs, gestion long terme du catalogue). Le résultat reste robuste et performant, et ce projet a consolidé mes compétences techniques et relationnelles.',
      competences: [
        { id: 'prestashop', label: 'PrestaShop' },
        { id: 'html', label: 'HTML' },
        { id: 'css', label: 'CSS' },
        { id: 'javascript', label: 'JavaScript' },
        { id: 'relation-client', label: 'Relation client' },
        { id: 'gestion-projet', label: 'Gestion de projet' }
      ]
    },

    // ========= 2) GPAO – Interpane =========
    {
      id: 2,
      name: 'GPAO – Interpane',
      subtitle: 'Modernisation d’un logiciel de gestion de production (refonte UI, PHP 8, ODBC, DataTables, Chart.js)',
      cover: 'assets/img/interpane.png',
      meta: [
        { label: 'Client', value: 'Interpane (Hoerdt)' },
        { label: 'Contexte', value: 'Apprentissage DUT MMI' },
        { label: 'Période', value: '2021 — 2022' }
      ],
      presentation:
        'Modernisation de la GPAO interne d’Interpane : refonte complète de l’interface, migration technologique (vers PHP 8), ajout de tableaux triables et de graphiques, réorganisation professionnelle du code et de l’arborescence. Le projet s’inscrit dans la mise à jour de l’ERP et des bases de données, avec accès aux données via ODBC.',
      contexte_objectifs_enjeux_risques: {
        contexte:
          'Interpane prévoyait une mise à jour de l’ERP impliquant un changement de bases de données. Cette échéance a ouvert l’opportunité de moderniser une GPAO vieillissante (code ancien, UI datée). Accès aux données via ODBC et standardisation des pratiques.',
        objectifs: [
          'Passer de PHP 3 à PHP 8 et repartir sur des bases saines.',
          'Refondre l’interface (header/nav, charte, responsive).',
          'Afficher des tableaux triables/recherchables et des graphiques.',
          'Structurer le projet (templates Twig, séparation des responsabilités).',
          'Documenter le fonctionnement pour assurer la pérennité.'
        ],
        enjeux: [
          'Continuité d’activité (outil utilisé par la production).',
          'Qualité/fiabilité des données exposées à l’atelier.',
          'Maintenabilité du code et transfert de connaissances.'
        ],
        risques: [
          'Compatibilités ERP/ODBC et PHP 8.',
          'Dépendances à des librairies obsolètes (ex-HTML Graph).',
          'Adoption par les utilisateurs (changement d’habitudes).'
        ]
      },
      etapes: [
        'Refonte de l’interface : header plus compact, nav intégrée, logo cliquable, respect de la charte via couleurs du logo.',
        'Héritage de templates Twig pour factoriser header/footer et vues communes (Symfony/Twig).',
        'Intégration de tableaux triables & recherchables avec DataTables (jQuery), limitation du chargement initial et pagination.',
        'Remplacement d’HTML Graph par Chart.js pour les graphiques (charges, non-qualité).',
        'Réorganisation des fichiers : séparation PHP/Twig/CSS/JS, vendors dédiés, “models” pour les accès BD.',
        'Connexion aux données via ODBC et premières vues alimentées par SQL.',
        'Mise en place d’un environnement de dev (VS Code, serveur EasyPHP) et rédaction d’une documentation technique.'
      ],
      acteurs_interactions: [
        { acteur: 'Jean-Marc Holl (Directeur site)', role: 'Auteur historique de la GPAO, cadrage et support technique', interactions: 'Échanges réguliers, levée de doutes sur la logique métier' },
        { acteur: 'Erwan Ranc (Maître d’apprentissage)', role: 'Conseils et validation côté production', interactions: 'Points fréquents, priorisation' },
        { acteur: 'Services ADV / Qualité / Commercial / Production / Maintenance / Logistique', role: 'Usagers et parties prenantes', interactions: 'Recueils de besoins et retours d’usage' },
        { acteur: 'Moi-même (développeur)', role: 'Conception, développement et documentation', interactions: 'Itérations continues' }
      ],
      resultats: {
        pour_moi: [
          'Montée en compétences concrète sur PHP/Twig/Symfony, SQL et SASS.',
          'Découverte et mise en œuvre d’ODBC dans un contexte ERP industriel.',
          'Prise de bonnes pratiques de structuration (séparation des responsabilités, templates, assets).',
          'Expérimentation de DataTables et Chart.js dans un outil métier.'
        ],
        pour_entreprise: [
          'Interface modernisée et cohérente avec la charte.',
          'Tableaux triables/recherchables, meilleure lisibilité des données.',
          'Architecture de fichiers claire, facilitant la maintenance et les évolutions.',
          'Base technique compatible PHP 8 et remplacement de librairies obsolètes.'
        ]
      },
      lendemains: {
        immediat: [
          'Poursuite de la modernisation des écrans restants et accompagnement des utilisateurs.',
          'Finalisation de la génération de PDF (ex. BL) et amélioration de certaines vues.'
        ],
        a_distance: [
          'Couverture de l’ensemble des modules de la GPAO et durcissement des tests.',
          'Optimisations de performance côté SQL et côté front (chargements progressifs).'
        ],
        aujourdhui: [
          'Socle de modernisation en place ; documentation pour faciliter les reprises futures.'
        ]
      },
      regard_critique:
        'Ce projet a été réalisé tout au début de mon DUT MMI. Avec le recul et mon niveau actuel de Master, je referais plusieurs points : un design system plus abouti (composants réutilisables, accessibilité RGAA, responsive grid), une architecture back plus solide (couches service/repository, validations, gestion d’erreurs), une qualité renforcée (tests unitaires/intégration, linting, CI/CD), ainsi que davantage de sécurité et d’observabilité (journalisation, métriques, gestion des secrets).',
      // Compétences & technologies rattachées
      competences: [
        { id: 'php', label: 'PHP' },
        { id: 'symfony', label: 'Symfony' },
        { id: 'html', label: 'HTML' },
        { id: 'sql', label: 'SQL' },
        { id: 'css', label: 'CSS' },
        { id: 'javascript', label: 'JavaScript' },
        { id: 'gestion-projet', label: 'Gestion de projets' },
        { id: 'autonomie', label: 'Autonomie' }
      ]
    },

    // ========= 3) LD Éclairage =========
    {
      id: 3,
      name: 'LD Éclairage',
      subtitle: 'Site vitrine WordPress “catalogue + demande de devis” (ACF, WooCommerce en mode catalogue)',
      cover: 'assets/img/ld-eclairage.jpg',
      meta: [
        { label: 'Client', value: 'LD Éclairage (Lutterbach)' },
        { label: 'Contexte', value: 'Licence Pro DWEB — Apprentissage' },
        { label: 'Type', value: 'Site vitrine catalogue' },
        { label: 'Période', value: '2022 — 2023' }
      ],
      presentation:
        'Refonte du site vitrine LD Éclairage avec un fonctionnement “catalogue + demande de devis” (pas de vente en ligne). Objectif : moderniser l’image, améliorer le référencement et offrir une navigation haut de gamme, tout en facilitant l’édition de contenu côté client.',
      contexte_objectifs_enjeux_risques: {
        contexte:
          'Ancien site peu visible (≈30 visites/mois) et peu de mots-clés positionnés. Besoin d’un site épuré/haut de gamme et d’une stratégie de contenus axée produits pour booster l’indexation et le trafic. Le magasin est situé à la Cité de l’Habitat (Lutterbach).',
        objectifs: [
          'Transformer le site en “catalogue + devis” (panier → envoi de demande).',
          'Structurer le contenu produits pour améliorer le SEO (catégories, fiches, extraits).',
          'Garantir un back-office simple via un thème custom + ACF.',
          'Conserver d’excellentes performances malgré WooCommerce (mode catalogue).'
        ],
        enjeux: [
          'Équilibre design haut de gamme / performance.',
          'Édition 100% autonome par le client (ACF, blocs réutilisables).',
          'Navigation claire (catégories, facettes) sans complexifier le socle.'
        ],
        risques: [
          'Surcharge de plugins (catalogue, devis, facettes) pouvant impacter la perf.',
          'Maintenance des overrides WooCommerce (templates).',
          'Complexité des sliders (slick.js) et des blocs si non factorisés.'
        ]
      },
      etapes: [
        'Analyse SEO/traffic et définition de la stratégie contenu + design épuré/haut de gamme.',
        'Création d’un Custom Post Type “Section Accueil” (code, pas de plugin) + ACF (ordre, champs dédiés).',
        'Page d’accueil : requêtes “3 derniers articles” et “catégories produits” + fallback image.',
        'Sliders synchronisés avec slick.js/jQuery (asNavFor), scripts appelés dans functions.js.',
        'Menus : enregistrement des emplacements + wp_nav_menu() (principal, réseaux, liens).',
        'Blocs réutilisables : création via register_block_pattern() (patterns).',
        'WooCommerce en mode catalogue : overrides de templates + styles scindés avec sélecteur .woocommerce.',
        'Plugins ciblés pour “demande de devis” et “navigation à facettes” + stylage.',
        'Optimisations responsive/perf (SASS, assets, JS), tests multi-navigateurs.'
      ],
      acteurs_interactions: [
        { acteur: 'LD Éclairage', role: 'Client, validations contenus/maquettes', interactions: 'Allers-retours réguliers' },
        { acteur: 'Responsable dev. commercial & marketing', role: 'Cadrage des besoins et SEO', interactions: 'Ateliers + suivi' },
        { acteur: 'Graphiste', role: 'Maquettes et direction artistique', interactions: 'Design reviews' },
        { acteur: 'Chef de produit web', role: 'Pilotage, priorisation', interactions: 'Points hebdomadaires' },
        { acteur: 'Moi-même', role: 'Dev thème custom, ACF, Woo catalogue, overrides, perf', interactions: 'Build & tests' }
      ],
      resultats: {
        pour_moi: [
          'Montée en compétences WP thème custom/ACF et overrides Woo.',
          'Mise en œuvre de patterns réutilisables + slick.js synchronisé.',
          'Structuration d’un catalogue “sans vente” avec devis, en respectant la perf.'
        ],
        pour_entreprise: [
          'Site plus moderne/épuré, adapté catalogue + devis.',
          'Back-office simple et autonome (ACF, blocs réutilisables).',
          'Meilleure mise en avant des produits et base SEO renforcée.'
        ]
      },
      lendemains: {
        immediat: [
          'Remplissage continu du catalogue et ajustement des facettes.',
          'Suivi des demandes de devis et micro-améliorations UX.'
        ],
        a_distance: [
          'Renforcement SEO (contenus, schémas produits), cache et optimisation assets.',
          'Réduction de dépendances plugins si possible (facettes, devis) par code sur-mesure.'
        ],
        aujourdhui: [
          'Maintenance, doc back-office et bibliothèque de blocs maintenue.'
        ]
      },
      regard_critique:
        'Projet mené en Licence Pro DWEB : avec l’expérience et mon niveau actuel (Master), je mettrais en place un design system “block-theme”, des performances budgétées (LCP/INP), un code plus factorisé (hooks Woo plus encapsulés), des tests E2E/visuels et une CI/CD pour sécuriser les mises à jour.',
      competences: [
        { id: 'wordpress', label: 'WordPress' },
        { id: 'php', label: 'PHP' },
        { id: 'mysql', label: 'MySQL' },
        { id: 'css', label: 'CSS' },
        { id: 'javascript', label: 'JavaScript' },
        { id: 'relation-client', label: 'Relation client' },
        { id: 'communication', label: 'Communication' },
      ]
    },
    {
      id: 4,
      name: 'Tschoeppe Live',
      subtitle: 'Évolution & refonte d’un logiciel métier (Java)',
      cover: 'assets/img/tschoeppe-live.png',
      meta: [
        { label: 'Client', value: 'Tschoeppe' },
        { label: 'Type', value: 'Logiciel métier' },
        { label: 'Période', value: '2024 — 2025' }
      ],
      presentation:
        'Logiciel Java utilisé par commerciaux, service client et revendeurs : configuration de portails sur-mesure, génération de devis, dessin 2D/3D et intégration photo.',
      contexte_objectifs_enjeux_risques: {
        contexte:
          'Reprise du projet en autonomie dans un contexte de réorganisation IT et d’arrêt du prestataire historique (récupération d’urgence de l’ancien système).',
        objectifs: [
          'Assurer la continuité de service et la maintenance.',
          'Intégrer de nouveaux modèles et améliorer les filtres de configuration.',
          'Préparer une refonte technique et graphique complète.'
        ],
        enjeux: [
          'Outil critique pour les ventes et le SAV.',
          'Adoption par des profils utilisateurs variés (commerciaux, SAV, revendeurs).',
          'Stabiliser un code historique.'
        ],
        risques: [
          'Dette technique et dépendances 2D/3D.',
          'Documentation partielle.',
          'Régressions possibles lors des évolutions.'
        ]
      },
      etapes: [
        'Cartographie fonctionnelle et mise en place d’un rythme de releases (~2/semaine).',
        'Ajouts fonctionnels et refonte progressive de l’interface.',
        'Restauration de l’ancien système et sécurisation de l’hébergement.',
        'Mise en place d’un canal support et d’une documentation technique.'
      ],
      acteurs_interactions: [
        { acteur: 'Commerciaux / SAV / Revendeurs', role: 'Utilisateurs finaux', interactions: 'Retours terrain et priorisation' },
        { acteur: 'Moi-même', role: 'Développement, maintenance, refonte', interactions: 'Conception, implémentation et support' }
      ],
      resultats: {
        pour_moi: [
          'Autonomie et rigueur de production.',
          'Montée en version Java (8 → 22) et pratique SQL.',
          'Amélioration de la communication avec des profils non techniques.'
        ],
        pour_entreprise: [
          'Traitement des retours en moins d’une semaine.',
          'Releases régulières et prévisibles.',
          'Arborescence fonctionnelle et UI modernisées.'
        ]
      },
      lendemains: {
        immediat: ['Poursuite des releases incrémentales', 'Renforcement sauvegardes et hébergement'],
        a_distance: ['Design system, accessibilité et perfs', 'Tests automatisés + CI/CD'],
        aujourdhui: ['Projet en cours — refonte structurante en préparation']
      },
      regard_critique:
        'Des compromis rapides ont sécurisé la production ; prochaines étapes : architecture en couches, tests, CI/CD, télémétrie et design system accessible.',
      competences: [
        { id: 'java', label: 'Java (8→22)' },
        { id: 'sql', label: 'SQL' },
        { id: 'gestion-projet', label: 'Gestion de projet' },
        { id: 'autonomie', label: 'Autonomie' },
        { id: 'communication', label: 'Communication' },
        { id: 'relation-client', label: 'Relation client' }
      ]
    },
    {
      id: 5,
      name: 'Atelier des Créatrices Solidaires',
      subtitle: 'Site associatif : vitrine + (future) boutique solidaire',
      cover: 'assets/img/atelier.png',
      meta: [
        { label: 'Client', value: 'Association Atelier des Créatrices Solidaires' },
        { label: 'Type', value: 'Site vitrine associatif' },
        { label: 'Période', value: '2023 — 2024' }
      ],
      presentation:
        'Plateforme web destinée à présenter le collectif, ses actions solidaires et ses créations. Le site met en valeur les projets, facilite les prises de contact/adhésions et prépare l’arrivée d’une boutique solidaire pour financer les initiatives.',
      contexte_objectifs_enjeux_risques: {
        contexte:
          'Association en croissance, forte activité terrain mais visibilité numérique limitée. Besoin d’un espace clair pour présenter les actions, recruter des bénévoles et centraliser les demandes.',
        objectifs: [
          'Offrir une vitrine claire : mission, actions, galerie des créations.',
          'Simplifier le contact (bénévolat, dons, partenariats).',
          'Préparer un module boutique solidaire activable ultérieurement.',
          'Assurer une administration simple et autonome.'
        ],
        enjeux: [
          'Crédibilité et transparence de l’association en ligne.',
          'Accessibilité et lisibilité pour un public non-tech.',
          'Évolutivité vers une boutique (sans réécrire le socle).'
        ],
        risques: [
          'Sous-estimation des besoins éditoriaux (actualités, médias).',
          'Complexité potentielle si la boutique arrive trop vite.',
          'Charge bénévole limitée pour la maintenance de contenu.'
        ]
      },
      etapes: [
        'Cadrage des contenus (pages statiques, actualités, galerie).',
        'Conception d’une structure modulaire (pages + blocs réutilisables).',
        'Intégration front responsive et optimisation performance de base.',
        'Mise en place de formulaires (contact / adhésion / partenariats).',
        'Pré-câblage technique pour une future boutique solidaire.',
        'Rédaction d’une mini-documentation d’édition pour les bénévoles.'
      ],
      acteurs_interactions: [
        { acteur: 'Bureau de l’association', role: 'Pilotage éditorial', interactions: 'Ateliers de cadrage, validations' },
        { acteur: 'Bénévoles / créatrices', role: 'Fourniture contenus (photos, textes)', interactions: 'Allers-retours asynchrones' },
        { acteur: 'Moi-même', role: 'Conception & développement', interactions: 'Mises à jour, support et conseils' }
      ],
      resultats: {
        pour_moi: [
          'Expérience de cadrage avec une structure associative.',
          'Mise en place d’un socle éditorial simple et durable.',
          'Préparation technique d’une évolution e-commerce maîtrisée.'
        ],
        pour_entreprise: [
          'Visibilité renforcée (présentation claire des actions).',
          'Process de contact simplifié (moins d’allers-retours mail).',
          'Base prête pour activer une boutique solidaire plus tard.'
        ]
      },
      lendemains: {
        immediat: [
          'Remplissage continu (actualités, galerie).',
          'Affinage des formulaires et tracking basique (conversions).'
        ],
        a_distance: [
          'Activation de la boutique (produits solidaires, dons).',
          'SEO local et articles “coulisses” pour crédibiliser l’action.'
        ],
        aujourdhui: [
          'Socle éditorial stable avec marge d’évolution contrôlée.'
        ]
      },
      regard_critique:
        'Pour une v2, j’industrialiserais un design system accessible (RGAA), ajouterais des tests visuels/E2E et un petit pipeline CI pour fiabiliser les mises à jour opérées par des bénévoles.',
      competences: [
        { id: 'wordpress', label: 'WordPress' },
        { id: 'html', label: 'HTML' },
        { id: 'css', label: 'CSS' },
        { id: 'php', label: 'PHP' },
        { id: 'sql', label: 'SQL' },
        { id: 'javascipt', label: 'Javascript' },
        { id: 'gestion-projet', label: 'Gestion de projet' },
        { id: 'communication', label: 'Communication' }
      ]
    }
  ];

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id') ?? 0);
    this.project = this.projects.find((p: ProjectDetail) => p.id === id);
  }
}
