package jimmy.alvarez.tl;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Alert;
import javafx.scene.control.DatePicker;
import javafx.scene.control.TextField;
import jimmy.alvarez.bl.entities.miembro.Miembro;
import jimmy.alvarez.bl.entities.response.Response;
import jimmy.alvarez.bl.logic.GestorMiembro;

/**
 * @author j.alvarez.mendoza
 * @date 11/8/23
 */
public class RegisterMemberControllerView extends Controller {

    @FXML
    public TextField nombre;
    @FXML
    public TextField apellido;
    @FXML
    public TextField contrasena;
    @FXML
    public TextField correo;
    @FXML
    public DatePicker fecha;
    @FXML
    public TextField direccion;
    @FXML
    public TextField genero;

    public void homeLibraryView(ActionEvent event) {
        this.switchViews("../ui/Main.fxml", event);
    }

    @Override
    void initialize() {
    }


    public void postNewMember(ActionEvent event) {
        try {
            GestorMiembro gestorMiembro = new GestorMiembro();
            Response responseFX = createMembers();
            if (!responseFX.isOk()) {
                showAlert(Alert.AlertType.WARNING, "Ha ocurrido un Error", responseFX.getError());
                return;
            }
            Response responseGestor = gestorMiembro.registrar((Miembro) responseFX.getBody());
            System.out.println(responseGestor.getError());
            if (!responseGestor.isOk()) {
                throw new Exception(responseGestor.getError());
            }
            showAlert(Alert.AlertType.INFORMATION, "Exito!!", "se registro correctamente");
        } catch (Exception e) {
            e.printStackTrace();
            showAlert(Alert.AlertType.ERROR, "Errror en registrar reserva en la bases de datos!", e.getMessage());
        } finally {
            nombre.clear();
            apellido.clear();
            contrasena.clear();
            correo.clear();
            direccion.clear();
            fecha.setValue(null);
            genero.clear();
        }

    }

    private Response createMembers() {
        Response response = new Response<>();
        if (nombre.getText().equals("")) {
            response.setOk(false);
            response.setError("Error porfavor llene el campo de nombre");
            return response;
        }
        if (apellido.getText().equals("")) {
            response.setOk(false);
            response.setError("Error porfavor llene el campo de apellido");
            return response;
        }
        if (contrasena.getText().equals("")) {
            response.setOk(false);
            response.setError("Error porfavor llene el campo de contrasena");
            return response;
        }
        if (correo.getText().equals("")) {
            response.setOk(false);
            response.setError("Error porfavor llene el campo de correo");
            return response;
        }
        if (direccion.getText().equals("")) {
            response.setOk(false);
            response.setError("Error porfavor llene el campo de direccion");
            return response;
        }
        if (genero.getText().equals("")) {
            response.setOk(false);
            response.setError("Error porfavor llene el campo de genero");
            return response;
        }
        if (fecha.getValue() == null) {
            response.setOk(false);
            response.setError("Error porfavor llene el campo de fecha");
            return response;
        }
        Miembro miembro = new Miembro(nombre.getText(), contrasena.getText(), correo.getText(), fecha.getValue(), genero.getText(), direccion.getText());
        response.setBody(miembro);
        response.setOk(true);
        return response;
    }
}
