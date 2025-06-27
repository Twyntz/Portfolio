import { Component, AfterViewInit, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import gsap from 'gsap';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'] 
})
export class SkillsComponent implements AfterViewInit {
  @ViewChildren('skillCard') skillCards!: QueryList<ElementRef>;

  allSkills = [
  { id: 'php', name: 'PHP', icon: 'assets/img/php.png' },
  { id: 'html', name: 'HTML', icon: 'assets/img/html.png' },
  { id: 'css', name: 'CSS / SCSS', icon: 'assets/img/css.png' },
  { id: 'javascript', name: 'JS', icon: 'assets/img/js.png' },
  { id: 'sql', name: 'SQL', icon: 'assets/img/sql.png' },
  { id: 'java', name: 'Java', icon: 'assets/img/java.svg' },
  { id: 'docker', name: 'Docker', icon: 'assets/img/docker.svg' },
  { id: 'gestion-projet', name: 'Gestion de projet', icon: 'assets/img/gestion_de_projet.png' },
  { id: 'relation-client', name: 'Relation Client', icon: 'assets/img/relation_client.png' },
  { id: 'typescript', name: 'TypeScript', icon: 'assets/img/typescript.png' },
  { id: 'angular', name: 'Angular', icon: 'assets/img/angular.png' },
  { id: 'symfony', name: 'Symfony', icon: 'assets/img/symfony.png' },
  { id: 'wordpress', name: 'Wordpress', icon: 'assets/img/wordpress.png' },
  { id: 'prestashop', name: 'Prestashop', icon: 'assets/img/prestashop.png' },
  { id: 'communication', name: 'Communication', icon: 'assets/img/communication.svg' }
];


  ngAfterViewInit(): void {
    gsap.from(this.skillCards.map(el => el.nativeElement), {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out'
    });
  }
}
