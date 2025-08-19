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
  technologies?: string[];

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

  // Compétences liées
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

  // ====== UNIQUEMENT UBERTI ======
  private projects: ProjectDetail[] = [
    {
      id: 1,
      name: 'Uberti.shop',
      subtitle: 'Site e‑commerce PrestaShop pour Uberti (bio, naturel & bien‑être)',
      cover: 'assets/projects/uberti.jpg',
      meta: [
        { label: 'Client', value: 'Uberti' },
        { label: 'Agence', value: 'DGS Création' },
        { label: 'Type', value: 'E‑commerce' },
        { label: 'Période', value: '2024' }
      ],
      technologies: ['PrestaShop', 'PHP', 'MySQL', 'SCSS', 'JavaScript', 'SEO', 'Docker'],

      presentation:
        'Uberti.shop est un site e‑commerce développé pour la marque Uberti. Le projet remplace un ancien site daté et peu fluide par une plateforme moderne, performante et intuitive pour les clients comme pour les administrateurs.',

      contexte_objectifs_enjeux_risques: {
        contexte:
          'Le précédent site souffrait d’un design vieillissant, d’une navigation confuse et d’une administration complexe. Uberti avait besoin d’un outil adapté à sa croissance et aux bonnes pratiques e‑commerce.',
        objectifs: [
          'Moderniser l’image en ligne de la marque.',
          'Améliorer l’UX sur desktop et mobile.',
          'Simplifier la gestion du catalogue, des commandes et des promotions.',
          'Optimiser le SEO et les performances techniques.'
        ],
        enjeux: [
          'Valoriser les produits et les valeurs de la marque (transparence, bien‑être, qualité).',
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
        'Formation du client à l’utilisation du back‑office.'
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
          interactions: 'Allers‑retours de validation visuelle'
        },
        { acteur: 'Moi‑même (développeur)', role: 'Intégration & développement', interactions: 'Échanges quotidiens' }
      ],

      resultats: {
        pour_moi: [
          'Expérience complète sur un projet e‑commerce réel.',
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
        immediat: ['Accompagnement post‑mise en ligne', 'Suivi des retours utilisateurs'],
        a_distance: ['Évolutions sur les connecteurs et le catalogue', 'Roadmap back‑office marketing'],
        aujourdhui: ['Site de référence pour l’agence', 'Base solide, pérenne et maintenable']
      },

      regard_critique:
        'J’aurais pu anticiper davantage certains besoins évolutifs (connecteurs, gestion long terme du catalogue). Le résultat reste robuste et performant, et ce projet a consolidé mes compétences techniques et relationnelles.',

      competences: [
        { id: 'prestashop', label: 'PrestaShop' },
        { id: 'seo', label: 'SEO technique' },
        { id: 'ux', label: 'Expérience utilisateur' },
        { id: 'frontend', label: 'Intégration front‑end' },
        { id: 'gestion-projet', label: 'Gestion de projet' }
      ]
    }
  ];

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.project = this.projects.find(p => p.id === id);
  }
}
