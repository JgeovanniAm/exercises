package bl;

import java.time.LocalDate;
import java.util.ArrayList;

public class BusinessLogic {
    private ArrayList<Inventario> listInventoryBook;
    private ArrayList<Miembro> listMembers;
    public BusinessLogic() {
        this.listInventoryBook = new ArrayList<>();
        this.listMembers = new ArrayList<>();
    }

    public void registerBooks(String titleInput, String authorInput, int genderInput, String ibsmInput, double priceInput, int cantidadInput) {
        Libro book;
        switch (genderInput){
            case 1:
                book = new YA(titleInput, authorInput, ibsmInput,priceInput);
                System.out.println(book);
                break;
            case 2:
                book = new Misterio(titleInput, authorInput, ibsmInput,priceInput);
                System.out.println(book);
                break;
            case 3:
                book = new Infantil(titleInput, authorInput, ibsmInput,priceInput);
                System.out.println(book);
                break;
            case 4:
                book = new Fantasia(titleInput, authorInput, ibsmInput,priceInput);
                System.out.println(book);
                break;
            default:
                book = new Libro();
                break;
        }
        Inventario inventoryBook = new Inventario();
        inventoryBook.setLibro(book);
        inventoryBook.setCantidad(cantidadInput);
        listInventoryBook.add(inventoryBook);
    }

    public void registerMembers(String nameInput, String lastNameInput, String passwordInput, String emailInput, LocalDate birthDayInput, String adressInput, String genderInput) {
        listMembers.add(new Miembro(nameInput, lastNameInput, passwordInput, emailInput, birthDayInput, adressInput, genderInput));
    }

    public void visualizeBooks() {
        for (Inventario book: listInventoryBook) {
            System.out.println(book.toString());
        }
    }

    public void visualizeMembers() {
        for (Miembro member: listMembers) {
            System.out.println(member.toString());
        }
    }
}
