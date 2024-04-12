package org.reis.itacademychallenge.service;

import org.apache.catalina.User;
import org.reis.itacademychallenge.dtos.WinnersDTO;
import org.reis.itacademychallenge.entity.BetEntity;
import org.reis.itacademychallenge.entity.UserEntity;
import org.reis.itacademychallenge.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

@Service
public class BetService {

    @Autowired
    private UserRepository repo;
    @Autowired
    private UserService userService;

    public WinnersDTO startGame(){

        List<Integer> list = new ArrayList<Integer>();
        
        for(int x =0; x < 51; x++){
            list.add(x);
        }
        Collections.shuffle(list);


        boolean vencedores = false;
        List<UserEntity> users = repo.findAll();
        List<Integer> winnerBet = new ArrayList<>();
        List<UserEntity> winners = new ArrayList<>();
        List<Integer> winnerUserBet = new ArrayList<>();
        int rodadas = 0;

        if(users.isEmpty()) return null;

        while (winnerBet.size() < 5){
            winnerBet.add(list.get(0));
            list.remove(0);
        }
        outerloop:
        while(rodadas <25){    

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
                        winnerUserBet = (bet.getNumbers());
                        vencedores = true;
                        user.setWins(1);
                        repo.save(user);
                        winners.add(user);
                        break outerloop;
                    }
                }
            }
            winnerBet.add(list.get(0));
            list.remove(0);
            if (vencedores) break;
            rodadas++;
        }
        List<String> winnersCpf = new ArrayList<String>();
        List<String> winnersName = new ArrayList<String>();
        if (!(winners.isEmpty())) {
            WinnersDTO gameWinners = new WinnersDTO();
            for(UserEntity user : winners){
                winnersCpf.add(user.getCpf());
                winnersName.add(user.getName());

            }
            gameWinners.setRounds(rodadas);
            gameWinners.setWinnersCPF(winnersCpf);
            gameWinners.setWinnersName(winnersName);
            gameWinners.setNumbersDrawed(winnerBet);
            gameWinners.setWinnerBet(winnerUserBet);
            gameWinners.setWin(true);
            gameWinners.setPlayerCount(users.size());
            return gameWinners;
        } else {
            WinnersDTO gameWinners = new WinnersDTO();
            gameWinners.setRounds(rodadas);
            gameWinners.setNumbersDrawed(winnerBet);

            gameWinners.setWin(false);
            return gameWinners;
        }
    }   
}
