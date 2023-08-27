import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ExerciseContext } from '../../store/exerciseContext';
import { userContext } from '../../store/userContext';
import PrimaryButton from '../../UI/PrimaryButton';

function Logout({email}){
    const { user, userLogout } = useContext(userContext);
    const exerciseCtx = useContext(ExerciseContext);
    const navigation = useNavigation();


    const logoutHandler = async () => {
        //clear contexts
        userLogout();
        exerciseCtx.resetContext();

        //clear async
        await AsyncStorage.removeItem('isLoggedIn');
        await AsyncStorage.removeItem('email');

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