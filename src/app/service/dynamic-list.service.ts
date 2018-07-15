import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DynamicListService {
  getUserList(){
    return this.http.get(this.url+'List/getUser');
  }

  constructor(private http: HttpClient) { }
  url='https://localhost:5001/api/';

  getProductList()
  {
    return this.http.get(this.url+'List/getProduct');
  }
}
