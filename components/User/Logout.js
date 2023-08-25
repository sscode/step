import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { userContext } from '../../store/userContext';
import PrimaryButton from '../../UI/PrimaryButton';

function Logout(){
    const { user, addUser } = useContext(userContext);
    const navigation = useNavigation();

    const userCtx = useContext(userContext)

    const userEmail = userCtx.user[0].email || ''

    const logoutHandler = async () => {
        console.log(userCtx.user[0].email)
        addUser([]);
        await AsyncStorage.setItem('isLoggedIn', 'false');
        navigation.navigate('login', { screen: 'login' });    }

    return( 
        <View style={styles.container}>
            <PrimaryButton
            onPress={logoutHandler}
            title={`Logout  ${userEmail}`}
            />
        </View>
    )
}

export default Logout;

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
    }
  });