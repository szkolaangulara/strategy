import { Client } from './client.interface';

export interface OfferStrategy {
  isDiscountAvailable(client: Client): boolean;
  getDiscount(client: Client): number;
}
