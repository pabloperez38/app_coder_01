import { Button, Modal, Text, View } from "react-native";

import react from "react";
import { styles } from "./styles";

const VentanaModal = ({
  onHandleCancel,
  onHandleDeleteItem,
  modalVisible,
  selectedTask,
}) => {
  return (
    <Modal visible={modalVisible} animationType="fade">
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Detalle de tarea</Text>
        <View style={styles.modalDetailContainer}>
          <Text style={styles.modalDetailText}>
            Seguro desea eliminar el item?
          </Text>
          <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
        </View>
        <View style={styles.modalButtonContainer}>
          <Button title="Cancelar" color="#9A848F" onPress={onHandleCancel} />
          <Button title="Eliminar" color="#000" onPress={onHandleDeleteItem} />
        </View>
      </View>
    </Modal>
  );
};

export default VentanaModal;
