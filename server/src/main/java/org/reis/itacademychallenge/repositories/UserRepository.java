package org.reis.itacademychallenge.repositories;

import org.reis.itacademychallenge.entities.UserEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface UserRepository extends MongoRepository<UserEntity, Long> {
    @Query
    public UserEntity findByCpf(String cpf);

}
