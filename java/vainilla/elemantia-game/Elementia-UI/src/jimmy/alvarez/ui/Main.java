package jimmy.alvarez.ui;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;

import java.io.IOException;

/**
 * @author j.alvarez.mendoza
 * @date 31/07/23
 */
public class Main extends Application {

    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage primaryStage) throws IOException {
        String css = this.getClass().getResource("app.css").toExternalForm();
        Parent root = FXMLLoader.load(getClass().getResource("Main.fxml"));
        primaryStage.setTitle("Elementia");
        root.getStylesheets().add(css);
        primaryStage.setScene(new Scene(root));
        primaryStage.show();
    }
}