import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

export default function Header () {
    return (
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
          source={require('../Img/logo.png')}
          style={styles.logo}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
          source={require('../Img/send.png')}
          style={styles.send}
          />
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
  header: {
    height: 55,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 2
  },
  send: {
    width: 23,
    height: 23,
  }
})