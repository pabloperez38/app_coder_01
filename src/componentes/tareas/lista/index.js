import { FlatList, Text } from "react-native";

import react from "react";
import { styles } from "../item/styles";

const Lista = ({ taskList, renderItem }) => {
  return (
    <FlatList
      style={styles.listContainer}
      data={taskList}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default Lista;
