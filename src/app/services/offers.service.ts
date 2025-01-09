import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OffersService {
  url: string = 'http://localhost:4200/';

  constructor(private http: HttpClient) {}

  getOffers() {
    return this.http.get(this.url);
  }
}
