import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OfferModel } from '../models/offer.model';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class OffersService {

  constructor(private http: HttpClient, private config: ConfigService) {}

  getOffers() {
    return this.http.get<OfferModel[]>(`${this.config.url}/services`);
  }
}
