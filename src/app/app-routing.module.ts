import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { SummaryComponent } from './components/summary/summary.component';
import { VolunteerExperiencesComponent } from './components/volunteer-experiences/volunteer-experiences.component';
import { WorkExperiencesComponent } from './components/work-experiences/work-experiences.component';
import { CertificatesComponent } from './components/certificates/certificates.component';

const routes: Routes = [
  { path: 'summary', component: SummaryComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'work-experiences', component: WorkExperiencesComponent },
  { path: 'education', component: EducationComponent },
  { path: 'volunteer-experiences', component: VolunteerExperiencesComponent },
  { path: 'certificates', component: CertificatesComponent },
  {path: '', redirectTo: '/summary', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
