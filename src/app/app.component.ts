import { Component, OnInit } from '@angular/core';
import { Car } from './car/car.model';
import { CarType } from './car/car-type.enum';
import { EngineType } from './car/engine-type.enum';
import { CarService } from './car/car.service';
import { AddressService } from './address/address.service';
import { DiscountService } from './strategy/discount.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public car: Car;
  public car1: Car;
  public karolDiscount: number;
  public jacekDiscount: number;
  public wojtekDiscount: number;
  public dawidDiscount: number;
  public anrzejDiscount: number;

  constructor(private carService: CarService,
              private addressService: AddressService,
              private discountService: DiscountService) {
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

    const karol = {
      name: 'Karol',
      businessInMonths: 15
    };

    const jacek = {
      name: 'Jacek',
      businessInMonths: 60
    };

    const wojtek = {
      name: 'Wojtek',
      isUnder25: false,
      licenseInMonths: 40
    };

    const dawid = {
      name: 'Dawid',
      isUnder25: false,
      licenseInMonths: 35
    };

    const andrzej = {
      name: 'Andrzej',
      isUnder25: false,
      businessInMonths: 4,
    };

    this.karolDiscount = this.discountService.getDiscount(karol);
    this.jacekDiscount = this.discountService.getDiscount(jacek);
    this.wojtekDiscount = this.discountService.getDiscount(wojtek);
    this.dawidDiscount = this.discountService.getDiscount(dawid);
    this.anrzejDiscount = this.discountService.getDiscount(andrzej);
  }
}
