package jimmy.alvarez.tl.utils;

import jimmy.alvarez.utils.ArrayInterfaceUtil;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.PrintStream;
import java.util.ArrayList;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Utils {
    public static BufferedReader prompt = new BufferedReader(new InputStreamReader(System.in));
    public static PrintStream console = System.out;

    public Utils() {
    }

    /**
     * @param x represent the min of numbers to be chosen into a range
     * @param y represent the max of numbers to be chosen into a range
     * @return a number random between of a minimum and maximum range
     */
    public static int randomNumerRange(int x, int y) {
        return (int) Math.floor((Math.random() * (x - y)) + y);
    }

    /**
     * @param contrasena is a string to be processed
     * @return it's validating if the password given, contains Uppercase letters
     */
    public static boolean containContrasenaMayuscula(String contrasena) {
        boolean flag = false;
        for (int i = 0; i < contrasena.length(); i++) {
            String charcterString = "" + contrasena.charAt(i);
            if (contrasena.toUpperCase().contains(charcterString)) {
                flag = true;
                break;
            }
        }
        return flag;
    }

    /**
     * @param contrasena is a string to be processed
     * @return it's validating if the password given, contains lowercase letters
     */
    public static boolean containContrasenaMinusculas(String contrasena) {
        boolean flag = false;
        for (int i = 0; i < contrasena.length(); i++) {
            String charcterString = "" + contrasena.charAt(i); // using the toString method to cast or transform the char to String
            if (contrasena.toLowerCase().contains(charcterString)) {
                flag = true;
                break;
            }
        }
        return flag;
    }

    /**
     * @param contrasena is a string to be processed
     * @return it's validating if the password given, contains numbers
     */
    public static boolean containNumbers(String contrasena) {
        Matcher matcher = Pattern.compile("[0-9]").matcher(contrasena);
        return matcher.find();
    }

    /**
     * @param contrasena
     * @return it's validating if the password given, contains alphanumerics characters
     */
    public static boolean containAlfanumericos(String contrasena) {
        Matcher matcher = Pattern.compile("[^a-zA-Z0-9]").matcher(contrasena);
        return matcher.find();
    }

    /**
     * @param dia it's a int number to be processed
     * @return it's a valid format for day
     */
    public static boolean validadorDia(int dia) {
        return dia > 31 || dia <= 0 ? true : false;
    }

    /**
     * @param mes it's a int number to be processed
     * @return it's a valid format for month
     */
    public static boolean validadorMes(int mes) {
        return mes > 12 || mes <= 0 ? true : false;
    }

    /**
     * @param correo string to be processed
     * @return it's returns a boolean in case the email parameter is a valid format for email address
     */
    public static boolean correoInValido(String correo) {
        if (correo.equals("")) return true;
        if (correo.indexOf("@") == -1) return true;
        return false;
    }

    /**
     * @param contrasena string to be processed as password
     * @return it's returns a boolean in case the password given is a valid format specified to the business.
     */
    public static boolean validadorContrasena(String contrasena) {
        try {
            if (contrasena.trim().equals("")) throw new Exception("\nNo se acepta espacios en blanco\n");
            if (contrasena.length() < 8) throw new Exception("\nContraseñ deberia ser mayor de 5 caracteres\n");
            if (!containContrasenaMayuscula(contrasena)) throw new Exception("\nNo contiene mayusculas\n");
            if (!containContrasenaMinusculas(contrasena)) throw new Exception("\nNo contiene minisculas\n");
            if (!containNumbers(contrasena)) throw new Exception("\nNo contiene numeros\n");
            if (!containAlfanumericos(contrasena)) throw new Exception("\nNo contiene alfanumericos\n");
            return true;
        } catch (Exception error) {
            console.println(error.getMessage());
            return false;
        }
    }

    // hacer un solo interface y no hacer 2 que se llame callback

    /**
     * @param arr      is a paramater which represents an array
     * @param callback is a function which is going to return a boolean
     * @param <T>      generic type given and specified once find method is in use.
     * @return it returns a boolean in case the element to find is found.
     */
    public <T> boolean find(ArrayList<T> arr, ArrayInterfaceUtil<T> callback) {
        boolean found = false;
        int num = 0;
        for (T item : arr) {
            ++num;
            if (callback.callback(item, num, arr)) {
                found = true;
                break;
            }
        }
        return found;
    }

    /**
     * Currently I'm not using it, why? because it wasn't  necessary at this point, but it will
     * @param arr      is a paramater which represents an array
     * @param callback is a function which is going to return a boolean
     * @param <T>      generic type given and specified once filter method is in use.
     * @return it returns all the elements which wishes the condition given in the callback which returns a boolean.
     */
    public <T> ArrayList<T> filter(ArrayList<T> arr, ArrayInterfaceUtil<T> callback) {
        ArrayList<T> arrFiltered = new ArrayList<>();
        int num = 0;
        for (T item : arr) {
            ++num;
            if (callback.callback(item, num, arr)) {
                arrFiltered.add(item);
            }
        }
        return arrFiltered;
    }
}
