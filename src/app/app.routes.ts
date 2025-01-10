import { Routes } from '@angular/router';
import { OffersComponent } from './offers/offers.component';
import { LoginComponent } from './login/login.component';
import { OfferDetailsComponent } from './offer-details/offer-details.component';

export const routes: Routes = [
  {path: 'services', component: OffersComponent},
  {path: 'login', component: LoginComponent},
  {path: 'services/:id', component: OfferDetailsComponent}
];
