import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';


function Contact(){

    return( 
        <View style={styles.container}>
            <Text
            style={styles.text}
            >For help, please contact admin@ergbase.com</Text>
        </View>
    )
}

export default Contact;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingVertical: 36,
        width: '100%',
      backgroundColor: GlobalStyles.colors.gray700,
    },
    text: {
        color: GlobalStyles.colors.white,
    }
  });