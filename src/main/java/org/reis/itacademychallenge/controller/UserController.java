package org.reis.itacademychallenge.controller;

import org.reis.itacademychallenge.dtos.UserDTO;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;

import org.reis.itacademychallenge.service.UserService;
import org.reis.itacademychallenge.entity.UserEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
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
