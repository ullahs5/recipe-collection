package com.saif.Recipe.demo;

import com.saif.Recipe.photos.PhotoController;
import com.saif.Recipe.user.User;
import com.saif.Recipe.user.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin
public class demoController {

    private UserRepository userRepository;
    private PhotoController photoController;


    @GetMapping("/api/users/get")
    public List<User> sayHello() {
        return userRepository.findAll();
    }

    @PostMapping("/api/users/post")
    public String yo(){ return "yo";}

}
