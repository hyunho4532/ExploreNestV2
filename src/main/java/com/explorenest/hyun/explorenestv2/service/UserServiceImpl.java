package com.explorenest.hyun.explorenestv2.service;

import com.explorenest.hyun.explorenestv2.model.User;
import com.explorenest.hyun.explorenestv2.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }
}
