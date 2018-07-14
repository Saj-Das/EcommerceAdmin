import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';
import {HttpResponse} from '@angular/common/http';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  selectedFiles: FileList;
  formControl=[
    { fctrl: [{"name":"Product Name","type":"input"},{"name":"Selling Price","type":"input"}]},
    { fctrl: [{"name":"Cost Price","type":"input"}, {"name":"Brand","type":"input"  }]},
    { fctrl: [{"name":"Quantity","type":"input"},{"name":"Category","type":"dropdown"  }]},
    { fctrl: [{"name":"Tags","type":"dropdown"},{"name":"Detail","type":"textarea"  }]}
  
  ]
  currentFileUpload: File;
  constructor(public homeService:HomeService) 
  {

   }
   resolve(type,intendedType)
   {
     console.log(type);
      if(type==intendedType)
      {
        return true;

      }
      else   false;
   }
  ngOnInit() {
  }
  selectFile(event) {

    this.selectedFiles = event.target.files;

  }
 
  upload() {

    this.currentFileUpload = this.selectedFiles.item(0);
    console.log(this.homeService)

    this.homeService.uploadFile(this.currentFileUpload).subscribe(event => {

     if (event instanceof HttpResponse) {

        console.log('File is completely uploaded!');

      }

    });

    this.selectedFiles = undefined;

  }
  getData()
  {
    this.homeService.getData().subscribe(x=> console.log(x));
  }
}
