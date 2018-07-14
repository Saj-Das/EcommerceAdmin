import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';
import { HttpResponse } from '@angular/common/http';
import { FormControl, FormGroup, FormBuilder ,Validators} from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
})
export class HomeComponent implements OnInit {
  heroForm: FormGroup;
  selectedFiles: FileList;
  formControl = [
    { fctrl: [{ "name": "Product Name", "type": "input" }, { "name": "Selling Price", "type": "input" }] },
    { fctrl: [{ "name": "Cost Price", "type": "input" }, { "name": "Brand", "type": "input" }] },
    { fctrl: [{ "name": "Quantity", "type": "input" }, { "name": "Category", "type": "dropdown" }] },
    { fctrl: [{ "name": "Tags", "type": "dropdown" }, { "name": "Detail", "type": "textarea" }] }

  ]
  currentFileUpload: File;
  form: FormGroup;
  constructor(public homeService: HomeService, private fb: FormBuilder) {
    this.form=this.toFormGroup();
  }
  toFormGroup() {
    let group: any = {};
    this.formControl.forEach(x => {
      x.fctrl.forEach(y => {
        group[y.name] = new FormControl('',Validators.required);
      });
    });
    return new FormGroup(group);
  }

  ngOnInit() {
  }
  selectFile(event) {

    this.selectedFiles = event.target.files;

  }
  onSubmit(form)
  {
    console.log(form.value)
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
  getData() {
    this.homeService.getData().subscribe(x => console.log(x));
  }
}
