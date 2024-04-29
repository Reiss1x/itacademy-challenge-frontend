package org.reis.itacademychallenge.entities;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document(collection="bets")
public class BetEntity {
    private List<Integer> numbers;

}
