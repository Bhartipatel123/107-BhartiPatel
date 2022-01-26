package com.collabera.account_management_system.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.collabera.account_management_system.entity.BillerProvider;
import com.collabera.account_management_system.repository.BillerProviderRepository;


@Service
public class BillerProviderService {
	
	@Autowired
	BillerProviderRepository billerproviderRepository;

	public List<BillerProvider> findAllBillerProviders() {
		return billerproviderRepository.findAll();
	}
	
	public BillerProvider findById(int id) {
		return billerproviderRepository.findById(id);
	}
	
	public BillerProvider findAllBillerRegisterById(int billerregisterid) {
		return billerproviderRepository.findByBillerRegister(billerregisterid);
	}

	public BillerProvider findAllAccountById(int accountid) {
		return billerproviderRepository.findAllAccountById(accountid);
	}
	
	public BillerProvider findAllBillerProvidersByConsumerNo(int consumerno) {
		return billerproviderRepository.findByConsumerNumber(consumerno);
	}

	public BillerProvider findAllBillerProvidersByTimestamp(long timestamp) {
		return billerproviderRepository.findByTimestamp(timestamp);
	}
	
}
