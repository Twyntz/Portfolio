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
      title: 'Tschoeppe Live',
      shortDesc: 'Logiciel de dessin en 2D et génération de portail en 3D.',
      image: 'assets/projects/tschoeppe-live.jpg'
    },
    {
      id: 3,
      title: 'Synergie Factory',
      shortDesc: 'Application de gestion et de suivi des formations pour partenaires et collaborateurs.',
      image: 'assets/projects/synergie-factory.jpg'
    },
    {
      id: 4,
      title: 'Site WordPress',
      shortDesc: 'Réalisation sur mesure d’un site vitrine WordPress personnalisé sans constructeur visuel.',
      image: 'assets/projects/wordpress.jpg'
    },
    {
      id: 5,
      title: 'Logiciel GPAO - Interpane',
      shortDesc: 'Logiciel de Gestion de Production Assistée par Ordinateur (GPAO) pour l’usine Interpane.',
      image: 'assets/img/interpane.png'
    }
  ];
}
