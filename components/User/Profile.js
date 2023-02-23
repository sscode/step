import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import Button from '../../UI/Button';


function Profile(){

    return( 
        <View style={styles.container}>
            <View>
                <Image 
                style={styles.image}
                source={require('../../assets/lemon.png')}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Stuart Sim</Text>
                <Text style={styles.textSmall}>Paid status: Free</Text>
                <Text style={styles.textSmall}>Member since: 2023</Text>
            </View>
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    textContainer: {
        marginTop: 12,
        alignItems: 'center',
    },
    textSmall: {
        marginTop: 12,
        fontSize: 12,
    }
  });