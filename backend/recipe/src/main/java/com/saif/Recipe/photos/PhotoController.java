package com.saif.Recipe.photos;

import com.saif.Recipe.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@CrossOrigin
public class PhotoController {

    private final PhotoRepository photoRepository;
    private final UserRepository userRepository;
    //private final RecipeRepository recipeRepository;


//    @GetMapping("/api/photos/get/{userEmail}")
//    @Transactional
//    public ResponseEntity<List<Photo>> getPhotos(@PathVariable("userEmail") String userEmail) {
//        if (!userRepository.existsById(userRepository.findByEmail(userEmail).orElseThrow().getId())) {
//            throw new EntityNotFoundException("Not found User with email = " + userEmail);
//        }
//
//        List<Photo> photos = photoRepository.findByUser(userRepository.findByEmail(userEmail).orElseThrow(()-> new EntityNotFoundException("user not found")));
//        return ResponseEntity.ok(photos);
//    }



    @PostMapping("/api/photos/post")
    public ResponseEntity<Photo >createPhoto(@RequestPart("data") MultipartFile file) throws IOException {
        Photo photo = new Photo();
        photo.setFileName(file.getOriginalFilename());
        photo.setData(file.getBytes());
        photoRepository.save(photo);
        return ResponseEntity.ok(photo);
    }


}


