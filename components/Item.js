import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Colors from "../constants/Colors";

const Item = ({itemData, onDelete, onEdit}) => {
  const {amount, date, desc} = itemData;
  return (
    <View style={styles.item}>
      <View style={styles.textInfo}>
        <Text styles={styles.itemText}>Amount: {amount}</Text>
        <Text styles={styles.itemText}>Date: {date}</Text>
        <Text styles={styles.itemText}>Description: {desc}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onEdit} >
            <View style={styles.edit}>
                <Text style={styles.itemText}>Edit</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete} >
            <View style={styles.delete}>
                <Text style={styles.itemText}>Delete</Text>
            </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: Colors.orange,
    width: "100%",
    height: 110,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 5,
    margintop: 5
  },
  buttonContainer: {
    justifyContent: "space-evenly",
    marginRight: 10,
  },
  textInfo: {
    justifyContent: "space-evenly",
    marginBottom: 10,
  },
  edit: {
    backgroundColor: "yellow",
    alignItems: "center",
    padding: 5,
    borderRadius: 5,
  },
  delete: {
    backgroundColor: "red",
    padding: 5,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 15,
    fontWeight: "bold"
  }
});

export default Item;
