import { Component, Input } from '@angular/core';
import { OfferModel } from '../models/offer.model';

@Component({
  selector: 'app-offer-item',
  standalone: true,
  imports: [],
  templateUrl: './offer-item.component.html',
  styleUrl: './offer-item.component.css'
})
export class OfferItemComponent {
  @Input() offer!: OfferModel;

}
