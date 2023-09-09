package servlets;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpSession;

import java.io.IOException;
import java.util.Locale;

import javax.servlet.http.HttpSession;
import java.util.concurrent.atomic.AtomicInteger;

@WebServlet("/session_count")
public class Servlet_Session extends HttpServlet {
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
	
					// Get a reference to the session
     HttpSession session = request.getSession();
					
					// initialize the count variable to 1;
					int tempCount = 1;
					
					// Get or create counter attribute
					Object att = session.getAttribute("counter");
					if (att != null) {
								
								AtomicInteger count = (AtomicInteger)att;
								tempCount = count.incrementAndGet();	
								
					}else{
					
								AtomicInteger count = new AtomicInteger(1);
								session.setAttribute("counter", count);
					}
					
					// report the current count
					response.getWriter().println("Session Count = " + tempCount);
	}

}
