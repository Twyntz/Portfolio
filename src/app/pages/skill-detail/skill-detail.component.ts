import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-detail.component.html',
  styleUrls: ['./skill-detail.component.scss']
})
export class SkillDetailComponent implements OnInit {
  skillId: string = '';
  skill: any;

  allSkills = [
  {
    id: 'html',
    name: 'HTML',
    icon: 'assets/img/html.png',
    html: `
      <h2>Introduction</h2>
      <p>HTML (HyperText Markup Language) est le langage fondamental du web. Il permet de structurer le contenu des pages en définissant les différents éléments tels que les titres, paragraphes, tableaux, images, formulaires ou liens. Il constitue la base de tout site ou application web, sur laquelle viennent s’ajouter les feuilles de style (CSS) et les scripts (JavaScript) pour créer des interfaces modernes et interactives.</p>

      <p>Facile à prendre en main mais exigeant pour une utilisation optimale, HTML est essentiel pour assurer une bonne lisibilité du code, une accessibilité correcte, et une compatibilité multi-navigateurs. Dans un environnement professionnel, sa maîtrise est indispensable pour garantir des pages bien structurées, maintenables et performantes.</p>

      <h2>Mon expérience vécue</h2>
      <p>J’ai eu l’occasion de travailler avec HTML sur un grand nombre de projets web, notamment lors de mon expérience chez DGS Création, mais également dans le cadre de projets personnels ou académiques.</p>

      <p>Chez DGS Création, j’ai participé à la réalisation de nombreux sites web, qu’ils soient vitrines ou e-commerce, en m’appuyant sur des technologies comme WordPress, PrestaShop ou encore Symfony. Dans chacun de ces projets, HTML constituait l’élément central pour construire l’ossature des pages, intégrer les maquettes graphiques, créer des formulaires fonctionnels, ou encore structurer le contenu de manière cohérente.</p>

      <p>Un point auquel je portais une attention particulière était l’impact du HTML sur le référencement naturel (SEO). Je veillais toujours à utiliser les balises sémantiques appropriées (&lt;header&gt;, &lt;main&gt;, &lt;section&gt;, &lt;article&gt;, &lt;h1&gt;, &lt;p&gt;, etc.), à structurer correctement les titres et sous-titres (&lt;h1&gt; à &lt;h6&gt;), et à optimiser le contenu pour les moteurs de recherche tout en restant accessible pour les utilisateurs. J'étais également attentif à l'attribut alt des images, aux balises de méta-informations, et à la hiérarchie logique du contenu, afin de garantir une indexation efficace par les moteurs de recherche.</p>

      <h2>Mon niveau de compétence</h2>
      <p>Grâce à ces expériences, j’ai acquis une maîtrise solide des fondamentaux de HTML, ainsi qu’une bonne compréhension des pratiques modernes :</p>
      <ul>
        <li>Utilisation des balises sémantiques pour améliorer la clarté du code et le SEO,</li>
        <li>Création de structures modulaires, réutilisables et compatibles avec des frameworks front-end,</li>
        <li>Intégration de formulaires, d’éléments multimédias et de contenus dynamiques,</li>
        <li>Sensibilisation aux normes d’accessibilité et à la structuration logique des pages.</li>
      </ul>
      <p>Je suis également à l’aise pour collaborer avec des designers, intégrer des maquettes en HTML/CSS, et adapter les structures HTML à différents contextes techniques (CMS, frameworks, responsive design…).</p>

      <p>À court terme, je souhaite continuer à perfectionner ma pratique du HTML, notamment en approfondissant les aspects liés à l’accessibilité web (WCAG, ARIA) et à l’intégration front-end moderne avec des frameworks comme Angular, que j’utilise dans mon projet de fin d’études. Ma priorité est de concevoir des interfaces robustes, évolutives et respectueuses des standards du web.</p>
    `
  },
  {
    id: 'php',
    name: 'PHP',
    icon: 'assets/img/php.png',
    html: `
      <h2>Introduction</h2>
      <p>PHP (Hypertext Preprocessor) est un langage de programmation open source largement utilisé pour le développement web côté serveur. Apprécié pour sa simplicité, sa flexibilité et sa grande compatibilité avec les serveurs et bases de données, il reste aujourd’hui un pilier incontournable dans la création de sites et d’applications dynamiques. Malgré l’émergence de technologies plus récentes, PHP continue d’alimenter une grande partie du web mondial, notamment à travers des plateformes populaires comme WordPress, Drupal ou Prestashop.</p>

      <p>Ce langage permet aux développeurs d’interagir facilement avec des bases de données, de gérer des sessions, de traiter des formulaires et de générer dynamiquement du contenu HTML. Grâce à son vaste écosystème, de nombreux frameworks PHP tels que Laravel, Symfony ou CodeIgniter ont vu le jour, offrant des outils puissants pour structurer le code, accélérer le développement, et respecter les bonnes pratiques.</p>

      <p>Avec les mises à jour régulières du langage, dont les plus récentes (comme PHP 8 et PHP 8.1) apportent des améliorations majeures en termes de performance et de lisibilité, PHP reste un choix pertinent aussi bien pour les projets simples que pour les applications web complexes. Sa communauté active et ses innombrables ressources en font un langage accessible, que ce soit pour un développeur débutant ou confirmé.</p>

      <h2>Mon expérience vécue</h2>
      <p>PHP est un langage que j’ai eu l’occasion de pratiquer dans plusieurs contextes professionnels, aussi bien dans sa forme « pure » qu’à travers l’utilisation de frameworks comme Symfony, ou de CMS tels que WordPress et PrestaShop. Grâce à sa syntaxe simple et sa large communauté, PHP m’a permis de développer rapidement des solutions web robustes et évolutives.</p>

      <p>Ma première véritable expérience avec PHP a eu lieu chez Interpane, lors d’une mission de refonte d’un logiciel interne de gestion de production assistée par ordinateur (GPAO). Le logiciel existant avait été développé sous PHP 3, une version obsolète et difficile à maintenir. J’ai d’abord étudié l’architecture existante, puis proposé une solution basée sur Symfony, afin de bénéficier d’une structure moderne et mieux organisée. J’ai progressivement migré les fonctionnalités vers ce nouveau socle, tout en améliorant l’ergonomie et la maintenabilité du code. À la fin de mon passage dans l’entreprise, j’ai livré une version stable du nouveau logiciel accompagnée d’une documentation complète, permettant à l’équipe technique de le maintenir et de le faire évoluer sereinement.</p>

      <p>Par la suite, chez DGS Création, j’ai travaillé sur plusieurs projets de sites web pour des clients variés. PHP était au cœur de la plupart de ces projets, que ce soit via WordPress, PrestaShop ou Symfony. J’ai notamment été amené à développer des modules personnalisés pour WordPress et PrestaShop, afin de répondre à des besoins métiers spécifiques, comme la gestion d’options produit complexes ou l’intégration de passerelles de paiement. J’ai également participé à la création de sites sur mesure en Symfony, me permettant de concevoir des architectures plus flexibles et orientées métier.</p>

      <h2>Mon niveau de compétence</h2>
      <p>Aujourd’hui, je me considère à l’aise avec PHP, aussi bien en développement « from scratch » qu’en environnement structuré avec un framework ou un CMS. J’ai eu l’occasion d’utiliser le langage pour développer des solutions concrètes, maintenables et adaptées aux besoins de mes clients ou de mon entreprise.</p>

      <p>J’ai notamment acquis de solides compétences en :</p>
      <ul>
        <li>Programmation orientée objet avec PHP</li>
        <li>Utilisation de frameworks comme Symfony</li>
        <li>Développement de modules personnalisés sur WordPress et PrestaShop</li>
        <li>Interaction avec des bases de données (MySQL) via PDO ou Doctrine</li>
        <li>Rédaction de documentation technique pour assurer la pérennité des projets</li>
      </ul>

      <p>Je continue de perfectionner ma maîtrise du langage, en me tenant informé des bonnes pratiques modernes (comme l’utilisation de namespaces, des design patterns, ou la gestion des dépendances avec Composer), et en travaillant sur des projets variés.</p>

      <p>À l’avenir, j’envisage de renforcer mes compétences PHP en explorant davantage les tests automatisés, l’intégration continue dans des projets PHP, et en consolidant mes bases sur l’optimisation des performances.</p>
    `
  },
  {
    id: 'communication',
    name: 'Communication',
    icon: 'assets/img/communication.svg',
    html: `
      <h2>Introduction</h2>
      <p>La communication est au cœur de toute activité humaine, qu’elle soit personnelle, sociale ou professionnelle. Elle permet d’échanger des idées, de partager des informations, de collaborer efficacement et de créer des liens de confiance. Dans le monde professionnel, une communication claire et structurée est indispensable au bon fonctionnement des équipes, à la coordination des projets et à la satisfaction des parties prenantes, qu’il s’agisse de collègues, de clients ou de partenaires.</p>

      <p>Avec l’évolution des méthodes de travail et la généralisation des outils numériques, la communication a elle aussi changé de dimension. Elle ne se limite plus aux échanges en présentiel ou aux simples messages écrits : elle passe désormais par des outils collaboratifs, des plateformes de gestion de projet, des visioconférences, ou encore des interfaces utilisateurs pensées pour transmettre des messages implicites. Cela demande non seulement des compétences techniques, mais aussi une capacité à s’adapter à différents contextes, publics et objectifs.</p>

      <p>Dans les métiers du numérique, la communication est souvent perçue comme secondaire par rapport aux compétences techniques. Pourtant, elle est essentielle : que ce soit pour expliquer un concept complexe à un client, documenter proprement un projet, ou assurer une bonne coordination entre développeurs, elle joue un rôle clé dans la réussite d’un projet. Une bonne communication permet de mieux comprendre les attentes, d’éviter les malentendus, et de valoriser le travail accompli.</p>

      <h2>Mon expérience vécue</h2>
      <p>Durant mon passage au sein de l’agence web DGS Création, j’ai eu l’opportunité de travailler sur de nombreux projets de sites web, notamment 1envie1vin et Biolaser. En plus de la participation aux phases de développement, j’étais en charge de la formation des clients à l’utilisation de leur back office une fois le site mis en ligne. Cela m’a permis de développer une communication claire, accessible et pédagogique, afin de rendre les clients autonomes dans la gestion de leurs contenus.</p>

      <p>Chez DGS, une réunion était organisée à chaque étape clé du projet pour informer le client de l’avancement et recueillir ses retours. Ces moments d’échange étaient essentiels pour s'assurer que le projet répondait bien aux attentes. Une réunion de suivi était également prévue trois mois après la mise en ligne, afin de faire le point sur les performances du site, d'évaluer la satisfaction du client, et de discuter d’éventuelles évolutions ou ajustements.</p>

      <p>Aujourd’hui, je travaille dans le service informatique de l’entreprise Tschoeppe, où mes missions impliquent de collaborer avec plusieurs autres services, comme le marketing ou le service technique. La communication interne est bien structurée : une réunion a lieu chaque lundi matin avec le dirigeant de l’entreprise, M. Tschoeppe, pour définir les priorités de la semaine et répartir les tâches. En fin de journée, une réunion entre membres du service permet de suivre l’avancement et de partager les difficultés rencontrées.</p>

      <p>Certaines missions, comme le développement de Tlive, exigent une coordination étroite avec le service technique. Des réunions hebdomadaires interservices permettent d’assurer un bon alignement entre les besoins métiers et les contraintes techniques. Enfin, pour maintenir une bonne communication avec les utilisateurs du logiciel, nous rédigeons régulièrement des notes de mise à jour pour leur présenter les nouveautés et les corrections apportées.</p>

      <h2>Mon niveau de compétence</h2>
      <p>Ces différentes expériences m’ont permis de développer des compétences solides en communication, à la fois en interne avec des équipes pluridisciplinaires, et en externe avec des clients ou des utilisateurs finaux.</p>

      <p>Chez DGS Création, j’ai appris à adapter ma communication en fonction de mon interlocuteur. La participation aux réunions clients m’a permis de travailler ma capacité à écouter activement, à reformuler les besoins, et à restituer clairement l’avancement d’un projet. La formation des clients à l’utilisation de leur back office m’a particulièrement aidé à améliorer mes compétences en vulgarisation, en structuration de discours, et en pédagogie. Il fallait expliquer des fonctionnalités techniques de manière simple, en s’assurant que le client puisse les réutiliser en autonomie.</p>

      <p>Chez Tschoeppe, j’ai renforcé ma communication dans un cadre d’équipe technique, avec des échanges fréquents et ciblés pour assurer le bon déroulement des projets. J’ai également eu l’occasion d’écrire des communications utilisateurs via les notes de mise à jour de notre logiciel, ce qui m’a permis de travailler la clarté et la concision à l’écrit.</p>

      <p>Je me considère aujourd’hui à l’aise dans les échanges professionnels et dans la transmission d’informations techniques. Néanmoins, je reste conscient que la communication est une compétence qui se perfectionne continuellement. Je souhaite notamment progresser sur des aspects comme la prise de parole en public, la gestion des situations délicates, ou la présentation de concepts complexes à des publics non techniques.</p>

      <p>À cette fin, je compte continuer à apprendre par la pratique quotidienne, mais également en me formant. Je prévois notamment de lire <em>L’art du storytelling</em>, un ouvrage qui m’aidera à structurer mes idées de façon plus impactante et à rendre mes messages plus captivants, que ce soit à l’oral ou à l’écrit.</p>
    `
  },
  {
    id: 'css',
    name: 'CSS / SCSS',
    icon: 'assets/img/css.png',
    html: `
      <h2>Introduction</h2>
      <p>CSS (Cascading Style Sheets) est le langage qui permet de styliser et de mettre en forme les pages HTML. Il contrôle la disposition, les couleurs, les polices, les animations et l'adaptation des interfaces aux différents types d’écrans. C’est une compétence incontournable pour tout développeur front-end ou full stack souhaitant créer des interfaces web modernes, cohérentes et accessibles.</p>

      <p>Avec l’évolution des besoins en design web, CSS a su s’enrichir de nombreuses fonctionnalités puissantes comme flexbox, grid, ou encore les animations. Pour améliorer la productivité, des outils comme les frameworks CSS (ex. Tailwind CSS, Bootstrap) et des préprocesseurs comme SCSS sont devenus des standards dans la gestion des styles à grande échelle.</p>

      <h2>Mon expérience vécue</h2>
      <p>J’ai utilisé CSS dans tous les projets web que j’ai menés, notamment chez DGS Création, où j’ai participé à la réalisation de nombreux sites web sous WordPress, PrestaShop et Symfony. Selon les projets, j’ai combiné différentes approches en fonction des besoins du client et des contraintes techniques.</p>

      <p>J’ai eu l’occasion d’utiliser des frameworks CSS tels que Tailwind CSS, dont j’ai apprécié la rapidité d’intégration et la logique utilitaire très efficace pour le responsive design. Néanmoins, je préfère personnellement travailler avec SCSS, un préprocesseur CSS qui permet une meilleure organisation, lisibilité et maintenabilité du code.</p>

      <p>Grâce à SCSS, j’ai pu :</p>
      <ul>
        <li>utiliser des variables, des fonctions et des mixins pour factoriser le style,</li>
        <li>organiser mon code en fichiers partiels (<code>_buttons.scss</code>, <code>_layout.scss</code>, etc.),</li>
        <li>créer des systèmes de design system personnalisés faciles à adapter et à maintenir,</li>
        <li>structurer mes feuilles de style selon une logique modulaire, plus facile à faire évoluer sur le long terme.</li>
      </ul>

      <p>Même lorsque j’utilisais un framework comme Tailwind, je n’hésitais pas à compléter avec du CSS ou SCSS personnalisé pour affiner des détails visuels, répondre à des besoins spécifiques du client, ou surmonter certaines limitations du framework.</p>

      <h2>Mon niveau de compétence</h2>
      <p>Aujourd’hui, je maîtrise :</p>
      <ul>
        <li>les bases avancées de CSS (flexbox, grid, animations, media queries),</li>
        <li>l’utilisation efficace de Tailwind CSS dans un contexte projet,</li>
        <li>la structuration et l’optimisation du style avec SCSS,</li>
        <li>la création de composants visuels personnalisés et réutilisables,</li>
        <li>les bonnes pratiques en matière d’organisation, de performance et de lisibilité du code CSS.</li>
      </ul>

      <p>Ma préférence pour SCSS vient de sa capacité à rendre les feuilles de style plus propres, plus modulaires et plus faciles à maintenir, ce qui est essentiel dans les projets professionnels de moyenne ou grande taille. Je l’utilise autant pour améliorer la lisibilité que pour créer des architectures CSS robustes.</p>

      <p>Je souhaite continuer à progresser dans la structuration avancée des styles, notamment en approfondissant des méthodologies comme BEM (Block Element Modifier) ou ITCSS, et en consolidant mes connaissances en accessibilité visuelle et performances front-end.</p>
    `
  },
  {
    id: 'docker',
    name: 'Docker',
    icon: 'assets/img/docker.svg',
    html: `
      <h2>Introduction</h2>
      <p>Docker est un outil incontournable dans le monde du développement et du déploiement logiciel moderne. Il permet de créer, déployer et exécuter des applications dans des conteneurs légers et portables. Ces conteneurs embarquent tout ce dont l’application a besoin pour fonctionner : code, dépendances, configurations, environnement d’exécution… ce qui garantit une exécution cohérente quel que soit l’environnement (local, test, production).</p>

      <p>Grâce à Docker, les développeurs peuvent standardiser les environnements de développement, simplifier le déploiement, réduire les conflits entre machines, et accélérer l’intégration continue. Associé à des outils comme Docker Compose, il permet également de gérer facilement des applications multi conteneurs, avec une configuration centralisée et réutilisable.</p>

      <p>Dans un contexte professionnel, Docker améliore la productivité, la fiabilité et l’agilité des équipes, et constitue une étape clé vers des architectures modernes comme le DevOps, le CI/CD, ou les microservices.</p>

      <h2>Mon expérience vécue</h2>
      <p>J’ai été amené à utiliser Docker dans le cadre d’un projet technique mené chez Tschoeppe, suite à la fin du contrat avec un prestataire externe qui gérait jusqu’alors l’infrastructure de notre logiciel de dessin 2D. L’objectif était de reprendre le contrôle complet du système, en migrant les services hébergés sur leurs serveurs vers une nouvelle infrastructure interne, maîtrisée par notre propre équipe.</p>

      <p>Cette opération impliquait de récupérer l’ensemble des données de l’ancien prestataire, puis de reconstruire l’environnement technique nécessaire au bon fonctionnement de deux éléments principaux :</p>
      <ul>
        <li>la base de données du logiciel,</li>
        <li>le site de téléchargement permettant aux utilisateurs d’installer le programme.</li>
      </ul>

      <p>Pour garantir une installation propre, rapide et indépendante du système hôte, j’ai utilisé Docker afin de créer des images personnalisées pour chacun des services concernés. Une image a été créée pour la base de données, et une autre pour l’interface web permettant le téléchargement de l’installateur.</p>

      <p>Docker nous a permis d’isoler proprement chaque service, de simplifier le déploiement sur notre nouveau serveur, et d’assurer la portabilité de la solution pour de futurs besoins de maintenance ou de migration. Cette première expérience m’a permis de comprendre concrètement l’intérêt de la conteneurisation pour la standardisation des environnements et la stabilité des systèmes.</p>

      <h2>Mon niveau de compétence</h2>
      <p>Mon expérience avec Docker reste encore limitée, mais elle m’a permis de comprendre les fondamentaux de la conteneurisation et d’en percevoir tout l’intérêt dans un contexte professionnel réel.</p>

      <p>Lors du projet mené chez Tschoeppe, j’ai appris à :</p>
      <ul>
        <li>créer et configurer des Dockerfiles pour générer des images personnalisées,</li>
        <li>construire des conteneurs pour des services spécifiques comme une base de données ou un site web statique,</li>
        <li>manipuler les volumes, ports et réseaux Docker pour assurer le bon fonctionnement des services dans un environnement isolé,</li>
        <li>déployer ces services de façon reproductible sur un serveur interne, sans dépendance directe à la machine hôte.</li>
      </ul>

      <p>Cette première utilisation m’a donné une base concrète sur laquelle je souhaite maintenant bâtir une vraie maîtrise. Je suis conscient que Docker offre de nombreuses possibilités que je n’ai pas encore explorées, notamment en matière d’orchestration (Docker Compose, Kubernetes), de CI/CD, de gestion de logs, ou encore de sécurité.</p>

      <p>À court terme, je souhaite approfondir mes connaissances de Docker à travers :</p>
      <ul>
        <li>la mise en conteneur de projets personnels ou académiques (comme mon portfolio),</li>
        <li>l’utilisation de Docker Compose pour gérer des architectures multi-conteneurs,</li>
        <li>la lecture de ressources ciblées sur les bonnes pratiques DevOps.</li>
      </ul>

      <p>Docker représente pour moi un outil essentiel à maîtriser dans le développement moderne, et je suis motivé à le pratiquer davantage pour pouvoir l’intégrer pleinement dans mes futurs projets de développement, d’intégration et de déploiement logiciel.</p>
    `
  },
  {
    id: 'gestion-projet',
    name: 'Gestion de projet',
    icon: 'assets/img/gestion_de_projet.png',
    html: `
      <h2>Introduction</h2>
      <p>La gestion de projet est une compétence clé dans les environnements professionnels modernes, en particulier dans le domaine de l’ingénierie logicielle. Elle consiste à planifier, organiser, piloter et finaliser un projet en respectant des contraintes de temps, de budget et de qualité. Une bonne gestion de projet permet de garantir une vision claire des objectifs, une répartition efficace des ressources et un suivi rigoureux de l’avancement.</p>

      <p>Avec l’évolution rapide des technologies et la complexité croissante des systèmes informatiques, la gestion de projet ne se limite plus à une simple coordination : elle implique aujourd’hui une approche structurée, des outils adaptés, une communication fluide entre les parties prenantes, et une capacité à anticiper et à gérer les imprévus.</p>

      <p>Dans les projets numériques, la maîtrise de la gestion de projet permet non seulement de livrer des produits conformes aux attentes, mais aussi de créer un environnement de travail serein, où chaque membre de l’équipe comprend son rôle, ses priorités et ses responsabilités. Elle constitue ainsi un véritable levier de performance et de réussite collective.</p>

      <h2>Mon expérience vécue</h2>
      <p>Durant mon année chez Tschoeppe, j’ai été amené à gérer seul le service informatique pendant un mois, suite au départ de mon responsable. Cette période a coïncidé avec plusieurs projets importants à piloter, notamment la mise en place de la nouvelle infrastructure du logiciel de dessin 2D Tlive, ou encore le projet BSI en collaboration avec le service comptabilité. En parallèle, je devais également assurer les tâches de support technique du service, comme l’intégration des nouveaux collaborateurs et la résolution des incidents ou bugs rencontrés par les différents services de l’entreprise.</p>

      <p>Pour maintenir une activité fluide et éviter les blocages, j’ai dû structurer rigoureusement mon emploi du temps. Je consacrais mes matinées à l’avancement des projets stratégiques, en priorisant d’abord le BSI puis l’infrastructure Tlive. L’après-midi, je me concentrais sur le support et les demandes urgentes des utilisateurs.</p>

      <p>À partir du mois de février, un nouveau responsable a été recruté, suivi d’un second à la fin du mois. Étant devenu la personne référente du service, j’ai naturellement pris en charge la répartition des tâches, en tenant compte de leur priorité et des compétences de chacun. Cette expérience m’a permis de mettre à l’épreuve mes capacités d’organisation, de gestion du stress, mais aussi mon leadership dans un contexte où la continuité du service était primordiale.</p>

      <p>Avec le recul, je suis fier d’avoir pu maintenir le bon fonctionnement du service pendant cette période exigeante. Aujourd’hui encore, de nombreux collaborateurs continuent de me solliciter directement en cas de besoin, ce qui témoigne, selon moi, de la confiance acquise et de la pertinence des choix que j’ai pu faire dans ma manière de gérer les projets, les équipes et les urgences.</p>

      <h2>Mon niveau de compétence</h2>
      <p>L’expérience vécue chez Tschoeppe, où j’ai assuré seul la gestion du service informatique pendant plusieurs semaines, a été particulièrement formatrice en matière de gestion de projet. J’ai dû planifier mes journées avec rigueur, prioriser les tâches en fonction de leur impact, gérer les imprévus, tout en maintenant un bon niveau de service pour les utilisateurs internes. Cette situation m’a permis d’acquérir une vision plus concrète de ce que signifie piloter un projet dans un contexte réel, avec des délais, des responsabilités et une pression quotidienne.</p>

      <p>J’ai appris à organiser le travail de manière structurée, à définir des objectifs clairs, à anticiper les risques, et à répartir les tâches en tenant compte des compétences de chacun. Le fait d’avoir été sollicité pour guider les nouveaux arrivants dans l’équipe a renforcé ma capacité à coordonner les efforts collectifs, à communiquer efficacement et à prendre des décisions rapides en cas d’urgence.</p>

      <p>Je considère aujourd’hui que j’ai acquis un niveau opérationnel en gestion de projet, fondé sur l’expérience de terrain. Cela m’a permis de développer une approche pragmatique, centrée sur l’efficacité, la réactivité et la collaboration. Néanmoins, je suis conscient que la gestion de projet est une discipline riche, qui demande à être approfondie pour en maîtriser pleinement les outils, les méthodologies (comme Scrum ou Kanban), et les bonnes pratiques.</p>

      <p>C’est pourquoi je prévois, à moyen terme, de compléter mon expérience par des ressources plus théoriques, notamment des lectures comme <em>S’initier à la gestion de projets informatiques</em>. Cela me permettra de mieux formaliser ce que j’ai appris sur le terrain, d’enrichir ma boîte à outils méthodologique, et de gagner en rigueur pour des projets de plus grande envergure.</p>

      <p>En résumé, mes expériences m’ont permis de prendre conscience de l’importance d’une bonne gestion de projet, non seulement pour atteindre les objectifs techniques, mais aussi pour créer un cadre de travail clair, motivant et stable pour toutes les personnes impliquées.</p>
    `
  },
  {
    id: 'java',
    name: 'Java',
    icon: 'assets/img/java.svg',
    html: `
      <h2>Introduction</h2>
      <p>Java est un langage de programmation orienté objet, robuste et multiplateforme, largement utilisé dans le développement d’applications d’entreprise, de logiciels embarqués, de systèmes distribués, ou encore d’applications web. Grâce à la machine virtuelle Java (JVM), il garantit une grande portabilité du code, selon le principe bien connu : "Write Once, Run Anywhere".</p>

      <p>Langage mature, Java bénéficie d’un vaste écosystème de bibliothèques, de frameworks (comme Spring, Hibernate, ou Jakarta EE) et d’outils de développement qui en font une technologie de référence, notamment dans les architectures back-end, les systèmes métiers, et les applications critiques.</p>

      <p>Dans un contexte professionnel, Java est apprécié pour sa stabilité, sa scalabilité, et sa maintenabilité, ce qui en fait un choix de prédilection pour les entreprises développant des solutions logicielles complexes et durables.</p>

      <h2>Mon expérience vécue</h2>
      <p>J’ai commencé à travailler avec Java dans le cadre de mon poste chez Tschoeppe, où ce langage est au cœur du développement de notre logiciel de dessin 2D ainsi que du moteur de rendu 3D associé. Ce logiciel, initialement développé en Java 8, est utilisé quotidiennement par les commerciaux de l’entreprise ainsi que par des revendeurs externes pour concevoir, visualiser et configurer des portails et clôtures sur mesure.</p>

      <p>Dans un premier temps, mes missions ont consisté à intervenir sur la version existante du logiciel, en y intégrant de nouvelles gammes de produits et de nouveaux modèles, mais aussi en corrigeant des bugs récurrents signalés par les utilisateurs. Ce travail m’a permis de me familiariser avec un code legacy complexe et de renforcer ma rigueur dans la lecture, la compréhension et l’amélioration de code existant.</p>

      <p>Depuis juin, nous avons engagé, avec mon nouveau responsable, un travail de refonte progressive du logiciel en migrant le projet vers Java 22. Cette mise à jour permet de moderniser le code, de corriger des failles de sécurité identifiées sur l’ancienne version, et de profiter des nouvelles fonctionnalités offertes par les versions récentes du langage. Cela implique également un travail de réorganisation du projet, de nettoyage du code, et de révision des pratiques de développement, dans une logique d’industrialisation.</p>

      <p>Cette expérience m’a permis de consolider ma compréhension de Java dans un contexte professionnel réel, en me confrontant à des problématiques concrètes telles que la compatibilité de versions, la gestion de la dette technique, et l’optimisation d’un logiciel à forte valeur métier.</p>

      <h2>Mon niveau de compétence</h2>
      <p>Mon expérience chez Tschoeppe m’a permis de développer une maîtrise solide de Java, en particulier dans un contexte industriel et métier, où la fiabilité du logiciel et la lisibilité du code sont essentielles. J’ai appris à travailler sur une base existante développée en Java 8, et je participe activement à la migration vers Java 22, ce qui m’a exposé aux différences de versions, aux nouveautés du langage, ainsi qu’aux enjeux de compatibilité et de sécurité.</p>

      <p>Je suis aujourd’hui à l’aise avec :</p>
      <ul>
        <li>la programmation orientée objet (POO) et les principes de conception solides (SOLID),</li>
        <li>la lecture, l’analyse et la refactorisation de code existant,</li>
        <li>l’utilisation des classes Java standard, des streams, des lambdas, et des structures de contrôle modernes,</li>
        <li>la gestion des erreurs et le débogage d’applications complexes,</li>
        <li>l’intégration de nouvelles fonctionnalités dans un logiciel métier existant.</li>
      </ul>

      <p>Cette expérience m’a également sensibilisé à l’importance de maintenir un code propre et maintenable, de documenter les changements, et de travailler avec rigueur dans un environnement utilisé en production par des professionnels.</p>

      <p>Je suis conscient que Java est un langage très vaste, et je souhaite encore progresser dans plusieurs domaines, notamment :</p>
      <ul>
        <li>l’adoption des nouveautés de Java 17+ (records, pattern matching, virtual threads…),</li>
        <li>l’utilisation avancée des collections et des flux de données,</li>
        <li>l’approfondissement de l’écosystème Spring (Spring Boot, Spring Data, etc.),</li>
        <li>l’intégration de tests automatisés (JUnit, Mockito),</li>
        <li>et le déploiement d’applications Java modernes via Docker ou dans une architecture CI/CD.</li>
      </ul>

      <p>À moyen terme, je souhaite être capable de concevoir des applications Java modernes et modulaires, et de maîtriser l’ensemble de la chaîne de développement, du code jusqu’au déploiement.</p>
    `
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: 'assets/img/js.png',
    html: `
      <h2>Introduction</h2>
      <p>JavaScript est un langage de programmation incontournable dans le développement web. Il permet de rendre les pages web interactives, dynamiques et réactives. Contrairement à HTML et CSS qui définissent la structure et l’apparence d’une page, JavaScript donne vie à l’interface : manipulation du DOM, interactions en temps réel, animations, appels API, gestion des événements, etc.</p>

      <p>Depuis plusieurs années, JavaScript a considérablement évolué avec l’arrivée de normes modernes (ES6+) et de nombreux frameworks et bibliothèques comme React, Vue.js, ou encore Angular, qui facilitent la création d’applications web complexes, performantes et maintenables. De plus, avec l’essor de Node.js, JavaScript ne se limite plus au front-end : il s’impose aussi comme une solution efficace côté serveur, dans des architectures full stack.</p>

      <p>Aujourd’hui, JavaScript est au cœur des applications modernes, tant pour l’interface utilisateur que pour la logique applicative. Sa maîtrise est essentielle pour tout développeur web souhaitant concevoir des interfaces riches, fluides et en phase avec les attentes actuelles du web.</p>

      <h2>Mon expérience vécue</h2>
      <p>J’ai été régulièrement amené à utiliser JavaScript dans mes missions chez Interpane et DGS Création, où il jouait un rôle essentiel dans la création d’interfaces web interactives et dynamiques.</p>

      <p>Chez Interpane, j’ai utilisé JavaScript principalement pour manipuler le DOM et améliorer l’expérience utilisateur sur leur logiciel interne de gestion. L’un de mes principaux usages concernait l’intégration de la bibliothèque DataTables, afin de créer des tableaux interactifs, filtrables et triables en temps réel. Cette fonctionnalité permettait aux utilisateurs d’accéder plus facilement aux informations utiles, avec une interface claire, fluide et dynamique. J’ai également développé des scripts personnalisés pour automatiser certaines interactions ou validations côté client, ce qui a permis d’améliorer la productivité au quotidien.</p>

      <p>Chez DGS Création, JavaScript était présent dans tous les projets web que je développais, qu’il s’agisse de sites vitrines ou de plateformes e-commerce. Je l’utilisais pour :</p>
      <ul>
        <li>manipuler le DOM et ajouter des comportements dynamiques aux pages,</li>
        <li>animer des éléments à l’aide de la bibliothèque GSAP, afin d’enrichir l’expérience utilisateur avec des transitions fluides et professionnelles,</li>
        <li>développer des configurateurs produits interactifs sur certains sites e-commerce, permettant à l’utilisateur de personnaliser un produit en temps réel (ex : choix de coloris, options, visuels...).</li>
      </ul>

      <p>Chaque projet m’a permis de consolider mes connaissances en JavaScript natif tout en m’adaptant aux différents besoins fonctionnels et esthétiques des clients. J’ai appris à écrire un code structuré, lisible, et à veiller à la compatibilité inter-navigateurs, tout en optimisant les performances côté client.</p>

      <h2>Mon niveau de compétence</h2>
      <p>Grâce aux projets réalisés chez Interpane et DGS Création, j’ai acquis une bonne maîtrise de JavaScript natif et de son utilisation dans un contexte professionnel. Je suis à l’aise avec la manipulation du DOM, la gestion des événements, les animations, ainsi que l’intégration de bibliothèques tierces pour enrichir l’expérience utilisateur.</p>

      <p>Mon expérience m’a notamment permis de :</p>
      <ul>
        <li>manipuler dynamiquement les éléments d’interface (formulaires, tableaux, menus…),</li>
        <li>intégrer et configurer des bibliothèques comme DataTables pour afficher de grandes quantités de données de manière interactive,</li>
        <li>utiliser GSAP pour créer des animations fluides, engageantes et cohérentes avec les maquettes graphiques,</li>
        <li>développer des composants interactifs comme des configurateurs de produits personnalisés, en lien avec les besoins fonctionnels du client.</li>
      </ul>

      <p>J’accorde également une grande importance à la clarté du code, à l’organisation des scripts, et à l’optimisation des performances sur le front-end. Ces éléments sont essentiels pour garantir la maintenabilité des projets et assurer une expérience fluide pour l’utilisateur final.</p>

      <p>Même si je possède déjà une base solide, je suis conscient que JavaScript est un langage en constante évolution. Je souhaite continuer à progresser, notamment en approfondissant des concepts plus avancés comme :</p>
      <ul>
        <li>la programmation asynchrone (promesses, async/await),</li>
        <li>l’optimisation du rendu,</li>
        <li>la structure modulaire du code (ES modules),</li>
        <li>et l’utilisation de JavaScript dans des frameworks front-end modernes, comme Angular, que j’utilise actuellement dans mon projet de fin d’études.</li>
      </ul>

      <p>Mon objectif est de consolider mes compétences JavaScript pour pouvoir aborder sereinement des projets plus complexes, basés sur des interfaces riches, des intégrations API, et une architecture front-end évolutive.</p>
    `
  },
  {
    id: 'relation-client',
    name: 'Relation Client',
    icon: 'assets/img/relation_client.png',
    html: `
      <h2>Introduction</h2>
      <p>La relation client occupe une place centrale dans la stratégie des entreprises modernes. Elle regroupe l’ensemble des actions mises en œuvre pour établir, entretenir et enrichir les interactions entre une entreprise et ses clients, dans le but de bâtir une relation de confiance durable. Cela passe par la pertinence des réponses apportées, la capacité à gérer les insatisfactions et la volonté d’anticiper les besoins des clients. Au fil des années, cette relation s’est complexifiée avec l’émergence des canaux numériques comme les réseaux sociaux, rendant nécessaire une adaptation constante des pratiques.</p>

      <p>Dans un environnement concurrentiel, la capacité à bien gérer la relation client constitue un levier de différenciation majeur. Il ne s’agit plus simplement de vendre un produit ou un service, mais de proposer une expérience complète, fluide et personnalisée. Cette dimension est d’autant plus importante dans les secteurs techniques ou numériques, où l’accompagnement et l’écoute peuvent faire toute la différence dans la satisfaction et la fidélisation des utilisateurs.</p>

      <p>Aujourd’hui, la relation client dépasse le cadre traditionnel du service après-vente. Elle englobe toutes les étapes du parcours client, depuis le premier contact jusqu’à l’après-vente, en passant par l’assistance, les retours d’expérience, et même l’intégration du client comme acteur du développement. Que ce soit dans une startup, une PME ou une grande entreprise, la capacité à instaurer un dialogue de qualité avec sa clientèle est un facteur clé de réussite.</p>

      <h2>Mon expérience vécue</h2>
      <p>Durant mon passage au sein de l’agence web DGS Création, j’ai eu l’opportunité de travailler sur de nombreux projets de sites web, notamment 1envie1vin et Biolaser. Plus récemment, je participe au développement de Tschoeppe Live, un logiciel de dessin 2D utilisé à la fois par les commerciaux de l’entreprise et par des revendeurs externes, appelés relais confiance.</p>

      <p>Chez DGS Création, la relation client se faisait principalement par email. Les clients nous faisaient part de leurs retours, et nous apportions les corrections nécessaires dans la semaine. Ce mode de fonctionnement a également été utilisé dans un premier temps chez Tschoeppe.</p>

      <p>Cependant, afin d’améliorer la gestion des retours et de centraliser les demandes, nous avons mis en place un système de rapport de bug intégré au logiciel. Chaque utilisateur peut désormais signaler un problème directement depuis son interface de configuration, en joignant un court message explicatif. Lorsqu’un rapport est soumis, un email est automatiquement envoyé au service informatique, et une nouvelle tâche est créée dans Trello.</p>

      <p>Chaque tâche contient :</p>
      <ul>
        <li>la configuration de l’utilisateur,</li>
        <li>une capture d’écran du rendu,</li>
        <li>son message explicatif,</li>
        <li>ainsi que ses informations de contact.</li>
      </ul>

      <p>Une fois le problème résolu, une notification est envoyée à l’utilisateur pour l’informer que son bug a été pris en compte et corrigé. Nous en profitons également pour le remercier de sa contribution à l’amélioration continue du logiciel.</p>

      <h2>Mon niveau de compétence</h2>
      <p>Grâce à mes différentes expériences professionnelles, j’ai développé des compétences solides en gestion de la relation client, notamment dans un contexte technique. J’ai appris à traiter les retours utilisateurs de manière structurée, à organiser les corrections de manière efficace, et à assurer un suivi clair et rassurant pour les clients ou partenaires.</p>

      <p>Chez DGS Création comme chez Tschoeppe, j’ai compris l’importance de la réactivité, de la clarté dans les échanges et de la traçabilité des demandes. Le passage d’un système de retours par mail à un système intégré de signalement a représenté une montée en compétence significative : il a fallu adapter nos méthodes de travail, structurer les flux de communication, et collaborer plus étroitement avec les équipes produit et support.</p>

      <p>Je considère toutefois que mes compétences en relation client sont encore en développement. Jusqu’à présent, mes missions ont surtout porté sur la gestion des retours techniques, la communication avec des utilisateurs internes et partenaires, et l’amélioration de l’expérience utilisateur à travers des solutions concrètes.</p>

      <p>La relation client couvre un champ bien plus large, incluant notamment la gestion des conflits, la personnalisation de l’expérience, ou encore la fidélisation active. Ce sont des domaines que je souhaite explorer davantage à l’avenir, que ce soit par la pratique ou à travers des lectures et des formations spécialisées.</p>

      <p>Je suis convaincu que la maîtrise de la relation client est un atout majeur dans n’importe quel environnement professionnel, y compris dans les métiers techniques. Elle permet non seulement d’améliorer la qualité des produits, mais aussi de renforcer la confiance entre l’entreprise et ses utilisateurs. Mon objectif est donc de continuer à progresser sur ces aspects, en m’appuyant sur l’expérience acquise et en restant ouvert à de nouvelles méthodes et outils.</p>
    `
  },
  {
    id: 'relation-client',
    name: 'Relation Client',
    icon: 'assets/img/relation_client.png',
    html: `
      <h2>Introduction</h2>
      <p>La relation client occupe une place centrale dans la stratégie des entreprises modernes. Elle regroupe l’ensemble des actions mises en œuvre pour établir, entretenir et enrichir les interactions entre une entreprise et ses clients, dans le but de bâtir une relation de confiance durable. Cela passe par la pertinence des réponses apportées, la capacité à gérer les insatisfactions et la volonté d’anticiper les besoins des clients. Au fil des années, cette relation s’est complexifiée avec l’émergence des canaux numériques comme les réseaux sociaux, rendant nécessaire une adaptation constante des pratiques.</p>

      <p>Dans un environnement concurrentiel, la capacité à bien gérer la relation client constitue un levier de différenciation majeur. Il ne s’agit plus simplement de vendre un produit ou un service, mais de proposer une expérience complète, fluide et personnalisée. Cette dimension est d’autant plus importante dans les secteurs techniques ou numériques, où l’accompagnement et l’écoute peuvent faire toute la différence dans la satisfaction et la fidélisation des utilisateurs.</p>

      <p>Aujourd’hui, la relation client dépasse le cadre traditionnel du service après-vente. Elle englobe toutes les étapes du parcours client, depuis le premier contact jusqu’à l’après-vente, en passant par l’assistance, les retours d’expérience, et même l’intégration du client comme acteur du développement. Que ce soit dans une startup, une PME ou une grande entreprise, la capacité à instaurer un dialogue de qualité avec sa clientèle est un facteur clé de réussite.</p>

      <h2>Mon expérience vécue</h2>
      <p>Durant mon passage au sein de l’agence web DGS Création, j’ai eu l’opportunité de travailler sur de nombreux projets de sites web, notamment 1envie1vin et Biolaser. Plus récemment, je participe au développement de Tschoeppe Live, un logiciel de dessin 2D utilisé à la fois par les commerciaux de l’entreprise et par des revendeurs externes, appelés relais confiance.</p>

      <p>Chez DGS Création, la relation client se faisait principalement par email. Les clients nous faisaient part de leurs retours, et nous apportions les corrections nécessaires dans la semaine. Ce mode de fonctionnement a également été utilisé dans un premier temps chez Tschoeppe.</p>

      <p>Cependant, afin d’améliorer la gestion des retours et de centraliser les demandes, nous avons mis en place un système de rapport de bug intégré au logiciel. Chaque utilisateur peut désormais signaler un problème directement depuis son interface de configuration, en joignant un court message explicatif. Lorsqu’un rapport est soumis, un email est automatiquement envoyé au service informatique, et une nouvelle tâche est créée dans Trello.</p>

      <p>Chaque tâche contient :</p>
      <ul>
        <li>la configuration de l’utilisateur,</li>
        <li>une capture d’écran du rendu,</li>
        <li>son message explicatif,</li>
        <li>ainsi que ses informations de contact.</li>
      </ul>

      <p>Une fois le problème résolu, une notification est envoyée à l’utilisateur pour l’informer que son bug a été pris en compte et corrigé. Nous en profitons également pour le remercier de sa contribution à l’amélioration continue du logiciel.</p>

      <h2>Mon niveau de compétence</h2>
      <p>Grâce à mes différentes expériences professionnelles, j’ai développé des compétences solides en gestion de la relation client, notamment dans un contexte technique. J’ai appris à traiter les retours utilisateurs de manière structurée, à organiser les corrections de manière efficace, et à assurer un suivi clair et rassurant pour les clients ou partenaires.</p>

      <p>Chez DGS Création comme chez Tschoeppe, j’ai compris l’importance de la réactivité, de la clarté dans les échanges et de la traçabilité des demandes. Le passage d’un système de retours par mail à un système intégré de signalement a représenté une montée en compétence significative : il a fallu adapter nos méthodes de travail, structurer les flux de communication, et collaborer plus étroitement avec les équipes produit et support.</p>

      <p>Je considère toutefois que mes compétences en relation client sont encore en développement. Jusqu’à présent, mes missions ont surtout porté sur la gestion des retours techniques, la communication avec des utilisateurs internes et partenaires, et l’amélioration de l’expérience utilisateur à travers des solutions concrètes.</p>

      <p>La relation client couvre un champ bien plus large, incluant notamment la gestion des conflits, la personnalisation de l’expérience, ou encore la fidélisation active. Ce sont des domaines que je souhaite explorer davantage à l’avenir, que ce soit par la pratique ou à travers des lectures et des formations spécialisées.</p>

      <p>Je suis convaincu que la maîtrise de la relation client est un atout majeur dans n’importe quel environnement professionnel, y compris dans les métiers techniques. Elle permet non seulement d’améliorer la qualité des produits, mais aussi de renforcer la confiance entre l’entreprise et ses utilisateurs. Mon objectif est donc de continuer à progresser sur ces aspects, en m’appuyant sur l’expérience acquise et en restant ouvert à de nouvelles méthodes et outils.</p>
    `
  },
  {
    id: 'sql',
    name: 'SQL',
    icon: 'assets/img/sql.png',
    html: `
      <h2>Introduction</h2>
      <p>SQL (Structured Query Language) est un langage fondamental pour la gestion des bases de données relationnelles. Il permet d’interagir efficacement avec les données : les créer, les modifier, les interroger ou les supprimer. Dans le développement d'applications web ou logicielles, SQL joue un rôle central en assurant la cohérence, la structure et l’accessibilité des informations manipulées.</p>

      <p>Sa simplicité apparente cache une grande richesse fonctionnelle. Que ce soit pour effectuer des requêtes complexes, optimiser des performances, ou concevoir des modèles de données adaptés, SQL est une compétence essentielle pour tout développeur full stack. Associé à des bases de données comme MySQL, PostgreSQL ou SQL Server, il permet de bâtir des fondations solides pour des systèmes d'information performants.</p>

      <h2>Mon expérience vécue</h2>
      <p>J’ai eu l’occasion d’utiliser SQL dans plusieurs contextes professionnels, notamment lors de mes expériences chez Interpane, DGS Création, et Tschoeppe. Dans chacun de ces environnements, MySQL était la base de données de référence, et j’ai été amené à réaliser un large éventail de requêtes, allant des opérations simples de lecture à des jointures complexes, en passant par la création de structures de données optimisées.</p>

      <p>Chez Interpane, j’ai participé à la refonte d’un logiciel de GPAO (gestion de production assistée par ordinateur). La base de données initiale étant ancienne et peu normalisée, j’ai d’abord analysé la structure existante pour proposer un schéma plus propre et durable. J’ai ensuite reconstruit les tables et adapté les requêtes dans un environnement modernisé, couplé à Symfony. Ce travail m’a permis de mieux comprendre les enjeux liés à la structuration des données sur le long terme.</p>

      <p>Chez DGS Création, j’ai utilisé SQL aussi bien directement que via l’ORM Doctrine, notamment dans le cadre de projets Symfony. J’ai également manipulé des bases liées à WordPress ou PrestaShop, que ce soit pour intégrer des fonctionnalités personnalisées ou pour effectuer des opérations spécifiques sur les données. Cette diversité d’outils m’a permis de développer une bonne aisance dans la navigation et la manipulation de schémas de bases de données variés.</p>

      <p>Chez Tschoeppe, je continue de travailler avec MySQL dans le cadre du développement du logiciel Tlive, utilisé en interne comme par des partenaires externes. J’interviens régulièrement sur les requêtes SQL pour intégrer de nouvelles fonctionnalités, corriger des anomalies ou extraire des données pour l’analyse. Ce travail m’a amené à automatiser certaines tâches répétitives, et à optimiser des requêtes utilisées fréquemment pour améliorer les performances globales du système.</p>

      <h2>Mon niveau de compétence</h2>
      <p>Grâce à ces différentes expériences, j’ai acquis une bonne maîtrise de SQL dans un contexte professionnel. Je suis aujourd’hui à l’aise avec :</p>
      <ul>
        <li>la conception de bases de données relationnelles,</li>
        <li>l’écriture de requêtes complexes (jointures, agrégations, sous-requêtes),</li>
        <li>l’optimisation de requêtes pour améliorer les temps de réponse,</li>
        <li>l’utilisation de Doctrine dans un projet Symfony,</li>
        <li>la gestion des migrations de données et des schémas.</li>
      </ul>

      <p>Je suis conscient que le domaine du SQL est vaste et que sa maîtrise passe aussi par une compréhension approfondie des bonnes pratiques de modélisation, de la gestion des index, ou encore de la sécurité des requêtes. À ce titre, je souhaite continuer à progresser, notamment en consolidant mes connaissances sur l’optimisation des performances, la gestion de grandes volumétries, et la mise en place de procédures stockées ou de vues matérialisées dans des contextes plus complexes.</p>

      <p>Dans cette optique, je prévois de me former davantage, notamment en consultant des ouvrages techniques et des ressources spécialisées, afin d’atteindre un niveau avancé et d’être pleinement autonome dans la conception et l’optimisation de bases de données relationnelles.</p>
    `
  },
];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.skillId = this.route.snapshot.paramMap.get('id') || '';
    this.skill = this.allSkills.find(s => s.id === this.skillId);
  }
}
