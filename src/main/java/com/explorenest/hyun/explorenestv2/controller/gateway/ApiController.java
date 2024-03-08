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
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
public class ApiController {

    @GetMapping("/fetchData")
    public Map<String, List<String>> fetchData() {
        String apiUrl = "https://50kggpyiyk.execute-api.ap-northeast-2.amazonaws.com/space/project/write";

        Map<String, List<String>> languageTitles = new HashMap<>();


        RestTemplate restTemplate = new RestTemplate();
        String jsonResponse = restTemplate.getForObject(apiUrl, String.class);

        try {
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode jsonNode = objectMapper.readTree(jsonResponse);
            JsonNode languageNode = jsonNode.path("data").path("language");
            JsonNode recruitmentNode = jsonNode.path("data").path("recruitment");
            JsonNode processNode = jsonNode.path("data").path("projectProcess");

            List<String> projectList = new ArrayList<>();
            List<String> studyList = new ArrayList<>();
            List<String> processList = new ArrayList<>();

            for (JsonNode lang : languageNode) {
                String title = lang.get("title").asText();

                projectList.add(title);
            }

            for (JsonNode recruit : recruitmentNode) {
                String type = recruit.get("type").asText();

                studyList.add(type);
            }

            for (JsonNode process : processNode) {
                String status = process.get("status").asText();

                processList.add(status);
            }

            languageTitles.put("stack", projectList);
            languageTitles.put("study", studyList);
            languageTitles.put("process", processList);

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

        System.out.println(languageTitles);

        return languageTitles;
    }
}
