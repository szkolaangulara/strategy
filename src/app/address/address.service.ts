import { Injectable } from '@angular/core';
import { AddressModel } from './address.model';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class AddressService {
  private carAddresses = AddressService.prepareCarAddresses();

  private static prepareCarAddresses(): Map<string, AddressModel> {
    const carAddresses = new Map();
    const a4Street = new AddressModel('Audicowa', 4, 6);
    carAddresses.set('A6', a4Street);
    const classEStreet = new AddressModel('Mercedesowa', 56, 8);
    carAddresses.set('Klasa C', classEStreet);

    return carAddresses;
  }

  public fetchAddress(carModel: string): AddressModel {
    return this.carAddresses.get(carModel);
  }
}
