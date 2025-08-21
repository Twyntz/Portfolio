import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'competences/:id',
    loadComponent: () =>
      import('./pages/skill-detail/skill-detail.component').then(m => m.SkillDetailComponent)
  },
  {
    path: 'projets',
    loadComponent: () =>
      import('./pages/projects/projects.component').then(m => m.ProjectsComponent)
  },
  {
    path: 'projets/:id',
    loadComponent: () =>
      import('./pages/project-detail/project-detail.component').then(m => m.ProjectDetailComponent)
  },
  { path: '**', redirectTo: '' }
];
