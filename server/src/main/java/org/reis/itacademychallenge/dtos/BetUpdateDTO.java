package org.reis.itacademychallenge.dtos;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BetUpdateDTO {
    private String cpf;
    private String numbers;
}
