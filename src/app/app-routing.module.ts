import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { SummaryComponent } from './summary/summary.component';
import { WorkExperiencesComponent } from './work-experiences/work-experiences.component';

const routes: Routes = [
  { path: 'summary', component: SummaryComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'work-experiences', component: WorkExperiencesComponent },
  {path: '', redirectTo: '/summary', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
