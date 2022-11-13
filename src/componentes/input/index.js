import { Button, TextInput, View } from "react-native";

import react from "react";
import { styles } from "./styles";

const AddItem = ({ task, onHandleTask, onHandleChange }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={task}
        placeholder="Ingrese una tarea"
        onChangeText={(text) => onHandleChange(text)}
      />
      <Button
        disabled={!task}
        title="Agregar"
        color="#000"
        onPress={onHandleTask}
      />
    </View>
  );
};

export default AddItem;
