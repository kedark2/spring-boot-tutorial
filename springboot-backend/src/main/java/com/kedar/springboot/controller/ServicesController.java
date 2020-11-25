package com.kedar.springboot.controller;



	import java.util.HashMap;
	import java.util.List;
	import java.util.Map;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.http.ResponseEntity;
	import org.springframework.web.bind.annotation.CrossOrigin;
	import org.springframework.web.bind.annotation.DeleteMapping;
	import org.springframework.web.bind.annotation.GetMapping;
	import org.springframework.web.bind.annotation.PathVariable;
	import org.springframework.web.bind.annotation.PostMapping;
	import org.springframework.web.bind.annotation.PutMapping;
	import org.springframework.web.bind.annotation.RequestBody;
	import org.springframework.web.bind.annotation.RequestMapping;
	import org.springframework.web.bind.annotation.RestController;

	import com.kedar.springboot.exception.ResourceNotFoundException;
	import com.kedar.springboot.model.Services;
	import com.kedar.springboot.repository.ServicesRepository;

	@CrossOrigin(origins = "http://localhost:3000")
	@RestController
	@RequestMapping("/api/v1/")
	public class ServicesController {

		@Autowired
		private ServicesRepository servicesRepository;
		
		//get all service
		@GetMapping("/services")
		public List<Services> getAllServices(){
			return servicesRepository.findAll();
		}

		// create service rest api
		@PostMapping("/services")
		public Services createServices(@RequestBody Services service) {
			return servicesRepository.save(service);
			
		}
		
		// get service by id rest api
		@GetMapping("/services/{id}")
		public ResponseEntity<Services> getServiceById(@PathVariable Long id) {
			Services service = servicesRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Service not exist with id :" + id));
			return ResponseEntity.ok(service);	
		}
		
		// update service rest api
		@PutMapping("/services/{id}")
		public ResponseEntity<Services> updateEmployee(@PathVariable Long id, @RequestBody Services serviceDetails){
			Services service = servicesRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Service not exist with id :" + id));
			service.setServiceName(serviceDetails.getServiceName());
			service.setServicePrice(serviceDetails.getServicePrice());
			service.setServiceProvider(serviceDetails.getServiceProvider());
			service.setServiceDescription(serviceDetails.getServiceDescription());
			
			Services updatedServices = servicesRepository.save(service);
			
			return ResponseEntity.ok(updatedServices);	
		}
		
		// delete service rest api
		@DeleteMapping("/services/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
			Services employee = servicesRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Service not exist with id :" + id));
			servicesRepository.delete(employee);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
					
		}
		
	}
	 



