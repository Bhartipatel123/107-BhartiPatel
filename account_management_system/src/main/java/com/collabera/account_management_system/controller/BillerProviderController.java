package com.collabera.account_management_system.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.collabera.account_management_system.entity.BillerProvider;
import com.collabera.account_management_system.service.BillerProviderService;

@RestController
@RequestMapping("/billerprovider")
public class BillerProviderController {
	
	@Autowired
	BillerProviderService billerproviderService;
	
	@GetMapping("/")
	public ResponseEntity<List<BillerProvider>> getBillerProviderAll()
	{
		List<BillerProvider> billerproviderEntity = billerproviderService.findAllBillerProviders();
		return ResponseEntity.ok(billerproviderEntity);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<BillerProvider> getBillerProviderById(@PathVariable("id") int id)
	{
		BillerProvider billerproviderEntity = billerproviderService.findById(id);
		return ResponseEntity.ok(billerproviderEntity);
	}
	
	@GetMapping("/{billerregisterid}")
	public ResponseEntity<BillerProvider> getBillerRegisterById(@PathVariable("billerregisterid") int billerregisterid)
	{
		BillerProvider billerproviderEntity = billerproviderService.findAllBillerRegisterById(billerregisterid);
		return ResponseEntity.ok(billerproviderEntity);
	}
	
	@GetMapping("/{accountid}")
	public ResponseEntity<BillerProvider> getAccountById(@PathVariable("accountid") int accountid)
	{
		BillerProvider billerproviderEntity = billerproviderService.findAllAccountById(accountid);
		return ResponseEntity.ok(billerproviderEntity);
	}
	
	@GetMapping("/billerprovider/{consumerno}")
	public ResponseEntity <BillerProvider> getBillerProviderByConsumerNo(@PathVariable("consumerno") int consumerno)
	{
		BillerProvider billerproviderEntity = billerproviderService.findAllBillerProvidersByConsumerNo(consumerno);
		return ResponseEntity.ok(billerproviderEntity);
	}
	
	@GetMapping("/billerprovider/{timestamp}")
	public ResponseEntity <BillerProvider> getBillerProviderByTimestamp(@PathVariable("timestamp") long timestamp)
	{
		BillerProvider billerproviderEntity = billerproviderService.findAllBillerProvidersByTimestamp(timestamp);
		return ResponseEntity.ok(billerproviderEntity);
	}
	
}
