import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Portfolio',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id neque non risus luctus.',
      image: 'assets/img/portfolio.png',
      link: 'https://github.com/Twyntz/portfolio'
    },
    {
      title: 'Ubertishop',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae magna eu nisi cursus.',
      image: 'assets/img/uberti.png',
      link: 'https://uberti.shop/'
    },
    {
      title: 'Lorem',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel quam ut risus tincidunt.',
      image: 'assets/img/portfolio.png',
      link: 'https://github.com/Twyntz/finance-dashboard'
    }
  ];
}

