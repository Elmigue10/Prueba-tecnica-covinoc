package com.covinoc.backendcovinoc.application.controller;

import com.covinoc.backendcovinoc.application.service.CustomerService;
import com.covinoc.backendcovinoc.model.entity.Customer;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("api/v1/customer")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
public class CustomerController {

    private CustomerService customerService;

    @GetMapping("")
    public ResponseEntity<List<Customer>> getAll(){
        return new ResponseEntity<>(customerService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Customer> findById(@PathVariable Integer id){
        return new ResponseEntity<>(customerService.findById(id), HttpStatus.OK);
    }

    @PostMapping("/newCustomer")
    public ResponseEntity saveCustomer(@RequestBody Customer customer){
        customerService.save(customer);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @PutMapping("/updateCustomer")
    public ResponseEntity updateCustomer(@RequestBody Customer customer){
        customerService.update(customer);
        return new ResponseEntity(HttpStatus.OK);
    }

    @DeleteMapping("/deleteCustomer/{id}")
    public ResponseEntity deleteCustomer(@PathVariable Integer id){
        customerService.deleteById(id);
        return new ResponseEntity(HttpStatus.OK);
    }

}
