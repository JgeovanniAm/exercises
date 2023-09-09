package filters;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;

import java.io.IOException;
import java.util.Locale;
import java.util.Date;


@WebServlet("/")
public class TheServlet extends HttpServlet {

 public static String TRACE_FILTER = "trace-filters";
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
						
		response.getWriter().println(
			"      The Servlet ");

	}

}
