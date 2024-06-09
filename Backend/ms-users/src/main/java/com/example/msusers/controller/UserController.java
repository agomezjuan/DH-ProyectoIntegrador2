package com.example.msusers.controller;

import com.example.msusers.domain.User;
import com.example.msusers.dto.UserDTO;
import com.example.msusers.exceptions.ResourceNotFoundException;
import com.example.msusers.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
}
