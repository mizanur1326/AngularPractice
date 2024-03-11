import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AcserviceService {

  baseUrl = 'https://mizanur.wdpf55.com/angular/api' ;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${this.baseUrl}/services.php`).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }

}