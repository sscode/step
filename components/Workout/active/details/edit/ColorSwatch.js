import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../../../../constants/styles';
import ColorItem from './ColorItem'; // Assuming you have already created the ColorItem component

const ColorSwatch = ({activeColor, handleColorPress}) => {
  const colors = [
    GlobalStyles.colors.swatch0, 
    GlobalStyles.colors.swatch1,
    GlobalStyles.colors.swatch2,
    GlobalStyles.colors.swatch3,
    GlobalStyles.colors.swatch4,
    GlobalStyles.colors.swatch5,
    GlobalStyles.colors.swatch6];

    const currentActiveColor = activeColor || colors[0];

  return (
    <View style={styles.container}>
      {colors.map((color) => (
        <ColorItem
          key={color}
          color={color}
          isActive={color === currentActiveColor}
          onPress={handleColorPress}
        />
      ))}
    </View>
  );
};

export default ColorSwatch;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: 'red',
    }
})