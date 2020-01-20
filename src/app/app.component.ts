import { Component, OnInit } from '@angular/core';
import { Car } from './car/car.model';
import { CarType } from './car/car-type.enum';
import { EngineType } from './car/engine-type.enum';
import { CarService } from './car/car.service';
import { AddressService } from './address/address.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public car: Car;
  public car1: Car;
  public audiAddress: string;
  public mercedesAddress: string;

  constructor(private carService: CarService,
              private addressService: AddressService) {
  }

  public ngOnInit(): void {
    this.car = new Car(
      'Audi',
      'A6',
      EngineType.GASOLINE,
      CarType.SEDAN,
      this.carService.checkIfDiscountIsAvailable('Audi'),
      this.addressService.fetchAddress('A6'));

    this.car1 = new Car('Mercedes',
      'Klasa E',
      EngineType.DIESEL,
      CarType.COUPE,
      this.carService.checkIfDiscountIsAvailable('Mercedes'),
      this.addressService.fetchAddress('Klasa E'),
      this.carService.getDiscountForCar('Klasa E')
    );

    if (this.car.address) {
      this.audiAddress = `${this.car.address.streetName} ${this.car.address.streetNumber}/${this.car.address.buildingNumber}`;
    }
  }
}
