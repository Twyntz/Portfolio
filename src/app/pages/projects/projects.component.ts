import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  projects = [
    {
      id: 1,
      title: 'Uberti.shop',
      shortDesc: 'Site e-commerce pour la marque Uberti avec gestion des produits et commandes.',
      image: 'assets/img/uberti.png'
    },
    {
      id: 2,
      title: 'Logiciel de Gestion de Production Assistée par Ordinateur',
      shortDesc: 'Logiciel de Gestion de Production Assistée par Ordinateur (GPAO) pour l’usine Interpane.',
      image: 'assets/img/interpane.png'
    },
    {
      id: 3,
      title: 'LD Eclairage',
      shortDesc: 'Site vitrine WordPress : catalogue produits + demande de devis (WooCommerce en mode catalogue).',
      image: 'assets/img/ld-eclairage.png'
    },
    {
      id: 4,
      title: 'Tschoeppe Live',
      shortDesc: 'Logiciel Java utilisé par commerciaux, service client et revendeurs : configuration de portails sur-mesure, génération de devis, dessin 2D/3D et intégration photo.',
      image: 'assets/img/interpane.png'
    },
    {
      id: 5,
      title: 'Atelier des créatrices solidaire',
      shortDesc: 'Marketplace multi-vendeurs (WordPress + WooCommerce + Dokan)',
      image: 'assets/img/atelier.png'
    }
  ];
}
