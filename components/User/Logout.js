import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { userContext } from '../../store/userContext';
import PrimaryButton from '../../UI/PrimaryButton';

function Logout({email}){
    const { user, userLogout } = useContext(userContext);
    const navigation = useNavigation();


    const logoutHandler = async () => {
        userLogout();

        console.log('logout :', user)

        await AsyncStorage.removeItem('isLoggedIn');

        navigation.navigate('login', { screen: 'login' });    }

    return( 
        <View style={styles.container}>
            <PrimaryButton
            onPress={logoutHandler}
            title={`Logout`}
            style={'green'}
            />
        </View>
    )
}

export default Logout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
    }
  });