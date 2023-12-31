package com.saif.Recipe.photos;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Photo {

    @Id
    @GeneratedValue
    private Integer id;
    @Column(name = "file_name")
    private String fileName;
    @Lob
    @Column(name = "photo_data")
    private byte[] data;


}
