import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function List(props) {

    function carregaIcone(likeada) {
        return likeada ? require('../Img/likeada.png') : require('../Img/like.png');
    }

    function mostrarLikes(likers) {
        if (likers === 0) {
            return;
        }
        return (
            <Text style={styles.likes}>{likers} {likers > 1 ?'curtidas' : 'curtida'}</Text>
        );
    }

    return (
        <View>
            <View style={styles.viewprofile}>
                <Image
                    source={{ uri: props.data.imgperfil }}
                    style={styles.fotoPerfil}
                />
                <Text style={styles.nomeUser}>{props.data.nome}</Text>
            </View>

            <Image
                resizeMode='cover'
                source={{ uri: props.data.imgPublicacao }}
                style={styles.fotoPublicacao}
            />

            <View style={styles.areaBtn}>
                <TouchableOpacity>
                    <Image
                        source={carregaIcone(props.data.likeada)}
                        style={styles.iconeLike}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnsend}>
                    <Image
                        source={require('../Img/comment.png')}
                        style={styles.iconeLike}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnsend}>
                    <Image
                        source={require('../Img/send.png')}
                        style={styles.iconeLike}
                    />
                </TouchableOpacity>
            </View>

            {/* Exibe o número de curtidas se maior que zero */}
            {mostrarLikes(props.data.likers)}
            <Text style={styles.nomeRodape}>
              {props.data.nome}
            </Text>
            <Text style={styles.descRodape}>
              {props.data.descricao}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewprofile: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8
    },
    fotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    nomeUser: {
        paddingLeft: 5,
        fontSize: 22,
        color: '#000'
    },
    fotoPublicacao: {
        height: 400,
        alignItems: 'center'
    },
    areaBtn: {
        flexDirection: 'row',
        padding: 5
    },
    iconeLike: {
        width: 25,
        height: 25
    },
    btnsend: {
        paddingLeft: 5
    },
    likes: {
        fontWeight: 'bold',
        marginLeft: 5,
        marginTop: 5,
        color: '#000'
    },
    nomeRodape: {
      fontSize: 18,
      fontWeight: 'bold',
      paddingLeft: 5,
      color: '#000'
    },
    descRodape: {
      fontSize: 15,
      paddingBottom: 10,
      paddingLeft: 5
    }
});
