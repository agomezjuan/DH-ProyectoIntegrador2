package com.example.pi2.feign;

import com.example.msusers.configuration.FeignAuthInterceptor;
import com.example.msusers.domain.User;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

@FeignClient(name = "ms-users", url = "http://localhost:8089", configuration = FeignAuthInterceptor.class)
public interface UserClient {


    @GetMapping("/users/{id}")
    User getuserById(@PathVariable Long id);




}
