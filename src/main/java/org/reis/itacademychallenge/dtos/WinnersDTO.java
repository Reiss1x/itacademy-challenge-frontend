package org.reis.itacademychallenge.dtos;

import lombok.*;
import java.util.List;

import org.reis.itacademychallenge.entity.UserEntity;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class WinnersDTO {
     List<String> winnersCPF;
     List<String> winnersName;
     Integer rounds;
     List<Integer> numbersDrawed;
     List<Integer> winnerBet;
     

}
