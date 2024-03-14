package com.explorenest.hyun.explorenestv2.controller.dynamodb;

import com.explorenest.hyun.explorenestv2.model.GoogleLoginData;
import com.explorenest.hyun.explorenestv2.model.User;
import com.explorenest.hyun.explorenestv2.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    UserServiceImpl userService;

    @PostMapping("/user")
    public User saveUser(@RequestBody User user) {
        try {

            System.out.println(user.getEmail());

            return userService.saveUser(user);
        } catch (Exception e) {
            System.out.println(e.getMessage());

            return null;
        }

    }
}
