import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../Service/customer.service';
import { FormGroup, FormBuilder  } from '@angular/forms';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    public form:FormBuilder, 
    private router: Router, 
    private service:CustomerService) { 

      this.formGroup = this.form.group({
        name:[''],
        phone:[''],
      });

  }

  ngOnInit(): void {
  }

  save():any{
    console.log(this.formGroup.value)
    this.service.saveCustomer(this.formGroup.value).subscribe(
      data => {
        alert("Saved Customer...")
        this.router.navigate(["list"])
      }
    );
  }

}
