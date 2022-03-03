import { useState } from "react";
import { Modal, Button, StyleSheet, TextInput, View } from "react-native";

const InputMovement = ({addMovementHandler, addModal,editValidate, editMovementHandler}) => {
  const [amount, setamount] = useState("");
  const [date, setdate] = useState("");
  const [desc, setdesc] = useState("");

  const [amountEdit, setamountEdit] = useState("");
  const [dateEdit, setdateEdit] = useState("");
  const [descEdit, setdescEdit] = useState("");


  const amountHandler = (amount) => {
    setamountEdit(amount);
    setamount(amount);
  };
  const dateHandler = (date) => {
    setdateEdit(date);
    setdate(date);
  };

  const descHandler = (desc) => {
    setdescEdit(desc);
    setdesc(desc);
  };


  const validateMovementAdd = () => {
    addMovementHandler(amount, date, desc);
    setamount("");
    setdate("");
    setdesc("");
    console.log(amount);
  };

  const validateMovementEdit = () => {
    editMovementHandler(amountEdit, dateEdit, descEdit);
    setamount("");
    setdate("");
    setdesc("");
  };

  
  if (!editValidate) {
    return (
        <Modal visible={addModal} animationType={"slide"} transparent={true}>
          <View style={styles.inputMovement}>
            <TextInput
              style={styles.movementInput}
              placeholder="Add Amount"
              value={amount}
              onChangeText={amountHandler}
            />
            <TextInput
              style={styles.movementInput}
              placeholder="Add date"
              value={date}
              onChangeText={dateHandler}
            />
            <TextInput
              style={styles.movementInput}
              placeholder="Add description"
              value={desc}
              onChangeText={descHandler}
            />
            <Button
              style={styles.movementButton}
              title="Add"
              onPress={validateMovementAdd}
            />
          </View>
        </Modal>
      );
  } else {
    return (
        <Modal visible={addModal} animationType={"slide"} transparent={true}>
          <View style={styles.inputMovement}>
            <TextInput
              style={styles.movementInput}
              placeholder="Edit Amount"
              value={amountEdit}
              onChangeText={amountHandler}
            />
            <TextInput
              style={styles.movementInput}
              placeholder="Edit Date"
              value={dateEdit}
              onChangeText={dateHandler}
            />
            <TextInput
              style={styles.movementInput}
              placeholder="Edit Description"
              value={descEdit}
              onChangeText={descHandler}
            />
            <Button
              style={styles.movementButton}
              title="Edit"
              onPress={validateMovementEdit}
            />
          </View>
        </Modal>
      );
  }
  
};
const styles = StyleSheet.create({
  inputMovement: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    flex: 1,
  },
  movementInput: {
    width: "75%",
    borderBottomColor: "red",
    borderBottomWidth: 1,
    color: "white",
    height: 40,
  },
  movementButton: {
    width: "25%",
  },
});

export default InputMovement;
