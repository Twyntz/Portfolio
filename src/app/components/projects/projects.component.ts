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
      title: 'LD Éclairage',
      description: 'Site vitrine WordPress : catalogue produits + demande de devis (WooCommerce en mode catalogue).',
      image: 'assets/img/ld-eclairage.png',
      link: 'https://twyntz.github.io/Portfolio/'
    },
    {
      title: 'Uberti.shop',
      description: 'Site e-commerce pour la marque Uberti avec gestion des produits et commandes.',
      image: 'assets/img/uberti.png',
      link: 'https://uberti.shop/'
    },
    {
      title: 'GPAO - Interpane',
      description: 'Modernisation d’un logiciel de GPAO : refonte d’interface, DataTables, Chart.js, ODBC, PHP 8.',
      image: 'assets/img/interpane.png',
      link: ''
    }
  ];
}

