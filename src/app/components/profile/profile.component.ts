import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements AfterViewInit {
  @ViewChild('profileCard', { static: false }) profileCard!: ElementRef;

  birthYear = 2002;
  age = new Date().getFullYear() - this.birthYear;

  profileInfo = [
    { label: 'Téo Ulgen' },
    { label: `Âge : ${this.age} ans` },
    { label: 'teoulgen.pro@gmail.com', link: 'mailto:teoulgen.pro@gmail.com' },
    { label: 'Linkedin', link: 'https://www.linkedin.com/in/téo-ulgen-556b7a274/' },
    { label: 'Github', link: 'https://github.com/Twyntz' }
  ];

  ngAfterViewInit(): void {
    gsap.from(this.profileCard.nativeElement, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out'
    });
  }
}