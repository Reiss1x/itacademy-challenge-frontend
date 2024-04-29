package org.reis.itacademychallenge.dtos;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class UserDTO {
    String name;
    String cpf;
    private List<BetDTO> bets;
}
