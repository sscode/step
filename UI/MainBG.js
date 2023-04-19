import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

const MainBG = ({ children }) => {
  return (
    <ImageBackground
      source={require('../assets/bg1-splash.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default MainBG;
