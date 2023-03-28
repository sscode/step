import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { GlobalStyles } from '../constants/styles';
import Button from '../UI/Button';

const SplashScreen = ({navigation}) => {

  //remove head

  const loginHandler = () => {
    navigation.navigate('Login')
    console.log('enter')
  }

  const enterHandler = () => {
    navigation.navigate('Feed')
    console.log('enter')
  }

  return (
    <View style={styles.container}>
      <ImageBackground 
      source={require('../assets/ergbg.png')} 
      style={styles.image}>
        <Text style={styles.header}>Welcome to Ergbase</Text>
        <View style={styles.buttonContainer}>
          <Button 
          onPress={enterHandler}
          >Enter</Button>
          <Button 
          onPress={loginHandler}
          >Login</Button>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    fontStyle: 'italic',
    color: GlobalStyles.colors.white,
  },
  buttonContainer: {
    height: '30%',
    flexDirection: 'column',
    // alignItems: 'center',
    justifyContent: 'space-around',

  }
});

export default SplashScreen;
