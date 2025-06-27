import { Component, AfterViewInit, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-parcours',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parcours.component.html',
  styleUrls: ['./parcours.component.scss']
})
export class ParcoursComponent implements AfterViewInit {
  @ViewChildren('timelineBlock') timelineBlocks!: QueryList<ElementRef>;

  parcoursScolaire = [
    {
      year: '2023-2025',
      title: 'Master Expert en Ingénierie Logicielle',
      subtitle: 'EPSI Strasbourg',
      description: 'Ce mastère permet d\'acquérir des compétences avancées dans le développement et dans la gestion de projets.'
    },
    {
      year: '2022-2023',
      title: 'Licence pro développement web et conception d\'interface (LPDWEB)',
      subtitle: 'IUT de Haguenau',
      description: 'La LP DWEB est une formation qui permet d\'acquérir des compétences en développement d\'applications web, en mettant l\'accent sur l\'ergonomie des interfaces proposées ainsi que sur la qualité de l\'expérience utilisateur, quel que soit le type de terminal utilisé.'
    },
    {
      year: '2020-2022',
      title: 'DUT Métiers du Multimédia et de l\'Internet (MMI)',
      subtitle: 'IUT de Haguenau',
      description: 'Le DUT MMI est une formation qui permet d\'acquérir de nombreuses compétences dans des domaines variées allant de la conception de sites Internet à la gestion de communautés sur les réseaux sociaux, en passant par la production de produits multimédias (jeux vidéos, application mobile, etc...) ou le développement de services Web.'
    },
    {
      year: '2017-2020',
      title: 'Baccalauréat scientifique - Mention assez bien',
      subtitle: 'Lycée Jean Rostand - Strasbourg',
      description: 'C\'est ici que mon intérêt pour le développement web est apparu grâce à la spécialisation Informatique et science du numérique (ISN)'
    }
  ];

  parcoursPro = [
    {
      year: '2024-2025',
      title: 'Alternant développeur logiciel',
      subtitle: 'Groupe Synergie Développement',
      description: 'Maintient du logiciel de dessin 2D en JAVA / Gestion d\'un service / Gestion de projet / Docker / Apprentissage à ChatGPT de générer des XML / Réalisation d\'une application de gestion de parc informatique.'
    },
    {
      year: '2022-2024',
      title: 'Alternant développeur fullstack',
      subtitle: 'DGS Création Mulhouse',
      description: 'Création de nombreux site web avec Wordpress / Prestashop / Symfony. Découverte du travail en agence web.'
    },
    {
      year: '2021-2022',
      title: 'Alternant développeur web',
      subtitle: 'Interpane Hoerdt',
      description: 'Travail sur le nouveau logiciel de GPAO avec les thématiques suivantes : Passage d\'un PHP 3 à PHP 8 / Passage de full PHP à Symfony / Gestion d\'un projet de A à Z / Intégration d\'une solution de Versionning (GitHub) / Mise en place de bonnes pratiques.'
    }
  ];

  ngAfterViewInit(): void {
    this.timelineBlocks.forEach((block, i) => {
      gsap.fromTo(
        block.nativeElement,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: block.nativeElement,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }
}
