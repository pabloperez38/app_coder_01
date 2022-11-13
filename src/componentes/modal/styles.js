import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    paddingVertical: 20,
    backgroundColor: "#f1f3f8",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalDetailContainer: {
    paddingVertical: 20,
  },
  modalDetailText: {
    fontSize: 14,
    color: "#212121",
  },
  modalButtonContainer: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 20,
  },
  selectedTask: {
    fontSize: 14,
    color: "#212121",
    fontWeight: "bold",
    paddingVertical: 20,
  },
});
