package com.kedar.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kedar.springboot.model.PujaDetail;

@Repository
public interface PujaDetailRepository extends JpaRepository <PujaDetail, Long>{

}
