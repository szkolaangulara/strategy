import { CarType } from './car-type.enum';
import { EngineType } from './engine-type.enum';
import { AddressModel } from '../address/address.model';

export class Car {

  constructor(public brand: string,
              public model: string,
              public engineType: EngineType,
              public type: CarType,
              public discountAvailable: boolean,
              public address: AddressModel,
              public discountPercent?: number) {
  }
}
