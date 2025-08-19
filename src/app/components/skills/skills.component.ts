import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

type Skill = { id: string; name: string; icon: string };

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  technicalSkills: Skill[] = [
    { id: 'html',        name: 'HTML',        icon: 'assets/img/html.png' },
    { id: 'css',         name: 'CSS / SCSS',  icon: 'assets/img/css.png' },
    { id: 'javascript',  name: 'JavaScript',  icon: 'assets/img/js.png' },
    { id: 'typescript',  name: 'TypeScript',  icon: 'assets/img/typescript.png' },
    { id: 'angular',     name: 'Angular',     icon: 'assets/img/angular.png' },
    { id: 'php',         name: 'PHP',         icon: 'assets/img/php.png' },
    { id: 'symfony',     name: 'Symfony',     icon: 'assets/img/symfony.png' },
    { id: 'sql',         name: 'SQL',         icon: 'assets/img/sql.png' },
    { id: 'java',        name: 'Java',        icon: 'assets/img/java.svg' },
    { id: 'docker',      name: 'Docker',      icon: 'assets/img/docker.svg' },
    { id: 'wordpress',   name: 'Wordpress',   icon: 'assets/img/wordpress.png' },
    { id: 'prestashop',  name: 'Prestashop',  icon: 'assets/img/prestashop.png' }
  ];

  nonTechnicalSkills: Skill[] = [
    { id: 'communication',    name: 'Communication',     icon: 'assets/img/communication.png' },
    { id: 'gestion-projet',   name: 'Gestion de projet', icon: 'assets/img/gestion_de_projet.png' },
    { id: 'relation-client',  name: 'Relation Client',   icon: 'assets/img/relation_client.png' },
    { id: 'autonomie',  name: 'Autonomie',   icon: 'assets/img/autonomie.png' }
  ];
}
