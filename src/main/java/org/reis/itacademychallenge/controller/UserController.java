package org.reis.itacademychallenge.controller;

import org.apache.catalina.User;
import org.reis.itacademychallenge.dtos.BetDTO;
import org.reis.itacademychallenge.dtos.BetUpdateDTO;
import org.reis.itacademychallenge.dtos.UserDTO;
import org.reis.itacademychallenge.dtos.WinnersDTO;
import org.reis.itacademychallenge.service.BetService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.reis.itacademychallenge.service.UserService;
import org.reis.itacademychallenge.entity.UserEntity;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private BetService betService;

    @PostMapping("/multiple")
    public ResponseEntity<String> registerBets(@RequestBody List<UserDTO> usersDto){
        try {
            for(UserDTO userDto : usersDto){
                userService.saveUser(userDto);
            }
            return new ResponseEntity<>("Usuário cadastrado.", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Usuário com cpf já cadastrado.", HttpStatus.BAD_REQUEST);
        }
    }
    @PostMapping()
    public ResponseEntity<String> registerBet(@RequestBody UserDTO userDto){
        try {
            userService.saveUser(userDto);
            return new ResponseEntity<>("Usuário cadastrado.", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Usuário com cpf já cadastrado.", HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/game")
    public WinnersDTO startBets(){  
        return betService.startGame();
    }

    @PostMapping("/addBet")
    public UserEntity addBet(@RequestBody BetUpdateDTO bet) {
        BetDTO betDto = new BetDTO();
        betDto.setNumbers(bet.getNumbers());
        return userService.addBet(betDto, bet.getCpf());
    }

    @GetMapping
    public List<UserEntity> getUsers() {
        return userService.getUsers();
    }

    @PostMapping("/deleteAll")
    public void deleteAllUsers(){
        userService.deleteAll();
    }
    @GetMapping("/cpf")
    public UserEntity getByCpf(){
        return userService.findByCpf("157");
    }
}
