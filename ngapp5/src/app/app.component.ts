import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


import { Car } from './car';
import { CarService } from './car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cars: Car[] = [];
  error = '';
  success = '';
  
  car: Car =  {model:'', price:0};
  constructor(private carService: CarService) {
  }
        
  ngOnInit() {
    this.getCars();
  }
        
  getCars(): void {
    this.carService.getAll().subscribe(
      (data: Car[]): void => {
        this.cars = data;
        this.success = 'successful retrieval of the list';
      },
      (err) => {
        console.log(err);
        this.error = err;
      }
    );
  }

  addCar(f: NgForm) {
    this.resetAlerts();
    

    this.carService.store(this.car).subscribe(
      (res: Car) => {
        // Update the list of cars
        this.cars.push(res)

        // Inform the user
        this.success = 'Created successfully';

        // Reset the form
        f.reset();
      },
      (err) => (this.error = err.message)
    );
}

updateCar(name: any, price: any, id: any) {
  this.resetAlerts();

  this.carService
    .update({ model: name.value, price: price.value, id: +id })
    .subscribe(
      (res) => {
        this.success = 'Updated successfully';
      },
      (err) => (this.error = err)
    );
}

resetAlerts() {
  this.error = '';
  this.success = '';
}

}