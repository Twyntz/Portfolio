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
  acteurs_interactions: {
    acteur: string;
    role: string;
    interactions?: string;
  }[];
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
  templateUrl: './project-detail.component.html',
})
export class ProjectDetailComponent {
  project?: ProjectDetail;
  private projects: ProjectDetail[] = [
    // ========= 1) Uberti =========
    {
      id: 1,
      name: 'Uberti.shop',
      subtitle:
        'Site e-commerce PrestaShop pour Uberti (bio, naturel & bien-être)',
      cover: 'assets/img/uberti.png',
      meta: [
        { label: 'Client', value: 'Uberti' },
        { label: 'Agence', value: 'DGS Création' },
        { label: 'Type', value: 'E-commerce' },
        { label: 'Période', value: '2024' },
      ],
      presentation:
        'Uberti.shop est un site e-commerce développé pour la marque Uberti, spécialisée dans les produits bio, naturels et bien-être. Le projet a consisté à remplacer un ancien site daté par une boutique en ligne moderne, performante et plus simple à administrer. L’enjeu principal était de proposer une expérience d’achat fluide et rassurante, en mettant en valeur les produits et l’univers de la marque, tout en offrant aux équipes internes un back-office mieux structuré et plus agréable à utiliser au quotidien.',
      contexte_objectifs_enjeux_risques: {
        contexte:
          'Le précédent site souffrait d’un design vieillissant, d’une navigation peu intuitive et d’une administration complexe. Certaines opérations courantes (mise à jour du catalogue, gestion des promotions, optimisation SEO) demandaient beaucoup de temps et d’efforts. Dans un contexte de concurrence accrue sur le marché du bio et du bien-être, Uberti avait besoin d’un outil plus fiable, évolutif et aligné avec les bonnes pratiques e-commerce actuelles.',
        objectifs: [
          'Moderniser l’image en ligne de la marque avec une interface claire, cohérente et responsive.',
          'Améliorer l’expérience utilisateur sur desktop et mobile afin de limiter les frictions et de fluidifier le parcours d’achat.',
          'Simplifier la gestion du catalogue, des commandes et des opérations marketing pour donner plus d’autonomie aux équipes internes.',
          'Optimiser le SEO technique et éditorial afin de renforcer la visibilité de la marque sur ses mots-clés stratégiques.',
          'Poser un socle technique pérenne permettant d’ajouter ultérieurement de nouveaux modules et connecteurs (ERP, CRM, marketing).',
        ],
        enjeux: [
          'Valoriser les produits, les engagements et les valeurs de la marque (transparence, bien-être, qualité des ingrédients).',
          'Augmenter le taux de conversion en réduisant les abandons de panier et en rendant le tunnel de commande plus lisible.',
          'Assurer la continuité des ventes pendant la migration vers le nouveau site, sans rupture de service pour les clients.',
          'Maintenir une cohérence forte entre la communication de la marque, son identité visuelle et son expérience digitale.',
        ],
        risques: [
          'Perte de visibilité organique en cas de mauvaise gestion des redirections et de la structure des URLs lors de la refonte.',
          'Erreurs potentielles sur le catalogue (prix, stocks, variantes) pouvant impacter la confiance des clients ou la logistique.',
          'Complexité future dans l’intégration de connecteurs externes si certaines décisions techniques n’étaient pas anticipées.',
          'Charge de travail importante pour les équipes internes en phase de reprise des contenus et de tests.',
        ],
      },
      etapes: [
        'Organisation d’ateliers de cadrage avec le client pour comprendre les besoins métier, les irritants de l’ancien site et les priorités de la refonte.',
        'Analyse de l’existant (catalogue, contenus, SEO, données analytiques) pour identifier les points forts à conserver et les faiblesses à corriger.',
        'Intégration du catalogue complet : catégories, arborescence, fiches produits détaillées, variantes, visuels et informations légales.',
        'Création d’un thème PrestaShop 100 % personnalisé sur la base du thème classic, en respectant l’identité visuelle fournie par le graphiste.',
        'Développement ou adaptation de modules sur mesure afin de faciliter la maintenance, la gestion des contenus et certains cas spécifiques côté back-office.',
        'Intégration fidèle de l’ensemble des maquettes UI : page d’accueil, listings, fiches produits, tunnel de commande, pages de contenu et FAQ.',
        'Mise en place d’optimisations SEO techniques (balises, structure sémantique, microdonnées) et de réglages de performance (mise en cache, images, scripts).',
        'Travail sur le responsive design et ajout d’animations discrètes pour rendre la navigation plus agréable sans nuire à la performance.',
        'Réalisation d’une batterie de tests sur le parcours client complet (création de compte, commande, paiement, mails transactionnels) et sur les principaux navigateurs.',
        'Formation du client à l’utilisation du back-office : gestion du catalogue, des contenus, des promotions et des paramètres clés du site.',
      ],
      acteurs_interactions: [
        {
          acteur: 'Responsable développement commercial & marketing',
          role: 'Recueil des besoins et priorisation des fonctionnalités',
          interactions:
            'Participation aux ateliers de cadrage, validation des orientations fonctionnelles et arbitrages sur les priorités à mettre en ligne en premier.',
        },
        {
          acteur: 'Chef de produit web',
          role: 'Suivi de la faisabilité et coordination de la production',
          interactions:
            'Points réguliers pour suivre l’avancement, valider les choix techniques, ajuster le planning et gérer la coordination entre les différents intervenants.',
        },
        {
          acteur: 'Graphiste',
          role: 'Conception de l’interface et des maquettes UI',
          interactions:
            'Allers-retours pour s’assurer que l’intégration respecte fidèlement les maquettes, tout en gardant une attention forte sur la performance et la lisibilité.',
        },
        {
          acteur: 'Moi-même (développeur)',
          role: 'Intégration front, développement et configuration PrestaShop',
          interactions:
            'Échanges quotidiens avec les différents interlocuteurs pour clarifier les besoins, proposer des solutions techniques et garantir la qualité globale du site.',
        },
      ],
      resultats: {
        pour_moi: [
          'Expérience complète sur un projet e-commerce réel, de la phase de cadrage jusqu’à la mise en production.',
          'Montée en compétences significative sur l’écosystème PrestaShop (thèmes personnalisés, modules, configuration avancée).',
          'Développement de réflexes orientés “parcours utilisateur” et “conversion” au-delà du simple aspect technique.',
          'Renforcement des compétences de communication avec des profils variés (marketing, graphisme, direction).',
          'Approfondissement de ma capacité à expliquer des choix techniques et à accompagner un client sur la prise en main d’un outil complexe.',
        ],
        pour_entreprise: [
          'Mise en ligne d’un site plus rapide, plus moderne et entièrement responsive, offrant une meilleure expérience de navigation.',
          'Administration simplifiée grâce à une structure de catalogue claire et à des modules adaptés aux besoins du client.',
          'Parcours d’achat optimisé et plus rassurant, limitant les frictions depuis la découverte du produit jusqu’au paiement.',
          'SEO technique renforcé, offrant de meilleures bases pour travailler le référencement à moyen et long terme.',
          'Image de marque consolidée, avec un site en cohérence avec les valeurs de transparence, de qualité et de bien-être défendues par Uberti.',
        ],
      },
      lendemains: {
        immediat: [
          'Accompagnement post-mise en ligne pour corriger les derniers ajustements et répondre aux premières questions des équipes.',
          'Suivi des retours utilisateurs et observation des premiers indicateurs (conversion, comportement sur le site) afin de prioriser les améliorations rapides.',
        ],
        a_distance: [
          'Évolutions prévues sur certains connecteurs externes (ERP, outils marketing) pour automatiser davantage les flux de données.',
          'Enrichissement progressif du catalogue, des contenus éditoriaux et des mises en avant saisonnières en fonction des campagnes marketing.',
          'Construction d’une roadmap pour faire évoluer le back-office et les fonctionnalités e-commerce en fonction des retours métier.',
        ],
        aujourdhui: [
          'Site utilisé comme référence pour d’autres projets de refonte e-commerce au sein de l’agence.',
          'Socle technique stable et maintenable, permettant d’ajouter de nouvelles briques sans remettre en cause l’existant.',
          'Retour d’expérience exploitable pour améliorer encore les futures méthodologies de gestion de projet et de migration e-commerce.',
        ],
      },
      regard_critique:
        'Avec le recul, certains besoins évolutifs, notamment autour des connecteurs externes et de l’automatisation des flux, auraient pu être davantage formalisés dès la phase de cadrage. Une préparation plus détaillée des scénarios de migration SEO et des tests fonctionnels aurait aussi permis de réduire encore les ajustements post-mise en ligne. Malgré cela, le projet a été une véritable opportunité de progresser techniquement et humainement : il m’a appris à mieux anticiper les impacts d’une refonte complète, à structurer ma communication avec le client et à garder une vision globale mêlant technique, parcours utilisateur et enjeux business.',
      competences: [
        { id: 'prestashop', label: 'PrestaShop' },
        { id: 'html', label: 'HTML' },
        { id: 'css', label: 'CSS' },
        { id: 'javascript', label: 'JavaScript' },
        { id: 'relation-client', label: 'Relation client' },
        { id: 'gestion-projet', label: 'Gestion de projet' },
      ],
    },

    // ========= 2) GPAO – Interpane =========
    {
      id: 2,
      name: 'GPAO – Interpane',
      subtitle:
        'Modernisation d’un logiciel de gestion de production (refonte UI, PHP 8, ODBC, DataTables, Chart.js)',
      cover: 'assets/img/interpane.png',
      meta: [
        { label: 'Client', value: 'Interpane (Hoerdt)' },
        { label: 'Contexte', value: 'Apprentissage DUT MMI' },
        { label: 'Période', value: '2021 — 2022' },
      ],

      // ─────────────────────────────────────────────────────────────
      // 1. Présentation
      // ─────────────────────────────────────────────────────────────
      presentation:
        'Ce projet s’inscrit dans un contexte industriel exigeant : la modernisation complète de la GPAO interne utilisée quotidiennement par l’ensemble des services de production d’Interpane. L’outil historique, développé en PHP 3 au fil des années, avait fini par accumuler une dette technique importante, rendant son évolution difficile, sa maintenance complexe et son interface obsolète. La mission visait à refondre l’interface, réorganiser proprement l’architecture logicielle, migrer la base technique vers PHP 8 et améliorer la lisibilité des données grâce à des tableaux dynamiques et des visualisations graphiques. Cette modernisation s’intégrait directement dans le projet plus large de mise à jour de l’ERP et des bases de données. Le projet a permis de transformer un outil vieillissant en une application plus stable, plus claire et bien mieux adaptée aux usages industriels.',

      // ─────────────────────────────────────────────────────────────
      // 2. Contexte — Objectifs — Enjeux — Risques
      // ─────────────────────────────────────────────────────────────
      contexte_objectifs_enjeux_risques: {
        contexte:
          'Interpane prévoyait une mise à jour profonde de son ERP, impliquant un changement de base de données et de nombreux ajustements internes. Dans ce cadre, la GPAO existante — essentielle au pilotage de la production — devait être modernisée pour rester compatible, exploitable et maintenable. L’outil d’origine souffrait d’une interface datée, d’un code source fragmenté et du recours à des librairies obsolètes. Les données étaient récupérées via ODBC, ce qui nécessitait une bonne compréhension des mécanismes d’accès et des contraintes réseau. Le projet offrait ainsi une occasion unique de remettre à plat l’interface, d’améliorer l’ergonomie et de fiabiliser les échanges de données avec l’ERP.',

        objectifs: [
          'Migrer l’intégralité du projet de PHP 3 vers PHP 8 et repartir sur une base technique saine, robuste et plus sécurisée.',
          'Refondre l’interface graphique : restructuration de la navigation, en-têtes plus compacts, respect de la charte graphique et meilleure lisibilité globale.',
          'Intégrer des tableaux triables, filtrables et recherchables grâce à DataTables pour rendre la consultation des données plus efficace.',
          'Remplacer la librairie HTML Graph, obsolète, par Chart.js pour générer des graphiques plus modernes et interactifs.',
          'Réorganiser l’architecture du projet selon une approche plus professionnelle (templates, séparation des responsabilités, dossiers cohérents).',
          'Documenter l’ensemble du fonctionnement pour faciliter la reprise et l’évolution future de l’application.',
        ],

        enjeux: [
          'Assurer la continuité d’activité malgré les évolutions techniques, car la GPAO est un outil utilisé en permanence par la production.',
          'Garantir l’exactitude et la fiabilité des données exposées aux opérateurs et aux équipes de pilotage.',
          'Permettre une meilleure maintenabilité du code afin que le service informatique puisse poursuivre les évolutions après le projet.',
          'Réduire la charge mentale des utilisateurs en proposant une interface plus claire, plus logique et plus adaptée aux usages industriels.',
        ],

        risques: [
          'Incompatibilités possibles entre l’ERP, les couches ODBC et PHP 8 nécessitant une grande rigueur dans la migration.',
          'Dépendances historiques à des librairies obsolètes ou non maintenues pouvant ralentir la refonte.',
          'Risque de résistance au changement de la part des utilisateurs habitués à des interfaces anciennes mais connues.',
          'Potentiels écarts entre les données affichées et les données réelles en cas d’erreur dans les requêtes SQL ou les jointures.',
        ],
      },

      // ─────────────────────────────────────────────────────────────
      // 3. Étapes — Ce que j’ai fait
      // ─────────────────────────────────────────────────────────────
      etapes: [
        'Analyse et audit de l’application existante, compréhension des traitements métier et identification des dépendances critiques.',
        'Refonte de l’interface globale : nouveau header, navigation plus lisible, structuration plus claire des pages et mise à jour complète du CSS.',
        'Création d’un système de templates via Twig pour factoriser les éléments communs (header, footer, navigation, layouts).',
        'Refonte des vues en séparant proprement PHP, Twig, CSS et JS afin d’obtenir une architecture cohérente et maintenable.',
        'Intégration de DataTables pour dynamiser les tableaux : recherche instantanée, tri avancé, pagination et chargement progressif.',
        'Remplacement de la librairie HTML Graph par Chart.js pour visualiser plus efficacement les indicateurs clés (production, non-qualité…).',
        'Réorganisation complète de l’arborescence : dossiers dédiés pour les modèles, les assets, les templates, les scripts JS et les vendors.',
        'Mise en place de la connexion ODBC et création des premières vues alimentées par SQL, en collaboration avec le référent ERP.',
        'Préparation d’un environnement de développement stable (VS Code, EasyPHP, scripts SQL) et rédaction d’une documentation technique complète.',
        'Phase de tests avec les différents services pour ajuster les écrans, vérifier la cohérence des données et améliorer l’ergonomie.',
      ],

      // ─────────────────────────────────────────────────────────────
      // 4. Acteurs — Interactions
      // ─────────────────────────────────────────────────────────────
      acteurs_interactions: [
        {
          acteur: 'Jean-Marc Holl (Directeur du site)',
          role: 'Auteur historique et garant de la logique métier de la GPAO',
          interactions:
            'Échanges réguliers pour comprendre les mécanismes internes, lever les ambiguïtés sur le fonctionnement et valider les choix techniques.',
        },
        {
          acteur: 'Erwan Ranc (Maître d’apprentissage)',
          role: 'Référent technique et production',
          interactions:
            'Points fréquents pour valider la pertinence des approches, prioriser les fonctionnalités et assurer la cohérence avec les besoins du terrain.',
        },
        {
          acteur:
            'Services ADV / Qualité / Commercial / Production / Maintenance / Logistique',
          role: 'Utilisateurs finaux et parties prenantes',
          interactions:
            'Recueils de besoins, retours d’usage réels, identification des irritants du quotidien et tests des nouvelles interfaces.',
        },
        {
          acteur: 'Moi-même (développeur)',
          role: 'Analyse, refonte, développement, documentation',
          interactions:
            'Travail itératif en continu, intégration des retours utilisateurs, ajustements techniques et fonctionnels au fil du projet.',
        },
      ],

      // ─────────────────────────────────────────────────────────────
      // 5. Résultats — Pour moi / Pour l’entreprise
      // ─────────────────────────────────────────────────────────────
      resultats: {
        pour_moi: [
          'Montée en compétences significative sur PHP 8, Twig/Symfony, SQL, SASS et la structuration de projets complexes.',
          'Découverte et mise en œuvre d’ODBC dans un contexte industriel réel, avec toutes les contraintes métier associées.',
          'Expérience concrète de modernisation d’un outil métier historique avec des enjeux de continuité d’activité.',
          'Approfondissement des bonnes pratiques : séparation des responsabilités, organisation des assets, documentation professionnelle.',
          'Pratique concrète de DataTables et Chart.js appliquée à de gros volumes de données industrielles.',
        ],
        pour_entreprise: [
          'Interface entièrement modernisée, plus claire, responsive et cohérente avec la charte graphique.',
          'Lecture plus simple et plus rapide des données grâce aux tableaux dynamiques et aux recherches instantanées.',
          'Base technique assainie et compatible PHP 8, facilitant la maintenance future.',
          'Remplacement de librairies obsolètes par des solutions modernes et maintenables.',
          'Architecture structurée permettant au service informatique de poursuivre les évolutions.',
        ],
      },

      // ─────────────────────────────────────────────────────────────
      // 6. Lendemains — Court terme / À distance / Aujourd’hui
      // ─────────────────────────────────────────────────────────────
      lendemains: {
        immediat: [
          'Poursuite de la modernisation sur les écrans restants et accompagnement des utilisateurs à la prise en main.',
          'Finalisation de la génération de documents PDF (bons de livraison, rapports) et optimisation de certaines vues critiques.',
        ],
        a_distance: [
          'Extension de la refonte à l’ensemble des modules de la GPAO, avec homogénéisation progressive des interfaces.',
          'Améliorations de performance côté SQL (optimisation des requêtes) et côté front (chargements progressifs et caching).',
        ],
        aujourdhui: [
          'Socle technique modernisé et documenté, facilitant les reprises, les évolutions fonctionnelles et la maintenance long terme.',
        ],
      },

      // ─────────────────────────────────────────────────────────────
      // 7. Regard critique
      // ─────────────────────────────────────────────────────────────
      regard_critique:
        'Ce projet a été mené au tout début de mon parcours, en DUT MMI, et il occupe aujourd’hui une place particulière dans mon évolution. Avec le recul acquis en Master, plusieurs axes pourraient être renforcés : la création d’un design system plus structuré et réutilisable, une architecture back plus robuste en couches (services, repositories, validations), la mise en place de tests unitaires et d’intégration, ainsi qu’une démarche DevOps intégrée (CI/CD, linting, gestion des secrets). J’aurais également renforcé l’accessibilité (respect plus strict du RGAA), la cohérence responsive et la journalisation pour améliorer l’observabilité. Malgré cela, ce projet m’a énormément appris et a posé les bases de ma rigueur technique actuelle.',

      // ─────────────────────────────────────────────────────────────
      // Compétences rattachées
      // ─────────────────────────────────────────────────────────────
      competences: [
        { id: 'php', label: 'PHP' },
        { id: 'symfony', label: 'Symfony' },
        { id: 'html', label: 'HTML' },
        { id: 'sql', label: 'SQL' },
        { id: 'css', label: 'CSS' },
        { id: 'javascript', label: 'JavaScript' },
        { id: 'gestion-projet', label: 'Gestion de projets' },
        { id: 'autonomie', label: 'Autonomie' },
      ],
    },

    // ========= 3) LD Éclairage =========
    {
      id: 3,
      name: 'LD Éclairage',
      subtitle:
        'Site vitrine WordPress “catalogue + demande de devis” (ACF, WooCommerce en mode catalogue)',
      cover: 'assets/img/ld-eclairage.png',
      meta: [
        { label: 'Client', value: 'LD Éclairage (Lutterbach)' },
        { label: 'Contexte', value: 'Licence Pro DWEB — Apprentissage' },
        { label: 'Type', value: 'Site vitrine catalogue' },
        { label: 'Période', value: '2022 — 2023' },
      ],

      // ─────────────────────────────────────────────────────────────
      // 1. Présentation
      // ─────────────────────────────────────────────────────────────
      presentation:
        'LD Éclairage est un magasin spécialisé dans les solutions d’éclairage haut de gamme pour particuliers et professionnels, situé au cœur de la Cité de l’Habitat à Lutterbach. Le projet consistait en la refonte complète du site vitrine existant pour en faire un véritable catalogue digital : une interface élégante, moderne, mettant en valeur les produits et les ambiances lumineuses tout en encourageant la prise de contact et les demandes de devis. Sans vendre en ligne, l’objectif était de créer une expérience immersive et professionnelle tout en permettant au client d’administrer facilement l’ensemble des contenus grâce à un thème WordPress 100 % personnalisé et à l’utilisation d’ACF.',

      // ─────────────────────────────────────────────────────────────
      // 2. Contexte — Objectifs — Enjeux — Risques
      // ─────────────────────────────────────────────────────────────
      contexte_objectifs_enjeux_risques: {
        contexte:
          'L’ancien site était très peu visible en ligne, avec environ 30 visites par mois et un positionnement SEO quasi inexistant. Le contenu était limité, la navigation confuse et l’interface ne reflétait pas le niveau de qualité proposé en magasin. Le client souhaitait un site épuré, haut de gamme, capable d’attirer une clientèle en phase de construction ou de rénovation. Le besoin portait autant sur le design que sur l’indexation : structurer une base de contenus produits pour améliorer la visibilité tout en permettant une gestion autonome et simple du catalogue.',

        objectifs: [
          'Transformer le site vitrine en un véritable “catalogue + demande de devis” permettant de présenter les produits sans activer la vente en ligne.',
          'Structurer les contenus produits pour renforcer le référencement naturel (catégories, fiches, extraits optimisés).',
          'Créer un thème WordPress 100 % customisé avec ACF pour garantir une édition simple, propre et durable.',
          'Maintenir un haut niveau de performance malgré l’utilisation de WooCommerce en mode catalogue.',
          'Améliorer l’image de marque avec un design épuré, moderne et cohérent avec le positionnement haut de gamme du magasin.',
        ],

        enjeux: [
          'Trouver un équilibre entre un design premium et une performance technique élevée.',
          'Garantir une autonomie totale au client : édition des sections, ajout de produits, gestion des visuels et mises en avant.',
          'Structurer une navigation intuitive : catégories, filtres et produits tout en évitant les dérives de complexité lors de la maintenance.',
          'Créer un socle éditorial solide afin de nourrir le référencement local et national.',
        ],

        risques: [
          'Surcharge de plugins, notamment pour les facettes, les demandes de devis ou les sliders, pouvant impacter les performances.',
          'Dépendance aux overrides WooCommerce pouvant générer des complications lors de futures mises à jour.',
          'Complexification possible des blocs si le système n’est pas pensé de manière factorisée et évolutive.',
          'Risque de perte de cohérence graphique sans une bonne discipline dans l’utilisation des patterns et des blocs.',
        ],
      },

      // ─────────────────────────────────────────────────────────────
      // 3. Étapes — Ce que j’ai fait
      // ─────────────────────────────────────────────────────────────
      etapes: [
        'Audit complet du site existant : analyse du trafic, étude des contenus, exploration des limites techniques et définition d’une stratégie SEO + design.',
        'Conception d’un design haut de gamme : maquettes, choix typographiques, contrastes, mise en avant des visuels et des univers lumineux.',
        'Création d’un Custom Post Type “Section Accueil” en code (sans plugin) avec ACF pour contrôler l’ordre et le contenu de l’écran principal.',
        'Construction d’une page d’accueil dynamique : bloc “catégories produits” + bloc “derniers articles” avec fallback automatique en cas d’absence de contenu.',
        'Intégration de sliders synchronisés avec slick.js (asNavFor), gestion via functions.js pour garder une structure lisible et maintenable.',
        'Mise en place des emplacements de menus WordPress (principal, secondaire, réseaux sociaux) et intégration via wp_nav_menu().',
        'Création de blocs réutilisables via register_block_pattern() pour permettre au client de composer facilement des pages homogènes.',
        'Activation de WooCommerce en mode catalogue : désactivation de l’achat, remplacement des boutons, refonte des templates produits.',
        'Séparation propre des styles WooCommerce via un sélecteur .woocommerce pour maîtriser totalement la cohérence visuelle.',
        'Intégration de plugins choisis pour la navigation à facettes et les demandes de devis, puis stylage complet pour maintenir l’identité graphique.',
        'Optimisations techniques : SASS compilé, optimisation des assets, réduction des scripts inutiles, travail sur le responsive et la vitesse.',
        'Tests multi-navigateurs, tests mobiles et ajustements ergonomiques suite aux retours du client et des intervenants internes.',
      ],

      // ─────────────────────────────────────────────────────────────
      // 4. Acteurs — Interactions
      // ─────────────────────────────────────────────────────────────
      acteurs_interactions: [
        {
          acteur: 'LD Éclairage',
          role: 'Client, validation des contenus et des maquettes',
          interactions:
            'Allers-retours réguliers sur les visuels, textes, catégories et priorités.',
        },
        {
          acteur: 'Responsable développement commercial & marketing',
          role: 'Stratégie SEO et cadrage fonctionnel',
          interactions: 'Ateliers collaboratifs et suivi des performances.',
        },
        {
          acteur: 'Graphiste',
          role: 'Direction artistique et maquettes UI',
          interactions: 'Design reviews et validations esthétiques.',
        },
        {
          acteur: 'Chef de produit web',
          role: 'Pilotage global et priorisation des livrables',
          interactions:
            'Points hebdomadaires pour arbitrer les choix techniques et fonctionnels.',
        },
        {
          acteur: 'Moi-même',
          role: 'Développement du thème custom, ACF, WooCommerce catalogue, performances',
          interactions:
            'Conception, développement, intégrations, corrections et documentation.',
        },
      ],

      // ─────────────────────────────────────────────────────────────
      // 5. Résultats — Pour moi / Pour l’entreprise
      // ─────────────────────────────────────────────────────────────
      resultats: {
        pour_moi: [
          'Renforcement de mes compétences WordPress sur des développements 100 % sur mesure (thème, CPT, ACF, patterns).',
          'Maîtrise de WooCommerce en mode “catalogue” avec overrides propres et performants.',
          'Pratique avancée de la création de patterns réutilisables et de blocs adaptés à un contexte client.',
          'Utilisation concrète de slick.js avec synchronisation multiple pour des sliders premium.',
          'Expérience significative dans l’équilibre entre design artistique, performance et SEO.',
        ],
        pour_entreprise: [
          'Site vitrine haut de gamme reflétant fidèlement la qualité des produits en magasin.',
          'Back-office simple, autonome et structuré grâce à ACF et aux patterns personnalisés.',
          'Catalogue en ligne clair, visuel et intuitif, facilitant les demandes de devis.',
          'Base SEO plus solide grâce à une structure éditoriale propre, réutilisable et bien catégorisée.',
          'Amélioration notable de la visibilité locale grâce à un contenu mieux structuré.',
        ],
      },

      // ─────────────────────────────────────────────────────────────
      // 6. Lendemains — Court terme / À distance / Aujourd’hui
      // ─────────────────────────────────────────────────────────────
      lendemains: {
        immediat: [
          'Complétion progressive du catalogue avec de nouveaux produits et ambiances.',
          'Ajustement des filtres et facettes pour améliorer la navigation.',
          'Suivi des demandes de devis et optimisation du parcours utilisateur.',
        ],
        a_distance: [
          'Renforcement du SEO grâce à des contenus supplémentaires (articles, réalisations).',
          'Optimisation des assets (WebP, compression, lazyload) pour améliorer encore la performance.',
          'Possibilité de remplacer certains plugins (facettes, devis) par des solutions sur mesure pour réduire les dépendances.',
        ],
        aujourdhui: [
          'Bibliothèque de blocs maintenue et documentée.',
          'Back-office stable permettant au client d’être totalement autonome sur ses mises à jour.',
          'Site régulièrement mis à jour et toujours aligné avec l’image haut de gamme du magasin.',
        ],
      },

      // ─────────────────────────────────────────────────────────────
      // 7. Regard critique
      // ─────────────────────────────────────────────────────────────
      regard_critique:
        'Ce projet, mené durant ma Licence Pro DWEB, a constitué une expérience très formatrice. Avec mon niveau actuel en Master, je mettrais en place un design system complet basé sur un block-theme moderne, avec une gestion plus fine des performances (budgets LCP/INP) et une factorisation avancée des hooks WooCommerce. J’intégrerais également des tests E2E/visuels pour sécuriser les évolutions ainsi qu’une pipeline CI/CD pour fiabiliser les mises à jour. Malgré cela, le projet reste un excellent exemple de site catalogue haut de gamme et parfaitement adapté aux besoins du client.',

      // ─────────────────────────────────────────────────────────────
      // Compétences
      // ─────────────────────────────────────────────────────────────
      competences: [
        { id: 'wordpress', label: 'WordPress' },
        { id: 'php', label: 'PHP' },
        { id: 'mysql', label: 'MySQL' },
        { id: 'css', label: 'CSS' },
        { id: 'javascript', label: 'JavaScript' },
        { id: 'relation-client', label: 'Relation client' },
        { id: 'communication', label: 'Communication' },
      ],
    },
    {
      id: 4,
      name: 'Tschoeppe Live',
      subtitle: 'Évolution & refonte d’un logiciel métier (Java)',
      cover: 'assets/img/Tlive.png',
      meta: [
        { label: 'Client', value: 'Tschoeppe' },
        { label: 'Type', value: 'Logiciel métier' },
        { label: 'Période', value: '2024 — 2025' },
      ],

      // ─────────────────────────────────────────────────────────────
      // 1. Présentation
      // ─────────────────────────────────────────────────────────────
      presentation:
        'Tschoeppe Live est un logiciel Java central dans l’écosystème informatique du groupe Tschoeppe. Il est utilisé quotidiennement par les commerciaux, le service client et les revendeurs partenaires pour configurer des portails sur-mesure, générer des devis, visualiser les modèles en 2D/3D et intégrer les rendus dans des photos clients. Véritable outil métier, il concentre un volume important de fonctionnalités stratégiques et joue un rôle clé dans le processus de vente. Le projet a consisté à reprendre la maintenance et les évolutions du logiciel dans un contexte de transition organisationnelle, tout en préparant une refonte technique et graphique profonde afin de rendre l’outil plus moderne, stable et aligné sur les besoins actuels et futurs du groupe.',

      // ─────────────────────────────────────────────────────────────
      // 2. Contexte — Objectifs — Enjeux — Risques
      // ─────────────────────────────────────────────────────────────
      contexte_objectifs_enjeux_risques: {
        contexte:
          'Suite à une réorganisation du service informatique et à l’arrêt du prestataire historique en charge du logiciel, Tschoeppe Live s’est retrouvé sans mainteneur attitré. Le logiciel, accumulant de nombreuses années de dette technique et reposant sur une architecture complexe mêlant Java, SQL et librairies 2D/3D, nécessitait une reprise rapide et structurée. L’urgence était d’assurer la continuité de service pour éviter tout impact sur les ventes et le support client, tout en stabilisant l’hébergement et en restaurant les versions antérieures pour sécuriser le patrimoine logiciel de l’entreprise.',

        objectifs: [
          'Assurer la continuité de service et prendre en charge la maintenance quotidienne du logiciel.',
          'Intégrer de nouveaux modèles de portails et améliorer la logique de configuration existante.',
          'Améliorer l’ergonomie globale et moderniser progressivement les interfaces pour les rendre plus adaptées aux usages terrain.',
          'Stabiliser le code historique et documenter les fonctionnalités métier pour faciliter les reprises futures.',
          'Préparer une refonte technique complète en mettant à niveau Java (8 → 22) et en structurant l’application pour les évolutions.',
        ],

        enjeux: [
          'Garantir la disponibilité d’un outil critique utilisé par les équipes commerciales, le SAV et les revendeurs indépendants.',
          'Maintenir une cohérence fonctionnelle malgré un héritage codé sur plusieurs années par différents intervenants.',
          'Gérer l’hétérogénéité du public utilisateur : profils techniques, commerciaux, partenaires externes.',
          'Assurer la stabilité des calculs, des rendus 2D/3D et de la génération de devis, essentiels pour l’activité commerciale.',
        ],

        risques: [
          'Dette technique importante liée à l’historique du logiciel et aux bibliothèques 2D/3D anciennes.',
          'Absence ou rareté de documentation fonctionnelle et technique.',
          'Potentielles régressions lors des évolutions à cause de l’imbrication de nombreuses règles métier.',
          'Manque de visibilité sur certains modules hérités, rendant les refontes délicates sans audit approfondi.',
        ],
      },

      // ─────────────────────────────────────────────────────────────
      // 3. Étapes — Ce que j’ai fait
      // ─────────────────────────────────────────────────────────────
      etapes: [
        'Réalisation d’une cartographie fonctionnelle complète du logiciel : modules existants, interactions, dépendances, règles métier et flux de données.',
        'Mise en place d’un rythme de releases régulières (~2 par semaine) pour corriger les anomalies, répondre aux retours terrain et intégrer les évolutions prioritaires.',
        'Ajout progressif de nouvelles fonctionnalités métier (nouveaux modèles, nouveaux filtres, améliorations des règles de configuration).',
        'Refonte progressive de l’interface utilisateur : optimisation des écrans, uniformisation graphique, clarifications d’éléments ambigus utilisés par les commerciaux.',
        'Restauration de la version historique du logiciel pour consolider la base technique et archiver l’existant.',
        'Stabilisation de l’hébergement, mise en place d’une politique de sauvegardes plus fiable et création d’un environnement de test dédié.',
        'Création d’un canal de support interne permettant aux équipes commerciales et SAV de remonter des demandes ou anomalies clairement priorisées.',
        'Rédaction d’une documentation technique vivante couvrant architecture, conventions, dossiers, modules, dépendances et process de release.',
        'Préparation des bases pour une refonte future : analyse des modules critiques, repérage des bottlenecks, montée en Java 22, clarification des flux critiques.',
      ],

      // ─────────────────────────────────────────────────────────────
      // 4. Acteurs — Interactions
      // ─────────────────────────────────────────────────────────────
      acteurs_interactions: [
        {
          acteur: 'Commerciaux / SAV / Revendeurs',
          role: 'Utilisateurs finaux du logiciel',
          interactions:
            'Retour d’expérience terrain, priorisation des anomalies, validation des évolutions, test des nouvelles fonctionnalités en conditions réelles.',
        },
        {
          acteur: 'Moi-même',
          role: 'Développement, maintenance, refonte, coordination et accompagnement',
          interactions:
            'Analyse, conception, implémentation, support quotidien, rédaction de documentation et préparation des bases de la refonte globale.',
        },
      ],

      // ─────────────────────────────────────────────────────────────
      // 5. Résultats — Pour moi / Pour l’entreprise
      // ─────────────────────────────────────────────────────────────
      resultats: {
        pour_moi: [
          'Renforcement de mon autonomie et de ma capacité à reprendre un projet complexe sans documentation.',
          'Montée en compétences avancée sur Java, montée en version (8 → 22), gestion des dépendances et optimisation SQL.',
          'Pratique approfondie de la communication avec des utilisateurs non techniques, notamment les commerciaux.',
          'Expérience significative dans la gestion d’un logiciel métier en contexte industriel avec enjeux critiques.',
        ],
        pour_entreprise: [
          'Continuité de service assurée malgré la transition et l’absence du prestataire historique.',
          'Traitement des retours utilisateurs en moins d’une semaine grâce au nouveau rythme de releases.',
          'Modernisation progressive de l’interface et de l’arborescence, rendant l’outil plus compréhensible et agréable au quotidien.',
          'Sécurisation du patrimoine logiciel : restauration des versions antérieures, documentation, et stabilisation de l’hébergement.',
          'Préparation structurée de la refonte complète, réduisant drastiquement les risques futurs.',
        ],
      },

      // ─────────────────────────────────────────────────────────────
      // 6. Lendemains — Court terme / À distance / Aujourd’hui
      // ─────────────────────────────────────────────────────────────
      lendemains: {
        immediat: [
          'Poursuite des releases incrémentales pour stabiliser définitivement les modules critiques.',
          'Amélioration des sauvegardes, renforcement de l’hébergement et consolidation du monitoring.',
        ],
        a_distance: [
          'Mise en place d’un design system, amélioration de l’accessibilité et optimisation des performances.',
          'Introduction progressive de tests automatisés, pipeline CI/CD et contrôles qualité systématiques.',
        ],
        aujourdhui: [
          'Projet en cours : une refonte complète est désormais préparée sur des bases propres, documentées et stables.',
        ],
      },

      // ─────────────────────────────────────────────────────────────
      // 7. Regard critique
      // ─────────────────────────────────────────────────────────────
      regard_critique:
        'Le contexte du projet a nécessité des compromis rapides pour sécuriser la production et maintenir l’activité. Avec davantage de temps, j’aurais structuré plus tôt une architecture en couches, introduit des tests automatisés, mis en place une CI/CD et consolidé la télémétrie pour suivre les usages réels. Une formalisation plus précise des workflows métier aurait aussi permis d’anticiper certaines zones de complexité. Malgré ces limites, ce projet a été particulièrement formateur : il m’a appris à m’adapter, à structurer progressivement un héritage technique complexe et à mener une modernisation sans interrompre un outil commercial critique.',

      // ─────────────────────────────────────────────────────────────
      // Compétences
      // ─────────────────────────────────────────────────────────────
      competences: [
        { id: 'java', label: 'Java (8→22)' },
        { id: 'sql', label: 'SQL' },
        { id: 'gestion-projet', label: 'Gestion de projet' },
        { id: 'autonomie', label: 'Autonomie' },
        { id: 'communication', label: 'Communication' },
        { id: 'relation-client', label: 'Relation client' },
      ],
    },
    {
      id: 5,
      name: 'Atelier des Créatrices Solidaires',
      subtitle: 'Site associatif : vitrine + (future) boutique solidaire',
      cover: 'assets/img/atelier.png',
      meta: [
        {
          label: 'Client',
          value: 'Association Atelier des Créatrices Solidaires',
        },
        { label: 'Type', value: 'Site vitrine associatif' },
        { label: 'Période', value: '2023 — 2024' },
      ],

      // ─────────────────────────────────────────────────────────────
      // 1. Présentation
      // ─────────────────────────────────────────────────────────────
      presentation:
        'L’Atelier des Créatrices Solidaires est une association regroupant des bénévoles engagées dans des actions créatives au service de projets solidaires : ateliers textiles, confection d’objets, ventes caritatives, soutien à d’autres structures locales… Le site développé a pour objectif de servir de vitrine claire et accueillante pour présenter la mission, les valeurs et les créations du collectif. Il facilite la mise en relation (bénévolat, dons, partenariats) et prépare techniquement la mise en place d’une boutique solidaire destinée à financer les initiatives de l’association. Le projet consiste donc à créer une plateforme simple, accessible, évolutive et administrable facilement par des bénévoles non techniciens.',

      // ─────────────────────────────────────────────────────────────
      // 2. Contexte — Objectifs — Enjeux — Risques
      // ─────────────────────────────────────────────────────────────
      contexte_objectifs_enjeux_risques: {
        contexte:
          'L’association connaissait une forte activité terrain (ateliers, projets, événements) mais sa visibilité en ligne restait limitée. Le site précédent ne reflétait ni l’énergie du collectif ni la diversité de ses actions. Les bénévoles avaient besoin d’un espace simple permettant de présenter les créations, publier des actualités et centraliser les demandes de contact, d’adhésion ou de partenariat. Par ailleurs, l’association envisageait de mettre en place à moyen terme une boutique solidaire ; le projet devait donc anticiper cette évolution sans complexifier l’expérience actuelle.',

        objectifs: [
          'Créer une vitrine claire et moderne présentant la mission, les actions, les créations et les actualités de l’association.',
          'Simplifier les contacts (adhésion, dons, partenariats) via des formulaires structurés et adaptés.',
          'Mettre en place un socle technique évolutif intégrant déjà les fondations d’une future boutique solidaire.',
          'Permettre aux bénévoles d’administrer le site en autonomie grâce à une interface simple et à des blocs réutilisables.',
          'Renforcer la crédibilité de l’association en offrant un espace professionnel et transparent.',
        ],

        enjeux: [
          'Garantir une lisibilité optimale pour un public très large : bénévoles, partenaires, familles, institutions.',
          'Rendre l’administration accessible aux bénévoles sans connaissance technique.',
          'Créer une architecture éditoriale respectant les bonnes pratiques de lisibilité et de référencement.',
          'Poser des bases solides pour une future extension e-commerce sans réécrire tout le chantier.',
        ],

        risques: [
          'Sous-estimation de la charge éditoriale : photos, actualités, mise à jour des projets.',
          'Dépendance potentielle à certains plugins en cas d’évolution trop rapide vers une boutique.',
          'Temps limité des bénévoles pour maintenir régulièrement les contenus.',
          'Risque de surcomplexifier le socle si trop d’évolutions sont anticipées d’un coup.',
        ],
      },

      // ─────────────────────────────────────────────────────────────
      // 3. Étapes — Ce que j’ai fait
      // ─────────────────────────────────────────────────────────────
      etapes: [
        'Ateliers de cadrage éditorial avec le bureau : définition des pages clés (mission, actions, créations, actualités, contact).',
        'Conception d’une structure modulaire basée sur des blocs réutilisables afin que les bénévoles puissent enrichir le site simplement.',
        'Intégration front responsive : design épuré, accessible, mettant en valeur les photos et les réalisations du collectif.',
        'Mise en place de formulaires dédiés (contact, adhésion, partenariats) avec routage interne et renvoi automatique vers les boîtes appropriées.',
        'Pré-câblage technique pour une future boutique solidaire : structure de produits, templates de base, organisation des visuels et catégories.',
        'Optimisation des performances : gestion des assets, poids des images, chargement différé et simplification du CSS.',
        'Rédaction d’une mini-documentation claire destinée aux bénévoles : comment ajouter un article, une création, une photo, mettre à jour une page.',
      ],

      // ─────────────────────────────────────────────────────────────
      // 4. Acteurs — Interactions
      // ─────────────────────────────────────────────────────────────
      acteurs_interactions: [
        {
          acteur: 'Bureau de l’association',
          role: 'Pilotage éditorial et décisions clés',
          interactions:
            'Ateliers de cadrage, retours sur les maquettes, validation des contenus et des priorités de mise en avant.',
        },
        {
          acteur: 'Bénévoles et créatrices',
          role: 'Fourniture des contenus : photos, descriptions, actualités',
          interactions:
            'Échanges réguliers et asynchrones pour recueillir les créations, valider leur présentation et expliquer les processus d’édition.',
        },
        {
          acteur: 'Moi-même',
          role: 'Conception, développement, intégration, support aux bénévoles',
          interactions:
            'Accompagnement continu, conseils d’organisation éditoriale, mises à jour techniques et support après mise en ligne.',
        },
      ],

      // ─────────────────────────────────────────────────────────────
      // 5. Résultats — Pour moi / Pour l’association
      // ─────────────────────────────────────────────────────────────
      resultats: {
        pour_moi: [
          'Expérience enrichissante de travail avec une structure associative aux besoins très concrets et humains.',
          'Conception d’un socle éditorial durable, modulable et facile à prendre en main pour des non-techniciens.',
          'Approfondissement de WordPress sur des développements sur mesure adaptés à un fonctionnement bénévole.',
          'Préparation technique maîtrisée pour une évolution future vers une boutique solidaire.',
        ],
        pour_entreprise: [
          'Visibilité numérique renforcée grâce à une vitrine claire, moderne et valorisant les actions du collectif.',
          'Process de contact et d’adhésion simplifié, réduisant les échanges mails dispersés.',
          'Structuration des contenus permettant d’alimenter facilement les actualités et la galerie.',
          'Base fiable, évolutive et déjà prête pour activer une boutique solidaire sans refondre l’ensemble.',
        ],
      },

      // ─────────────────────────────────────────────────────────────
      // 6. Lendemains — Court terme / À distance / Aujourd’hui
      // ─────────────────────────────────────────────────────────────
      lendemains: {
        immediat: [
          'Remplissage continu du site (actualité, galerie de créations, événements).',
          'Ajustements des formulaires pour améliorer les conversions et la compréhension.',
        ],
        a_distance: [
          'Activation de la boutique solidaire : vente d’objets, dons en ligne, financement des projets.',
          'Renforcement du SEO local via des articles de coulisses et des mises en avant régulières.',
          'Optimisation progressive du socle technique en fonction de la charge de trafic.',
        ],
        aujourdhui: [
          'Plateforme stable, simple à administrer, utilisée régulièrement par les bénévoles.',
          'Architecture prête pour évoluer sans provoquer d’effet tunnel ou de surcharge éditoriale.',
        ],
      },

      // ─────────────────────────────────────────────────────────────
      // 7. Regard critique
      // ─────────────────────────────────────────────────────────────
      regard_critique:
        'Pour une version 2, je mettrais en place un design system accessible conforme au RGAA, afin d’améliorer la lisibilité pour tous les publics. J’ajouterais également des tests visuels et E2E pour sécuriser les mises à jour, particulièrement importantes dans un contexte où plusieurs bénévoles éditent le contenu. L’intégration d’une petite pipeline CI/CD renforcerait la fiabilité, notamment avant l’activation de la future boutique solidaire. Malgré ces axes d’amélioration, ce projet reste une expérience humaine et technique très enrichissante et un excellent exemple d’outil évolutif adapté à une organisation bénévole.',

      // ─────────────────────────────────────────────────────────────
      // Compétences
      // ─────────────────────────────────────────────────────────────
      competences: [
        { id: 'wordpress', label: 'WordPress' },
        { id: 'html', label: 'HTML' },
        { id: 'css', label: 'CSS' },
        { id: 'php', label: 'PHP' },
        { id: 'sql', label: 'SQL' },
        { id: 'javascipt', label: 'Javascript' },
        { id: 'gestion-projet', label: 'Gestion de projet' },
        { id: 'communication', label: 'Communication' },
      ],
    },
  ];

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id') ?? 0);
    this.project = this.projects.find((p: ProjectDetail) => p.id === id);
  }
}
