import { View, Text, StyleSheet, Image, ImageBackground} from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../constants/styles';

const LoginHero = () => {
  return (
      <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.header}>PROLIFT</Text>
                <Text style={styles.subheader}>your fitness journey starts here</Text>
            </View>
            <Image source={require('./GreenLogo.png')} style={styles.image} />
        </View>
  )
}

export default LoginHero;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderBottomEndRadius: 50,
        borderBottomStartRadius: 50,
        backgroundColor: GlobalStyles.colors.black,
    },
    textContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -30,
    },
    header: {
        fontSize: 90,
        // textAlign: 'center',
        fontWeight: 'bold',
        color: GlobalStyles.colors.white,
        },
    subheader: {
        fontSize: 24,
        color: GlobalStyles.colors.white,
        },
    image: {
        width: 75,
        height: 75,
        marginTop: 150,
    },
})