package com.kedar.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name="mantras")
public class Mantras {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name="mantra_title")
	private String mantraTitle;
	
	@Lob
	@Column(name="mantra")
	private String mantra;
	
	@Column(name="mantra_detail")
	private String mantraDetail;
	
	public Mantras() {
		
	}

	public Mantras(String mantraTitle, String mantra, String mantraDetail) {
		super();
		this.mantraTitle = mantraTitle;
		this.mantra = mantra;
		this.mantraDetail = mantraDetail;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getMantraTitle() {
		return mantraTitle;
	}

	public void setMantraTitle(String mantraTitle) {
		this.mantraTitle = mantraTitle;
	}

	public String getMantra() {
		return mantra;
	}

	public void setMantra(String mantra) {
		this.mantra = mantra;
	}

	public String getMantraDetail() {
		return mantraDetail;
	}

	public void setMantraDetail(String mantraDetail) {
		this.mantraDetail = mantraDetail;
	}
	
}
