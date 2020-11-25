package com.kedar.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kedar.springboot.model.Photos;

@Repository
public interface PhotosRepository extends JpaRepository <Photos, Long>{

}
