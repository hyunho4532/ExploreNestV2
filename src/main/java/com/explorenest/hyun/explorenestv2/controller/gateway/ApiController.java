package com.explorenest.hyun.explorenestv2.controller.gateway;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class ApiController {

    @GetMapping("/fetchData")
    public String fetchData() {
        String apiUrl = "https://50kggpyiyk.execute-api.ap-northeast-2.amazonaws.com/space/project/write";

        RestTemplate restTemplate = new RestTemplate();

        return restTemplate.getForObject(apiUrl, String.class);
    }
}
