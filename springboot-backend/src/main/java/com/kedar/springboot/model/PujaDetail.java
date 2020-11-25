package com.kedar.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="puja_detail")
public class PujaDetail {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id;
	
	@Column(name="puja_name")
	private String pujaName;
	
	@Column(name="puja_items")
	private String pujaItems;
	
	@Column(name="puja_photo")
	private String pujaPhoto;
	
	@Column(name="puja_description")
	private String pujaDescription;
	
	public PujaDetail() {}

	public PujaDetail(String pujaName, String pujaItems, String pujaPhoto, String pujaDescription) {
		super();
		this.pujaName = pujaName;
		this.pujaItems = pujaItems;
		this.pujaPhoto = pujaPhoto;
		this.pujaDescription = pujaDescription;
	}

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public String getPujaName() {
		return pujaName;
	}

	public void setPujaName(String pujaName) {
		this.pujaName = pujaName;
	}

	public String getPujaItems() {
		return pujaItems;
	}

	public void setPujaItems(String pujaItems) {
		this.pujaItems = pujaItems;
	}

	public String getPujaPhoto() {
		return pujaPhoto;
	}

	public void setPujaPhoto(String pujaPhoto) {
		this.pujaPhoto = pujaPhoto;
	}

	public String getPujaDescription() {
		return pujaDescription;
	}

	public void setPujaDescription(String pujaDescription) {
		this.pujaDescription = pujaDescription;
	}
	
	

}
