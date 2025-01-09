import { Component } from '@angular/core';
import { OffersService } from '../services/offers.service';
import { OfferModel } from '../models/offer.model';
import { OfferItemComponent } from "../offer-item/offer-item.component";

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [OfferItemComponent],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent {
  offers: OfferModel[] = []


 constructor(private offersService: OffersService) {}

 ngOnInit(){
  this.offersService.getOffers().subscribe({
    next: response => this.offers = response,
    error: err => console.log(err)
  });
 }
}
