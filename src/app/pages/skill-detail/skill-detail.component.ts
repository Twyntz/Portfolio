import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Anecdote {
  texte: string;
  resultat: string;
  valeurAjoutee: string;
  realisationLink?: { label: string; route: string };
}

interface SkillDetail {
  id: string;
  name: string;
  icon: string;
  category: 'technique' | 'humaine';
  level: number;
  tagline: string;
  definition: string;
  anecdotes: Anecdote[];
  autocritique: {
    niveau: { score: number; label: string; detail: string };
    importance: string;
    vitesse: string;
    recul: string;
  };
  evolution: {
    objectif: string;
    formations: string;
  };
  realisations: { label: string; route: string }[];
}

@Component({
  selector: 'app-skill-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './skill-detail.component.html',
  styleUrls: ['./skill-detail.component.scss'],
})
export class SkillDetailComponent implements OnInit {
  skill: SkillDetail | undefined;

  // Sous-menu de navigation entre toutes les compétences (exigé par la grille)
  allSkillsNav = [
    { id: 'java', name: 'Java', category: 'technique' },
    { id: 'docker', name: 'Docker', category: 'technique' },
    { id: 'prestashop', name: 'PrestaShop', category: 'technique' },
    { id: 'angular', name: 'Angular', category: 'technique' },
    { id: 'php', name: 'PHP', category: 'technique' },
    { id: 'wordpress', name: 'WordPress', category: 'technique' },
    { id: 'communication', name: 'Communication', category: 'humaine' },
    { id: 'gestion-projet', name: 'Gestion de projet', category: 'humaine' },
    { id: 'relation-client', name: 'Relation client', category: 'humaine' },
    { id: 'autonomie', name: 'Autonomie', category: 'humaine' },
  ];

  private allSkills: SkillDetail[] = [
    // ──────────────────────────────────────────────────────────────────────
    // JAVA
    // ──────────────────────────────────────────────────────────────────────
    {
      id: 'java',
      name: 'Java',
      icon: 'assets/img/java.svg',
      category: 'technique',
      level: 9,
      tagline: 'Mon langage de prédilection en entreprise',
      definition: `Java est un langage de programmation orienté objet créé en 1995 par Sun Microsystems, aujourd'hui propriété d'Oracle. Il repose sur un principe fondateur : "Write Once, Run Anywhere" (WORA), rendu possible par la compilation en bytecode exécuté sur la JVM (Java Virtual Machine). Cette portabilité, combinée à une typage statique fort et à une gestion automatique de la mémoire par garbage collector, en fait un choix de référence pour les applications d'entreprise qui doivent être robustes, maintenables sur le long terme et déployées sur des infrastructures hétérogènes.

      Dans l'écosystème professionnel actuel, Java demeure l'un des langages les plus utilisés au monde, notamment dans les systèmes d'information d'entreprise, les back-ends de grandes applications web et les logiciels métiers complexes. Les évolutions récentes du langage — Java 17 LTS et Java 21 LTS — ont introduit des fonctionnalités majeures : les records pour la modélisation de données immuables, les sealed classes pour des hiérarchies de types plus expressives, les pattern matching dans les switch expressions, et surtout Project Loom avec les virtual threads qui révolutionne la gestion de la concurrence. Ces apports modernes repositionnent Java comme un concurrent sérieux des langages plus récents comme Kotlin ou Go, tout en conservant sa compatibilité ascendante et son écosystème mature.

      Sur le plan industriel, Java s'appuie sur un écosystème de frameworks de premier plan : Spring Boot pour le développement d'API REST et de microservices, Hibernate pour la persistance des données via JPA, Maven et Gradle pour la gestion des dépendances et l'automatisation des builds. Ces outils constituent le standard de facto dans la plupart des environnements d'entreprise, ce qui explique pourquoi la maîtrise de Java reste un critère de recrutement incontournable pour les développeurs logiciels en 2025.`,

      anecdotes: [
        {
          texte: `Chez Groupe Synergie Développement, j'ai pris en charge la maintenance et l'évolution de Tschoeppe Live, un logiciel de dessin 2D développé en Java. Ce projet représentait un défi technique particulier : aucune documentation n'existait, le développeur initial n'était plus disponible, et le logiciel était utilisé quotidiennement en production par des opérateurs dont le travail dépendait directement de sa stabilité. Mes premières semaines ont consisté à analyser méthodiquement la base de code existante — comprendre l'architecture choisie, identifier les patterns utilisés, cartographier les dépendances entre les différents modules — avant même de toucher la moindre ligne de code. Cette phase d'investigation, souvent négligée dans les formations, s'est révélée absolument déterminante pour éviter de provoquer des régressions en production.

          Une fois l'architecture comprise, j'ai pu identifier les bugs remontés par les utilisateurs, comprendre leur origine dans le code et proposer des corrections qui respectaient la logique existante tout en résolvant définitivement les problèmes signalés. J'ai également commencé à introduire progressivement des améliorations architecturales : meilleure séparation des responsabilités, réduction des couplages forts, ajout de commentaires et de documentation inline pour faciliter les interventions futures.`,
          resultat: `Correction de plusieurs bugs critiques bloquants qui impactaient directement la productivité des utilisateurs en production. La stabilité perçue de l'application s'est nettement améliorée, avec une réduction significative des remontées d'incidents. Les utilisateurs ont pu travailler sans interruption de service tout au long de la période de maintenance.`,
          valeurAjoutee: `Ma capacité à prendre en charge un logiciel legacy Java sans aucune documentation ni référent technique a permis à l'entreprise de maintenir un outil métier essentiel sans avoir à faire appel à un prestataire externe coûteux. J'ai également posé les bases d'une documentation technique qui n'existait pas, facilitant les interventions futures et réduisant considérablement le risque lié à la dépendance à un développeur unique.`,
          realisationLink: { label: 'Tschoeppe Live', route: '/projets/4' },
        },
      ],

      autocritique: {
        niveau: {
          score: 9,
          label: 'Expert',
          detail: `Mon niveau en Java est celui d'un développeur senior capable d'intervenir en autonomie totale sur des projets métiers complexes. Je maîtrise en profondeur la programmation orientée objet — héritage, polymorphisme, encapsulation, interfaces — ainsi que les concepts avancés comme les génériques, les lambdas et les streams introduits avec Java 8. Je suis à l'aise avec la gestion des exceptions, la manipulation des entrées/sorties, les collections, et les interactions avec les bases de données via JDBC. Je connais les principaux design patterns (Singleton, Factory, Observer, Strategy, Builder) et sais les appliquer à bon escient dans un contexte professionnel. Je reste en progression active sur les fonctionnalités Java 17 et 21, notamment les virtual threads que je n'ai pas encore eu l'occasion de mettre en œuvre en production.`,
        },
        importance: `Java est sans conteste la compétence technique la plus stratégique de mon profil professionnel actuel. C'est le langage principal de mon CDI chez Groupe Synergie Développement, et celui dans lequel je résous quotidiennement des problèmes métiers concrets sur Tschoeppe Live. Contrairement à des compétences comme WordPress ou PrestaShop qui relèvent davantage de la configuration et de la personnalisation, Java exige une compréhension profonde des mécanismes du langage et une capacité à concevoir des architectures logicielles solides. Dans mon projet professionnel à moyen terme — évoluer vers des responsabilités d'architecte logiciel ou de tech lead — Java est le fondement sur lequel tout le reste repose. C'est également le langage qui m'a le mieux formé à la rigueur et à la pensée algorithmique, des qualités transférables dans n'importe quel autre contexte technologique.`,
        vitesse: `Ma montée en compétence Java a été remarquable par son contexte : je n'ai bénéficié d'aucune formation formelle dédiée à Java dans mon parcours académique, qui était majoritairement orienté web (PHP, JavaScript). Tout ce que je maîtrise aujourd'hui a été acquis en situation réelle, sous la pression de la production, sur un logiciel métier existant dont la stabilité était non négociable. Ce contexte d'apprentissage par l'urgence, bien que stressant, est selon moi le plus formateur qui soit : on ne peut pas se permettre de comprendre approximativement quand un bug affecte les utilisateurs finaux. En moins d'un an, je suis passé d'un niveau débutant en Java à un niveau expert opérationnel reconnu par ma direction, ce qui démontre une capacité d'apprentissage autonome que je considère comme l'une de mes forces distinctives.`,
        recul: `Avec le recul de mon expérience sur Tschoeppe Live, je conseillerais à tout développeur qui reprend un projet legacy Java de ne jamais commencer par réécrire du code qu'il ne comprend pas encore. La tentation de "refactorer proprement" est forte, mais elle est dangereuse sans une compréhension profonde des intentions du développeur initial et des cas d'usage couverts. J'ai appris à lire le code comme on lit un document : chercher à comprendre le "pourquoi" avant le "comment". Je me conseillerais également de mettre en place des tests unitaires dès le début de toute intervention sur du code existant — même quelques tests couvrant les fonctionnalités critiques constituent un filet de sécurité précieux qui aurait évité plusieurs des régressions que j'ai introduites malgré moi dans mes premières semaines. Enfin, documenter au fur et à mesure n'est pas une tâche secondaire : c'est un investissement qui se rentabilise dès la deuxième intervention sur le même code.`,
      },

      evolution: {
        objectif: `Mon objectif à moyen terme est de consolider ma maîtrise de Java en approfondissant les fonctionnalités modernes du langage — Java 21 LTS avec ses virtual threads, ses pattern matching avancés et ses records — et d'explorer Spring Boot pour le développement d'API REST et de microservices. Je souhaite à terme être capable de concevoir et de conduire l'architecture technique d'un projet Java de bout en bout, depuis le choix des patterns architecturaux jusqu'au déploiement en production. L'objectif ultime est de me positionner comme référent technique Java dans mon entreprise, capable de prendre des décisions d'architecture autonomes et de les justifier auprès de parties prenantes non-techniques. Dans une perspective plus large, je souhaite également me former aux tests automatisés — JUnit 5, Mockito — afin de mettre en place une culture qualité autour des projets Java sur lesquels j'interviens.`,
        formations: `Autoformation en cours via la documentation officielle Java 21 LTS et des ressources comme Baeldung et Java Brains. J'explore actuellement les virtual threads de Project Loom et leur impact sur la conception des applications concurrentes. Spring Boot est dans mes priorités d'apprentissage à court terme, avec l'objectif de construire une API REST complète dans un projet personnel. Je consulte régulièrement les JEPs (Java Enhancement Proposals) pour suivre les évolutions futures du langage.`,
      },

      realisations: [{ label: 'Tschoeppe Live', route: '/projets/4' }],
    },

    // ──────────────────────────────────────────────────────────────────────
    // DOCKER
    // ──────────────────────────────────────────────────────────────────────
    {
      id: 'docker',
      name: 'Docker',
      icon: 'assets/img/docker.svg',
      category: 'technique',
      level: 7,
      tagline: 'La conteneurisation au service de la reproductibilité',
      definition: `Docker est une plateforme de conteneurisation open source créée en 2013 par Solomon Hykes, permettant d'empaqueter une application et l'intégralité de ses dépendances — bibliothèques, configuration, runtime — dans une unité isolée et portable appelée conteneur. Contrairement aux machines virtuelles traditionnelles qui virtualisent l'intégralité du matériel, les conteneurs Docker partagent le noyau du système d'exploitation hôte, ce qui les rend considérablement plus légers, plus rapides à démarrer et moins consommateurs en ressources.

      Docker est devenu un standard incontournable dans les environnements DevOps modernes pour une raison fondamentale : il élimine le problème ancestral du développement logiciel résumé par la phrase "ça marche sur ma machine". En encapsulant l'application dans un conteneur, Docker garantit que l'environnement d'exécution est strictement identique en développement, en intégration continue et en production, quelle que soit l'infrastructure sous-jacente. Cette reproductibilité est un gain considérable pour la fiabilité des déploiements et la rapidité des cycles de mise en production.

      En 2025, Docker reste la référence en matière de conteneurisation applicative, souvent utilisé en combinaison avec Docker Compose pour orchestrer des stacks multi-services en développement local, et Kubernetes pour l'orchestration à grande échelle en production. L'essor des architectures microservices a encore renforcé la pertinence de Docker : chaque service peut être conteneurisé indépendamment, versionné, déployé et mis à l'échelle de façon autonome. Pour tout développeur souhaitant évoluer vers des profils DevOps ou back-end sénior, la maîtrise de Docker est aujourd'hui aussi attendue que la connaissance d'un langage de programmation principal.`,

      anecdotes: [
        {
          texte: `Chez Groupe Synergie Développement, j'ai initié et mis en place la conteneurisation de plusieurs services de l'infrastructure informatique. Avant mon intervention, les services étaient déployés directement sur les serveurs avec des configurations manuelles, ce qui rendait chaque déploiement risqué, dépendant de l'environnement spécifique du serveur et difficile à reproduire en cas de problème. J'ai commencé par conteneuriser les services les plus critiques en rédigeant des Dockerfiles optimisés — images multi-stage pour réduire la taille finale, gestion des variables d'environnement, configuration des healthchecks — puis j'ai organisé l'ensemble dans des fichiers docker-compose pour permettre de démarrer la stack complète d'une seule commande. J'ai également documenté l'ensemble du processus pour que mes collègues puissent reproduire les déploiements de façon autonome.`,
          resultat: `Les déploiements sont devenus significativement plus rapides, reproductibles et moins sujets aux erreurs liées aux différences d'environnement. L'onboarding de nouveaux développeurs sur les projets a été simplifié : démarrer l'environnement de développement ne nécessite plus de configuration manuelle laborieuse.`,
          valeurAjoutee: `J'ai introduit une pratique DevOps concrète et durable dans une structure qui n'en avait pas, en apportant la rigueur d'un ingénieur logiciel moderne à des processus qui étaient encore artisanaux. Cette initiative a été reconnue par la direction comme une amélioration significative de la maintenabilité de l'infrastructure.`,
          realisationLink: { label: 'Tschoeppe Live', route: '/projets/4' },
        },
      ],

      autocritique: {
        niveau: {
          score: 7,
          label: 'Avancé',
          detail: `Je maîtrise Docker dans ses usages quotidiens d'un développeur : création et optimisation de Dockerfiles (multi-stage builds, minimisation des layers, gestion des variables d'environnement), utilisation de Docker Compose pour orchestrer des stacks multi-services (applications, bases de données, services tiers), gestion des réseaux et des volumes, et déploiement sur des serveurs Linux. Je suis autonome pour conteneuriser n'importe quelle application standard. Mes limites actuelles se situent sur les aspects avancés de l'orchestration : Kubernetes reste un domaine que j'ai exploré théoriquement mais pas encore mis en pratique en environnement de production réel. De même, les optimisations avancées de sécurité des conteneurs (images rootless, scanning de vulnérabilités) sont des sujets que je connais mais n'ai pas encore systématisés dans mes pratiques.`,
        },
        importance: `Docker est une compétence qui prend une importance croissante dans mon profil au fur et à mesure que mes responsabilités évoluent. Dans mon CDI chez Synergie Développement, je suis de plus en plus amené à penser non seulement au code que j'écris, mais aussi à la façon dont il sera déployé et maintenu en production. Docker est l'outil qui m'a permis de franchir la frontière traditionnelle entre développeur et ops, en prenant en charge des problématiques d'infrastructure qui dépassaient initialement mon périmètre. Sur le marché de l'emploi, Docker est aujourd'hui systématiquement cité dans les offres de développeur back-end ou full-stack de niveau intermédiaire à sénior — ne pas le maîtriser constituerait un vrai handicap pour les évolutions de poste que j'envisage.`,
        vitesse: `Ma montée en compétence Docker a été plus progressive que pour Java, car j'ai eu le luxe de pouvoir l'apprendre sans pression de production immédiate. J'ai commencé par des tutoriels et la documentation officielle pour comprendre les concepts fondamentaux, puis j'ai mis en pratique sur des projets personnels avant de déployer sur des services en production chez Synergie. Cette approche "apprendre puis appliquer" a été plus confortable que mon expérience avec Java, mais je pense qu'elle a aussi été moins formatrice : c'est en confrontant Docker à des contraintes réelles (serveurs avec des configurations spécifiques, services avec des exigences de sécurité particulières) que j'ai vraiment progressé.`,
        recul: `Mon principal conseil sur Docker serait de systématiquement commencer par comprendre le réseau Docker avant de construire des stacks multi-services. La majorité des problèmes que j'ai rencontrés — services qui ne se "voyaient" pas, connexions refusées entre conteneurs — venait d'une compréhension insuffisante des modes réseau (bridge, host, overlay). Comprendre ces concepts en profondeur dès le début évite énormément de frustration. Je conseillerais également de ne jamais copier-coller un Dockerfile sans le comprendre ligne par ligne : chaque instruction RUN supplémentaire crée un layer supplémentaire qui alourdit l'image finale, et certaines pratiques courantes sur internet (installation de outils de debug en production, utilisation de l'image latest sans version fixée) sont de mauvaises habitudes qui ont un impact réel sur la taille des images et la reproductibilité des builds.`,
      },

      evolution: {
        objectif: `L'étape logique dans ma progression Docker est l'exploration de Kubernetes pour l'orchestration de conteneurs à grande échelle. Je souhaite comprendre les concepts fondamentaux — Pods, Services, Deployments, ConfigMaps, Secrets, Ingress — et être capable de déployer et gérer une application multi-services en cluster. À plus court terme, je souhaite approfondir les bonnes pratiques de sécurité des conteneurs (images rootless, scanning de vulnérabilités avec Trivy, politiques réseau) et mettre en place des pipelines CI/CD intégrant Docker pour automatiser les builds et les déploiements. L'objectif à moyen terme est de pouvoir proposer et mettre en place une infrastructure conteneurisée complète pour un projet professionnel, de la conception au monitoring.`,
        formations: `Exploration en cours de Kubernetes via la documentation officielle et des exercices sur Minikube en environnement local. Je prévois de passer la certification CKA (Certified Kubernetes Administrator) dans les 18 prochains mois. En parallèle, je suis de près les évolutions de Docker Desktop et de l'écosystème OCI (Open Container Initiative) pour rester à jour sur les standards du secteur.`,
      },

      realisations: [{ label: 'Tschoeppe Live', route: '/projets/4' }],
    },

    // ──────────────────────────────────────────────────────────────────────
    // PRESTASHOP
    // ──────────────────────────────────────────────────────────────────────
    {
      id: 'prestashop',
      name: 'PrestaShop',
      icon: 'assets/img/prestashop.png',
      category: 'technique',
      level: 7,
      tagline: "L'e-commerce open source maîtrisé en contexte agence",
      definition: `PrestaShop est une solution e-commerce open source écrite en PHP, lancée en 2007 par des étudiants de l'école Epitech à Paris. En moins de vingt ans, elle est devenue l'une des plateformes de commerce en ligne les plus utilisées en Europe, en particulier en France, où elle équipe plusieurs centaines de milliers de boutiques allant de la PME artisanale aux enseignes de distribution intermédiaire. Son architecture modulaire — basée sur un système de hooks permettant d'intercepter et de modifier le comportement de la plateforme à presque tous les niveaux — lui confère une flexibilité remarquable qui explique sa popularité en contexte d'agence web.

      Techniquement, PrestaShop repose sur une architecture MVC (Modèle-Vue-Contrôleur) avec Symfony pour les parties les plus récentes du back-office, Doctrine comme ORM pour l'accès aux données, et Smarty comme moteur de template pour la partie front. Depuis la version 8, PrestaShop a amorcé une modernisation accélérée de son architecture, avec une migration progressive des anciennes classes legacy vers des composants Symfony modernes, une API REST native et un découplage progressif permettant des architectures headless. Ces évolutions positionnent PrestaShop comme une option viable pour des boutiques à fort trafic, en complément ou en remplacement de solutions comme Magento ou Shopify Plus.

      Dans un contexte d'agence web comme celui de DGS Création, PrestaShop représente le cœur du catalogue de services e-commerce : la plupart des demandes de clients cherchant une boutique en ligne personnalisée et maîtrisable débouchent sur un développement PrestaShop. Maîtriser PrestaShop va bien au-delà de la configuration de l'interface d'administration : cela implique de comprendre l'architecture pour créer des modules sur mesure, de maîtriser le système de thèmes pour des personnalisations visuelles profondes, et de savoir intervenir sur les performances et la sécurité de la plateforme.`,

      anecdotes: [
        {
          texte: `Dans le cadre de mon alternance chez DGS Création, j'ai développé et livré Uberti.shop, la boutique en ligne de la marque Uberti spécialisée dans les produits bio, naturels et bien-être. Ce projet était particulièrement exigeant car la marque avait des attentes visuelles et fonctionnelles très précises que les thèmes et modules natifs de PrestaShop ne pouvaient pas satisfaire. J'ai développé un thème enfant entièrement sur mesure à partir du thème Classic, en respectant fidèlement les maquettes livrées par le graphiste tout en maintenant la maintenabilité et la compatibilité avec les futures mises à jour de PrestaShop. J'ai également développé plusieurs modules personnalisés pour gérer des cas spécifiques que les extensions disponibles sur le marketplace ne couvraient pas : affichage conditionnel d'informations selon les catégories, personnalisation avancée du tunnel de commande, et optimisation du système de promotions pour répondre aux besoins marketing d'Uberti.`,
          resultat: `Livraison d'une boutique e-commerce fonctionnelle, visuellement cohérente avec l'identité de la marque et performante sur desktop comme sur mobile. Le client a pris en main l'administration du site de façon autonome après une session de formation, et les premières semaines suivant la mise en ligne se sont déroulées sans incident majeur.`,
          valeurAjoutee: `Ma capacité à développer des modules PHP personnalisés intégrés dans l'architecture PrestaShop a permis à l'agence de livrer exactement ce que le client demandait, sans compromis fonctionnel ni recours à des solutions tierces payantes qui auraient alourdi la maintenance future. Cette expertise en développement sur mesure est l'une des valeurs différenciantes d'une agence web face aux solutions no-code.`,
          realisationLink: { label: 'Uberti.shop', route: '/projets/1' },
        },
      ],

      autocritique: {
        niveau: {
          score: 7,
          label: 'Avancé',
          detail: `Je maîtrise PrestaShop à un niveau opérationnel avancé : je suis capable de réaliser une installation complète, de développer des thèmes enfants personnalisés respectant l'architecture de PrestaShop, de créer des modules sur mesure en utilisant le système de hooks, de faire des overrides de classes native pour modifier le comportement de la plateforme sans toucher au core, et d'intervenir sur les performances (cache, optimisation des requêtes SQL, compression des assets). Je connais le cycle de vie des commandes, le système de déclinaisons produits, la gestion des taxes et des transporteurs. Mes limites actuelles concernent principalement les architectures headless de PrestaShop — utilisation de l'API REST avec un front découplé — que je n'ai pas encore mises en œuvre en production.`,
        },
        importance: `PrestaShop a été l'une de mes compétences centrales pendant mes deux années chez DGS Création, représentant une grande part du chiffre d'affaires de l'agence. Elle m'a permis de comprendre en profondeur les enjeux du commerce en ligne : gestion du catalogue, UX du tunnel d'achat, optimisation des conversions, intégration des moyens de paiement et gestion logistique. Dans mon CDI actuel chez Synergie Développement, PrestaShop n'est plus utilisé directement, mais les réflexes de développeur qu'elle m'a appris — lire la documentation avant de modifier, utiliser les mécanismes d'extension prévus par l'architecture plutôt que de hacker le core — sont des bonnes pratiques universelles qui s'appliquent à n'importe quel framework ou plateforme.`,
        vitesse: `J'ai appris PrestaShop en situation réelle, directement sur des projets clients en production chez DGS Création. La première boutique que j'ai développée était celle d'un client réel avec une deadline ferme — ce contexte d'apprentissage sous contrainte, bien que stressant, est extrêmement efficace. J'ai progressé très rapidement sur les fonctionnalités standards, mais la compréhension en profondeur de l'architecture — notamment le système de hooks et la mécanique des overrides — a demandé plusieurs mois de pratique et de lecture du code source de la plateforme.`,
        recul: `Mon conseil principal pour tout développeur qui travaille avec PrestaShop est de ne jamais modifier le code du core de la plateforme directement, même pour une correction rapide qui semble anodine. PrestaShop fournit des mécanismes d'extension précis — overrides, hooks, modules — qui permettent de modifier n'importe quel comportement de façon propre et maintenable. Ignorer ces mécanismes pour gagner quelques minutes génère une dette technique considérable : les mises à jour de PrestaShop deviennent impossibles sans risquer de perdre toutes les modifications, et la maintenance devient un cauchemar. J'ai appris cette leçon à mes dépens en reprenant des projets que d'autres développeurs avaient modifiés directement dans le core — des heures de travail pour identifier et extraire toutes les modifications éparpillées.`,
      },

      evolution: {
        objectif: `Je souhaite explorer l'approche headless de PrestaShop, qui consiste à utiliser PrestaShop comme back-end et API de gestion e-commerce, tout en construisant le front-end avec un framework moderne comme Angular ou Next.js. Cette architecture permet de bénéficier de la robustesse de PrestaShop pour la gestion du catalogue, des commandes et des paiements, tout en offrant des performances et une expérience utilisateur supérieures grâce à un front découplé. C'est la tendance de fond du marché e-commerce pour les boutiques à fort trafic ou avec des exigences UX élevées. À plus court terme, je souhaite approfondir ma maîtrise de PrestaShop 8 et de ses évolutions architecturales vers Symfony.`,
        formations: `Veille active sur les releases de PrestaShop 8.x et les évolutions vers une architecture API-first. Exploration personnelle du projet PrestaShop Headless et des connecteurs disponibles pour les frameworks front-end modernes. Lecture régulière de la documentation technique et du blog officiel PrestaShop.`,
      },

      realisations: [{ label: 'Uberti.shop', route: '/projets/1' }],
    },

    // ──────────────────────────────────────────────────────────────────────
    // ANGULAR
    // ──────────────────────────────────────────────────────────────────────
    {
      id: 'angular',
      name: 'Angular',
      icon: 'assets/img/angular.png',
      category: 'technique',
      level: 7,
      tagline: 'Le framework TypeScript de mes interfaces modernes',
      definition: `Angular est un framework front-end open source développé et maintenu par Google, dont la première version stable a été publiée en 2016. Écrit entièrement en TypeScript, il adopte une approche opinionnée et structurée du développement d'interfaces web, imposant des conventions d'architecture qui garantissent la maintenabilité des projets à grande échelle. Angular repose sur une architecture en composants — des unités autonomes combinant template HTML, logique TypeScript et styles CSS — qui peuvent être composées pour construire des interfaces complexes. Un système d'injection de dépendances puissant, un routeur intégré, un système de formulaires réactifs et un HttpClient complet en font un framework "batteries included" qui couvre la quasi-totalité des besoins d'une Single Page Application (SPA) sans nécessiter d'installations tierces.

      Depuis la version 14, Angular a amorcé une évolution significative avec l'introduction des composants standalone, qui permettent de supprimer les NgModules pour les projets simples et de déclarer les composants de façon plus directe et lisible. Angular 17, sorti fin 2023, a introduit les Signals — un nouveau mécanisme de réactivité inspiré de SolidJS — qui remplacent progressivement la détection de changements basée sur Zone.js par une approche plus fine et plus performante. Ces évolutions rapprochent Angular des paradigmes modernes adoptés par ses concurrents React et Vue, tout en conservant sa structure typée et ses outils de développement éprouvés.

      Dans l'industrie, Angular est particulièrement apprécié dans les grandes organisations et les projets d'entreprise pour sa structure rigoureuse qui facilite le travail en équipe, sa compatibilité native avec TypeScript qui réduit les erreurs de type à l'exécution, et son écosystème d'outils Angular CLI qui automatise les tâches répétitives. Les entreprises qui choisissent Angular cherchent généralement à construire des applications complexes et durables, où la maintenabilité à long terme prime sur la rapidité de démarrage.`,

      anecdotes: [
        {
          texte: `J'ai développé l'intégralité de ce portfolio professionnel en Angular 17, en partant de zéro sans expérience préalable du framework. Le projet m'a confronté à tous les aspects d'Angular en situation réelle : architecture en composants standalone, routing avec paramètres dynamiques pour les pages compétences et réalisations, communication entre composants parents et enfants, gestion des données via des services, et intégration de bibliothèques tierces comme GSAP pour les animations. J'ai commencé par une phase de formation intensive sur la documentation officielle d'Angular, puis j'ai construit le portfolio de façon incrémentale, composant après composant, en appliquant immédiatement les concepts appris. Cette approche "projet réel comme projet d'apprentissage" s'est révélée bien plus efficace qu'un tutoriel isolé du contexte professionnel.`,
          resultat: `Portfolio fonctionnel déployé, présenté dans le cadre de mon évaluation de Master Expert en Ingénierie Logicielle à l'ISCOD. La qualité architecturale du code — utilisation des standalone components, typage strict TypeScript, séparation claire des responsabilités — a été validée et témoigne d'une appropriation réelle du framework et non d'une simple copie de tutoriels.`,
          valeurAjoutee: `Ce projet démontre ma capacité à monter en compétence rapidement et de façon autonome sur une technologie non maîtrisée, en partant d'un objectif concret (le portfolio) et en construisant les connaissances nécessaires au fur et à mesure des besoins. C'est précisément cette compétence d'apprentissage autonome orienté résultat qui me permet d'être efficace dans un secteur technologique en perpétuelle évolution.`,
        },
      ],

      autocritique: {
        niveau: {
          score: 7,
          label: 'Avancé',
          detail: `Je maîtrise les concepts fondamentaux d'Angular qui permettent de construire des applications complètes : composants standalone, routing avancé avec guards et resolvers, data binding (property binding, event binding, two-way binding), services et injection de dépendances, pipes natifs et personnalisés, directives NgIf et NgFor, HttpClient pour les appels API. Je suis en cours d'appropriation des concepts avancés : les Signals Angular 17, le lazy loading des modules pour optimiser les performances, et les stratégies de state management. Je n'ai pas encore d'expérience professionnelle avec Angular sur des projets d'équipe, ce qui reste une limite importante que je cherche à combler.`,
        },
        importance: `Angular représente ma porte d'entrée dans le monde du développement front-end moderne et typé. Dans mon projet professionnel, maîtriser Angular me permet de me positionner sur des offres de développeur full-stack ou front-end qui constituent une grande partie du marché de l'emploi en développement logiciel. C'est également un signal fort pour les recruteurs : choisir Angular plutôt qu'une solution plus simple pour son portfolio témoigne d'une volonté de s'inscrire dans des pratiques industrielles et d'une capacité à apprendre des technologies complexes de façon autonome. Dans mon CDI actuel, Angular n'est pas utilisé directement sur les projets métiers, mais l'architecture orientée composants qu'il m'a appris influence positivement ma façon de penser le découpage et la structuration de mes interfaces, quelle que soit la technologie utilisée.`,
        vitesse: `Apprendre Angular de zéro dans le cadre d'un projet professionnel concret m'a permis de progresser très rapidement sur les concepts qui avaient une application directe. La documentation officielle d'Angular est excellente et les exemples sont bien pensés. Ce qui m'a le plus aidé est d'avoir eu un projet réel comme fil conducteur : chaque difficulté rencontrée sur le portfolio m'a forcé à comprendre un concept spécifique d'Angular en profondeur, plutôt que d'avancer superficiellement sur un large spectre de fonctionnalités. La montée en compétence a été régulière et mesurable, ce qui est satisfaisant intellectuellement.`,
        recul: `Mon conseil principal pour un développeur qui apprend Angular serait de prendre le temps de comprendre RxJS avant de se lancer dans des composants complexes. RxJS — la bibliothèque de programmation réactive sur laquelle repose une grande partie d'Angular — est une courbe d'apprentissage à part entière, et trop de développeurs l'abordent superficiellement puis se retrouvent bloqués dès qu'ils doivent gérer des flux de données asynchrones. Comprendre les Observables, les opérateurs (map, filter, switchMap, combineLatest) et les patterns de souscription évite de nombreuses heures de débogage frustrant. Je me conseillerais également de penser "composants réutilisables" dès le début du projet : créer des composants trop couplés à un contexte spécifique génère une dette de refactoring qui ralentit le développement au fur et à mesure que le projet grossit.`,
      },

      evolution: {
        objectif: `Mes objectifs de progression Angular sont structurés en deux étapes. À court terme, je souhaite approfondir les Signals introduits avec Angular 17 et comprendre comment ils remplacent progressivement la détection de changements basée sur Zone.js — c'est l'évolution architecturale majeure d'Angular pour les années à venir. À moyen terme, je souhaite explorer NgRx pour la gestion d'état dans des applications complexes, me former aux tests unitaires Angular avec Jasmine et Karma, et acquérir de l'expérience sur un projet Angular en contexte d'équipe pour développer des réflexes de collaboration sur une SPA typée. L'objectif final est de pouvoir prendre en charge un projet Angular d'entreprise de bout en bout, de l'architecture initiale au déploiement en production.`,
        formations: `Formation en cours via la documentation officielle Angular 17+ et les guides de migration vers les Signals. Exploration prévue de NgRx via le tutoriel officiel et des projets personnels. Intérêt pour les tests E2E avec Cypress et pour les bonnes pratiques d'accessibilité dans les SPAs Angular.`,
      },

      realisations: [],
    },

    // ──────────────────────────────────────────────────────────────────────
    // PHP
    // ──────────────────────────────────────────────────────────────────────
    {
      id: 'php',
      name: 'PHP',
      icon: 'assets/img/php.png',
      category: 'technique',
      level: 8,
      tagline: "Un pilier du web que j'ai poussé à ses limites modernes",
      definition: `PHP (Hypertext Preprocessor) est un langage de script côté serveur créé en 1994 par Rasmus Lerdorf, initialement conçu pour faciliter la création de pages web dynamiques. Ce qui a commencé comme un ensemble de scripts personnels est devenu l'un des langages de programmation les plus répandus au monde, alimentant aujourd'hui plus de 75% des sites disposant d'un langage de script côté serveur — dont les géants que sont WordPress, Facebook (via HHVM) et Wikipédia. Sa facilité de déploiement sur n'importe quel hébergeur mutualisé, son écosystème massif de bibliothèques (via Composer) et sa courbe d'apprentissage accessible en ont fait le standard de facto du développement web pendant deux décennies.

      Les versions modernes de PHP — en particulier PHP 8.0, 8.1, 8.2 et 8.3 — ont profondément transformé le langage, le rapprochant des standards des langages modernes : typage union et intersection, propriétés readonly, enums de première classe, fibers pour la programmation asynchrone, améliorations du JIT (Just-In-Time compiler) pour les performances, et named arguments pour une API plus expressive. Ces évolutions ont redonné à PHP une crédibilité technique que certains lui contestaient, et positionné les frameworks Symfony et Laravel comme des outils capables de construire des applications enterprise-grade comparables à ce que Java Spring ou .NET Core permettent d'accomplir.

      L'écosystème PHP actuel est structuré autour de Composer (gestionnaire de dépendances), des standards PSR (PHP-FIG) qui définissent des interfaces communes pour l'interopérabilité entre bibliothèques, et des frameworks Symfony et Laravel qui imposent des architectures MVC propres. Symfony en particulier a eu une influence déterminante sur l'évolution du langage et de son écosystème : ses composants — HttpFoundation, Console, DependencyInjection, Doctrine — sont réutilisés par de nombreux autres frameworks, dont PrestaShop, Drupal et Laravel lui-même.`,

      anecdotes: [
        {
          texte: `Lors de mon alternance chez Interpane à Hoerdt, j'ai pris en charge la migration complète d'un logiciel GPAO (Gestion de Production Assistée par Ordinateur) de PHP 3 vers PHP 8 et Symfony. Ce projet représentait un défi technique et organisationnel majeur : le code source datait de plus de vingt ans, aucune documentation n'existait, la personne qui l'avait développé n'était plus dans l'entreprise, et le logiciel était utilisé quotidiennement par les équipes de production pour gérer les commandes, les stocks et la planification. Arrêter le logiciel même temporairement n'était pas envisageable sans impacter directement l'activité. J'ai commencé par une analyse complète de l'existant : comprendre la structure de la base de données, cartographier les fonctionnalités, identifier les dépendances critiques. J'ai ensuite défini une architecture Symfony moderne en m'appuyant sur les meilleures pratiques du framework, et j'ai migré les fonctionnalités progressivement, en maintenant le logiciel existant en parallèle jusqu'à ce que la nouvelle version soit suffisamment stable pour prendre le relais.`,
          resultat: `Livraison d'une version stable et documentée du logiciel GPAO, migré de PHP 3 vers PHP 8 et Symfony, avec une architecture moderne permettant des évolutions et une maintenance facilitées. La migration s'est faite sans interruption de service pour les équipes de production, et la nouvelle version intégrait également une interface utilisateur modernisée.`,
          valeurAjoutee: `J'ai sauvé un outil métier critique qui était en fin de vie technique absolue — PHP 3 n'est plus supporté depuis des années et représentait un risque de sécurité majeur. Ma décision d'architecture (Symfony plutôt qu'une simple mise à jour PHP sans framework) a donné au logiciel plusieurs années supplémentaires de durée de vie maintenable, sans qu'Interpane ait à investir dans un développement from scratch qui aurait coûté plusieurs fois le coût de la migration.`,
          realisationLink: { label: 'GPAO – Interpane', route: '/projets/2' },
        },
        {
          texte: `Chez DGS Création, j'ai développé des modules PHP personnalisés pour WordPress et PrestaShop sur le projet Uberti.shop, en créant des fonctionnalités que les plugins natifs ou disponibles sur les marketplaces ne couvraient pas. Ces développements sur mesure nécessitaient une compréhension approfondie des APIs de ces plateformes — système de hooks WordPress, architecture modulaire de PrestaShop — et une maîtrise de PHP orienté objet pour créer du code maintenable et performant.`,
          resultat: `Des modules fonctionnels et documentés, utilisés en production par les clients de l'agence, répondant à des besoins métiers spécifiques que les solutions génériques du marché ne pouvaient pas satisfaire.`,
          valeurAjoutee: `La capacité à développer des modules sur mesure rather than dépendre uniquement des marketplaces de plugins est une véritable valeur ajoutée pour une agence web : elle permet de répondre à n'importe quel besoin client sans compromis fonctionnel, et d'éviter les dépendances à des plugins tiers dont la maintenance peut s'arrêter à tout moment.`,
          realisationLink: { label: 'Uberti.shop', route: '/projets/1' },
        },
      ],

      autocritique: {
        niveau: {
          score: 8,
          label: 'Avancé',
          detail: `Je maîtrise PHP moderne à un niveau avancé : programmation orientée objet complète (classes abstraites, interfaces, traits, génériques via phpDoc), typage strict (déclaration de types, unions de types, nullable types), gestion des exceptions, manipulation des fichiers et des flux, interaction avec les bases de données via PDO et Doctrine ORM. Je suis à l'aise avec Symfony — composants DependencyInjection, HttpFoundation, Console, Form, Validator, Security — et avec les bonnes pratiques de développement : namespaces, autoloading PSR-4, gestion des dépendances avec Composer. Je connais également WordPress et PrestaShop en profondeur. Ma limite principale est l'absence d'expérience sur des projets PHP à très grande échelle avec des exigences de performance extrêmes (cache distribué, files de messages, architecture CQRS).`,
        },
        importance: `PHP est la technologie back-end qui couvre le plus large spectre de mes expériences professionnelles concrètes. C'est sur des projets PHP que j'ai développé ma capacité à prendre en charge des projets complexes de façon autonome, à prendre des décisions d'architecture responsables et à travailler en conditions réelles avec des délais, des clients et des contraintes de production. Même si Java est aujourd'hui ma compétence principale dans mon CDI, PHP reste la technologie avec laquelle j'ai le plus d'heures de vol professionnel réel, et c'est celle que je recommanderais à tout développeur web souhaitant rapidement être opérationnel sur des projets concrets.`,
        vitesse: `Ma progression en PHP a suivi une courbe en deux phases distinctes. La première, pendant le DUT et la Licence Pro, a été une acquisition des bases en contexte académique — solide mais déconnectée des réalités industrielles. La seconde, déclenchée par la migration GPAO chez Interpane, a été une accélération radicale : devoir reprendre un code PHP 3 existant, comprendre ses failles et le migrer vers PHP 8 et Symfony sans interruption de service m'a forcé à combler tous les manques de ma formation théorique en quelques mois. C'est cette expérience qui a fait de moi un développeur PHP compétent au niveau professionnel, bien plus que n'importe quel cours ou tutoriel.`,
        recul: `Le conseil que je donnerais à tout développeur PHP débutant est d'apprendre Symfony avant WordPress ou PrestaShop. Symfony impose des bonnes pratiques — injection de dépendances, séparation des responsabilités, tests unitaires, principes SOLID — que WordPress et PrestaShop n'encouragent pas naturellement. Un développeur formé d'abord sur Symfony aura des réflexes d'architecture sains qu'il pourra ensuite adapter aux contraintes de ces plateformes. L'inverse — se former d'abord sur WordPress puis essayer d'apprendre Symfony — est beaucoup plus difficile car il faut désapprendre de mauvaises habitudes avant d'en acquérir de bonnes. Je parle d'expérience : j'ai suivi ce chemin inverse et j'ai dû faire un effort conscient pour remettre en question des pratiques qui me semblaient "normales" en PHP procédural.`,
      },

      evolution: {
        objectif: `Mes objectifs de progression PHP s'articulent autour de deux axes. Le premier est l'approfondissement de la qualité logicielle : maîtriser les tests unitaires et d'intégration avec PHPUnit et Mockery, mettre en place des pipelines d'intégration continue incluant des tests automatisés, et explorer les patterns avancés (CQRS, Event Sourcing) pour les applications complexes. Le second axe est l'exploration de Laravel comme alternative à Symfony — Laravel a une philosophie plus pragmatique et un écosystème (Eloquent, Blade, Artisan) qui facilite le développement rapide tout en maintenant une architecture propre. À plus long terme, je souhaite approfondir les aspects performance de PHP (APCu, OpCache, profiling avec Blackfire) pour être capable d'optimiser des applications PHP à fort trafic.`,
        formations: `Veille active sur PHP 8.3 et les RFC pour PHP 9. Exploration de Laravel via le tutoriel officiel et le cours Laracasts. Lecture de "PHP Objects, Patterns, and Practice" de Matt Zandstra pour approfondir les design patterns en PHP. Intérêt pour la certification Symfony.`,
      },

      realisations: [
        { label: 'GPAO – Interpane', route: '/projets/2' },
        { label: 'Uberti.shop', route: '/projets/1' },
      ],
    },

    // ──────────────────────────────────────────────────────────────────────
    // WORDPRESS
    // ──────────────────────────────────────────────────────────────────────
    {
      id: 'wordpress',
      name: 'WordPress',
      icon: 'assets/img/wordpress.png',
      category: 'technique',
      level: 8,
      tagline: 'Le CMS dominant, maîtrisé au-delà des plugins',
      definition: `WordPress est un système de gestion de contenu (CMS) open source écrit en PHP et lancé en 2003 par Matt Mullenweg et Mike Little comme fork de b2/cafelog. En vingt ans, il est devenu le CMS le plus utilisé au monde, alimentant aujourd'hui plus de 43% de l'ensemble des sites web, soit environ 800 millions de sites. Cette domination s'explique par plusieurs facteurs : une prise en main accessible pour les non-techniciens, un écosystème immense de thèmes (plus de 10 000 sur le répertoire officiel) et de plugins (plus de 60 000), une communauté mondiale très active, et une architecture extensible qui permet de l'utiliser aussi bien comme simple blog que comme plateforme e-commerce, réseau social ou système de réservation.

      Sur le plan technique, WordPress repose sur PHP et MySQL, avec une architecture basée sur un système de hooks — actions et filtres — qui permet de modifier le comportement de la plateforme à presque tous les niveaux sans toucher au code core. L'introduction de l'éditeur de blocs Gutenberg en 2018 et du Full Site Editing en 2021 a transformé WordPress en véritable constructeur de sites visuels par blocs, repositionnant la plateforme face à des concurrents comme Webflow ou Squarespace. Parallèlement, l'API REST intégrée depuis WordPress 4.7 permet des architectures headless où WordPress joue le rôle de back-end headless CMS, fournissant le contenu via des endpoints JSON à un front-end développé avec React, Vue ou Angular.

      Dans un contexte d'agence web comme DGS Création, WordPress représente le socle de la majorité des projets de sites vitrines et de blogs. Sa connaissance approfondie — au-delà de la simple configuration de l'interface d'administration — est un prérequis absolu pour un développeur web en agence. Savoir développer des thèmes enfants sur mesure, créer des types de contenu personnalisés avec Advanced Custom Fields, écrire des plugins personnalisés et optimiser les performances sont des compétences qui distinguent un vrai développeur WordPress d'un simple administrateur de site.`,

      anecdotes: [
        {
          texte: `Chez DGS Création, j'ai développé le site de LD Éclairage, un site vitrine avec catalogue produits et système de demande de devis basé sur WordPress avec ACF (Advanced Custom Fields) et WooCommerce configuré en mode catalogue. Le défi de ce projet était de créer une interface d'administration sur mesure permettant au client de gérer son catalogue de produits d'éclairage — plusieurs centaines de références avec des caractéristiques techniques complexes — de façon intuitive, sans avoir besoin d'un back-office e-commerce complet qui aurait été surdimensionné pour ses besoins. J'ai conçu une architecture de types de contenu personnalisés avec ACF qui transformait l'interface d'administration WordPress en véritable outil de gestion de catalogue adapté aux besoins spécifiques du client, avec des champs personnalisés pour les caractéristiques techniques, les certifications et les documents PDF associés à chaque produit.`,
          resultat: `Livraison d'un site vitrine professionnel avec un catalogue produits complet, un formulaire de demande de devis fonctionnel et une interface d'administration que le client a pris en main de façon autonome dès le lendemain de la formation. La solution a permis à LD Éclairage de gérer son catalogue en ligne sans dépendance à l'agence pour les mises à jour de contenu.`,
          valeurAjoutee: `La conception d'une architecture ACF sur mesure, plutôt que l'utilisation d'un plugin e-commerce générique, a produit une solution parfaitement adaptée aux besoins de LD Éclairage : plus simple à administrer, plus rapide à charger et moins coûteuse en maintenance qu'une solution WooCommerce complète qui aurait été largement surdimensionnée.`,
          realisationLink: { label: 'LD Éclairage', route: '/projets/3' },
        },
        {
          texte: `J'ai également développé le site de l'Atelier des Créatrices Solidaires, une association qui souhaitait valoriser ses actions en ligne tout en permettant à ses bénévoles de gérer le contenu de façon totalement autonome. La contrainte principale de ce projet était l'aspect humain : les personnes qui allaient administrer le site n'avaient aucune compétence technique, et le site devait donc être non seulement beau et fonctionnel, mais aussi parfaitement intuitif pour des non-techniciens. J'ai conçu une architecture basée sur des blocs Gutenberg personnalisés et des types de contenu ACF avec une interface d'administration simplifiée, puis j'ai rédigé une documentation bénévole illustrée couvrant toutes les opérations courantes.`,
          resultat: `Site livré et régulièrement maintenu par les bénévoles de l'association sans intervention technique depuis la mise en ligne. L'architecture préfigure également une future boutique solidaire qui pourra être activée sans refonte globale du site.`,
          valeurAjoutee: `La conception d'une solution WordPress pensée pour des utilisateurs non-techniciens — avec une attention particulière à l'ergonomie de l'interface d'administration — a donné à l'association une vraie autonomie numérique. Cette capacité à penser la solution du point de vue de l'utilisateur final, et pas seulement du point de vue technique, est une compétence que je considère comme fondamentale pour un développeur qui travaille sur des projets à destination de clients.`,
          realisationLink: {
            label: 'Atelier des Créatrices Solidaires',
            route: '/projets/5',
          },
        },
      ],

      autocritique: {
        niveau: {
          score: 8,
          label: 'Avancé',
          detail: `Je maîtrise WordPress à un niveau de développeur confirmé : création et personnalisation de thèmes enfants, développement de plugins personnalisés utilisant les hooks (actions et filtres), utilisation avancée d'Advanced Custom Fields pour les types de contenu sur mesure, configuration et personnalisation de WooCommerce, requêtes personnalisées avec WP_Query et $wpdb, optimisation des performances (caching avec WP Super Cache ou W3 Total Cache, optimisation des images, réduction des requêtes SQL), et intervention sur la sécurité de base. Je suis également à l'aise avec le déploiement WordPress sur des hébergeurs mutualisés et des VPS, la configuration des règles de réécriture d'URL, et la gestion des redirections.`,
        },
        importance: `WordPress est, avec PHP, la compétence qui m'a le plus formé à la réalité du développement web en agence : la nécessité de livrer des solutions fonctionnelles et maintenables dans des délais contraints, pour des clients aux exigences diverses. Dans mon CDI actuel chez Synergie Développement, WordPress n'est pas utilisé, mais les réflexes qu'il m'a appris — penser à l'utilisateur final de l'interface d'administration, documenter les choix techniques, concevoir pour la maintenance future — sont des qualités universelles qui enrichissent ma façon d'aborder n'importe quel projet de développement logiciel.`,
        vitesse: `Ma progression WordPress a été particulièrement rapide grâce au contexte d'agence web chez DGS Création. La diversité des projets — sites vitrines, blogs, e-commerce, portfolios, sites associatifs — m'a exposé à un spectre très large de cas d'usage en un temps court. Chaque nouveau client apportait des contraintes différentes qui m'obligeaient à explorer des fonctionnalités que je n'avais pas encore eu à utiliser. C'est cette confrontation régulière à des problèmes nouveaux, plus que n'importe quelle formation structurée, qui a fait de moi un développeur WordPress compétent.`,
        recul: `Le principal piège à éviter avec WordPress est la sur-dépendance aux plugins tiers. Il est tentant, face à n'importe quel besoin fonctionnel, de chercher d'abord un plugin sur le répertoire WordPress.org. Mais cette approche génère des risques importants : plugins abandonnés par leurs développeurs, incompatibilités entre plugins, impact sur les performances, et complexification de la maintenance. Mon conseil : avant d'installer un plugin, évaluer si la fonctionnalité est suffisamment simple pour être codée directement dans functions.php ou dans un mini-plugin personnalisé. Pour des fonctionnalités simples (modification d'un affichage, ajout d'un champ, envoi d'un email), quelques lignes de PHP bien écrites valent mieux qu'une dépendance tierce difficile à maintenir. Par ailleurs, j'insiste toujours sur l'importance des environnements de staging : tester les mises à jour de plugins et de WordPress core en production sans filet est une prise de risque injustifiable.`,
      },

      evolution: {
        objectif: `Je souhaite explorer les architectures WordPress headless, en utilisant WordPress comme back-end CMS headless et l'API REST ou GraphQL (via WPGraphQL) comme interface avec un front-end Angular ou Next.js. Cette approche permet de bénéficier de la richesse de l'écosystème WordPress pour la gestion de contenu, tout en offrant une expérience utilisateur de qualité SPA et des performances optimales. C'est une architecture de plus en plus demandée pour des sites à fort trafic ou avec des exigences UX élevées. Je souhaite également approfondir ma maîtrise du Full Site Editing et des blocs Gutenberg personnalisés, qui représentent l'avenir du développement de thèmes WordPress.`,
        formations: `Veille active sur les évolutions WordPress 6.x et le Full Site Editing. Exploration personnelle de WPGraphQL et des architectures headless WordPress + Angular. Lecture du Codex WordPress et des Developer Notes de chaque release majeure.`,
      },

      realisations: [
        { label: 'LD Éclairage', route: '/projets/3' },
        { label: 'Atelier des Créatrices Solidaires', route: '/projets/5' },
      ],
    },

    // ──────────────────────────────────────────────────────────────────────
    // COMMUNICATION
    // ──────────────────────────────────────────────────────────────────────
    {
      id: 'communication',
      name: 'Communication',
      icon: 'assets/img/communication.png',
      category: 'humaine',
      level: 8,
      tagline: 'Transmettre clairement dans un contexte technique',
      definition: `La communication est l'ensemble des processus par lesquels un individu transmet un message à un interlocuteur en s'assurant que l'information est reçue, comprise et appropriée de façon adéquate. Dans les métiers du développement logiciel, la communication revêt une importance particulière car elle se déploie dans un contexte de forte asymétrie technique : un développeur doit quotidiennement communiquer avec des interlocuteurs aux niveaux de connaissance très différents — collègues développeurs, chefs de projet, managers non-techniques, clients — en adaptant son registre, son vocabulaire et son niveau de détail à chaque situation.

      La communication professionnelle dans le développement logiciel se décline en plusieurs dimensions. La communication écrite englobe la rédaction de documentation technique (commentaires de code, README, spécifications), de rapports d'avancement, de comptes rendus de réunion et d'emails professionnels. La communication orale couvre les réunions d'équipe, les présentations de sprint, les sessions de démonstration et les entretiens clients. La communication de vulgarisation — expliquer une contrainte technique à un interlocuteur non-technique — est peut-être la dimension la plus délicate et la plus différenciante : elle nécessite de maîtriser suffisamment son sujet pour pouvoir l'expliquer simplement, sans condescendance ni simplification trompeuse.

      Dans le contexte de l'essor des méthodes Agile et des équipes distribuées, la communication est reconnue comme une compétence à part entière, distincte de la compétence technique pure. Les référentiels de compétences des développeurs séniors et des tech leads incluent systématiquement des capacités de communication avancées : savoir animer une réunion de planification, documenter des décisions d'architecture, présenter un état d'avancement à la direction, ou gérer un désaccord technique avec un pair de façon constructive sont des situations auxquelles tout développeur expérimenté est régulièrement confronté.`,

      anecdotes: [
        {
          texte: `Chez DGS Création, j'étais en contact direct avec les clients tout au long des projets, depuis la réunion de kick-off jusqu'à la formation à l'utilisation du site livré. Ce contact régulier m'a placé dans des situations de communication variées et exigeantes : recueillir les besoins d'un client qui n'a pas le vocabulaire technique pour exprimer précisément ce qu'il veut, reformuler ces besoins en spécifications techniques compréhensibles par l'équipe de développement, expliquer pourquoi certaines demandes sont techniquement complexes ou risquées sans paraître négatif ou peu coopératif, et gérer les retours clients parfois frustrants en maintenant une relation professionnelle constructive. Ces expériences m'ont appris que la qualité technique d'une livraison ne suffit pas : un client insatisfait de la communication autour de son projet restera insatisfait même si le produit livré est objectivement excellent.`,
          resultat: `Des projets livrés dans un climat de confiance avec les clients, avec un taux élevé de satisfaction sur les projets dont j'assurais le suivi direct. La clarté de ma communication a permis de réduire significativement les allers-retours de modification liés aux incompréhensions, économisant du temps de développement et améliorant la relation client.`,
          valeurAjoutee: `Ma capacité à être un intermédiaire technique fiable entre les équipes de développement et les clients a contribué directement à la qualité de la relation commerciale de l'agence. Un développeur qui sait communiquer avec les clients réduit la charge de gestion de projet du responsable d'agence et contribue à la fidélisation des clients.`,
        },
        {
          texte: `Dans le cadre de mon Master à l'ISCOD, j'ai produit de nombreux livrables écrits : rapports d'activité semestriels, mémoire de fin d'études, présentations de projets devant jury. Ces exercices académiques, bien qu'ils puissent sembler éloignés de la réalité professionnelle, m'ont forcé à structurer ma pensée, à argumenter mes choix techniques de façon rigoureuse et à présenter mon travail à des interlocuteurs qui évaluaient autant la forme que le fond.`,
          resultat: `Des livrables validés par les jurys avec des retours positifs sur la qualité rédactionnelle, la clarté de la structure et la rigueur de l'argumentation. Cette capacité à produire des documents professionnels de qualité est directement transférable à la production de documentation technique en entreprise.`,
          valeurAjoutee: `Les compétences de communication écrite développées dans le cadre académique ont directement amélioré la qualité de ma documentation technique professionnelle. Documenter une décision d'architecture, rédiger un README complet ou écrire un compte rendu de réunion clair et actionnable sont des compétences que l'exercice académique de la rédaction de rapports a contribué à développer.`,
        },
      ],

      autocritique: {
        niveau: {
          score: 8,
          label: 'Avancé',
          detail: `Je communique efficacement à l'écrit comme à l'oral dans des contextes professionnels variés. À l'écrit, je produis des documents structurés, clairs et adaptés à leur audience — documentation technique pour des développeurs, rapports d'avancement pour des managers, guides utilisateur pour des non-techniciens. À l'oral, je suis à l'aise en réunion d'équipe, en présentation de projet et en relation client directe. Ma principale limite est l'absence d'expérience en prise de parole en public à grande échelle — conférences, meetups — que je n'ai pas encore eu l'occasion de pratiquer.`,
        },
        importance: `La communication est la compétence transversale qui amplifie toutes mes autres compétences. Un développeur qui maîtrise parfaitement Java ou Angular mais ne sait pas communiquer ses solutions, documenter son travail ou collaborer efficacement avec son équipe ne peut pas valoriser pleinement ses capacités techniques. Dans mon CDI actuel, la communication est sollicitée quotidiennement : expliquer l'avancement de mes travaux à la direction, rédiger des spécifications avant de commencer un développement, ou documenter les modifications apportées à Tschoeppe Live pour faciliter les interventions futures. Je considère que c'est une compétence aussi importante que n'importe quelle compétence technique dans mon profil d'expert en ingénierie logicielle.`,
        vitesse: `La communication professionnelle ne s'acquiert pas de façon linéaire comme une compétence technique : elle se développe progressivement au travers d'expériences diverses et d'une réflexivité sur ses propres pratiques. Mon alternance chez DGS Création, avec son contact direct et régulier avec des clients aux profils très différents, a été l'accélérateur le plus puissant de cette compétence. Chaque situation de communication difficile — client mécontent, demande hors périmètre, retard à annoncer — m'a fourni des apprentissages concrets sur ce qui fonctionne et ce qui ne fonctionne pas.`,
        recul: `Mon conseil principal sur la communication professionnelle est de systématiser l'habitude d'écrire avant d'agir. Avant de commencer un développement, rédiger un court document résumant la compréhension du besoin et le faire valider. Avant une réunion importante, préparer un ordre du jour et le partager à l'avance. Après une décision technique importante, écrire un ADR (Architecture Decision Record) qui explique le contexte, les options considérées et les raisons du choix. Ces pratiques semblent coûteuses en temps à court terme, mais elles évitent des malentendus coûteux, laissent une trace exploitable par l'équipe et développent progressivement une culture de communication écrite de qualité.`,
      },

      evolution: {
        objectif: `Je souhaite développer ma capacité à communiquer dans des contextes plus larges : prise de parole dans des meetups techniques locaux, contribution à des blogs ou publications techniques, et développement de compétences de facilitation pour animer des ateliers ou des rétrospectives Agile. À moyen terme, l'objectif est d'être reconnu non seulement comme un développeur techniquement solide, mais comme quelqu'un qui sait embarquer une équipe autour d'une vision technique et la communiquer clairement à tous les niveaux de l'organisation.`,
        formations: `Veille sur le framework Diátaxis pour la documentation technique. Lecture de "The Pragmatic Programmer" pour les bonnes pratiques de communication entre développeurs. Intérêt pour la facilitation de rétrospectives Agile et les techniques de communication non-violente dans les contextes de travail.`,
      },

      realisations: [],
    },

    // ──────────────────────────────────────────────────────────────────────
    // GESTION DE PROJET
    // ──────────────────────────────────────────────────────────────────────
    {
      id: 'gestion-projet',
      name: 'Gestion de projet',
      icon: 'assets/img/gestion_de_projet.png',
      category: 'humaine',
      level: 7,
      tagline: "Piloter l'incertitude pour livrer dans les délais",
      definition: `La gestion de projet est l'ensemble des pratiques, méthodes et outils permettant de planifier, organiser, exécuter et contrôler un projet afin d'atteindre ses objectifs dans les contraintes définies de temps, de coût et de qualité. Dans le développement logiciel, la gestion de projet a connu une révolution paradigmatique avec l'émergence des méthodes Agile — formalisées dans le Manifeste Agile de 2001 — qui ont remis en question les approches en cascade (waterfall) traditionnelles au profit de cycles de développement itératifs et incrémentaux, favorisant l'adaptation continue aux changements plutôt que le suivi rigide d'un plan initial.

      Les frameworks Agile les plus répandus aujourd'hui sont Scrum — avec ses sprints, ses cérémonies (sprint planning, daily standup, sprint review, rétrospective) et ses artefacts (product backlog, sprint backlog, definition of done) — et Kanban, qui visualise le flux de travail sur un tableau et limite le travail en cours (Work in Progress) pour maximiser le débit. Ces méthodes ne sont pas incompatibles et de nombreuses équipes adoptent des approches hybrides adaptées à leur contexte spécifique. SAFe (Scaled Agile Framework) et LeSS (Large-Scale Scrum) étendent ces principes à des organisations plus grandes avec des dizaines ou des centaines de développeurs.

      Pour un développeur en 2025, la gestion de projet n'est plus uniquement l'affaire du chef de projet. Les équipes Agile sont auto-organisées et chaque membre est responsable de la planification, de l'estimation et du suivi de ses propres tâches. Comprendre les enjeux de la gestion de projet, savoir identifier et communiquer les risques, estimer le travail de façon réaliste et prioriser efficacement sont des compétences attendues des développeurs confirmés, et indispensables pour évoluer vers des responsabilités de tech lead ou de développeur sénior.`,

      anecdotes: [
        {
          texte: `Lors de mon alternance chez Interpane, j'ai géré seul et de façon complètement autonome la migration du logiciel GPAO de PHP 3 vers PHP 8 et Symfony. Ce projet représentait un exercice de gestion de projet dans toute sa complexité : aucune méthodologie formelle n'était imposée, aucun chef de projet ne supervisait le travail, et la seule contrainte claire était que le logiciel devait continuer à fonctionner tout au long de la migration. J'ai commencé par une phase d'investigation et d'analyse qui m'a permis de comprendre l'ampleur du projet et d'identifier les risques techniques majeurs. Sur cette base, j'ai découpé le projet en phases : analyse de l'existant, conception de la nouvelle architecture, migration par modules fonctionnels, tests et stabilisation, mise en production progressive. J'ai maintenu un suivi régulier de l'avancement que je communiquais spontanément à ma responsable, même en l'absence de demande explicite de sa part — une pratique que j'ai adoptée par souci de transparence et qui s'est révélée très appréciée.`,
          resultat: `Livraison d'une version stable et documentée du nouveau logiciel GPAO, dans les délais convenus avec l'entreprise, sans interruption de service pendant la transition. Le projet a été reconnu comme un succès technique et organisationnel par la direction d'Interpane.`,
          valeurAjoutee: `Ma capacité à mener un projet technique de bout en bout sans supervision, en organisant mon travail de façon autonome et en gérant les imprévus techniques de façon proactive, a démontré que je pouvais prendre des responsabilités de chef de projet technique sur des missions complexes. Cette expérience a été déterminante pour ma confiance en mes capacités d'organisation et de planification.`,
          realisationLink: { label: 'GPAO – Interpane', route: '/projets/2' },
        },
      ],

      autocritique: {
        niveau: {
          score: 7,
          label: 'Avancé',
          detail: `Je suis autonome pour gérer des projets de taille moyenne en solo ou en petite équipe, depuis la définition du périmètre jusqu'à la livraison. Je maîtrise les concepts fondamentaux des méthodes Agile (Scrum, Kanban), je suis à l'aise avec les outils de suivi courants (Jira, Trello, GitHub Projects, Notion) et je sais estimer le travail, identifier les risques et prioriser le backlog de façon réaliste. Mes limites actuelles concernent principalement les projets impliquant plusieurs équipes ou plusieurs dizaines de personnes, où les enjeux de coordination, de dépendances inter-équipes et de gouvernance dépassent mon expérience actuelle.`,
        },
        importance: `La gestion de projet est une compétence dont l'importance dans mon profil croît au fur et à mesure que mes responsabilités évoluent. Dans mon CDI actuel, je gère mon propre planning, j'organise mes sprints de développement, j'estime et je communique les délais à ma direction. À terme, si je souhaite évoluer vers un rôle de tech lead ou de développeur sénior avec des responsabilités d'encadrement, la gestion de projet deviendra une compétence centrale et non plus simplement complémentaire. Je la considère aujourd'hui comme un investissement pour ma trajectoire professionnelle à moyen terme.`,
        vitesse: `Mes compétences en gestion de projet se sont développées de façon organique, au travers de l'expérience pratique plus que de la formation théorique. Les cours sur les méthodes Agile de l'ISCOD m'ont fourni le cadre conceptuel, mais c'est la nécessité de gérer seul la migration GPAO chez Interpane qui m'a vraiment appris ce que signifie piloter un projet : faire des choix difficiles quand les contraintes s'accumulent, savoir quoi sacrifier pour tenir un délai, et communiquer clairement sur l'avancement même quand les nouvelles ne sont pas bonnes.`,
        recul: `Ma leçon principale en gestion de projet est l'importance de la documentation des décisions. Trop souvent, les décisions importantes — choix d'architecture, priorisation d'une fonctionnalité, acceptation d'un risque technique — sont prises verbalement en réunion ou dans un échange Slack et ne sont jamais formalisées. Quand le projet avance et que le contexte change, il devient impossible de retrouver la justification d'un choix fait plusieurs mois plus tôt, ce qui génère de la confusion et parfois des conflits. Prendre cinq minutes après chaque décision importante pour écrire un résumé — contexte, options considérées, décision et justification — est un investissement minimal avec un retour sur investissement considérable.`,
      },

      evolution: {
        objectif: `Je souhaite formaliser et approfondir mes compétences en gestion de projet à travers la certification PSM I (Professional Scrum Master) dans les douze prochains mois. Cette certification me permettrait non seulement de valider mes connaissances théoriques de Scrum, mais aussi d'acquérir un vocabulaire commun avec les équipes avec lesquelles je serai amené à travailler dans des environnements Agile structurés. À plus long terme, l'objectif est de développer des compétences de facilitation et de coaching Agile pour accompagner une équipe de développeurs, pas seulement pour gérer mes propres tâches.`,
        formations: `Préparation à la certification PSM I via le site Scrum.org. Utilisation active de GitHub Projects pour la gestion de mes projets personnels avec des sprints formels. Lecture de "Scrum: The Art of Doing Twice the Work in Half the Time" de Jeff Sutherland.`,
      },

      realisations: [{ label: 'GPAO – Interpane', route: '/projets/2' }],
    },

    // ──────────────────────────────────────────────────────────────────────
    // RELATION CLIENT
    // ──────────────────────────────────────────────────────────────────────
    {
      id: 'relation-client',
      name: 'Relation client',
      icon: 'assets/img/relation_client.png',
      category: 'humaine',
      level: 7,
      tagline: 'Transformer les besoins en solutions comprises de tous',
      definition: `La relation client dans les métiers du numérique désigne l'ensemble des interactions entre un prestataire de services numériques et ses clients, depuis la phase de découverte et d'analyse des besoins jusqu'au suivi post-livraison. Elle englobe des compétences d'écoute active, de questionnement, de reformulation, de gestion des attentes, de négociation et de gestion des situations de tension ou d'insatisfaction. Dans un contexte d'agence web ou de développement sur mesure, la qualité de la relation client est souvent aussi déterminante pour la pérennité de la relation commerciale que la qualité technique du livrable lui-même.

      Le principal défi de la relation client dans le développement logiciel est la gestion de l'asymétrie d'information : le client connaît son métier, ses besoins et ses contraintes, mais pas les réalités du développement logiciel ; le développeur maîtrise les aspects techniques, mais pas forcément les nuances du métier du client. La relation client efficace consiste à combler cette asymétrie dans les deux sens : vulgariser les contraintes techniques pour le client, et s'immerger suffisamment dans le métier du client pour comprendre les véritables enjeux derrière les demandes fonctionnelles.

      Dans le contexte de l'industrie du logiciel actuelle, la relation client évolue également avec les méthodes Agile : les cycles de livraison itératifs rapprochent le client du processus de développement et demandent une interaction plus fréquente et plus collaborative qu'un modèle en cascade traditionnel où le client disparaît pendant plusieurs mois entre la signature du cahier des charges et la livraison. Cette évolution renforce l'importance des compétences relationnelles pour les développeurs, qui ne peuvent plus se cantonner à un rôle purement technique.`,

      anecdotes: [
        {
          texte: `Chez DGS Création, j'ai assuré le suivi direct de plusieurs clients tout au long du cycle de vie de leurs projets. Cela comprenait les réunions de kick-off pour recueillir et structurer les besoins, les points d'avancement réguliers pour présenter les livrables intermédiaires et recueillir les retours, la gestion des demandes de modification en cours de projet pour arbitrer entre ce qui était dans le périmètre initial et ce qui représentait un avenant, et enfin les sessions de formation à l'utilisation du site livré. Chacune de ces étapes demandait une adaptation du discours et une attention particulière à la qualité de la relation — certains clients étaient très directifs et précis dans leurs demandes, d'autres avaient besoin d'être guidés et aidés à formuler ce qu'ils voulaient vraiment.`,
          resultat: `Des projets livrés dans un contexte de confiance et de satisfaction mutuelle, avec des retours clients positifs sur la qualité de l'accompagnement et la réactivité aux demandes. La clarté de la communication dans les phases de recueil de besoins a permis de réduire les révisions coûteuses en fin de projet.`,
          valeurAjoutee: `Ma capacité à assurer le suivi client de façon autonome a permis au responsable de l'agence de déléguer une partie de la gestion de la relation commerciale, lui libérant du temps pour le développement commercial. Un développeur qui sait gérer la relation client est une ressource précieuse pour une agence web de taille moyenne.`,
        },
      ],

      autocritique: {
        niveau: {
          score: 7,
          label: 'Avancé',
          detail: `Je suis à l'aise pour interagir avec des clients dans la majorité des situations courantes : recueil et reformulation des besoins, présentation de solutions techniques en termes accessibles, gestion des retours et des demandes de modification, animation de sessions de formation. Je sais gérer les situations de tension mineure et maintenir une relation professionnelle constructive face à des demandes difficiles. Ma limite actuelle est l'absence d'expérience sur des comptes clients très importants ou des situations de crise commerciale majeure, où les enjeux relationnels sont plus élevés.`,
        },
        importance: `La relation client est moins centrale dans mon CDI actuel chez Synergie Développement, où je n'ai pas de contact direct avec des clients externes. Cependant, cette compétence reste importante dans ma trajectoire professionnelle : à terme, si je souhaite évoluer vers un rôle de tech lead ou de développeur consultant, la capacité à interagir efficacement avec des clients ou des commanditaires internes redeviendra centrale. Elle est également différenciante sur le marché de l'emploi : un développeur qui sait gérer la relation client est plus polyvalent et plus précieux pour une organisation qu'un développeur purement technique.`,
        vitesse: `La relation client est une compétence qui s'apprend uniquement en situation réelle, et le contexte d'agence web de DGS Création était idéal pour cela : beaucoup de clients différents, des délais courts, et une responsabilité directe sur la qualité de la relation. Chaque situation difficile — client insatisfait d'un livrable, demande de modification hors périmètre, retard à annoncer — m'a appris quelque chose de concret que je ne pouvais pas avoir appris en cours.`,
        recul: `Mon conseil le plus important sur la relation client est de systématiser la reformulation écrite des besoins avant de commencer tout développement. Envoyer au client un email récapitulatif après la réunion de recueil de besoins — "voici ce que j'ai compris, voici ce que je vais faire, voici ce qui est hors périmètre" — et obtenir sa validation explicite évite l'immense majorité des malentendus coûteux en fin de projet. Ce réflexe simple, que j'ai mis en place après quelques expériences difficiles chez DGS Création, a transformé ma gestion des projets clients. La deuxième leçon est d'apprendre à dire non avec élégance : "cette demande est intéressante, elle n'est pas dans le périmètre initial, voici comment nous pourrions la traiter dans une deuxième phase" est une formulation qui préserve la relation client tout en maintenant un périmètre réaliste.`,
      },

      evolution: {
        objectif: `Je souhaite développer ma capacité à interagir avec des commanditaires internes chez Synergie Développement, notamment en m'impliquant davantage dans les phases de cadrage des projets et en cherchant à mieux comprendre les besoins des utilisateurs finaux de Tschoeppe Live. À plus long terme, si mon évolution professionnelle me conduit vers des responsabilités de consulting ou de tech lead avec une dimension commerciale, je souhaite me former aux techniques de vente consultative et de négociation.`,
        formations: `Lecture de "Getting to Yes" de Fisher et Ury pour les techniques de négociation. Intérêt pour la formation aux techniques d'animation d'ateliers de design thinking pour le recueil de besoins. Application quotidienne des principes de communication non-violente dans les échanges professionnels.`,
      },

      realisations: [],
    },

    // ──────────────────────────────────────────────────────────────────────
    // AUTONOMIE
    // ──────────────────────────────────────────────────────────────────────
    {
      id: 'autonomie',
      name: 'Autonomie',
      icon: 'assets/img/autonomie.png',
      category: 'humaine',
      level: 9,
      tagline: 'Avancer seul, décider vite, livrer quand même',
      definition: `L'autonomie professionnelle est la capacité à accomplir ses missions sans avoir besoin d'une supervision constante, à prendre des décisions pertinentes dans le cadre de ses responsabilités, et à résoudre les problèmes de façon proactive sans attendre que les solutions viennent de l'extérieur. Dans les métiers du développement logiciel, l'autonomie revêt plusieurs dimensions complémentaires : l'autonomie technique (capacité à résoudre des problèmes techniques sans assistance), l'autonomie organisationnelle (capacité à planifier et prioriser son propre travail), et l'autonomie décisionnelle (capacité à prendre des décisions techniques responsables dans le cadre de ses attributions).

      L'autonomie est une compétence particulièrement valorisée dans les petites et moyennes structures, où la densité managériale est faible et où chaque collaborateur doit être capable de fonctionner efficacement sans encadrement rapproché. Elle est également de plus en plus attendue dans les grandes organisations qui adoptent des modèles d'équipes auto-organisées inspirés des méthodes Agile — où la responsabilité du "comment faire" revient à l'équipe elle-même, et non à un management intermédiaire. Pour un développeur sénior ou un tech lead, l'autonomie n'est pas une option : c'est un prérequis fondamental.

      Il est important de distinguer l'autonomie de l'isolement. Un développeur véritablement autonome n'est pas quelqu'un qui travaille seul dans son coin et refuse l'aide des autres : c'est quelqu'un qui sait quand avancer seul et quand solliciter des collaborateurs ou escalader une décision. Cette intelligence situationnelle — savoir calibrer le niveau d'autonomie approprié à chaque situation — est la marque de maturité professionnelle qui distingue l'autonomie productive du cloisonnement contre-productif. C'est précisément cette nuance que j'ai appris à maîtriser au fil de mes expériences.`,

      anecdotes: [
        {
          texte: `Chez Groupe Synergie Développement, une période particulièrement révélatrice de mon niveau d'autonomie a été celle qui a suivi le départ successif de plusieurs membres du service informatique. Pendant plusieurs semaines, j'ai été seul responsable de Tschoeppe Live et de l'ensemble des problématiques informatiques courantes de l'entreprise, sans supervision directe ni référent technique à consulter. J'ai dû simultanément corriger des bugs critiques signalés en production par les utilisateurs, poursuivre le développement des évolutions planifiées, gérer les urgences informatiques qui remontaient, et maintenir une communication claire avec la direction sur l'état d'avancement et les priorités. Cette période a été intense, mais elle m'a permis de démontrer concrètement que je pouvais porter des responsabilités importantes sans filet de sécurité.`,
          resultat: `Maintien opérationnel de Tschoeppe Live sans interruption de service pendant toute cette période, livraison des fonctionnalités planifiées dans les délais convenus malgré le contexte difficile, et gestion efficace des urgences informatiques courantes. Cette performance a été directement reconnue par la direction, qui m'a fait confiance pour continuer à porter ces responsabilités en CDI.`,
          valeurAjoutee: `Ma capacité à assurer la continuité de service dans un contexte de sous-effectif a évité à l'entreprise une situation de crise informatique majeure. En gérant les priorités de façon autonome et en communiquant proactivement sur l'état d'avancement, j'ai contribué à maintenir la confiance de la direction dans la fiabilité du service informatique malgré des effectifs réduits.`,
          realisationLink: { label: 'Tschoeppe Live', route: '/projets/4' },
        },
        {
          texte: `Chez Interpane, mon expérience la plus formatrice en matière d'autonomie a été la reprise du projet de migration GPAO. Sans documentation, sans référent technique, sans méthodologie imposée, j'ai dû définir moi-même l'approche, l'architecture et le planning. La difficulté n'était pas seulement technique — elle était aussi psychologique : prendre des décisions d'architecture importantes sur un logiciel métier critique, sans pouvoir les valider avec un expert, demande une confiance en ses propres capacités d'analyse et de raisonnement que les formations ne développent pas spontanément. J'ai appris à documenter mes raisonnements pour pouvoir les défendre et les réviser si nécessaire, et à décomposer les problèmes complexes en problèmes plus petits, plus faciles à résoudre de façon séquentielle.`,
          resultat: `Livraison d'une migration réussie, d'une documentation complète et d'une architecture moderne qui a été reconnue comme solide techniquement par les développeurs qui sont intervenus sur le projet après moi.`,
          valeurAjoutee: `Ma prise d'initiative sur les choix d'architecture — migrer vers Symfony plutôt que de simplement mettre à jour le PHP — a offert à Interpane une solution pérenne et maintenable là où une approche minimaliste aurait produit un résultat techniquement insuffisant à moyen terme. Cette capacité à avoir du recul sur les demandes et à proposer la meilleure solution plutôt que la solution la plus simple est, selon moi, l'expression la plus précieuse de l'autonomie professionnelle.`,
          realisationLink: { label: 'GPAO – Interpane', route: '/projets/2' },
        },
      ],

      autocritique: {
        niveau: {
          score: 9,
          label: 'Expert',
          detail: `L'autonomie est la compétence pour laquelle je reçois le retour positif le plus constant de la part de mes différents employeurs. Je suis capable de prendre en charge des sujets complexes sans encadrement, de prendre des décisions techniques responsables et de les assumer, d'organiser mon propre travail sur des projets longs sans supervision rapprochée, et de gérer efficacement les imprévus sans perdre le fil des objectifs principaux. Ma marge de progression concerne la dimension collective de l'autonomie : savoir entraîner une équipe dans une démarche autonome, déléguer efficacement et développer l'autonomie des autres sont des compétences que je n'ai pas encore eu l'occasion de développer dans un contexte de management ou de tech lead.`,
        },
        importance: `L'autonomie est probablement la compétence la plus différenciante de mon profil professionnel, celle qui explique en grande partie la confiance que mes employeurs m'ont accordée et les responsabilités qui m'ont été confiées très tôt dans ma carrière. Elle me permet de fonctionner efficacement dans des structures à faible densité managériale, d'apporter de la valeur sans avoir besoin d'être micro-managé, et d'évoluer rapidement en prenant des initiatives qui auraient pu rester dans le domaine de mes supérieurs. Dans mon projet professionnel à long terme — évoluer vers un rôle de tech lead ou d'architecte logiciel — l'autonomie est un prérequis absolu : ces rôles impliquent par définition de prendre des décisions techniques importantes sans validation systématique d'une hiérarchie.`,
        vitesse: `L'autonomie ne s'acquiert pas de façon progressive et linéaire comme une compétence technique : elle se développe par bonds, au travers de situations qui forcent à sortir de la zone de confort et à agir sans filet. Chacune de mes trois expériences professionnelles — Interpane, DGS Création, Synergie Développement — m'a placé dans des situations où l'autonomie n'était pas une option mais une nécessité. C'est précisément pour cette raison que l'alternance m'a formé plus efficacement à l'autonomie que n'importe quelle formation académique : les environnements professionnels réels ont des exigences et des enjeux que les simulations académiques ne peuvent pas reproduire.`,
        recul: `La nuance la plus importante que j'ai apprise sur l'autonomie est la distinction entre autonomie et isolement. Pendant une période chez Synergie Développement, face à un problème particulièrement complexe sur Tschoeppe Live, j'ai passé plusieurs jours à chercher la solution seul plutôt que de solliciter une aide externe, par une forme d'orgueil ou de peur de paraître incompétent. Ce comportement m'a coûté du temps et de l'énergie que j'aurais pu éviter en posant plus tôt la question à la bonne personne. La leçon que j'en ai tirée : l'autonomie n'implique pas de refuser l'aide, elle implique de savoir quand et comment solliciter de l'aide de façon efficace. Un développeur autonome qui sait s'appuyer sur les ressources disponibles — documentation, communautés, collègues — est infiniment plus efficace qu'un développeur solitaire qui refuse toute assistance par principe.`,
      },

      evolution: {
        objectif: `Mon objectif d'évolution sur la compétence autonomie est de la transformer en capacité de leadership : passer de l'autonomie individuelle à la capacité à développer l'autonomie d'une équipe. Cela implique d'apprendre à déléguer efficacement, à faire confiance aux choix techniques des autres développeurs tout en maintenant une vision d'ensemble cohérente, et à créer un environnement où chaque membre de l'équipe se sent suffisamment en confiance pour prendre des initiatives. L'objectif concret est de prendre des responsabilités de tech lead sur un projet d'équipe dans les douze à dix-huit prochains mois, ce qui constituera le premier test grandeur nature de cette évolution.`,
        formations: `Lectures sur le leadership technique : "The Staff Engineer's Path" de Tanya Reilly et "An Elegant Puzzle" de Will Larson. Intérêt pour le mentoring de développeurs juniors comme première expérience de développement de l'autonomie des autres. Exploration des patterns de délégation et de prise de décision distribuée dans les équipes Agile.`,
      },

      realisations: [
        { label: 'Tschoeppe Live', route: '/projets/4' },
        { label: 'GPAO – Interpane', route: '/projets/2' },
      ],
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.skill = this.allSkills.find((s) => s.id === id);
  }

  scrollTo(id: string): void {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  levelLabel(score: number): string {
    if (score >= 9) return 'Expert';
    if (score >= 7) return 'Avancé';
    if (score >= 5) return 'Intermédiaire';
    return 'Débutant';
  }

  levelColor(score: number): string {
    if (score >= 9) return 'text-red-600 bg-red-50 border-red-200';
    if (score >= 7) return 'text-orange-600 bg-orange-50 border-orange-200';
    return 'text-yellow-600 bg-yellow-50 border-yellow-200';
  }
}
