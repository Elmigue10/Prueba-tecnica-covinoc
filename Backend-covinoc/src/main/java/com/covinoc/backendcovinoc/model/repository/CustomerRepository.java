package com.covinoc.backendcovinoc.model.repository;

import com.covinoc.backendcovinoc.model.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
}
