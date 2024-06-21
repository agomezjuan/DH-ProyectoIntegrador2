package com.example.pi2.feign;

import com.example.pi2.domain.UserDto;
import com.example.pi2.config.security.FeignAuthInterceptor;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

@FeignClient(name = "ms-users", configuration = FeignAuthInterceptor.class)
public interface UserClient {

    @GetMapping("/users/search")
    UserDto findByUsername(@RequestHeader(name = "Authorization") String token, @RequestParam String username);
}

