import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DynamicFormService } from '../service/dynamicForm.service';
import { HttpResponse } from '@angular/common/http';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { getOrCreateTemplateRef } from '../../../node_modules/@angular/core/src/render3/di';
import { Router } from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-dfrm',
  templateUrl: './dynamicForm.component.html',
  styleUrls: ['./dynamicForm.component.css'],

})
export class DynamicFormComponent implements OnInit {
  @Input('type') type: any;
  heroForm: FormGroup;
  selectedFiles: FileList;
  formControl: any;
  currentFileUpload: File;
  form: FormGroup;
  formType: any;
  IsLoaderVisible: boolean;
  @Output('switch') switch = new EventEmitter();

  constructor(
    public dynamicFormService: DynamicFormService,
    private fb: FormBuilder,
    private router: Router) {
  }
  switchCompData() {
    console.log("test")
    var initialize = { type: this.type, componenttype: "list" }
    this.switch.emit(initialize)
  }
  getType(type) {

    if (type.indexOf("product") == 1) {
      return "product"
    }
    else if (type.indexOf("user") == 1) {
      return "user"
    }
  }
  getTemplate() {
    switch (this.formType) {
      case "product":
        return [
          {
            fctrl: [{ "Dname": "Product Name", "name": "ProductName", "type": "input" },
            { "Dname": "Selling Price", "name": "SellingPrice", "type": "number" }]
          },
          {
            fctrl: [{ "Dname": "Cost Price", "name": "CostPrice", "type": "number" },
            { "Dname": "Brand", "name": "Brand", "type": "input" }]
          },
          {
            fctrl: [{ "Dname": "Quantity", "name": "Quantity", "type": "number" },
            { "Dname": "Category", "name": "Category", "type": "dropdown" }]
          },
          {
            fctrl: [{ "Dname": "Tags", "name": "Tags", "type": "dropdown" },
            { "Dname": "Detail", "name": "Detail", "type": "textarea" }]
          }
          ,
          { fctrl: [{ "Dname": "Select Image", "name": "image", "type": "file" }] }

        ];
      case "user":
        return [
          {
            fctrl: [{ "Dname": "Name", "name": "Name", "type": "input" },
            { "Dname": "Password", "name": "Password", "type": "pass" }]
          },
          {
            fctrl: [{ "Dname": "Country", "name": "Country", "type": "dropdown" },
            { "Dname": "Contact", "name": "Contact", "type": "number" }]
          },
          { fctrl: [{ "Dname": "Email", "name": "Email", "type": "email" }] }

        ];
    }
  }
  toFormGroup() {
    let group: any = {};
    this.formControl.forEach(x => {
      x.fctrl.forEach(y => {
        group[y.name] = new FormControl('', Validators.required);
      });
    });
    return new FormGroup(group);
  }

  ngOnInit() {
    this.formType = this.type;
    this.formControl = this.getTemplate();
    this.form = this.toFormGroup();
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  onSubmit(form) {

    this.IsLoaderVisible = true;
    if (this.formType == "product") {
      this.currentFileUpload = this.selectedFiles.item(0);
      this.upload(form.value);
    }
    else if (this.formType == "user")
      this.dynamicFormService.addUser(form.value, this);
  }
  upload(formdata) {
    this.dynamicFormService.uploadFile(this.currentFileUpload, formdata).subscribe(event => {
      if (event instanceof HttpResponse) {
        this.IsLoaderVisible = false;
      }
    });
    //this.selectedFiles = undefined;
  }

}
