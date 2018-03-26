package com.example.citigrow.controllers;

import com.example.citigrow.models.Quadrant;
import com.example.citigrow.repositories.QuadrantRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class QuadrantsController {
    @Autowired
    private QuadrantRepo quadrantRepo;

    @GetMapping("/quadrants")
    public Iterable<Quadrant> findAllUsers() {
        return quadrantRepo.findAll();
    }
}
