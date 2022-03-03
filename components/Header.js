import {View, StyleSheet, Text} from 'react-native';
import Colors from '../constants/Colors';

const Header = ({title,budget}) => {
  let confirmOutput;
  const negativeNumber = parseInt(budget);
  if (negativeNumber < 0) {
    confirmOutput =  <Text style={styles.budget}>{budget}€</Text>
  } else {
    confirmOutput =  <Text style={styles.title}>{budget}€</Text>
  }
  return (
    <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {confirmOutput}
    </View>
  )
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.blue,
        height: 60,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
    },
    budget: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.red
    }
})

export default Header