package com.company;
import java.util.ArrayList;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        final int number  = (int) 2.5;
        final float number2 = 2.599999999F;
        final double number3 = 2.599999999;
        final float number2_1 = 2; // 2.0
        System.out.print(number3 + " " + number2 + " " + 1/2);
        final String name = "hi everyone";
        boolean toggle = 3 > 18 ;


        //constructor
        new Jimmy();
        new Jimmy("jimmy");
        if (!toggle) {
            System.out.print(name.toUpperCase() + ' ' + new Jimmy().jimmy_Method("JIMMY A.M"));
        }

        final int[] mynumbers = {1 , 3 , 4};
        int[] numberArr = new int[8];

        // Arrays
        ArrayList<String> mylistarr = new ArrayList<>(3);
        mylistarr.add("banana");
        mylistarr.add("coca");
        //mylistarr.add(2);  ERROR

        System.out.print(mylistarr + "--------" +"--------");
        System.out.print( "SPAAAAAAAAA--------" + new String[] {"a", "b"} +"my array " + " " + mynumbers[2] + " " + numberArr + " ------- " + Arrays.binarySearch(mynumbers, 2));

        for (String item : mylistarr) {
            System.out.print( "--------" + item +"--------");
        }

        for (int i = 0; i < mylistarr.size(); i++){

            System.out.print(mylistarr.get(i) + "///");
        }

        StringBuilder string = new StringBuilder();
        string.append("hehehehehhe");
    }
}

