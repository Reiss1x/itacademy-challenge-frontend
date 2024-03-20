package org.reis.itacademychallenge.service;

import org.apache.catalina.User;
import org.reis.itacademychallenge.entity.BetEntity;
import org.reis.itacademychallenge.entity.UserEntity;
import org.reis.itacademychallenge.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class BetService {

    @Autowired
    private UserRepository repo;
    @Autowired
    private UserService userService;

    public List<UserEntity> startGame(){
        boolean vencedores = false;
        Random rand = new Random();
        List<UserEntity> users = repo.findAll();
        List<Integer> winnerBet = new ArrayList<>();
        List<UserEntity> winners = new ArrayList<>();
        int rodadas = 0;

        while (winnerBet.size() < 5){
            winnerBet.add(rand.nextInt(50)+1);
        }

        while(!vencedores || rodadas == 25){

            //iterando sobre jogador
            for(UserEntity user : users) {
                //iterando sobre todas as apostas do jogador
                for(BetEntity bet : user.getBets()){
                    //iterando sobre aposta
                    boolean apostaVencedora = true;
                    for(Integer num : bet.getNumbers()){
                        if (!winnerBet.contains(num)) {
                            apostaVencedora = false;
                            break;
                        }
                    }
                    if(apostaVencedora){
                        vencedores = true;
                        if(user.getWins() != null) user.setWins(user.getWins() + 1);
                        else user.setWins(1);
                        repo.save(user);
                        winners.add(user);

                    }
                }
            }
            winnerBet.add(rand.nextInt(50)+1);
            rodadas++;
        }
        return winners;
    }
}
