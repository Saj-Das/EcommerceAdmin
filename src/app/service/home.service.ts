import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';
import {Http, Response} from '@angular/http';
@Injectable()
export class HomeService {

  constructor(private http: HttpClient) { }
  
  uploadFile(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', 'https://localhost:5001/api/home', formdata, {
      reportProgress: true,
      responseType: 'text'
    }
    );
    return this.http.request(req);
  }
  addProduct(data)
  {
    this.http.post("https://localhost:5001/api/product",data).subscribe(data => 
    {console.log(data);},
     error => 
     {alert("Error");}
    );;
  }
getData()
{
  return this.http.get('https://localhost:5001/api/home');
}
}
