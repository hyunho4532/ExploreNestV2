package com.explorenest.hyun.explorenestv2.repository;

import com.explorenest.hyun.explorenestv2.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, String> {

}
