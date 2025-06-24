import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { ProfileComponent } from "../../components/profile/profile.component";
import { SkillsComponent } from "../../components/skills/skills.component";
import { ProjectsComponent } from "../../components/projects/projects.component";
import { ParcoursComponent } from "../../components/parcours/parcours.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ProfileComponent, SkillsComponent, ProjectsComponent, ParcoursComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
