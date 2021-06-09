import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  {path: "", pathMatch: "full",redirectTo:"/Home"},
  {path: "Home", component: HomeComponent},
  {path: "Register", component: RegisterComponent},
  {path: "Events", component: EventsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
