package com.saif.Recipe.photos;

import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface PhotoService {


    List<Photo> getUserPhotos(Integer userId);
}
