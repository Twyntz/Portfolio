import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {
  openMobileNav = false;

  @ViewChild('mobileMenu', { static: false }) mobileMenu!: ElementRef;

  ngAfterViewInit(): void {
    gsap.set(this.mobileMenu.nativeElement, { y: -100, autoAlpha: 0 });
  }

  toggleMobileNav(): void {
    this.openMobileNav = !this.openMobileNav;

    if (this.openMobileNav) {
      gsap.to(this.mobileMenu.nativeElement, {
        duration: 0.5,
        y: 0,
        autoAlpha: 1,
        ease: 'power2.out'
      });
    } else {
      gsap.to(this.mobileMenu.nativeElement, {
        duration: 0.4,
        y: -20,
        autoAlpha: 0,
        ease: 'power2.in'
      });
    }
  }
}
