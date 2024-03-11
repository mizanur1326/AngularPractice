import { Component, OnInit } from '@angular/core';
import { Acservice } from '../acservice'; //interface
import { AcserviceService } from '../acservice.service'; //service page

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  Acservices: Acservice [] = [];
  error = '' ;
  success= '' ;
  Acservice:Acservice = { 
    id: 0,
    name: '',
    description: '',
    price: 0,
    image_path:'',
  }
  constructor ( private acService: AcserviceService ) {
  }

  ngOnInit() {
    this.getServices()
   }
   getServices(): void {
    this.acService.getAll().subscribe(
      (data:Acservice [])=>{
        // console.log(data);
        this.Acservices = data ;
      }
    )
   }
}
