package com.example.citigrow.controllers;

import com.example.citigrow.models.Garden;
import com.example.citigrow.repositories.GardenRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class GardensController {

    @Autowired
    private GardenRepo gardenRepo;

    @GetMapping("/gardens")
    public Iterable<Garden> findAllGardens(){
        return gardenRepo.findAll();
    }

    @GetMapping("/gardens/{gardenID}")
    public Garden getGardenById(@PathVariable Long gardenID) {
        return gardenRepo.findById(gardenID).get();
    }
    @PostMapping("/gardens")
    public void createNewTask(@RequestBody Garden garden) {
        gardenRepo.save(garden);
    }
}
