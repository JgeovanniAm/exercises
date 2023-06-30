package ui;

import bl.BusinessLogic;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintStream;
import java.time.LocalDate;

public class App {
    private static BufferedReader prompt = new BufferedReader(new InputStreamReader(System.in));
    private static PrintStream console = System.out;
    private static BusinessLogic businessLogic;

    public static void main(String[] args) throws IOException {
        businessLogic = new BusinessLogic();
        start();
    }

    private static void start() throws IOException {
        menuApp();
    }

    private static void menuApp() throws IOException {
        boolean quit = false;
        do {
            console.println(" 1. Registrar\n 2. Visualizar\n 3. Salir ");
            int option = Integer.parseInt(prompt.readLine());
            switch (option){
                case 1 :
                    menuRegister();
                    break;
                case 2:
                    menuVisualizer();
                    break;
                case 3:
                    quit = true;
                    break;
                default:
                    break;
            }
        }while (!quit);
    }

    private static void menuRegister() throws IOException {
        console.println(" 1. Libros\n 2. Miembros\n");
        int option = Integer.parseInt(prompt.readLine());
        switch (option){
            case 1 :
                menuBook();
                break;
            case 2:
                menuMembers();
                break;
            default:
                break;
        }
    }

    private static void menuBook() throws IOException {
        console.println("Digite titulo");
        String titleInput = prompt.readLine();
        console.println("Digite autor");
        String authorInput = prompt.readLine();
        console.println(" Digite genero:\n 1. YA\n 2. Misterio\n 3. Infantil\n 4. Fantasia" );
        int genderInput = Integer.parseInt(prompt.readLine());
        console.println("Digite ibsm");
        String ibsmInput = prompt.readLine();
        console.println("Digite precio");
        double priceInput =  Double.parseDouble(prompt.readLine());
        console.println("Digite cantidad");
        int amountInput = Integer.parseInt(prompt.readLine());
        businessLogic.registerBooks(titleInput, authorInput, genderInput, ibsmInput, priceInput, amountInput);
    }
    private static void menuMembers() throws IOException {
        console.println("Digite nombre");
        String nameInput = prompt.readLine();

        console.println("Digite apellido");
        String lastNameInput = prompt.readLine();

        console.println("Digite contraseña");
        String passwordInput = prompt.readLine();

        console.println("Digite correo");
        String emailInput = prompt.readLine();

        console.println("Digite año de Nacimiento");
        int YearInput = Integer.parseInt(prompt.readLine());

        console.println("Digite mes de Nacimiento");
        int MonthInput = Integer.parseInt(prompt.readLine());

        console.println("Digite day de Nacimiento");
        int DayInput = Integer.parseInt(prompt.readLine());
        LocalDate birthDayInput = LocalDate.of(YearInput, MonthInput, DayInput);

        console.println("Digite direccion");
        String adressInput = prompt.readLine();

        console.println("Digite genero");
        String genderInput = prompt.readLine();

        businessLogic.registerMembers(nameInput, lastNameInput, passwordInput, emailInput, birthDayInput, adressInput, genderInput);
    }
    private static void menuVisualizer() throws IOException {
        console.println(" 1. Libros\n 2. Miembros\n");
        int option = Integer.parseInt(prompt.readLine());
        switch (option){
            case 1 :
                businessLogic.visualizeBooks();
                break;
            case 2:
                businessLogic.visualizeMembers();
                break;
            default:
                break;
        }
    }
}
