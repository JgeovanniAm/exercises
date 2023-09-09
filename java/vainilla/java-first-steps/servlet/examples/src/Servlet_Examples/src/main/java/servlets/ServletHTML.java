package servlets;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;

import java.io.IOException;
import java.util.Locale;

/**
 * Demonstrates a servlet providing HTML content
**/

@WebServlet("/html")
public class ServletHTML extends HttpServlet {
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		// Set content type
		response.setContentType("text/html; charset=UTF-8");
		
		// start HTML & BODY tags
		response.getWriter().println("<HTML><BODY>");
		
		
		// Determine Language to use
		Locale locale = request.getLocale();
		String languageTag = locale.toLanguageTag().substring(0,2);
		
		// Determine Greeting language
		String greeting;
		switch(languageTag){
			case "ar": // Arabic
				greeting = "Marhabaan";
				break;
			case "la": // Latin
				greeting = "Salve";
				break;
			case "fr": // French
				greeting = "Bonjour";
				break;
			default: // anything else
				greeting = "Hello";
		}
		
		
		
		// write the greeting in blue
		response.getWriter().println("<H1><FONT COLOR=blue>");
		response.getWriter().println(greeting); 
		response.getWriter().println("<FONT/>");

		
		// Get QueryString value
		String name = request.getParameter("name");
		if(name == null){
			name = "";
		}
		
		// write the name in black italic
		response.getWriter().println("<FONT COLOR=black><i>");
		response.getWriter().println(" " + name); 
		response.getWriter().println("</i><FONT/></H1>");
		
		
		// close HTML & BODY tags
		response.getWriter().println("</BODY></HTML>");
	}

}
