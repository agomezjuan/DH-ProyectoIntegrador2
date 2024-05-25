package com.example.msusers.controller;

import com.example.msusers.dto.UserDTO;
import com.example.msusers.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }
    @PostMapping("/register")
    public ResponseEntity<Integer> registerUser(@RequestBody UserDTO userDTO){
        Integer statusCode = userService.createUser(userDTO);

        return ResponseEntity.status(statusCode).body(statusCode);
    }
}
