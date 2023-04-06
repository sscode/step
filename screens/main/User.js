import { useNavigation } from '@react-navigation/native';
import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Contact from '../../components/User/Contact';
import Logout from '../../components/User/Logout';
import Profile from '../../components/User/Profile';
import HeaderLeft from '../../navigation/HeaderLeft';


function UserScreen({navigation}){
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'User Profile',
            headerRight: () => {},
            headerLeft: navigation.navigate('main', { screen: 'user' }),
            headerBackVisible: true,
        })
    }, [navigation])

    const closeHandler = () => {
        navigation.goBack();
    }

    return( 
        <ImageBackground
        source={require('../../assets/bg-user.png')}
        style={styles.image}
        >
            <View style={styles.container}>
                <Profile />
                <View style={styles.footer}>
                    <Logout />
                    <Contact />
                </View>
            </View>
        </ImageBackground>
    )
}

export default UserScreen;

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    footer: {
        width: '100%',
        alignItems: 'center',
    }
  });