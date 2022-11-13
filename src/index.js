import { AddItem, Lista, TaskItem, VentanaModal } from "./componentes";
import { Text, View } from "react-native";

import { styles } from "./styles";
import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const onHandleTask = () => {
    setTaskList((prevTaskList) => [
      ...prevTaskList,
      { id: Math.random().toString(), value: task },
    ]);
    setTask("");
  };
  const onHandleSelected = (item) => {
    setSelectedTask(item);
    setModalVisible(!modalVisible);
  };

  const renderItem = ({ item }) => (
    <TaskItem item={item} onHandleSelected={onHandleSelected} />
  );

  const onHandleCancel = () => {
    setModalVisible(!modalVisible);
  };

  const onHandleDeleteItem = () => {
    setTaskList((prevTaskList) =>
      prevTaskList.filter((item) => item.id !== selectedTask.id)
    );
    setModalVisible(!modalVisible);
  };

  const onHandleChange = (text) => {
    setTask(text);
  };

  return (
    <View style={styles.container}>
      <AddItem
        task={task}
        onHandleTask={onHandleTask}
        onHandleChange={onHandleChange}
      />
      <View style={styles.containerLista}>
        <Text style={styles.cabecera}>Lista de tareas</Text>
        <Lista taskList={taskList} renderItem={renderItem} />
        <VentanaModal
          onHandleCancel={onHandleCancel}
          onHandleDeleteItem={onHandleDeleteItem}
          modalVisible={modalVisible}
          selectedTask={selectedTask}
        />
      </View>
    </View>
  );
}
