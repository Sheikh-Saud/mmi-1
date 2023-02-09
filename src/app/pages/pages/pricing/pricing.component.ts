import { Component, OnInit } from '@angular/core';
import { stagger60ms } from '../../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'vex-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class PricingComponent implements OnInit {

  constructor(private pr:ProductService) { }

  ngOnInit() {
    this.pr.getShipment().subscribe(
      (res) => {
        console.log(res.data);
      },
      (error) => {
        console.error(error);
      }
    );
    
  }

}
