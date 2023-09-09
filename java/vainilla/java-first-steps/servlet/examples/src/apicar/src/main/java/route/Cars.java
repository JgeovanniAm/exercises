package main.java.route;

import main.java.controllers.CarController;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
// import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;

import java.io.BufferedReader;
import java.io.IOException;

@WebServlet("/api-v1/cars")
public class Cars extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        CarController car = Car(request, response);
        response.getWriter().println(car.getAllCars());
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        BufferedReader reader = request.getReader();
        CarController car = Car(request, response);
        car.handleCreateCars(reader);
        response.getWriter().println(car.getAllCars());
    }

    private CarController Car (HttpServletRequest request, HttpServletResponse response){
        return new CarController(request, response);
    }
}
