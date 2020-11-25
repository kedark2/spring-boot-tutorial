package com.kedar.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kedar.springboot.model.Mantras;

@Repository
public interface MantrasRepository extends JpaRepository <Mantras, Long>{

}
