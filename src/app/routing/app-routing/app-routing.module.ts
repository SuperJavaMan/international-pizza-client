import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PizzaListComponent} from '../../pizza/pizza-list/pizza-list.component';
import {LoginComponent} from '../../auth/form/login/login.component';
import {RegComponent} from '../../auth/form/reg/reg.component';
const routes: Routes = [
  {
    path: '',
    component: PizzaListComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'reg',
    component: RegComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
