import { OfferStrategy } from './offer-strategy.interface';

export class NoDiscountStrategy implements OfferStrategy {
  isDiscountAvailable(): boolean {
    return false;
  }

  getDiscount(): number {
    return 0;
  }
}
