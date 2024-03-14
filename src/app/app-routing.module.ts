import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"home", component: HomeComponent },
  {path:"about", component: HomeComponent },
  {path:"projects", component: HomeComponent },
  {path:"contact", component: HomeComponent },
  {path:"**", component: HomeComponent },
  {path:"", redirectTo:"home", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
