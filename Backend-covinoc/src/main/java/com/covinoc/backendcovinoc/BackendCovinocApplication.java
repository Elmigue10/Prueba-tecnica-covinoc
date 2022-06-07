package com.covinoc.backendcovinoc;

import com.covinoc.backendcovinoc.model.entity.Customer;
import com.covinoc.backendcovinoc.model.repository.CustomerRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class BackendCovinocApplication {

    public static void main(String[] args) {

        ConfigurableApplicationContext configurableApplicationContext =
                SpringApplication.run(BackendCovinocApplication.class, args);

        CustomerRepository customerRepository = configurableApplicationContext.getBean(CustomerRepository.class);

        Customer customer = Customer.builder().name("Miguel Valbuena").phone("3125483495").build();
        customerRepository.save(customer);
        customer = Customer.builder().name("Thomas Gomez").phone("3104565367").build();
        customerRepository.save(customer);

    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("*")
                        .allowedHeaders("*")
                        .allowedMethods("*")
                        .exposedHeaders("*")
                        .allowedOriginPatterns("*");
            }
        };
    }

}
