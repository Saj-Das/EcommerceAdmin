import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DynamicListService {
 
  constructor(private http: HttpClient) { }
  url='http://localhost:3000/api/';

  getProductList()
  {
    return this.http.get(this.url+'List/getProduct');
  }
  getUserList(){
    return this.http.get(this.url+'List/getUser');
  }

}
