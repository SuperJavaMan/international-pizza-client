import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PizzaListComponent} from '../../pizza/pizza-list/pizza-list.component';
import {LoginComponent} from '../../auth/form/login/login.component';
import {RegComponent} from '../../auth/form/reg/reg.component';
import {AddPizzaComponent} from '../../pizza/add-pizza/add-pizza.component';
import {UpdatePizzaComponent} from '../../pizza/update-pizza/update-pizza.component';
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
  },
  {
    path: 'add-pizza',
    component: AddPizzaComponent
  },
  {
    path: 'update-pizza/:id',
    component: UpdatePizzaComponent
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
