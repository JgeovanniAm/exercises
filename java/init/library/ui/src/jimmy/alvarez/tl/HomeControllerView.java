package jimmy.alvarez.tl;

import javafx.event.ActionEvent;

/**
 * @author j.alvarez.mendoza
 * @date 11/8/23
 */
public class HomeControllerView extends Controller {

    /**
     * Method which goes to books booksRegisterView view.
     * @param event Action button
     */
    public void booksRegisterView(ActionEvent event){
        this.switchViews("../ui/Books.fxml", event);
    }

    /**
     * Method which goes to members membersRegisterView view.
     * @param event Action button
     */
    public void membersRegisterView(ActionEvent  event){
        this.switchViews("../ui/Members.fxml", event);
    }
    /**
     * Method which goes to members bookingRegisterView view.
     * @param event Action button
     */
    public void bookingRegisterView(ActionEvent event) {
        this.switchViews("../ui/Bookings.fxml", event);
    }
    /**
     * Method which goes to members listMembersView view.
     * @param event Action button
     */
    public void listMembersView(ActionEvent  event){
        this.switchViews("../ui/ListMembers.fxml", event);
    }

    /**
     * Method which goes to members listBooksView view.
     * @param event Action button
     */
    public void listBooksView(ActionEvent  event){
        this.switchViews("../ui/ListBooks.fxml", event);
    }

    /**
     * Method which goes to members listBookingsView view.
     * @param event Action button
     */
    public void listBookingsView(ActionEvent  event){
        this.switchViews("../ui/ListBookings.fxml", event);
    }

    @Override
    void initialize() {

    }
}
