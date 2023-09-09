package jimmy.alvarez.tl;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Node;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.Button;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.input.MouseEvent;
import javafx.scene.layout.AnchorPane;
import javafx.scene.text.Text;
import javafx.stage.Stage;
import jimmy.alvarez.bl.entities.alquimista.Alquimista;
import jimmy.alvarez.bl.entities.response.Response;
import jimmy.alvarez.bl.entities.yacimiento.Yacimientos;
import jimmy.alvarez.bl.logic.GestorYacimiento;
import jimmy.alvarez.tl.utils.ControllerUtils;

import java.io.InputStream;
import java.util.ArrayList;


public class Tierra {
    @FXML
    public Text name;
    @FXML
    public Text element;
    @FXML
    public Text type;
    @FXML
    public Text max;
    @FXML
    public AnchorPane panelYa;

    @FXML
    public Button createY;


    private GestorYacimiento gestorYacimiento;
    private Alquimista alquimista;

    private ArrayList<Yacimientos> yacimientos;

    private Yacimientos yacimientoClicked;

    private jimmy.alvarez.bl.entities.tierra.Tierra tierra;

    public void goToMain(ActionEvent event) {
        try {
            FXMLLoader loader = new FXMLLoader(getClass().getResource("../ui/Home.fxml"));
            Parent root = loader.load();
            Home home = loader.getController();
            home.buildProfile(alquimista);
            Node node = (Node) event.getSource();
            Stage stage = (Stage) node.getScene().getWindow();
            stage.setScene(new Scene(root));
            stage.show();

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    public void buildInfoGround(ArrayList<Yacimientos> yacimientos, jimmy.alvarez.bl.entities.tierra.Tierra tierra, Alquimista alquimista) {
        this.alquimista = alquimista;
        this.yacimientos = yacimientos;
        this.tierra = tierra;
        buildYacimientos();
        printInfoGround();

    }

    public void printInfoGround() {
        name.setText("Nombre:");
        element.setText("Impuesto:");
        type.setText("Type:");
        max.setText("Max Yacimientos:");
        name.setText(name.getText() + " " + tierra.getNombre());
        element.setText(element.getText() + " " + tierra.getImpuesto());
        type.setText(type.getText() + " " + tierra.getTipo());
        max.setText(max.getText() + " " + tierra.getCantidadMaxYacimientos());
    }

    public void buildYacimientos() {
        ArrayList<InputStream> images = new ArrayList<>();
        images.add(getClass().getResourceAsStream("../assets/main/Gold_Mine15.png"));
        images.add(getClass().getResourceAsStream("../assets/main/y1.png"));
        images.add(getClass().getResourceAsStream("../assets/main/y4.png"));
        images.add(getClass().getResourceAsStream("../assets/main/y3.png"));
        images.add(getClass().getResourceAsStream("../assets/main/y2.png"));
        double num = 0;
        double hei = 60;

        panelYa.getChildren().clear();

        for (int i = 0; i < yacimientos.size(); i++) {
            ImageView imageView = new ImageView(new Image(images.get(i)));
            AnchorPane wrapperYa = new AnchorPane();
            wrapperYa.getChildren().add(imageView);

            imageView.setX(0);
            imageView.setY(hei);

            Text ubicacion = new Text();
            ubicacion.setText(yacimientos.get(i).getUBICACION().toString());
            wrapperYa.getChildren().add(ubicacion);
            ubicacion.setY(290);
            ubicacion.setX(60);
            ubicacion.setId(yacimientos.get(i).getUBICACION().toString());
            Text unidades = new Text();
            unidades.setText("unidades disponibles: " + String.valueOf(yacimientos.get(i).getUnidadesDispo()));
            unidades.setY(320);
            unidades.setX(60);
            unidades.setId(String.valueOf(yacimientos.get(i).getUnidadesDispo()));
            wrapperYa.getChildren().add(unidades);

            Text max = new Text();
            max.setText("max tiempo recoleccion: " + String.valueOf(yacimientos.get(i).getMaxTiempoRecoleccion()));
            max.setY(340);
            max.setX(60);
            max.setId(String.valueOf(yacimientos.get(i).getMaxTiempoRecoleccion()));
            wrapperYa.getChildren().add(max);
            wrapperYa.setId(String.valueOf(yacimientos.get(i).getId()));

            wrapperYa.setLayoutX(num);
            num += 300;

            panelYa.getChildren().add(wrapperYa);

            imageView.setOnMouseClicked(event -> {

                handleClickYacimientos(wrapperYa, event);
            });
        }
    }

    private void handleClickYacimientos(AnchorPane wrapperYa, MouseEvent event) {
        try {
            double cantidad = 0;

            for (Yacimientos yacimiento : yacimientos) {
                if (wrapperYa.getId().equals(String.valueOf(yacimiento.getId()))) {
                    cantidad = yacimiento.getUnidadesDispo();
                }
            }

            gestorYacimiento = new GestorYacimiento();
            Response response = gestorYacimiento.recogerElemento(cantidad, Integer.parseInt(wrapperYa.getId()), tierra.getId(), alquimista.getId());
            if (!response.isOk()) {
                throw new Exception(response.getError());
            }
            refreshSectionYacimientos();
        } catch (Exception e) {
            ControllerUtils.showAlert(Alert.AlertType.WARNING, "Oops!", e.getMessage());
        }
    }

    public void refreshSectionYacimientos() throws Exception {
        gestorYacimiento = new GestorYacimiento();
        Response response = gestorYacimiento.verYacimientosTierra(tierra.getId());
        if (!response.isOk()) {
            throw new Exception(response.getError());
        }
        buildInfoGround((ArrayList<Yacimientos>) response.getBody(), tierra, alquimista);
    }

    public void createYacimientos(ActionEvent event){
        try{
            gestorYacimiento = new GestorYacimiento();
            Response response = gestorYacimiento.crearYacimiento(tierra);
            if (!response.isOk()) {
                throw new Exception(response.getError());
            }
            refreshSectionYacimientos();
        }catch (Exception e){
            System.out.println(e.getMessage());
            ControllerUtils.showAlert(Alert.AlertType.ERROR, "Oops!", e.getMessage());
        }

    }
}