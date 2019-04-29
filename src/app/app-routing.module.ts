import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './common/home.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: 'sandbox', component:SandboxComponent},
  {path: 'experience', component:ExperienceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
