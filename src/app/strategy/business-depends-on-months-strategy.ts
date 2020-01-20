import { OfferStrategy } from './offer-strategy.interface';
import { Client } from './client.interface';

export class BusinessDependsOnYearsStrategy implements OfferStrategy {
  isDiscountAvailable(client: Client): boolean {
    return client.businessInMonths > 6;
  }

  getDiscount(client: Client): number {
    const businessInMonths = client.businessInMonths;
    if (!businessInMonths || businessInMonths < 6) {
      return 0;
    }
    if (businessInMonths >= 6 && businessInMonths < 12) {
      return 4;
    }

    if (businessInMonths > 60) {
      return 30;
    }

    return businessInMonths * 0.4;
  }
}
