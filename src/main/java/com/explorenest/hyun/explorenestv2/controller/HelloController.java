package com.explorenest.hyun.explorenestv2.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class HelloController {
    @GetMapping("/api/test")
    public String hello() {
        return "테스트 입니다.";
    }
}