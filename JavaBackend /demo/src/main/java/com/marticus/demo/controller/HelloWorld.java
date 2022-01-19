package com.marticus.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.marticus.demo.model.Employee;
import com.marticus.demo.model.Student;

@RestController
@RequestMapping("/hello")
public class HelloWorld {

	@GetMapping("/first")
	public String sayHello() {
		
		return "Hello World";
	}
	
	@GetMapping("/second")
	public String sayBye()
	{
		return "Bye";
	}
	
	@GetMapping("/second/{id}")
	public int sayHello(@PathVariable int id)
	{
		
		return id;
		
	}
	
	@PostMapping(path="/firststatic")
	 public ResponseEntity<String> save(String input)
	 {
		
		 HttpHeaders header = new HttpHeaders();
	     header.add("header1", "This is my header 1");
	     header.add("header2", "This is my header 2");
	     return ResponseEntity.status(HttpStatus.CREATED).headers(header).body("Hello");
		
		
	 }
	 
	 @PostMapping(path="/object")
	 public ResponseEntity<String> save1(String input)
	 {
		 ResponseEntity<String> res1= new ResponseEntity<>("Hello from Object",HttpStatus.OK);
		 	 
	     return res1;
		
		
	 }
	 
	 @PostMapping(path="/inline")
	 public ResponseEntity<String> save11(String input)
	 {
		 return ResponseEntity.status(HttpStatus.CREATED)
				 .header("H1", "Value 1")
				 .header("H2", "Value 2")
				 .body("Test");
		   	
		
	 }
	 
	 @PostMapping(path="/nobody")
	 public ResponseEntity<Void> save111(String input)
	 {
		 return ResponseEntity.status(HttpStatus.CREATED)
				 .header("H1", "Value 1")
				 .header("H2", "Value 2")
				 .build();
		  	
		
	 }

	
	
	
	@PostMapping(path="/reqhdr")
	 public ResponseEntity<String> reqhdr(        
			 @RequestHeader(name = "X-COM-PERSIST", required = true) String headerPersist,
            @RequestHeader(name = "X-COM-LOCATION", required = false, defaultValue = "ASIA") String headerLocation,
            @RequestBody String str)
	 {
		 
		 
		 String returnVal="X-COM-PERSIST="+headerPersist+"X-COM-LOCATION="+headerLocation+"body"
		 		+ str;
		 
		 return ResponseEntity.status(HttpStatus.OK).body(returnVal);	
		
	 }

	 @PostMapping(path="/withResponseHeader")
	 public ResponseEntity<String> responseHeader(
	 @RequestHeader(name = "X-COM-PERSIST", required = true) String headerPersist,
     @RequestHeader(name = "X-COM-LOCATION", required = false, defaultValue = "ASIA") String headerLocation,
     @RequestBody String str)//@RequestBody is the payload
	 {
		 return ResponseEntity.status(HttpStatus.CREATED)
				 .header("H1", headerPersist)
				 .header("H2", headerLocation)
				 .body("Returned from responseHeader ");
		   	
		
	 }
	 
	 @PostMapping(path="/getStudent")
	 public ResponseEntity<Student> getStudent(@RequestBody String input)
	 {
 		 
 		 System.out.println("input="+input);	
 		 Student st= new Student("st1","Jayanta1");
 		 
		 return ResponseEntity.status(HttpStatus.CREATED).header("X-INPUT", input)
			 .body(st);
		   	
		
	 }
	 
	 @PostMapping(path="/getStudentList")
	 public ResponseEntity<List<Student>> getStudentList()
	 {
 		 List<Student> studentList = new ArrayList<Student>();
 		 Student st= new Student("st1","Bharti");
 		Student st1= new Student("st2","Anil");
 		Student st2= new Student("st3","Jaya");
 		studentList.add(st);
 		studentList.add(st1);
 		studentList.add(st2);
		 return ResponseEntity.status(HttpStatus.CREATED).header("X-INPUT", "Header")
			 .body(studentList);
		   	
		
	 }
	 
	 
	 @PostMapping(path="/getEmployee")
	 public ResponseEntity<Employee> getEmployee(@RequestBody String input)
	 {
 		 
 		 System.out.println("input="+input);	
 		 Employee emp= new Employee("Emp1","Bharti","Permanent");
 		 
		 return ResponseEntity.status(HttpStatus.CREATED).header("X-INPUT", input)
			 .body(emp);
		   	
	
	 }
	 
	 @PostMapping(path="processEmployee")
	 public ResponseEntity<Void> processEmployee(@RequestBody Employee emp)
	 {
		 
		 System.out.println(emp.getName());
		return ResponseEntity.status(HttpStatus.CREATED).build();
	 }
	 
	
	 
	 @PostMapping(path="processEmployeeList")
	 public ResponseEntity<Void> processStudents(@RequestBody List<Employee> employeeList)
	 {
		 
		 for(Employee emp : employeeList)
		 {
			 System.out.println("EmployeeId = "+emp.getId() ); 
			 System.out.println("EmployeeName = "+emp.getName() );
			 System.out.println("EmployeeType = "+emp.getType() );
		 }
		 return ResponseEntity.status(HttpStatus.OK).build();
	 }
	 
	 @PostMapping(path="returnEmployeeList")
	 public ResponseEntity<List<Employee>> getEmployeeList()
	 {
		 
		 List<Employee> empList = new ArrayList<Employee>();
		 Employee emp1 = new Employee("Emp1", "Bharti", "Permanent");
		 Employee emp2 = new Employee("Emp2","Anil","Contract");
		 Employee emp3 = new Employee("Emp3", "Jaya", "Permanent");
		 empList.add(emp1);
		 empList.add(emp2);
		 empList.add(emp3);
		 return ResponseEntity.status(HttpStatus.OK).body(empList);
		 
	 }	

}
