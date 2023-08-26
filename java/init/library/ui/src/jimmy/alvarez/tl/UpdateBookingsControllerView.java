package jimmy.alvarez.tl;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Alert;
import javafx.scene.control.RadioButton;
import javafx.scene.control.TextField;
import jimmy.alvarez.bl.entities.inventario.Inventario;
import jimmy.alvarez.bl.entities.miembro.Miembro;
import jimmy.alvarez.bl.entities.reserva.EstadoReserva;
import jimmy.alvarez.bl.entities.reserva.Reserva;
import jimmy.alvarez.bl.entities.response.Response;
import jimmy.alvarez.bl.logic.GestorReserva;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

/**
 * @author j.alvarez.mendoza
 * @date 11/8/23
 */
public class UpdateBookingsControllerView extends Controller {

    @FXML
    private TextField idLibro;
    @FXML
    private TextField idMiembro;
    @FXML
    public RadioButton disponible, prestado, reservado, vencida;

    private int idBookingToBeUpdated;

    /**
     * Method which handles the go back functionality
     *
     * @param event Action button
     */
    public void homeLibraryView(ActionEvent event) {
        this.switchViews("../ui/Main.fxml", event);
    }

    @Override
    void initialize() {}

    public void updateBooking(ActionEvent event) {
        try {
            GestorReserva gestorReserva = new GestorReserva();
            Response responseFX = createReserva();
            if (!responseFX.isOk()) {
                showAlert(Alert.AlertType.WARNING, "Ha ocurrido un Error", responseFX.getError());
                return;
            }
            Response responseGestor = gestorReserva.update(getIdBookingToBeUpdated(),(Reserva) responseFX.getBody());
            if (!responseGestor.isOk()) {
                throw new Exception(responseGestor.getError());
            }
            showAlert(Alert.AlertType.INFORMATION, "Exito!!", "se registro correctamente");
        } catch (Exception e) {
            e.printStackTrace();
            showAlert(Alert.AlertType.ERROR, "Errror en registrar reserva en la bases de datos!", e.getMessage());
        } finally {
            idLibro.clear();
            idMiembro.clear();
            prestado.setSelected(false);
            vencida.setSelected(false);
            disponible.setSelected(false);
            reservado.setSelected(false);
        }
    }

    private Response createReserva() {
        Response response = new Response<>();
        Reserva reserva = new Reserva();
        if (idLibro.getText().equals("") || Integer.parseInt(idLibro.getText()) < 0) {
            response.setOk(false);
            response.setError("Error porfavor llene el campo de inventario libro");
            return response;
        }
        if (idMiembro.getText().equals("") || Integer.parseInt(idMiembro.getText()) < 0) {
            response.setOk(false);
            response.setError("Error porfavor llene el campo de miembro");
            return response;
        }
        Inventario inventario = new Inventario();
        inventario.setId(Integer.parseInt(idLibro.getText()));
        reserva.setInventario(inventario);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyy-MM-dd");
        reserva.setFechaRealizacion(LocalDate.now());
        System.out.println(LocalDate.now());
        Miembro miembro = new Miembro();
        miembro.setId(Integer.parseInt(idMiembro.getText()));
        reserva.setMiembro(miembro);

        if (reservado.isSelected()) {
            reserva.setEstado(EstadoReserva.RESERVADO);
        } else if (vencida.isSelected()) {
            reserva.setEstado(EstadoReserva.VENCIDA);
        } else if (disponible.isSelected()) {
            reserva.setEstado(EstadoReserva.DISPONIBLE);
        } else {
            reserva.setEstado(EstadoReserva.PRESTADO);
        }
        response.setBody(reserva);
        response.setOk(true);
        return response;
    }

    public int getIdBookingToBeUpdated() {
        return idBookingToBeUpdated;
    }

    public void setIdBookingToBeUpdated(int idBookingToBeUpdated) {
        this.idBookingToBeUpdated = idBookingToBeUpdated;
    }
}
