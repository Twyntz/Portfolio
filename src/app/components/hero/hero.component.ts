import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('line', { static: false }) line!: ElementRef;
  @ViewChild('typewriter', { static: false }) typewriter!: ElementRef;

  roles = [
    'Étudiant en ingénierie logicielle',
    'Développeur Full Stack',
    'Développeur Logiciel'
  ];
  currentRoleIndex = 0;

  ngAfterViewInit(): void {
    // Préparation de l'animation du trait
    gsap.set(this.line.nativeElement, { scaleX: 1 });

    // Lancer l'animation de texte
    this.cycleRoles();
  }

  cycleRoles(): void {
    const el = this.typewriter.nativeElement;

    const updateText = () => {
      const role = this.roles[this.currentRoleIndex];
      gsap.to(el, {
        text: role,
        duration: 1,
        ease: 'power2.inOut'
      });
      this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;

      setTimeout(updateText, 2500); // délai entre les rôles
    };

    updateText();
  }

  onHover(): void {
    gsap.to(this.line.nativeElement, {
      scaleX: 3,
      transformOrigin: 'center',
      duration: 0.3,
      ease: 'power2.out'
    });
  }

  onLeave(): void {
    gsap.to(this.line.nativeElement, {
      scaleX: 1,
      transformOrigin: 'center',
      duration: 0.3,
      ease: 'power2.in'
    });
  }
}
