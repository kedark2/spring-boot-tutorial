package com.kedar.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kedar.springboot.model.Services;

@Repository
public interface ServicesRepository  extends JpaRepository<Services, Long>{

}
