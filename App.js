import { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Colors from "./constants/Colors";

export default function App() {
  const [budget, setBudget] = useState(200);
  return (
    <View style={styles.screen}>
      <Header title="My Budget: " budget={budget} />
      <View styles={styles.listContainer}>
        {/* <FlatList data={bookList} renderItem={itemData => {
          return (
            <Item 
            itemData={itemData.item} 
            onDelete={ () => deleteBookHandler(itemData.item.key)} 
            onEdit= { () => {setshowModal(true) ; seteditValidate(true); setItemKey(itemData.item.key)}} 
            />)
        }} /> */}
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.pinkbright
  },
  listContainer: {
    width: "100%",
    padding: 20,
  },
});
