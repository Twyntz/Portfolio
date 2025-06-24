import { Component, AfterViewInit, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'] 
})
export class SkillsComponent implements AfterViewInit {
  @ViewChildren('skillCard') skillCards!: QueryList<ElementRef>;

  allSkills = [
    { name: 'Angular', icon: 'assets/icons/angular.svg' },
    { name: 'Tailwind CSS', icon: 'assets/icons/tailwind.svg' },
    { name: 'Spring Boot', icon: 'assets/icons/spring.svg' },
    { name: 'TypeScript', icon: 'assets/icons/typescript.svg' },
    { name: 'Docker', icon: 'assets/icons/docker.svg' },
    { name: 'MySQL', icon: 'assets/icons/mysql.svg' },
    { name: 'GitHub', icon: 'assets/icons/github.svg' },
    { name: 'Trello', icon: 'assets/icons/trello.svg' },
    { name: 'HTML5', icon: 'assets/icons/html.svg' },
    { name: 'CSS3', icon: 'assets/icons/css.svg' }
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
