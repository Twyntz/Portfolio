import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export type Skill = {
  id: string;
  name: string;
  icon: string;
  level: number;
};

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  readonly SIZE = 260;
  readonly RADIUS = 78; // réduit pour laisser de l'espace aux labels
  readonly LEVELS = [2, 4, 6, 8, 10];

  technicalSkills: Skill[] = [
    { id: 'java', name: 'Java', icon: 'assets/img/java.svg', level: 9 },
    { id: 'docker', name: 'Docker', icon: 'assets/img/docker.svg', level: 7 },
    {
      id: 'prestashop',
      name: 'PrestaShop',
      icon: 'assets/img/prestashop.png',
      level: 7,
    },
    {
      id: 'angular',
      name: 'Angular',
      icon: 'assets/img/angular.png',
      level: 7,
    },
    { id: 'php', name: 'PHP', icon: 'assets/img/php.png', level: 8 },
    {
      id: 'wordpress',
      name: 'WordPress',
      icon: 'assets/img/wordpress.png',
      level: 8,
    },
  ];

  nonTechnicalSkills: Skill[] = [
    {
      id: 'communication',
      name: 'Communication',
      icon: 'assets/img/communication.png',
      level: 8,
    },
    {
      id: 'gestion-projet',
      name: 'Gestion de projet',
      icon: 'assets/img/gestion_de_projet.png',
      level: 7,
    },
    {
      id: 'relation-client',
      name: 'Relation client',
      icon: 'assets/img/relation_client.png',
      level: 7,
    },
    {
      id: 'autonomie',
      name: 'Autonomie',
      icon: 'assets/img/autonomie.png',
      level: 9,
    },
  ];

  // ── Helpers radar SVG ────────────────────────────────────────────────────

  private point(
    index: number,
    total: number,
    level: number,
  ): { x: number; y: number } {
    const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
    const r = (level / 10) * this.RADIUS;
    return {
      x: this.SIZE / 2 + r * Math.cos(angle),
      y: this.SIZE / 2 + r * Math.sin(angle),
    };
  }

  gridPolygon(level: number, total: number): string {
    return Array.from({ length: total }, (_, i) => {
      const p = this.point(i, total, level);
      return `${p.x},${p.y}`;
    }).join(' ');
  }

  dataPolygon(skills: Skill[]): string {
    return skills
      .map((s, i) => {
        const p = this.point(i, skills.length, s.level);
        return `${p.x},${p.y}`;
      })
      .join(' ');
  }

  dataPoints(skills: Skill[]): { x: number; y: number; level: number }[] {
    return skills.map((s, i) => ({
      ...this.point(i, skills.length, s.level),
      level: s.level,
    }));
  }

  axisEnd(index: number, total: number): { x: number; y: number } {
    return this.point(index, total, 10);
  }

  labelPos(index: number, total: number): { x: number; y: number } {
    const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
    const r = this.RADIUS + 22;
    return {
      x: this.SIZE / 2 + r * Math.cos(angle),
      y: this.SIZE / 2 + r * Math.sin(angle),
    };
  }

  textAnchor(index: number, total: number): string {
    const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
    const cos = Math.cos(angle);
    if (cos > 0.2) return 'start';
    if (cos < -0.2) return 'end';
    return 'middle';
  }

  // ── Helpers barres ───────────────────────────────────────────────────────

  levelPercent(level: number): string {
    return `${level * 10}%`;
  }

  levelLabel(level: number): string {
    if (level >= 9) return 'Expert';
    if (level >= 7) return 'Avancé';
    if (level >= 5) return 'Intermédiaire';
    return 'Débutant';
  }
}
