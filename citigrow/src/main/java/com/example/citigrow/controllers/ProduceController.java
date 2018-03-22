package com.example.citigrow.controllers;

import com.example.citigrow.models.Produce;
import com.example.citigrow.repositories.ProduceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProduceController {


    @Autowired
    private ProduceRepo ProduceRepo;

    @GetMapping("/produce")
    public Iterable<Produce> findAllProduce(){
        return ProduceRepo.findAll();
    }

    @GetMapping("/produce/{produceID}")
    public Produce getProduceById(@PathVariable Long produceID) {
        return ProduceRepo.findById(produceID).get();
    }
}
