import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';
import {Http, Response} from '@angular/http';
@Injectable()
export class DynamicFormService {
 
  

  constructor(private http: HttpClient) { }
   url='http://localhost:3000/api/';

  uploadFile(file: File,formdata1): Observable<HttpEvent<{}>> {
    formdata1=JSON.stringify(formdata1)
    console.log(formdata1);
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    formdata.append('data', formdata1);
    const req = new HttpRequest('POST', this.url+'Form/PostFile', formdata, {
      reportProgress: true,
      responseType: 'text'
    }
    )
    return this.http.request(req);
  }
  addProduct(data)
  {
    return this.http.post(this.url+"Form/ProductAdd",data);
  }
  populatedropdown(): any {
    return this.http.get(this.url+"Form/Populatedropdown");
  }
  addUser(data,me)
  {
    this.http.post(this.url+"Form/UserAdd",data).subscribe(data => 
    {
      me.IsLoaderVisible=false;
    },
     error => 
     {
     me.IsLoaderVisible=false;
    }
    );
  }
  addOffer(data: any, me: any): any {
    this.http.post(this.url+"Form/AddOffer",data).subscribe(data => 
      {
        me.IsLoaderVisible=false;
      },
       error => 
       {
       me.IsLoaderVisible=false;
      }
      );
  }
 

}
