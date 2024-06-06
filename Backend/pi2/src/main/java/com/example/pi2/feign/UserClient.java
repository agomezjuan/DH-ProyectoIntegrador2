package com.example.pi2.feign;

import com.example.pi2.domain.UserDto;
import com.example.pi2.security.config.FeignAuthInterceptor;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

@FeignClient(name = "ms-users", url = "http://localhost:8090/api/v1", configuration = FeignAuthInterceptor.class)
public interface UserClient {

    @GetMapping("/users/search")
    UserDto findByUsername(@RequestParam String username);
}

