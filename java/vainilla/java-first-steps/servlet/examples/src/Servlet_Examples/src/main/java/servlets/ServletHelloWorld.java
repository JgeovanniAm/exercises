package servlets;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletException;


import javax.servlet.annotation.WebServlet;

import javax.servlet.ServletContext;

import java.io.IOException;

import java.util.Locale;

@WebServlet("/jimmy")
public class ServletHelloWorld extends HttpServlet {
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ServletContext counter = request.getServletContext();

		Object result = counter.getAttribute("counter");

		response.getWriter().println(result);
	}

}
