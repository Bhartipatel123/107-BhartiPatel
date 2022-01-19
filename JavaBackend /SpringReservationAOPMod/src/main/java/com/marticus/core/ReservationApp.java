package com.marticus.core;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;


import com.marticus.reservation.bo.ReservationBo;

public class ReservationApp {
	
	public static void main(String[] args) throws Exception{
		ApplicationContext appContext = new ClassPathXmlApplicationContext("Spring-Reservation.xml");
		
		ReservationBo reserv = (ReservationBo) appContext.getBean("reservationBo");
		//execute a method before checkIn()
		reserv.checkIn();
		//execute a method  after checkOut()
		reserv.checkOut();
		
	}
	     

}