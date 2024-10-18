import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function List(props) {
  return (
    <View>
        <View style={styles.viewprofile}>
            <Image
            source={{uri: props.data.imgperfil}}
            style={styles.fotoPerfil}
            />
            <Text style={styles.nomeUser}>{props.data.nome}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create ({
  viewprofile:{
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8
  },
  fotoPerfil: {
    width:50,
    height: 50,
    borderRadius: 25
  },
  nomeUser: {
    paddingLeft: 5,
    fontSize: 22,
    color: '#000'
  }
})
