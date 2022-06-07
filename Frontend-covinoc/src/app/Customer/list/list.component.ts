import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../Service/customer.service';
import { Customer } from '../../Model/Customer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  customers:Customer[] = [];

  constructor( private service:CustomerService, private router:Router ) { }

  ngOnInit(): void {
  
    this.service.getCustomers().subscribe( data=>{
      this.customers = data;
      console.log(data);
    } )
  
  }

  update(customer:Customer){
    localStorage.setItem("id", customer.id.toString());
    this.router.navigate(["update"]);
  }

  delete(customer:Customer){
    this.service.delete(customer).subscribe( data => {
      alert("Deleted customer...");
      this.customers = this.customers.filter( c => c!== customer );
    } )
  }

}
