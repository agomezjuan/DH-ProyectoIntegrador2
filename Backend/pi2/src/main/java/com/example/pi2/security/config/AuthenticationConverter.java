package com.example.pi2.security.config;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.springframework.core.convert.converter.Converter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.jwt.Jwt;

import java.util.*;
import java.util.stream.Collectors;

public class AuthenticationConverter  implements Converter<Jwt, Collection<GrantedAuthority>> {

    private static Collection<GrantedAuthority> extractRoles(Map<String, Object> realmRoleAccess){

        return ((List<String>) realmRoleAccess.get("roles"))
                .stream().map(role -> "ROLE_" + role)
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());
    }


    private void addRoleInAuth(Collection<GrantedAuthority> authorities, Jwt source) {

        Map<String, Object> realmRoleAccess = source.getClaim("realm_access");

        if(realmRoleAccess != null && !realmRoleAccess.isEmpty()){
            authorities.addAll(extractRoles(realmRoleAccess));
        }


    }

    private static List<GrantedAuthority> extractGroup(String route, JsonNode jwt) {
        Set<String> group = new HashSet<>();

        jwt.path(route)
                .elements()
                .forEachRemaining(r -> group.add(r.asText()));

        final List<GrantedAuthority> authorityList =
                AuthorityUtils.createAuthorityList(group.toArray(new String[0]));

        return authorityList;
    }

    @Override
    public Collection<GrantedAuthority> convert(Jwt source) {
        Collection<GrantedAuthority> authorities = new ArrayList<>();

        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.registerModule(new JavaTimeModule());

        addRoleInAuth(authorities, source);
        try {
            authorities.addAll(extractGroup("users-group", objectMapper.readTree(objectMapper.writeValueAsString(source)).get("claims")));
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }

        return authorities;
    }
}
