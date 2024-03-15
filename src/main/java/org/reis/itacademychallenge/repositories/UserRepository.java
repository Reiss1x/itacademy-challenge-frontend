package org.reis.itacademychallenge.repositories;

import org.reis.itacademychallenge.entity.UserEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<UserEntity, Long> {
}
