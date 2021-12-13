package servlets;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;

import java.io.IOException;
import java.util.Locale;

/**
 *  This servlet demonstrates the use of the Servlet API to access query parameters
 *  and language setting
**/

@WebServlet("/headers")
public class Servlet_Headers extends HttpServlet {
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		// Set content type
		response.setContentType("text/plain");
		
		// Get QueryString value
		String name = request.getParameter("name");
		if(name == null){
			name = "";
		}
		
		
		// Determine Language to use
		Locale locale = request.getLocale();
		String languageTag = locale.toLanguageTag().substring(0,2);
		
		// Determine Greeting language
		String greeting;
		switch(languageTag){
			case "fr": // French
				greeting = "Bonjour";
				break;
			case "de": // German
				greeting = "Guten Tag";
				break;
			default: // anything else
				greeting = "Hello";
				languageTag = "en";
		}

		response.setHeader("Content-Langauge", languageTag);
		
		// Write greeting to name
		response.getWriter().println(greeting + " " +name);
	}

}
