import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

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

  private allSkills: SkillDetail[] = [
    // ─────────────────────────────────────────────────────
    // JAVA
    // ─────────────────────────────────────────────────────
    {
      id: 'java',
      name: 'Java',
      icon: 'assets/img/java.svg',
      category: 'technique',
      level: 9,
      tagline: 'Mon langage de prédilection en entreprise',
      definition: `Java est un langage de programmation orienté objet compilé en bytecode et exécuté sur la JVM (Java Virtual Machine). Créé en 1995, il constitue aujourd'hui l'un des piliers du développement logiciel en entreprise grâce à sa robustesse, sa portabilité et son vaste écosystème. Avec les LTS récentes (Java 17, Java 21) et l'introduction des records, sealed classes et virtual threads (Project Loom), Java connaît une renaissance qui le maintient très compétitif face à des langages plus récents comme Kotlin ou Go. Dans les systèmes d'information d'entreprise, Java reste un choix de référence pour sa maintenabilité à long terme et sa performance.`,
      anecdotes: [
        {
          texte: `Chez Groupe Synergie Développement, je travaille sur la maintenance et l'évolution de Tschoeppe Live, un logiciel de dessin 2D en Java. J'ai repris ce projet sans documentation ni référent technique disponible, en analysant seul une base de code conséquente pour identifier les bugs signalés par les utilisateurs et apporter des corrections robustes sans introduire de régressions.`,
          resultat: `Correction de plusieurs bugs critiques bloquants en production, stabilisation de l'application et amélioration de la fiabilité perçue par les utilisateurs finaux.`,
          valeurAjoutee: `Ma capacité à naviguer dans du code legacy sans documentation a permis à l'entreprise de maintenir un outil métier essentiel sans interruption de service, évitant un recours coûteux à un prestataire externe.`,
          realisationLink: { label: 'Tschoeppe Live', route: '/realisations/4' }
        }
      ],
      autocritique: {
        niveau: {
          score: 9,
          label: 'Expert',
          detail: `Je suis autonome sur Java pour des projets métiers complexes : architecture POO, gestion des exceptions, interaction avec des bases de données, manipulation de fichiers. Je reste en exploration active sur les fonctionnalités Java 21+.`
        },
        importance: `Java est ma compétence technique la plus stratégique. C'est le langage de mon CDI actuel chez Synergie Développement, et celui dans lequel j'interviens quotidiennement sur Tschoeppe Live. Son importance dans mon profil est maximale.`,
        vitesse: `Ma montée en compétence a été rapide et contrainte par le réel : pas de formation formelle, mais l'obligation de reprendre du code legacy en production dès le premier jour. Cette pression a considérablement accéléré mon apprentissage — je n'aurais pas progressé aussi vite dans un contexte purement académique.`,
        recul: `Ne jamais sous-estimer la lecture du code existant avant toute réécriture. Comprendre les intentions du développeur initial évite des régressions coûteuses. Je me conseillerais également d'investir dans les tests unitaires dès le début d'un projet Java — c'est le meilleur filet de sécurité face à des bases de code complexes.`
      },
      evolution: {
        objectif: `Consolider mes bases sur les fonctionnalités modernes de Java 21 (records, sealed classes, virtual threads) et explorer Spring Boot pour des projets d'API back-end. À moyen terme, conduire l'architecture technique d'un projet Java de bout en bout.`,
        formations: `Autoformation en cours via la documentation officielle Java 21. Exploration prévue de Spring Framework et des patterns microservices.`
      },
      realisations: [
        { label: 'Tschoeppe Live', route: '/realisations/4' }
      ]
    },

    // ─────────────────────────────────────────────────────
    // DOCKER
    // ─────────────────────────────────────────────────────
    {
      id: 'docker',
      name: 'Docker',
      icon: 'assets/img/docker.svg',
      category: 'technique',
      level: 7,
      tagline: 'La conteneurisation au service de la reproductibilité',
      definition: `Docker est une plateforme de conteneurisation open source qui permet d'empaqueter une application et toutes ses dépendances dans un conteneur léger et portable. Contrairement aux machines virtuelles, les conteneurs partagent le noyau du système hôte, ce qui les rend beaucoup plus légers et rapides à démarrer. Docker est devenu incontournable dans les environnements DevOps modernes : il garantit que l'application fonctionne de manière identique en développement, en test et en production, éliminant le problème du "ça marche sur ma machine". En 2025, Docker reste la référence pour la conteneurisation, souvent couplé à Kubernetes pour l'orchestration.`,
      anecdotes: [
        {
          texte: `Chez Groupe Synergie Développement, j'ai mis en place la conteneurisation de plusieurs services de l'infrastructure. L'objectif était de standardiser les environnements de déploiement et de faciliter la portabilité des applications entre différents serveurs.`,
          resultat: `Réduction significative des problèmes liés aux incompatibilités d'environnement. Les déploiements sont devenus plus rapides et reproductibles.`,
          valeurAjoutee: `Introduction d'une pratique DevOps concrète dans une structure qui n'en avait pas, apportant une vraie valeur sur la maintenabilité des services.`,
          realisationLink: { label: 'Tschoeppe Live', route: '/realisations/4' }
        }
      ],
      autocritique: {
        niveau: {
          score: 7,
          label: 'Avancé',
          detail: `Je maîtrise les fondamentaux de Docker : images, conteneurs, volumes, réseaux, Dockerfile et docker-compose. Je suis autonome pour conteneuriser des applications standard. Je n'ai pas encore d'expérience approfondie avec l'orchestration à grande échelle (Kubernetes).`
        },
        importance: `Docker est un outil important dans mon profil de développeur moderne. Il m'a permis d'apporter une dimension DevOps à mes projets et de me différencier en entreprise. Il reste complémentaire à mes compétences de développement pur, mais de plus en plus attendu dans les offres d'emploi senior.`,
        vitesse: `Acquise en autodidacte sur un projet professionnel réel. La courbe d'apprentissage est accessible pour les bases, mais la maîtrise des cas avancés (réseaux complexes, optimisation d'images multi-stage) demande du temps et de la pratique.`,
        recul: `Commencer par bien comprendre le réseau Docker avant de construire des stacks multi-services évite beaucoup de frustration. Ne jamais copier-coller un Dockerfile sans le comprendre : chaque instruction a un impact direct sur la taille de l'image finale et la sécurité du conteneur.`
      },
      evolution: {
        objectif: `Explorer Docker Swarm et Kubernetes pour les environnements de production complexes. L'objectif est d'atteindre un profil DevOps complet, capable de gérer l'infrastructure aussi bien que le code.`,
        formations: `Exploration de Docker Swarm en environnement de test personnel. Kubernetes est dans ma liste de priorités à court terme.`
      },
      realisations: [
        { label: 'Tschoeppe Live', route: '/realisations/4' }
      ]
    },

    // ─────────────────────────────────────────────────────
    // PRESTASHOP
    // ─────────────────────────────────────────────────────
    {
      id: 'prestashop',
      name: 'PrestaShop',
      icon: 'assets/img/prestashop.png',
      category: 'technique',
      level: 7,
      tagline: "L'e-commerce open source maîtrisé en contexte agence",
      definition: `PrestaShop est un CMS e-commerce open source écrit en PHP, permettant de créer et gérer des boutiques en ligne. Lancé en 2007, il est utilisé par des centaines de milliers de marchands, particulièrement en Europe. Son architecture modulaire permet d'étendre ses fonctionnalités via des modules natifs ou personnalisés. Avec l'essor du commerce headless, PrestaShop a évolué pour proposer des options d'API-first, mais reste majoritairement utilisé en mode traditionnel dans les PME pour sa facilité de prise en main et son large écosystème.`,
      anecdotes: [
        {
          texte: `Chez DGS Création, j'ai développé et livré Uberti.shop, une boutique en ligne complète pour la marque Uberti (bio, naturel & bien-être). Le projet comprenait la création d'un thème 100% personnalisé, l'intégration du catalogue complet et le développement de modules sur mesure pour répondre à des besoins non couverts par les extensions natives.`,
          resultat: `Livraison d'une boutique e-commerce fonctionnelle avec un design cohérent avec l'identité de la marque, une navigation fluide et une administration simplifiée pour les équipes internes.`,
          valeurAjoutee: `Capacité à dépasser les limitations des modules natifs en développant des solutions PHP sur mesure, différenciant la proposition de l'agence face à des solutions génériques clé en main.`,
          realisationLink: { label: 'Uberti.shop', route: '/realisations/1' }
        }
      ],
      autocritique: {
        niveau: {
          score: 7,
          label: 'Avancé',
          detail: `Je maîtrise l'installation, la personnalisation de thèmes, le développement de modules et l'utilisation des overrides PrestaShop. Je connais l'architecture MVC du CMS et sais intervenir à différents niveaux : template Smarty, override de classes, création de modules.`
        },
        importance: `PrestaShop était une compétence centrale dans mon profil d'agence web. Elle est aujourd'hui moins utilisée dans mon CDI actuel, mais reste un atout pour des missions e-commerce ou des évolutions en contexte freelance.`,
        vitesse: `Acquise rapidement sous pression des délais clients en agence. L'immersion opérationnelle est le mode d'apprentissage le plus efficace pour ce type d'outil, bien plus qu'une formation théorique.`,
        recul: `Toujours lire la documentation avant de modifier le core de PrestaShop. Les overrides sont préférables aux modifications directes pour garantir la maintenabilité lors des mises à jour. Un module bien documenté évite de nombreuses heures de débogage futur.`
      },
      evolution: {
        objectif: `Explorer l'approche headless de PrestaShop pour des architectures plus modernes combinant un back PrestaShop avec un front Angular ou Next.js.`,
        formations: `Veille sur PrestaShop 8 et ses nouvelles API. Exploration possible du commerce headless à titre personnel.`
      },
      realisations: [
        { label: 'Uberti.shop', route: '/realisations/1' }
      ]
    },

    // ─────────────────────────────────────────────────────
    // ANGULAR
    // ─────────────────────────────────────────────────────
    {
      id: 'angular',
      name: 'Angular',
      icon: 'assets/img/angular.png',
      category: 'technique',
      level: 7,
      tagline: 'Le framework TypeScript de mes interfaces modernes',
      definition: `Angular est un framework front-end open source développé par Google, basé sur TypeScript. Il propose une architecture en composants, un système d'injection de dépendances, un routeur intégré et de nombreux outils pour construire des Single Page Applications (SPA) robustes. Depuis Angular 14, le framework évolue vers les "standalone components" supprimant les NgModules pour les projets simples. Angular 17 a introduit les Signals, un nouveau mécanisme de réactivité plus performant. Plébiscité dans les grandes organisations pour sa structure opinionnée et sa maintenabilité, Angular est aujourd'hui l'un des trois grands frameworks front-end avec React et Vue.`,
      anecdotes: [
        {
          texte: `J'ai développé l'intégralité de ce portfolio professionnel en Angular 17 avec des composants standalone, Tailwind CSS et des animations CSS pour les transitions. C'est mon premier projet Angular conséquent mené de bout en bout, de l'architecture au déploiement.`,
          resultat: `Portfolio fonctionnel, déployé et présenté dans le cadre de mon évaluation de Master Expert en Ingénierie Logicielle à l'ISCOD.`,
          valeurAjoutee: `Montée en compétence autonome sur un framework majeur, en partant de zéro et en livrant un produit complet dans un délai contraint. Preuve concrète de ma capacité d'apprentissage rapide sur des technologies non maîtrisées.`
        }
      ],
      autocritique: {
        niveau: {
          score: 7,
          label: 'Avancé',
          detail: `Je maîtrise les concepts fondamentaux d'Angular : composants standalone, routing, data binding, services, pipes, directives. Je suis en cours d'exploration des Signals et des patterns avancés (lazy loading, state management).`
        },
        importance: `Angular est une compétence stratégique dans ma trajectoire de développeur full-stack. Elle me positionne sur le marché des projets d'entreprise où les SPA typées sont la norme. Dans mon CDI actuel, elle est utilisée principalement pour ce portfolio, mais constitue une base solide pour des projets futurs.`,
        vitesse: `Appris en autodidacte dans le cadre de ce portfolio. La documentation officielle est excellente et le fait d'avoir un projet concret comme fil conducteur a accéléré ma compréhension bien plus qu'un tutoriel théorique.`,
        recul: `Maîtriser RxJS est indispensable pour vraiment tirer parti d'Angular. Je me conseillerais de commencer par les Observables et les Subjects avant de me lancer dans des composants complexes. Penser "composants réutilisables" dès le début évite aussi beaucoup de refactoring.`
      },
      evolution: {
        objectif: `Approfondir les Signals Angular, explorer NgRx pour la gestion d'état et me former aux tests unitaires (Jasmine/Jest). L'objectif est de prendre en charge un projet Angular d'entreprise de bout en bout.`,
        formations: `Formation en cours via la documentation officielle Angular 17+. Exploration prévue de NgRx et des tests E2E avec Cypress.`
      },
      realisations: []
    },

    // ─────────────────────────────────────────────────────
    // PHP
    // ─────────────────────────────────────────────────────
    {
      id: 'php',
      name: 'PHP',
      icon: 'assets/img/php.png',
      category: 'technique',
      level: 8,
      tagline: "Un pilier du web que j'ai poussé à ses limites modernes",
      definition: `PHP (Hypertext Preprocessor) est un langage de programmation open source largement utilisé pour le développement web côté serveur. Sa simplicité et sa compatibilité avec la plupart des hébergeurs en font un choix incontournable pour le web, alimentant aujourd'hui plus de 75% des sites à moteur de script serveur — notamment WordPress, Drupal et PrestaShop. Avec les mises à jour PHP 8.x apportant les unions de types, les named arguments et les améliorations JIT, PHP reste un choix pertinent pour des applications robustes. Son écosystème de frameworks modernes (Symfony, Laravel) permet des architectures enterprise-grade comparables à Java ou .NET.`,
      anecdotes: [
        {
          texte: `Chez Interpane, j'ai pris en charge la migration complète d'un logiciel GPAO de PHP 3 vers PHP 8 et Symfony, en l'absence totale de documentation et de référent technique. J'ai analysé l'architecture existante, défini la nouvelle structure Symfony et migré progressivement les fonctionnalités.`,
          resultat: `Livraison d'une version stable et documentée du nouveau logiciel, passant d'un code obsolète et impossible à maintenir à une architecture moderne et extensible.`,
          valeurAjoutee: `Sauvetage d'un outil métier critique en fin de vie. Ma décision de migrer vers Symfony a donné plusieurs années supplémentaires de durée de vie au logiciel, sans qu'Interpane ait à investir dans un développement from scratch.`,
          realisationLink: { label: 'GPAO – Interpane', route: '/realisations/2' }
        },
        {
          texte: `Chez DGS Création, j'ai développé des modules PHP personnalisés pour WordPress et PrestaShop, notamment sur le projet Uberti.shop, dépassant les limites des plugins natifs pour répondre à des besoins métiers spécifiques.`,
          resultat: `Modules fonctionnels livrés et utilisés en production, répondant à des besoins non couverts par les solutions génériques du marché.`,
          valeurAjoutee: `Capacité à concevoir des solutions PHP sur mesure là où les outils existants montraient leurs limites, différenciant l'agence de concurrents proposant uniquement des modules préfabriqués.`,
          realisationLink: { label: 'Uberti.shop', route: '/realisations/1' }
        }
      ],
      autocritique: {
        niveau: {
          score: 8,
          label: 'Avancé',
          detail: `Je suis à l'aise avec PHP aussi bien en développement "from scratch" qu'avec Symfony, WordPress ou PrestaShop. Je maîtrise la POO PHP, Doctrine ORM, Twig, et les bonnes pratiques modernes (namespaces, Composer, PSR).`
        },
        importance: `PHP reste la technologie back-end qui couvre le plus large spectre de mes expériences professionnelles. Même si Java est aujourd'hui ma compétence principale, PHP est incontournable dans mon profil pour tout contexte web ou agence.`,
        vitesse: `Ma montée en compétence PHP a été progressive mais efficace. La migration PHP 3 → PHP 8 chez Interpane a été l'accélérateur le plus significatif : rien ne force à comprendre un langage mieux que devoir assumer la totalité d'un projet existant.`,
        recul: `Prendre le temps de comprendre Composer et la gestion des dépendances dès le début est indispensable. Je conseillerais aussi d'apprendre Symfony avant WordPress — le premier forme les bonnes habitudes que le second ne demande pas.`
      },
      evolution: {
        objectif: `Approfondir les tests automatisés en PHP (PHPUnit) et explorer Laravel comme alternative à Symfony. À plus long terme, m'intéresser à l'intégration continue pour les projets PHP.`,
        formations: `Veille active sur PHP 8.3+. Exploration personnelle de Laravel et des patterns CQRS en PHP.`
      },
      realisations: [
        { label: 'GPAO – Interpane', route: '/realisations/2' },
        { label: 'Uberti.shop',      route: '/realisations/1' }
      ]
    },

    // ─────────────────────────────────────────────────────
    // WORDPRESS
    // ─────────────────────────────────────────────────────
    {
      id: 'wordpress',
      name: 'WordPress',
      icon: 'assets/img/wordpress.png',
      category: 'technique',
      level: 8,
      tagline: 'Le CMS dominant, maîtrisé au-delà des plugins',
      definition: `WordPress est un CMS open source écrit en PHP, alimentant aujourd'hui plus de 40% des sites web mondiaux. Initialement conçu pour le blogging, il a évolué en un CMS polyvalent grâce à son écosystème de 60 000 plugins et ses thèmes. L'arrivée de l'éditeur de blocs Gutenberg et du Full Site Editing a transformé WordPress en un véritable constructeur de sites visuels, tandis que l'API REST native permet des architectures headless découplant le back WordPress d'un front React ou Angular. WordPress reste la solution incontournable pour les sites vitrines et les projets nécessitant une interface d'administration accessible aux non-techniciens.`,
      anecdotes: [
        {
          texte: `Chez DGS Création, j'ai développé et livré LD Éclairage, un site vitrine avec catalogue et système de demande de devis, basé sur WordPress avec ACF et WooCommerce en mode catalogue. Le projet nécessitait une interface d'administration simple pour que le client puisse gérer son catalogue produits en autonomie.`,
          resultat: `Livraison d'un site vitrine professionnel avec une gestion de catalogue flexible et un formulaire de devis fonctionnel, pris en main rapidement par le client sans formation lourde.`,
          valeurAjoutee: `Conception d'une architecture éditoriale sur mesure avec ACF permettant au client de gérer ses produits comme un vrai back-office, sans la complexité d'un e-commerce complet.`,
          realisationLink: { label: 'LD Éclairage', route: '/realisations/3' }
        },
        {
          texte: `J'ai développé le site de l'Atelier des Créatrices Solidaires, une association cherchant à valoriser ses actions en ligne tout en anticipant une future boutique solidaire. Le projet impliquait de poser un socle WordPress évolutif, simple à administrer par des bénévoles non-techniciens.`,
          resultat: `Plateforme stable et régulièrement mise à jour par les bénévoles, avec une architecture déjà prête pour l'activation de la boutique solidaire.`,
          valeurAjoutee: `Rédaction d'une documentation bénévole et conception de blocs réutilisables permettant à l'association d'être totalement autonome dans la gestion de son contenu.`,
          realisationLink: { label: 'Atelier des Créatrices Solidaires', route: '/realisations/5' }
        }
      ],
      autocritique: {
        niveau: {
          score: 8,
          label: 'Avancé',
          detail: `Je maîtrise WordPress dans toutes ses dimensions : thèmes enfants, développement de plugins custom, ACF, WooCommerce, hooks (actions/filtres), WP_Query et optimisation des performances.`
        },
        importance: `WordPress reste l'une des compétences les plus demandées sur le marché du web, particulièrement en contexte agence ou freelance. Dans mon CDI actuel, elle est moins sollicitée, mais constitue un atout différenciateur fort.`,
        vitesse: `Acquise rapidement grâce à l'immersion en agence. Les premiers projets m'ont donné les bases ; c'est la diversité des cas clients qui m'a vraiment fait progresser vers une maîtrise avancée.`,
        recul: `Ne pas systématiquement chercher un plugin pour tout résoudre. Pour des fonctionnalités simples, coder un mini-plugin personnalisé est souvent plus propre et performant. Et toujours tester les mises à jour de plugins sur un environnement de staging avant la production.`
      },
      evolution: {
        objectif: `Explorer WordPress en mode headless, combinant un back WordPress avec l'API REST et un front Angular. Cette approche permettrait d'unir la flexibilité du back WordPress avec les performances d'un SPA moderne.`,
        formations: `Veille sur l'écosystème WP headless. Exploration personnelle d'une architecture WP REST API + Angular.`
      },
      realisations: [
        { label: 'LD Éclairage',                     route: '/realisations/3' },
        { label: 'Atelier des Créatrices Solidaires', route: '/realisations/5' }
      ]
    },

    // ─────────────────────────────────────────────────────
    // COMMUNICATION
    // ─────────────────────────────────────────────────────
    {
      id: 'communication',
      name: 'Communication',
      icon: 'assets/img/communication.png',
      category: 'humaine',
      level: 8,
      tagline: 'Transmettre clairement dans un contexte technique',
      definition: `La communication professionnelle dans les métiers du développement englobe deux dimensions indissociables : technique (documenter, commenter, rédiger des spécifications) et relationnelle (écouter, vulgariser, convaincre). Avec la généralisation des méthodes Agile et des équipes distribuées, la communication est devenue une compétence à part entière pour un développeur. Savoir expliquer une contrainte technique à un directeur, documenter une API pour ses collègues ou présenter une solution en réunion sont des situations qui font la différence entre un bon et un excellent ingénieur logiciel.`,
      anecdotes: [
        {
          texte: `Chez DGS Création, j'étais en contact direct avec les clients tout au long des projets : de la phase de recueil de besoins jusqu'à la livraison et la formation à l'utilisation. Je devais régulièrement traduire des contraintes techniques en termes accessibles à des clients non-techniciens.`,
          resultat: `Réduction des allers-retours de modification grâce à une compréhension précise des attentes dès le départ, et taux de satisfaction élevé sur les projets dont j'assurais le suivi.`,
          valeurAjoutee: `Ma capacité à vulgariser les aspects techniques a permis d'établir une relation de confiance avec les clients, favorisant des échanges efficaces et limitant les incompréhensions coûteuses.`
        },
        {
          texte: `Dans le cadre de mon Master à l'ISCOD, j'ai produit de nombreux livrables professionnels : rapports d'activité, documentations techniques, présentations de projet. Cet exercice régulier m'a permis de structurer et formaliser ma communication écrite.`,
          resultat: `Livrables validés par les jurys avec des retours positifs sur la qualité rédactionnelle et la clarté de la présentation.`,
          valeurAjoutee: `Développement d'une capacité à produire des documents professionnels accessibles à différents publics, directement transférable à la documentation de projets en entreprise.`
        }
      ],
      autocritique: {
        niveau: {
          score: 8,
          label: 'Avancé',
          detail: `Je communique efficacement à l'écrit (documentation, rapports, emails professionnels) comme à l'oral (réunions, présentations, relation client). Je suis à l'aise pour vulgariser des sujets techniques et adapter mon discours à mon interlocuteur.`
        },
        importance: `La communication est une compétence transversale que je considère comme l'amplificateur de toutes mes compétences techniques. Un développeur qui ne sait pas communiquer ses solutions ne peut pas pleinement les valoriser. Dans mon métier actuel, elle est sollicitée quotidiennement.`,
        vitesse: `Cette compétence s'est développée progressivement grâce à l'alternance, qui confronte directement aux situations de communication réelle avec des clients, des collègues et des tuteurs aux attentes différentes.`,
        recul: `La communication technique s'améliore en écrivant régulièrement. Prendre l'habitude de rédiger pour un lecteur futur — qui ne connaît pas le contexte — change radicalement la qualité de sa documentation. Commenter son code comme si on l'expliquerait à quelqu'un d'autre est le meilleur exercice quotidien.`
      },
      evolution: {
        objectif: `Continuer à développer ma communication technique via la documentation de mes projets, et explorer la prise de parole dans des contextes professionnels (présentations techniques, meetups).`,
        formations: `Veille sur les bonnes pratiques de documentation technique (framework Diátaxis). Rédaction régulière de READMEs et de livrables dans le cadre de mes projets personnels.`
      },
      realisations: []
    },

    // ─────────────────────────────────────────────────────
    // GESTION DE PROJET
    // ─────────────────────────────────────────────────────
    {
      id: 'gestion-projet',
      name: 'Gestion de projet',
      icon: 'assets/img/gestion_de_projet.png',
      category: 'humaine',
      level: 7,
      tagline: "Piloter l'incertitude pour livrer dans les délais",
      definition: `La gestion de projet dans le développement logiciel consiste à planifier, organiser, suivre et livrer des projets dans les contraintes de temps, de budget et de qualité. Avec la complexité croissante des projets informatiques, les méthodes Agile (Scrum, Kanban) ont largement remplacé les approches en cascade, permettant une meilleure adaptabilité aux changements. Aujourd'hui, un développeur expérimenté ne peut ignorer les fondamentaux du management de projet : définition du périmètre, gestion des risques et communication avec les parties prenantes sont des compétences attendues bien au-delà du rôle de chef de projet.`,
      anecdotes: [
        {
          texte: `Chez Interpane, j'ai géré seul la migration du logiciel GPAO de PHP 3 vers PHP 8/Symfony, depuis l'analyse de l'existant jusqu'à la livraison finale, sans méthodologie formelle imposée. J'ai organisé mon travail de manière autonome : priorisation, suivi de l'avancement, gestion des imprévus techniques.`,
          resultat: `Livraison d'une version stable du nouveau logiciel accompagnée d'une documentation complète, dans les délais convenus avec l'entreprise.`,
          valeurAjoutee: `Capacité à mener un projet technique de bout en bout sans supervision directe, en prenant des décisions d'architecture autonomes et en gérant les risques de régression.`,
          realisationLink: { label: 'GPAO – Interpane', route: '/realisations/2' }
        }
      ],
      autocritique: {
        niveau: {
          score: 7,
          label: 'Avancé',
          detail: `Je suis autonome pour gérer des projets de taille moyenne en solo ou en petite équipe. Je maîtrise les bases des méthodes Agile et je suis à l'aise avec les outils de suivi courants (Jira, Trello, GitHub Projects). Je manque encore d'expérience sur des projets multi-équipes complexes.`
        },
        importance: `La gestion de projet est de plus en plus attendue des développeurs seniors. Dans mon CDI, je suis amené à organiser mon propre travail et à reporter l'avancement à la direction, ce qui nécessite des bases solides en planification et en communication de projet.`,
        vitesse: `Développée progressivement par la pratique sur des projets réels. Les formations Agile de l'ISCOD ont fourni le cadre théorique que j'ai pu ensuite appliquer concrètement.`,
        recul: `Ne jamais sous-estimer la documentation en cours de projet. Les notes prises pendant le développement valent de l'or lors des phases de livraison ou de maintenance ultérieure. Apprendre à dire non à des demandes hors périmètre est également une compétence de gestion de projet à part entière.`
      },
      evolution: {
        objectif: `Me former aux certifications Agile (PSM I) et explorer les outils de management de projet modernes. L'objectif est de pouvoir prendre des responsabilités de tech lead sur des projets d'équipe.`,
        formations: `Intérêt pour la certification PSM I. Utilisation active de GitHub Projects et Notion dans mes projets personnels.`
      },
      realisations: [
        { label: 'GPAO – Interpane', route: '/realisations/2' }
      ]
    },

    // ─────────────────────────────────────────────────────
    // RELATION CLIENT
    // ─────────────────────────────────────────────────────
    {
      id: 'relation-client',
      name: 'Relation client',
      icon: 'assets/img/relation_client.png',
      category: 'humaine',
      level: 7,
      tagline: 'Transformer les besoins en solutions comprises de tous',
      definition: `La relation client dans les métiers du numérique va bien au-delà du contact commercial. Elle englobe l'écoute active, la traduction des besoins en spécifications techniques, la gestion des attentes tout au long du projet et la livraison d'une solution qui répond véritablement aux problématiques métier. Dans un contexte d'agence web ou de développement sur mesure, la qualité de la relation client est souvent aussi importante que la qualité technique du livrable : un client bien accompagné est un client fidèle qui recommande.`,
      anecdotes: [
        {
          texte: `Chez DGS Création, j'assurais le suivi direct des clients tout au long des projets : de la réunion de kick-off pour recueillir les besoins jusqu'à la livraison finale et la formation à l'utilisation. Je gérais les retours clients et arbitrais les demandes de modifications en fonction du périmètre initial.`,
          resultat: `Taux de satisfaction élevé sur les projets dont j'assurais le suivi, avec des retours positifs sur la clarté de la communication et la réactivité aux demandes.`,
          valeurAjoutee: `Réduction significative des modifications de dernière minute grâce à une compréhension précise des attentes dès le départ, économisant du temps de développement et évitant des tensions.`
        }
      ],
      autocritique: {
        niveau: {
          score: 7,
          label: 'Avancé',
          detail: `Je suis à l'aise pour interagir avec des clients en face-à-face ou par écrit, recueillir et reformuler leurs besoins, et gérer les situations de feedback ou d'insatisfaction de manière constructive.`
        },
        importance: `La relation client est moins centrale dans mon CDI actuel (pas de contact direct avec des clients externes), mais reste une compétence précieuse qui différencie un développeur d'un simple exécutant et ouvre des responsabilités de type tech lead.`,
        vitesse: `Développée naturellement dans le contexte d'agence web, où chaque projet est associé à un client avec des attentes et un calendrier spécifiques. L'immersion est le meilleur apprentissage.`,
        recul: `Toujours reformuler la demande client par écrit avant de commencer le développement et faire valider cette reformulation. Ce simple réflexe évite 80% des malentendus coûteux. Séparer clairement ce qui est dans le périmètre de ce qui ne l'est pas est aussi une compétence à développer tôt.`
      },
      evolution: {
        objectif: `Continuer à développer cette compétence en m'impliquant dans les phases de cadrage projet chez Synergie et en cherchant des opportunités de contact avec les utilisateurs finaux des outils que je développe.`,
        formations: `Lecture de littérature sur la communication non-violente. Application quotidienne dans les échanges professionnels.`
      },
      realisations: []
    },

    // ─────────────────────────────────────────────────────
    // AUTONOMIE
    // ─────────────────────────────────────────────────────
    {
      id: 'autonomie',
      name: 'Autonomie',
      icon: 'assets/img/autonomie.png',
      category: 'humaine',
      level: 9,
      tagline: 'Avancer seul, décider vite, livrer quand même',
      definition: `L'autonomie est une compétence clé dans les métiers du numérique où les projets sont complexes, évolutifs et impliquent souvent des équipes réduites ou distribuées. Être autonome, c'est savoir organiser son travail, prendre des décisions pertinentes sans supervision constante, résoudre des problèmes de manière proactive et rester efficace même dans des environnements incertains. Dans un secteur où les technologies évoluent sans cesse, cette capacité à s'autoformer et à anticiper les besoins est un atout précieux. L'autonomie n'exclut pas le travail en équipe — au contraire, un collaborateur autonome sait quand avancer seul et quand consulter ou alerter.`,
      anecdotes: [
        {
          texte: `Chez Groupe Synergie Développement, suite au départ de plusieurs membres du service informatique, je me suis retrouvé seul en charge de Tschoeppe Live sans supervision directe pendant plusieurs semaines. J'ai dû analyser et corriger des bugs critiques sur ce logiciel de dessin 2D Java tout en poursuivant le développement de nouvelles fonctionnalités.`,
          resultat: `Maintien opérationnel du logiciel sans interruption de service, et livraison des fonctionnalités prévues dans les délais malgré l'absence d'encadrement.`,
          valeurAjoutee: `Démonstration concrète de ma capacité à porter des responsabilités importantes sans supervision, ce qui m'a valu la confiance de la direction et une embauche en CDI.`,
          realisationLink: { label: 'Tschoeppe Live', route: '/realisations/4' }
        },
        {
          texte: `Chez Interpane, en l'absence totale de documentation et de référent technique, j'ai pris l'initiative de migrer seul le logiciel GPAO de PHP 3 vers Symfony, en redéfinissant l'architecture et en créant une documentation complète.`,
          resultat: `Livraison d'un logiciel modernisé avec documentation, permettant à l'équipe de continuer à le maintenir et l'enrichir après mon départ.`,
          valeurAjoutee: `Ma prise d'initiative sur les choix d'architecture (Symfony plutôt qu'une simple mise à jour PHP) a considérablement prolongé la durée de vie du logiciel et réduit la dette technique.`,
          realisationLink: { label: 'GPAO – Interpane', route: '/realisations/2' }
        }
      ],
      autocritique: {
        niveau: {
          score: 9,
          label: 'Expert',
          detail: `Je suis reconnu pour mon autonomie par mes différents employeurs. Je suis capable de prendre en charge des sujets complexes sans encadrement, de prendre des décisions techniques responsables et de les assumer.`
        },
        importance: `L'autonomie est probablement ma compétence la plus différenciante. Elle m'a permis de créer de la valeur dans des contextes où d'autres auraient attendu des instructions. Dans mon CDI actuel, elle est reconnue et attendue explicitement.`,
        vitesse: `L'autonomie ne s'apprend pas, elle se forge dans les situations de contrainte. Chacune de mes expériences m'a confronté à des moments où je devais avancer sans filet — c'est dans ces moments que cette compétence se développe vraiment.`,
        recul: `L'autonomie mal calibrée peut devenir de l'isolement. La nuance importante que j'ai apprise : savoir quand alerter est aussi important que savoir avancer seul. Un développeur autonome qui cache ses blocages pendant trop longtemps crée plus de problèmes qu'il n'en résout.`
      },
      evolution: {
        objectif: `Canaliser cette autonomie vers des responsabilités de leadership technique : être autonome pour un projet solo est acquis, l'enjeu suivant est d'embarquer une équipe dans cette dynamique.`,
        formations: `Lectures sur le leadership technique et l'architecture logicielle. Objectif de prendre des responsabilités de tech lead sur un projet dans les 12 prochains mois.`
      },
      realisations: [
        { label: 'Tschoeppe Live',   route: '/realisations/4' },
        { label: 'GPAO – Interpane', route: '/realisations/2' }
      ]
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.skill = this.allSkills.find(s => s.id === id);
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