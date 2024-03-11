import { Component, OnInit } from '@angular/core';

import { Service } from '../service.service';

@Component({
  selector: 'app-room',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  services: Service[] = [];
  error = '';
  success = '';
  service: Service = { name: '', price: 0, image: '' };
        
  constructor(private Service: Service) {
  }
        
  ngOnInit() {
    this.getRooms();
  }
        
  getRooms(): void {
    this.Service.getAll().subscribe(
      (data: Service[]) => {
        this.services = data;
        console.log(data);
        this.success = 'successful retrieval of the list';
      },
      // (err) => {
      //   console.log(err);
      //   this.error = err;
      // }
    );
  }
}
