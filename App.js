import { useState } from "react";
import { StyleSheet, View, Button,FlatList } from 'react-native';
import Header from './components/Header';
import Item from "./components/Item";
import InputMovement from "./components/InputMovement";
import Colors from "./constants/Colors";

export default function App() {
  const [budget, setBudget] = useState(200);
  const [movementList, setMovementList] = useState([]);
  const [showModal, setshowModal] = useState(false);
  const [editValidate, seteditValidate] = useState(false);
  const [itemKey, setItemKey] = useState("");

  const addMovementHandler = (amount, date, desc) => {
    if (date !== "" && date !== "" && desc !== "") {
      const numberComprobation = parseInt(amount);
      if (numberComprobation < 0) {
        const deletedMinus = amount.replace(/-/g,'')
        setBudget((budget) => (budget - deletedMinus))
      } else {
        setBudget((budget) => (budget + numberComprobation))
      }
      setMovementList(currentmovementList => [
        ...currentmovementList,
        {
          key: Math.random().toString(),
          amount,
          date,
          desc
        }
      ])
      setshowModal(false);
    }
  }
  const deleteMovementHandler = (movementKey) => {
    setMovementList((currentList) => {
      return currentList.filter(movement => movement.key !== movementKey);
    })
  }
  const editMovementHandler = (newamount, newdate, newdesc) => {
    movementList.map(item => {
      if (item.key == itemKey) {
        const numberComprobation = parseInt(newamount);
        if (numberComprobation < 0) {
          const deletedMinus = newamount.replace(/-/g,'')
          setBudget((budget) => (budget - deletedMinus))
        } else {
          setBudget((budget) => (budget - item.amount))
          setBudget((budget) => (budget + numberComprobation))
        }
        console.log(item.key);
        item.amount = newamount;
        item.date = newdate;
        item.desc = newdesc;
      }
    })
    seteditValidate(false);
    setshowModal(false);
    console.log("Editando..");
  }

  console.log(itemKey);
  return (
    <View style={styles.screen}>
      <Header title="My Budget: " budget={budget} />
      <Button title="Add new movement" onPress={() => setshowModal(true)} />
      <InputMovement addMovementHandler={addMovementHandler} editMovementHandler={editMovementHandler} addModal={showModal} editValidate={editValidate} />
      <View styles={styles.listContainer}>
        <FlatList data={movementList} renderItem={itemData => {
          return (
            <Item 
            itemData={itemData.item} 
            onDelete={ () => deleteMovementHandler(itemData.item.key)} 
            onEdit= { () => {setshowModal(true) ; seteditValidate(true); setItemKey(itemData.item.key)}} 
            />)

        }} />
        
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.blue
  },
  listContainer: {
    width: "100%",
    padding: 20,
  },
});
