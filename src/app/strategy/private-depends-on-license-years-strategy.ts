import { OfferStrategy } from './offer-strategy.interface';
import { Client } from './client.interface';

export class PrivateDependsOnLicenseYearsStrategy implements OfferStrategy {

  isDiscountAvailable(client: Client): boolean {
    return !client.isUnder25;
  }

  getDiscount(client: Client): number {
    const licenseInMonths = client.licenseInMonths;
    if (!this.isDiscountAvailable(client) || licenseInMonths <= 24) {
      return 0;
    }

    if (licenseInMonths > 60) {
      return 15;
    }

    return licenseInMonths * 0.2;
  }


}
