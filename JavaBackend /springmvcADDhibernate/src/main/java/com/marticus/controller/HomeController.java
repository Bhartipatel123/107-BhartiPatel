package com.marticus.controller;

import java.text.DateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;

import org.hibernate.Session;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.marticus.model.User;
import com.marticus.utility.HibernateUtil;

@Controller
public class HomeController 
{

	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) 
	{
		System.out.println("Home Page Requested, locale = " + locale);
		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);

		String formattedDate = dateFormat.format(date);

		model.addAttribute("serverTime", formattedDate);

		return "home";
	}

	
	@RequestMapping(value = "/user", method = RequestMethod.POST)
	public String user(@Validated User user, Model model)
	{
		
		System.out.println("User Page Requested");
		
		model.addAttribute("userName", user.getUserName());
		model.addAttribute("userId", user.getId());
		model.addAttribute("userEmail",user.getUserEmail());
		Session session=com.marticus.utility.HibernateUtil.
				getSessionFactory().openSession();
		session.beginTransaction();
		session.save(user);
		session.getTransaction().commit();
		session.close();
		//HibernateUtil.shutdown();

		return "user";
	}
	
	
	@RequestMapping(value = "/search", method = RequestMethod.GET)
	public String search(@Validated User user, Model model) 
	{
		
		System.out.println("Search Page Requested");
		return "search";
	}
	
	@RequestMapping(value = "/getSearchResults", method = RequestMethod.POST)
	public String getUser(@Validated User user, Model model) 
	{
		
		System.out.println("getSearchResult  Page Requested");
		
		Session session=com.marticus.utility.HibernateUtil.
				getSessionFactory().openSession();
		System.out.println("sessionFactory inside getSearchResults "+session);
		session.beginTransaction();
		 User user1 = (User) session.load(User.class, new Integer(user.getId()));
		 model.addAttribute("userName", user1.getUserName());
			model.addAttribute("userId", user1.getId());
			model.addAttribute("userEmail",user1.getUserEmail());
		session.getTransaction().commit();
		session.close();
		//HibernateUtil.shutdown();
		 
		return "getSearchResults";
	}
	
	
//	@RequestMapping(value = "/userlist", method = RequestMethod.GET)
//	public String userlist(@Validated User user, Model model) 
//	{
//		
//		System.out.println("userlist Page Requested");
//		return "userlist";
//	}
//	
//	@RequestMapping(value = "/userList", method = RequestMethod.GET)
//	public String getUserList(@Validated User user, Model model) 
//	{
//		
//		System.out.println("getUserList  Page Requested");
//		
//		Session session=com.marticus.utility.HibernateUtil.
//				getSessionFactory().openSession();
//		session.beginTransaction();
//		List Users =session.createQuery("From User").list();
//		ArrayList <User> uList = new ArrayList<User>();
//		for (Iterator iterator2 = Users.iterator(); iterator2.hasNext();)
//		{
//            User u = (User) iterator2.next(); 
//            uList.add(u);
//            System.out.println("User: " + u.getUserName()); 
//         }
//		model.addAttribute("uList",uList );
//		session.getTransaction().commit();
//		session.close();
//		//HibernateUtil.shutdown();
//		 
//		return "userList";
//	}	

	
}