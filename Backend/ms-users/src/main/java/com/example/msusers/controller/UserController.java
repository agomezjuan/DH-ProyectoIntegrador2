package com.example.msusers.controller;

import com.example.msusers.dto.UserDTO;
import com.example.msusers.exceptions.ResourceNotFoundException;
import com.example.msusers.service.UserService;
import org.keycloak.representations.AccessTokenResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<Integer> registerUser(@RequestBody UserDTO userDTO){
        Integer statusCode = userService.createUser(userDTO);

        return ResponseEntity.status(statusCode).body(statusCode);
    }

    @GetMapping("/search")
    public UserDTO findByUsername(@RequestParam String username) throws ResourceNotFoundException {
        return userService.findByUsername(username);
    }

    @PostMapping("/login")
    public ResponseEntity<AccessTokenResponse> loginUser(@RequestBody UserDTO userDTO){
        AccessTokenResponse response = userService.loginUser(userDTO);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @PutMapping("/profile")
    public ResponseEntity<UserDTO> updateUser(@AuthenticationPrincipal Jwt jwt, @RequestBody UserDTO userDTO){
        String userId = jwt.getSubject();
        userDTO.setId(userId);
        UserDTO userDTOResponse = userService.modifyUser(userDTO);

        return ResponseEntity.status(HttpStatus.OK).body(userDTOResponse);
    }

    @PostMapping("/reset")
    public ResponseEntity<Integer> resetPass(@RequestBody UserDTO userDTO){
        HttpStatus statusCode = userService.resetPassword(userDTO);

        return ResponseEntity.status(statusCode.value()).body(statusCode.value());
    }
}
