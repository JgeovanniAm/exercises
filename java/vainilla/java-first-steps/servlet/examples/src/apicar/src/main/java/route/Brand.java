package main.java.route;
import main.java.controllers.CarController;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletException;

import javax.servlet.annotation.WebServlet;

import java.io.IOException;

@WebServlet("/api-v1/brand-car/")
public class Brand extends HttpServlet {
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String brand = request.getParameter("brand");
		CarController carFound  = Car(request, response);
		response.getWriter().println(carFound.getFoundCar(brand));
	}

	private CarController Car (HttpServletRequest request, HttpServletResponse response){
		return new CarController(request, response);
	}

}
