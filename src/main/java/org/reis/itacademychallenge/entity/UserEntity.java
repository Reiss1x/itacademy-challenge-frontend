package org.reis.itacademychallenge.entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document(collection= "user")

public class UserEntity {
    @Id
    private String id;
    private String name;
    @Indexed(unique = true)
    private String cpf;
    private List<BetEntity> bets;
    private Integer wins;
}
