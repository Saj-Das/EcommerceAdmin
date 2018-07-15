import { Component, OnInit, Input } from '@angular/core';
import { DynamicListService } from '../service/dynamic-list.service';

@Component({
  selector: 'app-dynamic-list',
  templateUrl: './dynamic-list.component.html',
  styleUrls: ['./dynamic-list.component.css']
})
export class DynamicListComponent implements OnInit {
  @Input('ltype') ltype: any;

  tableHeader: any;
  tableBody: any;
  constructor(private dynamicListService: DynamicListService) { }
  ngOnInit() {
    this.tableHeader = this.getTemplateForList();
    
  }
  getTemplateForList() {
    switch (this.ltype) {
      case "product":
      this.dynamicListService.getProductList().subscribe(x => this.tableBody = x.result);
        return [{ header: { Displayname: 'Product Name', name: 'ProductName' } },
        { header: { Displayname: 'Selling Price', name: 'SellingPrice' } },
        { header: { Displayname: 'Cost Price', name: 'CostPrice' } },
        { header: { Displayname: 'Brand', name: 'Brand' } },
        { header: { Displayname: 'Quantity', name: 'Quantity' } },
        { header: { Displayname: 'Category', name: 'Category' } },
        { header: { Displayname: 'Tags', name: 'Tags' } },
        { header: { Displayname: 'Snapshot', name: 'image' } }];
        case "user":
        this.dynamicListService.getUserList().subscribe(x => this.tableBody = x.result);
        return [{ header: { Displayname: 'Contact', name: 'Contact' } },
        { header: { Displayname: 'Country', name: 'Country' } },
        { header: { Displayname: 'Email', name: 'Email' } },
        { header: { Displayname: 'Brand', name: 'Brand' } },
        { header: { Displayname: 'Name', name: 'Name' } },
        { header: { Displayname: 'Password', name: 'Password' } }];
   
    }
  }

}
