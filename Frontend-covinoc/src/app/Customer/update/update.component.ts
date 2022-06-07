import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder  } from '@angular/forms'; 
import { CustomerService } from '../../Service/customer.service';
import { Customer } from '../../Model/Customer';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  formGroup: FormGroup;

  customer:Customer = new Customer();

  constructor(
    public form:FormBuilder, 
    private router: Router,
    private service: CustomerService) { 

      this.formGroup = this.form.group({
        id:[''],
        name:[''],
        phone:[''],
      })

  }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo(){
    let id = localStorage.getItem('id');
    if(id != null){
      this.service.findCustomerById(+id).subscribe( data => {
        console.log(data);
        this.customer = data;
      } );
    }
  }

  update(customer:Customer){
    this.service.updatedCustomer(customer).subscribe( data => {
      this.customer = data;
      alert("Updated Customer...");
      this.router.navigate(["list"]);
    } );
  }

}
