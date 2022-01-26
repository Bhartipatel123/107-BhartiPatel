package com.collabera.account_management_system.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.collabera.account_management_system.entity.BillerRegister;


@Repository
public interface BillerRegisterRepository extends JpaRepository<BillerRegister, Integer> {

	List<BillerRegister> findAll(); 

	BillerRegister findById(int id);
	
	BillerRegister findBiller_registerByBillerName(String billername);

	
	
}
