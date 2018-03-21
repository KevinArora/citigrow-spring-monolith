package com.example.citigrow.controllers;

import com.example.citigrow.models.User;
import com.example.citigrow.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UsersController {

    @Autowired
    private UserRepository userRepo;

    @GetMapping("/users")
    public Iterable<User> findAllUsers() {
        return userRepo.findAll();
    }

    @GetMapping("/users/{userID}")
    public User getUserById(@PathVariable Long userID) {
        return userRepo.findById(userID).get();
    }

    @DeleteMapping("/users/{userID}")
    public String deleteUserById(@PathVariable User user){
        try {
            userRepo.delete(user);
        } catch(Exception e) {
            return "error";
        }
        return "error";
    }
    @PostMapping("/users")
    public void createUser(@RequestBody User user){
        userRepo.save(user);
    }


}
