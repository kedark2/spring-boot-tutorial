package com.kedar.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kedar.springboot.model.Mantras;
import com.kedar.springboot.repository.MantrasRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class MantrasController {

	@Autowired
	private MantrasRepository mantrasRepository;
	
	//get all mantras
	@GetMapping("/mantras")
	public List<Mantras> getMantras(){
		return mantrasRepository.findAll();
	}
	
	//create mantras rest api
	@PostMapping("/mantras")
	public Mantras createMantra(@RequestBody Mantras mantra) {
		return mantrasRepository.save(mantra);
	}
	
	//get 
}
