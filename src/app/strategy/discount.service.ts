import { Injectable } from '@angular/core';
import { Client } from './client.interface';
import { OfferStrategy } from './offer-strategy.interface';
import { BusinessOfferStrategy } from './business-offer-strategy';
import { PrivateOfferStrategy } from './private-offer-strategy';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class DiscountService {
  public getDiscount(client: Client): number {
    return this.resolveStrategy(client).getDiscount(client);
  }

  private resolveStrategy(client: Client): OfferStrategy {
    if (client.businessInMonths) {
      return new BusinessOfferStrategy();
    }
    return new PrivateOfferStrategy();
  }
}
