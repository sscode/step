import { useNavigation } from '@react-navigation/native';
import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Contact from '../components/User/Contact';
import Logout from '../components/User/Logout';
import Profile from '../components/User/Profile';


function User({navigation}){
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'User Profile',
            headerRight: () => {},
            headerLeft: () => {},
            headerBackVisible: true,
        })
    }, [navigation])

    const closeHandler = () => {
        navigation.goBack();
    }

    return( 
        <View style={styles.container}>
            <Profile />
            <View style={styles.footer}>
                <Logout />
                <Contact />
            </View>
        </View>
    )
}

export default User;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    footer: {
        width: '100%',
        alignItems: 'center',
    }
  });