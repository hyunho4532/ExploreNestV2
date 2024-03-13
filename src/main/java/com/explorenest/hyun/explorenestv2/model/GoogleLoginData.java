package com.explorenest.hyun.explorenestv2.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class GoogleLoginData {
    private String iss;
    private String azp;
    private String aud;
    private String sub;
    private String email;
    private boolean email_verified;
    private long nbf;
    private String name;
    private String picture;
    private String given_name;
    private String locale;
    private long iat;
    private long exp;
    private String jti;
}
