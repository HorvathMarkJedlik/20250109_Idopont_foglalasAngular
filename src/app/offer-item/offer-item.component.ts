import { Component, Input } from '@angular/core';
import { OfferModel } from '../models/offer.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-offer-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './offer-item.component.html',
  styleUrl: './offer-item.component.css'
})
export class OfferItemComponent {
  @Input() offer!: OfferModel;

}
