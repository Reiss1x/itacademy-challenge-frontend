package org.reis.itacademychallenge.dtos;

import lombok.*;
import org.reis.itacademychallenge.entity.BetEntity;

import java.util.List;
@Getter
@Setter
@AllArgsConstructor
@Builder
public class UserDTO {
    String name;
    String cpf;
    private List<BetEntity> bets;
}
