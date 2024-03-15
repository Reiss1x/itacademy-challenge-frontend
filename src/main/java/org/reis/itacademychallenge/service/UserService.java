package org.reis.itacademychallenge.service;

import org.reis.itacademychallenge.dtos.UserDTO;
import org.reis.itacademychallenge.entity.BetEntity;
import org.reis.itacademychallenge.entity.UserEntity;
import org.reis.itacademychallenge.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepo;

    public UserEntity saveUser(UserDTO userDto){
        UserEntity user = new UserEntity();
        user.setName(userDto.getName());
        user.setCpf(userDto.getCpf());
        user.setBets(new ArrayList<>());
        if(userDto.getBets() != null) {
            for (BetEntity bets : userDto.getBets()) {
                user.getBets().add(bets);
            }

        }
        return userRepo.save(user);
    }

    public void deleteAll() {
        userRepo.deleteAll();
    }
}
