
package com.kedar.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="services")
public class Services {
	
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private long id;
	
	@Column(name="service_name")
	private String serviceName;
	
	@Column(name="service_price")
	private float servicePrice;
	
	@Column(name="service_provider")
	private String serviceProvider;

	@Column(name="service_description")
	private String serviceDescription;
	
	public Services() {

	}


	public Services(String serviceName, float servicePrice, String serviceProvider, String serviceDescription) {
		super();
		this.serviceName = serviceName;
		this.servicePrice = servicePrice;
		this.serviceProvider = serviceProvider;
		this.serviceDescription= serviceDescription;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getServiceName() {
		return serviceName;
	}

	public void setServiceName(String serviceName) {
		this.serviceName = serviceName;
	}

	public float getServicePrice() {
		return servicePrice;
	}

	public void setServicePrice(float servicePrice) {
		this.servicePrice = servicePrice;
	}

	public String getServiceProvider() {
		return serviceProvider;
	}

	public void setServiceProvider(String serviceProvider) {
		this.serviceProvider = serviceProvider;
	}
	
	public String getServiceDescription() {
		return serviceDescription;
	}

	public void setServiceDescription(String serviceDescription) {
		this.serviceDescription = serviceDescription;
	}

	

}
