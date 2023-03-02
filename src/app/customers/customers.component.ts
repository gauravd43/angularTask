import { Component, OnInit } from '@angular/core';
import { Customer, CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomerComponent implements OnInit {
  customerList: Customer[] = [];
  custSvc!: CustomerService
  constructor() {
    this.custSvc = new CustomerService();
   }

  ngOnInit(): void {
    this.customerList= this.custSvc.getCustomerList()

}
}
