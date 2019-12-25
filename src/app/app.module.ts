import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {httpInterceptorProviders} from './auth/interceptor/auth-interceptor';
import { LoginComponent } from './auth/form/login/login.component';
import { RegComponent } from './auth/form/reg/reg.component';
import {ReactiveFormsModule} from '@angular/forms';
import { PizzaListComponent } from './pizza/pizza-list/pizza-list.component';
import {AppRoutingModule} from './routing/app-routing/app-routing.module';
import {RouterModule} from '@angular/router';
import { AddPizzaComponent } from './pizza/add-pizza/add-pizza.component';
import { UpdatePizzaComponent } from './pizza/update-pizza/update-pizza.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegComponent,
    PizzaListComponent,
    AddPizzaComponent,
    UpdatePizzaComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
