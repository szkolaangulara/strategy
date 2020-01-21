import { OfferStrategy } from './offer-strategy.interface';
import { Client } from './client.interface';

export class PrivateDependsOnLicenseYearsStrategy implements OfferStrategy {

  isDiscountAvailable(client: Client): boolean {
    return !client.isUnder25 && client.licenseInMonths > 24;
  }

  getDiscount(client: Client): number {
    if (!this.isDiscountAvailable(client)) {
      return 0;
    }

    const licenseInMonths = client.licenseInMonths;
    if (licenseInMonths > 60) {
      return 15;
    }

    return licenseInMonths * 0.2;
  }
}
