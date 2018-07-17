import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DynamicListService } from '../service/dynamic-list.service';

@Component({
  selector: 'app-dynamic-list',
  templateUrl: './dynamic-list.component.html',
  styleUrls: ['./dynamic-list.component.css']
})
export class DynamicListComponent implements OnInit {
  @Input('type') type: any;
@Output('switch') switch= new EventEmitter();
  tableHeader: any;
  tableBody: any;
  constructor(private dynamicListService: DynamicListService) { }
  ngOnInit() {
    this.tableHeader = this.getTemplateForList();
    
  }
  switchCompData()
  {
    console.log("test")
    var initialize={type:this.type,componenttype:"form"}
    this.switch.emit(initialize)
  }
  getTemplateForList() {
    switch (this.type) {
      case "product":
      this.dynamicListService.getProductList().subscribe(x => this.tableBody = x.result);
        return [{ header: { Displayname: 'Snapshot', name: 'image' } },
        { header: { Displayname: 'Product Name', name: 'ProductName' } },
        { header: { Displayname: 'Selling Price', name: 'SellingPrice' } },
        { header: { Displayname: 'Cost Price', name: 'CostPrice' } },
        { header: { Displayname: 'Brand', name: 'Brand' } },
        { header: { Displayname: 'Quantity', name: 'Quantity' } },
        { header: { Displayname: 'Category', name: 'Category' } },
        { header: { Displayname: 'Tags', name: 'Tags' } }
        ];
        case "user":
        this.dynamicListService.getUserList().subscribe(x => this.tableBody = x.result);
        return [ { header: { Displayname: 'Name', name: 'Name' } },
        { header: { Displayname: 'Password', name: 'Password' }},
        { header: { Displayname: 'Contact', name: 'Contact' } },
        { header: { Displayname: 'Country', name: 'Country' } },
        { header: { Displayname: 'Email', name: 'Email' } },
        { header: { Displayname: 'Brand', name: 'Brand' } }
        ];
   
    }
  }

}
