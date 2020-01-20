import { Injectable } from '@angular/core';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class CarService {

  private carDiscountModels: string[] = ['Mercedes', 'Citroen'];
  private carDiscountMap = new Map().set('Klasa E', 10).set('Klasa A', 20);


  public checkIfDiscountIsAvailable(carBrand: string): boolean {
    const result = this.carDiscountModels.find(carDiscountBrand => carDiscountBrand === carBrand);
    return !!result;
  }

  public getDiscountForCar(carModel: string): number {
    return this.carDiscountMap.get(carModel);
  }
}
