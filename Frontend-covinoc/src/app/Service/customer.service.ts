import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../Model/Customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  API:string = 'http://localhost:8080/api/v1/customer';

  getCustomers(){
    return this.http.get<Customer[]>(this.API);
  }

  saveCustomer(customer:Customer):Observable<any>{
    return this.http.post<Customer>(`${this.API}/newCustomer`, customer);
  }

  findCustomerById(id:number){
    return this.http.get<Customer>(`${this.API}/${id}`);
  }

  updatedCustomer(customer:Customer){
    return this.http.put<Customer>(`${this.API}/updateCustomer`, customer);
  }

  delete(customer:Customer){
    return this.http.delete<Customer>(`${this.API}/deleteCustomer/${customer.id}`)
  }

}
