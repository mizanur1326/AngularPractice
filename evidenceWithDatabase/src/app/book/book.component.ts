import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  constructor(private http:HttpClient ){
  
  }

  onSubmit(data:any){
    this.http.post('http://localhost/Angular/evidenceWithDatabase/api/book.php', data)
    .subscribe(result=>{
      console.log(result)
      if (result){
        alert("Successfully Booked")
        // window.location.reload();
      }
    })
     console.warn(data);
  }
}





  
  

