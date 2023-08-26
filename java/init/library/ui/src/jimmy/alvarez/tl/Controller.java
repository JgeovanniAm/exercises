package jimmy.alvarez.tl;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Node;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.stage.Stage;

import java.io.IOException;

/**
 * @author j.alvarez.mendoza
 * @date 11/8/23
 */
abstract public class Controller {

    /**
     * Class to change and go through views HACERLO UTILS para performance
     * @param pathFile the FMXL file
     * @param event JAVAFX events
     */
    protected void switchViews(String pathFile, ActionEvent event){
        try {
            Parent root = FXMLLoader.load(getClass().getResource(pathFile));
            Node node = (Node) event.getSource();
            Stage stage = (Stage) node.getScene().getWindow();
            stage.setScene(new Scene(root));
            stage.show();
        }catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * Generic and centralized alert component
     * @param alertType
     * @param title
     * @param message
     */
    protected void showAlert(Alert.AlertType alertType, String title, String message) {
        Alert alert = new Alert(alertType);
        alert.setTitle(title);
        alert.setHeaderText(null);
        alert.setContentText(message);
        alert.show();
    }

    @FXML
    abstract void initialize();
}
