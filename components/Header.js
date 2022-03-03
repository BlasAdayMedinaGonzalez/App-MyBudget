import {View, StyleSheet, Text} from 'react-native';
import Colors from '../constants/Colors';

const Header = ({title,budget}) => {
  return (
    <View style={styles.header}>
        <Text style={styles.title}>{title}{budget}€</Text>
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
        fontWeight: "bold"
    }
})

export default Header