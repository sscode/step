import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import Button from '../../UI/Button';


function Logout(){

    const logoutHandler = () => {
        console.log('logout')
    }

    return( 
        <View style={styles.container}>
            <Button
            mode='redInverse'
            onPress={logoutHandler}
            >Logout</Button>
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