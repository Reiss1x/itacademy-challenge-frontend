package org.reis.itacademychallenge.service;

import org.reis.itacademychallenge.dtos.BetDTO;
import org.reis.itacademychallenge.dtos.UserDTO;
import org.reis.itacademychallenge.entities.BetEntity;
import org.reis.itacademychallenge.entities.UserEntity;
import org.reis.itacademychallenge.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepo;

    public List<UserEntity> getUsers() {
        return userRepo.findAll();
    }

    public UserEntity addBet(BetDTO betDTO, String cpf){
        UserEntity user = findByCpf(cpf);
        BetEntity bet = new BetEntity();

        List<BetEntity> betList = user.getBets();
        List<Integer> numeros = new ArrayList<>();

        String[] numbers = betDTO.getNumbers().split(",");

        for(String numBet : numbers) {
            numeros.add(Integer.parseInt(numBet));
        }

        bet.setNumbers(numeros);
        betList.add(bet);
        user.setBets(betList);
        userRepo.save(user);
        return user;
    }

    public UserEntity saveUser(UserDTO userDto){
        UserEntity user = new UserEntity();
        user.setName(userDto.getName());
        user.setCpf(userDto.getCpf());
        user.setBets(new ArrayList<>());

        if(userDto.getBets() != null) {
            for (BetDTO bets : userDto.getBets()) {
                List<Integer> numbers = new ArrayList<>();
                BetEntity bet = new BetEntity();

                String[] numeros = bets.getNumbers().split(",");

                for(String numBet : numeros) {
                    numbers.add(Integer.parseInt(numBet));
                }
                bet.setNumbers(numbers);
                user.getBets().add(bet);
            }
        }
        return userRepo.save(user);
    }

    public void deleteAll() {
        userRepo.deleteAll();
    }

    public UserEntity findByCpf(String cpf){
        return userRepo.findByCpf(cpf);
    }
}
