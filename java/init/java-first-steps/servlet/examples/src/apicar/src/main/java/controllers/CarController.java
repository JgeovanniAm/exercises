package main.java.controllers;

import com.google.gson.Gson;
import main.java.models.Car;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.util.ArrayList;

public class CarController {
    private Gson gson;
    private ServletContext context;
    private ArrayList<Car> allCarsArray;

    public CarController(HttpServletRequest request, HttpServletResponse response){
        gson = new Gson();
        context = request.getServletContext();
    }

    public void handleCreateCars(BufferedReader reader){
        Car body = gson.fromJson(reader, Car.class);
        if(body != null){
            createCar(body);
        }
    }

    public String getAllCars(){
        ArrayList<Car> allCarsArray = (ArrayList<Car>) context.getAttribute("cars");
        if(allCarsArray != null){
            return gson.toJson(allCarsArray);
        }
        return gson.toJson(null);
    }

    public String getFoundCar(String brand){
        Car item = null;
        ArrayList<Car> allCarsArray = (ArrayList<Car>) context.getAttribute("cars");
        for (int i = 0; i < allCarsArray.size(); i++){
            if(allCarsArray.get(i).getBrand().equals(brand)){
                item = allCarsArray.get(i);
            }
        }
        return gson.toJson(item);
    }

    private void createCar(Car body){
        Object ctx = context.getAttribute("cars");
        ArrayList<Car> arr = new ArrayList();
        if (ctx != null) arr = (ArrayList<Car>) ctx;
        arr.add(body);
        context.setAttribute("cars", arr);
    }
}
