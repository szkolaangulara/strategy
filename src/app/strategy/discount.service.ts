import { Injectable } from '@angular/core';
import { Client } from './client.interface';
import { OfferStrategy } from './offer-strategy.interface';
import { BusinessDependsOnYearsStrategy } from './business-depends-on-months-strategy';
import { PrivateDependsOnLicenseYearsStrategy } from './private-depends-on-license-years-strategy';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class DiscountService {
  public getDiscount(client: Client): number {
    const strategy = this.prepareStrategy(client);
    return strategy.getDiscount(client);
  }

  private prepareStrategy(client: Client): OfferStrategy {
    if (client.businessInMonths) {
      return new BusinessDependsOnYearsStrategy();
    }
    return new PrivateDependsOnLicenseYearsStrategy();
  }
}
