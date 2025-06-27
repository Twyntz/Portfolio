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
    introduction: "HTML (HyperText Markup Language) est le langage fondamental du web. Il permet de structurer le contenu des pages en définissant les différents éléments tels que les titres, paragraphes, tableaux, images, formulaires ou liens. Il constitue la base de tout site ou application web, sur laquelle viennent s’ajouter les feuilles de style (CSS) et les scripts (JavaScript) pour créer des interfaces modernes et interactives. Facile à prendre en main mais exigeant pour une utilisation optimale, HTML est essentiel pour assurer une bonne lisibilité du code, une accessibilité correcte, et une compatibilité multi-navigateurs. Dans un environnement professionnel, sa maîtrise est indispensable pour garantir des pages bien structurées, maintenables et performantes.",
    experience: "J’ai eu l’occasion de travailler avec HTML sur un grand nombre de projets web, notamment lors de mon expérience chez DGS Création, mais également dans le cadre de projets personnels ou académiques. Chez DGS Création, j’ai participé à la réalisation de nombreux sites web, qu’ils soient vitrines ou e-commerce, en m’appuyant sur des technologies comme WordPress, PrestaShop ou encore Symfony. Dans chacun de ces projets, HTML constituait l’élément central pour construire l’ossature des pages, intégrer les maquettes graphiques, créer des formulaires fonctionnels, ou encore structurer le contenu de manière cohérente. Un point auquel je portais une attention particulière était l’impact du HTML sur le référencement naturel (SEO). Je veillais toujours à utiliser les balises sémantiques appropriées (<header>, <main>, <section>, <article>, <h1>, <p>, etc.), à structurer correctement les titres et sous-titres (<h1> à <h6>), et à optimiser le contenu pour les moteurs de recherche tout en restant accessible pour les utilisateurs. J'étais également attentif à l'attribut alt des images, aux balises de méta-informations, et à la hiérarchie logique du contenu, afin de garantir une indexation efficace par les moteurs de recherche.",
    competence: "Grâce à ces expériences, j’ai acquis une maîtrise solide des fondamentaux de HTML, ainsi qu’une bonne compréhension des pratiques modernes : Utilisation des balises sémantiques pour améliorer la clarté du code et le SEO, Création de structures modulaires, réutilisables et compatibles avec des frameworks front-end, Intégration de formulaires, d’éléments multimédias et de contenus dynamiques,Sensibilisation aux normes d’accessibilité et à la structuration logique des pages. Je suis également à l’aise pour collaborer avec des designers, intégrer des maquettes en HTML/CSS, et adapter les structures HTML à différents contextes techniques (CMS, frameworks, responsive design…). À court terme, je souhaite continuer à perfectionner ma pratique du HTML, notamment en approfondissant les aspects liés à l’accessibilité web (WCAG, ARIA) et à l’intégration front-end moderne avec des frameworks comme Angular, que j’utilise dans mon projet de fin d’études. Ma priorité est de concevoir des interfaces robustes, évolutives et respectueuses des standards du web.",
    useCases: ['Portfolio', 'DGS Création']
  }
];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.skillId = this.route.snapshot.paramMap.get('id') || '';
    this.skill = this.allSkills.find(s => s.id === this.skillId);
  }
}
