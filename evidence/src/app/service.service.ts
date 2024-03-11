import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class Service {

  baseUrl = 'http://localhost/Angular/evidence/api/dashboard';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.baseUrl}/service.php`).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
}
}
