import { Text, TouchableOpacity } from "react-native";

import React from "react";
import { styles } from "./styles";

const TaskItem = ({ item, onHandleSelected }) => {
  return (
    <TouchableOpacity
      style={styles.lista}
      onPress={() => onHandleSelected(item)}
    >
      <Text style={styles.elemento}>{item.value}</Text>
    </TouchableOpacity>
  );
};

export default TaskItem;
