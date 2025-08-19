import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Site WordPress',
      description: 'Réalisation sur mesure d’un site vitrine WordPress personnalisé sans constructeur visuel.',
      image: 'assets/img/portfolio.png',
      link: 'https://twyntz.github.io/Portfolio/'
    },
    {
      title: 'Ubertishop',
      description: 'Site e-commerce pour la marque Uberti avec gestion des produits et commandes.',
      image: 'assets/img/uberti.png',
      link: 'https://uberti.shop/'
    },
    {
      title: 'Tschoeppe Live',
      description: 'Logiciel de dessin en 2D et génération de portail en 3D.',
      image: 'assets/img/portfolio.png',
      link: ''
    }
  ];
}

