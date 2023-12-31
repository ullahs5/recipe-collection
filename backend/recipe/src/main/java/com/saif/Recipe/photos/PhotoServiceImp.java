package com.saif.Recipe.photos;

import com.saif.Recipe.user.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
@AllArgsConstructor
public class PhotoServiceImp implements PhotoService{

    private final UserRepository userRepository;
    private final PhotoRepository photoRepository;

    @Override
    public List<Photo> getUserPhotos(Integer userId) {
        return null;
    }
}
