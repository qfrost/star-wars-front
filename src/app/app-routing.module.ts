import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { FilmsComponent } from './films/films.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: PeopleComponent },
  { path: 'films', pathMatch: 'full', component: FilmsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
