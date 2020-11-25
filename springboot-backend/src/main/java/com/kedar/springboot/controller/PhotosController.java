package com.kedar.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kedar.springboot.model.Photos;
import com.kedar.springboot.repository.PhotosRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class PhotosController {
	
	@Autowired 
	private PhotosRepository photosRepository;
	
	//get all photos
	@GetMapping("/photos")
	public List<Photos> getPhotos(){
		return photosRepository.findAll();
	}
	
	//create photos rest api
	@PostMapping("/photos")
	public Photos createPhoto(@RequestBody Photos photo) {
		return photosRepository.save(photo);
	}
	
}

