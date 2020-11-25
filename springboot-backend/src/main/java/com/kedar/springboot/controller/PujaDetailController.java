package com.kedar.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kedar.springboot.model.Employee;
import com.kedar.springboot.model.PujaDetail;
import com.kedar.springboot.repository.PujaDetailRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class PujaDetailController {

	@Autowired
	private PujaDetailRepository pujaDetailRepostitory;
	
	//get all puja_detail
	@GetMapping("/puja_detail")
	public List<PujaDetail> getAllEmployees(){
		return pujaDetailRepostitory.findAll();
	}
	
}

