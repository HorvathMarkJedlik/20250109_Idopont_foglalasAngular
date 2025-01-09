import { Routes } from '@angular/router';
import { OffersComponent } from './offers/offers.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {path: 'services', component: OffersComponent},
  {path: 'login', component: LoginComponent}
];
