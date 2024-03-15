package org.reis.itacademychallenge.entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.SequenceGenerator;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document(collection="bets")
public class BetEntity {
    /*@Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "bet_id"
    )
    @SequenceGenerator(
            name = "bet_id",
            sequenceName = "bet_id",
            initialValue = 1000,
            allocationSize = 1
    )
    private Long id;*/
    private List<Integer> numbers;

}
