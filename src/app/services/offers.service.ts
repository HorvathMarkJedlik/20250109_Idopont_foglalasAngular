import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OfferModel } from '../models/offer.model';
import { ConfigService } from './config.service';
import { map } from 'rxjs';
import { TimeModel } from '../models/time.model';

@Injectable({
  providedIn: 'root',
})
export class OffersService {

  constructor(private http: HttpClient, private config: ConfigService) {}

  getOffers() {
    return this.http.get<OfferModel[]>(`${this.config.url}/services`);
  }

  getOffer(id: number){
    return this.http.get<OfferModel>(`${this.config.url}/services/${id}`);
  }

  getDates(Serviceid: number){
    const url = `${this.config.url}/times?serviceid=${Serviceid}`;
    return this.http.get<TimeModel[]>(url).pipe(
      map((response: TimeModel[]) => {
        const dates = response.map((time) => time.date)
        return [...new Set(dates)];
      })
    );
  }

  getTimes(serviceId: number, date: string){
    const url = `${this.config.url}/times?serviceid=${serviceId}&date=${date}`;
    return this.http.get<TimeModel[]>(url)
  }
}
