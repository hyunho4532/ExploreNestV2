package com.explorenest.hyun.explorenestv2.controller.dynamodb;

import com.explorenest.hyun.explorenestv2.model.User;
import com.explorenest.hyun.explorenestv2.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    UserServiceImpl userService;

    @PostMapping("/user")
    public User saveUser(User user) {
        return userService.saveUser(user);
    }
}
