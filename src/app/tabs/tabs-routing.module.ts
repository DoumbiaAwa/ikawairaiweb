import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';
import { LoginComponent } from '../proprietaire/login/login.component';
const routes: Routes = [

  {
    path: 'tabs',
    component: TabsComponent,
    children: [

      {
        path: 'login',
        component: LoginComponent
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
