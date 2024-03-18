package org.reis.itacademychallenge.controller;

import org.reis.itacademychallenge.dtos.UserDTO;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import org.reis.itacademychallenge.service.UserService;
import org.reis.itacademychallenge.entity.UserEntity;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
    @Autowired
    private UserService service;


    @PostMapping()
    public void registerBet(@RequestBody UserDTO userDto){
        service.saveUser(userDto);
    }
    @PostMapping("/deleteAll")
    public void deleteAllUsers(){
        service.deleteAll();
    }
}
