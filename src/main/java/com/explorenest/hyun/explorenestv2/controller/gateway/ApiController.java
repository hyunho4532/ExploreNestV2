package com.explorenest.hyun.explorenestv2.controller.gateway;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ApiController {

    @GetMapping("/fetchData")
    public List<String> fetchData() {
        String apiUrl = "https://50kggpyiyk.execute-api.ap-northeast-2.amazonaws.com/space/project/write";
        List<String> languageTitles = new ArrayList<>();

        RestTemplate restTemplate = new RestTemplate();
        String jsonResponse = restTemplate.getForObject(apiUrl, String.class);

        try {
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode jsonNode = objectMapper.readTree(jsonResponse);
            JsonNode languageNode = jsonNode.path("data").path("language");

            for (JsonNode lang : languageNode) {
                String title = lang.get("title").asText();
                languageTitles.add(title);
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

        return languageTitles;
    }
}
