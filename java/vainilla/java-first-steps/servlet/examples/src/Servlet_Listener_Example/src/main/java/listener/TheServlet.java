package listener;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.ServletConfig;
import javax.servlet.ServletContext;

import java.io.IOException;
import java.util.Locale;


@WebServlet("/")
public class TheServlet extends HttpServlet {

	/*public void init(ServletConfig config) throws ServletException {
	
		   // Initialization logic goes here

		   
	}*/
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		response.getWriter().println("The Servlet Executed");
	}
	
	/*public void destroy(){
	
			// Clean-up resources here
	}*/

}
