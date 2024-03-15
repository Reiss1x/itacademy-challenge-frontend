package org.reis.itacademychallenge.entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document(collection= "user")

public class UserEntity {
    @Id
    private String name;
    private String cpf;
    private List<BetEntity> bets;
}
