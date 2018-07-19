import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamictab',
  templateUrl: './dynamictab.component.html',
  styleUrls: ['./dynamictab.component.css']
})
export class DynamictabComponent implements OnInit {
  componentDataProduct = {
    component: "list",
    inputs: {
      type: "product"
    }
  };
  componentDataUser = {
    component: "list",
    inputs: { 
      type: "user"
    }
  };
  componentDataOffer = {
    component: "form",
    inputs: {
      type: "offer"
    }
  };
  constructor() { }

  ngOnInit() {
  }
  switchCompData(initialize) {
   console.log(initialize)
    if (initialize.type == "product") {
      this.componentDataProduct = {
        component: initialize.componenttype,
        inputs: {
          type: initialize.type
        }
      };
    }
    else {
      this.componentDataUser = {
        component: initialize.componenttype,
        inputs: {
          type: initialize.type
        }
      };  

    }
  }
}
