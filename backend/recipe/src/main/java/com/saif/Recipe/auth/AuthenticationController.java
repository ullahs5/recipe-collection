package com.saif.Recipe.auth;

import com.saif.Recipe.user.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin
public class AuthenticationController {

    private final AuthenticationService authenticationService;
    private final UserRepository userRepository;


    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request){
        if(userRepository.existsByEmail(request.getEmail())){
            throw new EntityNotFoundException();
        }
        else if(request.getEmail() == null || request.getEmail().equals("")){
            throw new RuntimeException("Enter Email");
        }
        else if(request.getUsertag() == null || request.getUsertag().equals("")){
            throw new RuntimeException("Enter UserName");
        }
        else if(request.getPassword() == null || request.getPassword().equals("")){
            throw new RuntimeException("Enter Password");
        }
        else{
            return ResponseEntity.ok(authenticationService.register(request));
        }

    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenicate(@RequestBody AuthenticationRequest request){
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }
}
