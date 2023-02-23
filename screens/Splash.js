import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../constants/styles';
import Button from '../UI/Button';

const SplashScreen = ({navigation}) => {


  const enterHandler = () => {
    navigation.navigate('Feed')
    console.log('enter')
  }

  return (
    <View style={styles.container}>
        <Text style={styles.header}>Welcome to Ergbase</Text>
        <Button 
        onPress={enterHandler}
        >Enter</Button>
      {/* <Image source={require('./splash.png')} style={styles.image} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.gray700
  },
  header: {
    fontSize: 36,
    fontStyle: 'italic',
    color: GlobalStyles.colors.white,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
},
  image: {
    width: '100%',
    height: '100%',
  },
});

export default SplashScreen;
