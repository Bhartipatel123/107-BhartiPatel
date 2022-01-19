package com.marticus.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;



@Aspect
public class ReservationAspect{
	@Before("execution(* com.marticus.reservation.bo.ReservationBo.checkIn(..))")
	public void checkIds() {
		System.out.println(".........CheckIn.......");
    }
	
	
//	@Before("execution(* com.marticus.reservation.bo.ReservationBo.checkIn(..))")
//	public void checkVacc() {
//		System.out.println("........checking Vaccinated orNOT.........");
//    }
	
	@After("execution(* com.marticus.reservation.bo.ReservationBo.checkOut(..))")
	public void checkStatus() {
		System.out.println(".........Successfully CheckIn.........");
		System.out.println("Check Guest Room Status");
		System.out.println("Room status Check Successfully by staff");
	}
	
	
	
	
	
	@After("execution(* com.marticus.reservation.bo.ReservationBo.checkOut(..))")
	public void checkingOut() {
		System.out.println(".........Successfully CheckOut.........");
		
	}
	
	
//	@Around("execution(* com.marticus.reservation.bo.ReservationBo.checkOut(..))")
//	public void logAround(ProceedingJoinPoint joinPoint) throws Throwable {
//		
//		//Checked Out
//		joinPoint.proceed();
//		System.out.println(".........CheckOut........");
//		
//		}
	
}