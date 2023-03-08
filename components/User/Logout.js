import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import Button from '../../UI/Button';
import clean from '../../util/dataFormats/clean';

function Logout(){
    const image = 'https://ergphotos.s3.amazonaws.com/ergphotos%2FIMG_7127.HEIC'

    const logoutHandler = async () => {
        console.log('logout')
        clean()

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