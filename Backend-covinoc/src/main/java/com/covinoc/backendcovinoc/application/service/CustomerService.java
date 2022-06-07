package com.covinoc.backendcovinoc.application.service;

import com.covinoc.backendcovinoc.model.entity.Customer;
import com.covinoc.backendcovinoc.model.repository.CustomerRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class CustomerService {

    private CustomerRepository customerRepository;

    public List<Customer> getAll(){
        return customerRepository.findAll();
    }

    public Customer findById(Integer id) { return customerRepository.findById(id).get(); }

    public void save(Customer customer){
        customerRepository.save(customer);
    }

    public void update(Customer customerRequest){
        Customer customer = customerRepository.findById(customerRequest.getId()).get();

        customer.setName(customerRequest.getName());
        customer.setPhone(customerRequest.getPhone());

        customerRepository.save(customer);
    }

    public void deleteById(Integer id){
        customerRepository.deleteById(id);
    }

}
