package servlets;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.ServletContext;

import java.io.IOException;
import java.util.Locale;


@WebServlet("/logging")
public class ServletLogging extends HttpServlet {
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		ServletContext cxt = request.getServletContext();
		
		cxt.log("Hello World!");

		response.getWriter().println("Message Logged");
	}

}
