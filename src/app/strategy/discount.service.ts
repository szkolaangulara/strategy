import { Injectable } from '@angular/core';
import { Client } from './client.interface';
import { OfferStrategy } from './offer-strategy.interface';
import { BusinessDependsOnMonthsStrategy } from './business-depends-on-months-strategy';
import { PrivateDependsOnLicenseMonthsStrategy } from './private-depends-on-license-months-strategy';

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
      return new BusinessDependsOnMonthsStrategy();
    }
    return new PrivateDependsOnLicenseMonthsStrategy();
  }
}
