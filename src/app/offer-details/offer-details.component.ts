import { Component } from '@angular/core';
import { OffersService } from '../services/offers.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { OfferModel } from '../models/offer.model';

@Component({
  selector: 'app-offer-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './offer-details.component.html',
  styleUrl: './offer-details.component.css',
})
export class OfferDetailsComponent {
  id: any = null;
  offer?: OfferModel;
  dates: string[] = [];


  constructor(
    private offerService: OffersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(){
    this.route.paramMap.subscribe((params) =>{
      this.id = params.get('id');
      this.getOffer(this.id);
      this.getDates(this.id);
    })
  }

  getOffer(id: any){
    this.offerService.getOffer(Number(id)).subscribe({
      next: (response) =>{
        this.offer = response;
      },
      error: (err) => console.log(err)
    });
  }

  getDates(id: any){
    this.offerService.getDates(Number(id)).subscribe({
      next: (response: string[]) => this.dates = response,
      error: (err: string) => console.log(err)
    })
  }
}
