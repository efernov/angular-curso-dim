import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about/about.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [

  {

    path: "",
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
	},
  {
    path: "about",
    loadChildren: () => import("./about/about.module").then((m) => m.AboutModule),
  },
  {
    path: "contacts",
    loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule),
  },
  {
    path: "car",
    loadChildren: () => import('./car/car.module').then((m) => m.CarModule),
  },
  {
    path: "converter",
    loadChildren: () => import('./converter/converter.module').then((m) => m.ConverterModule),

  },
	{
    path: "not-found",
    component: NotFoundComponent,
  },
  {
    path: "**",
    redirectTo: "not-found",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
