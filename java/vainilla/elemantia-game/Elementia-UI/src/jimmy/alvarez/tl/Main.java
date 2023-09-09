package jimmy.alvarez.tl;

import javafx.event.ActionEvent;
import javafx.fxml.FXMLLoader;
import jimmy.alvarez.tl.utils.ControllerUtils;

/**
 * @author j.alvarez.mendoza
 * @date 11/8/23
 */
public class Main {

    /**
     * Method which goes to books booksRegisterView view.
     * @param event Action button
     */
    public void goToSignIn(ActionEvent event) {
        try {
            ControllerUtils.switchViews(FXMLLoader.load(getClass().getResource("../ui/SignIn.fxml")), event);
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }
    public void goToSignUp(ActionEvent event) {
        try {
            ControllerUtils.switchViews(FXMLLoader.load(getClass().getResource("../ui/SignUp.fxml")), event);
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }
}
