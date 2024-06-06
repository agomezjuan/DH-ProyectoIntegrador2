package com.example.pi2.feign;

import com.example.pi2.security.config.FeignAuthInterceptor;
import com.example.msusers.domain.User;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

@FeignClient(name = "ms-users", url = "http://localhost:8090/api/v1", configuration = FeignAuthInterceptor.class)
public interface UserClient {

    @GetMapping("/users/{id}")
    User getUserById(@PathVariable ("id")String id);




}

