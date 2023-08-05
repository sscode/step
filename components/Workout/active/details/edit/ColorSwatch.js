import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ColorItem from './ColorItem'; // Assuming you have already created the ColorItem component

const ColorSwatch = () => {
  const colors = [
    '#2A5841', 
  '#172D26', 
  '#2A4494', 
  '#4EA5D9', 
  '#44CFCB', 
  '#D0DB97', 
  '#BE6E46'];

  const [activeColor, setActiveColor] = useState('');

  const handleColorPress = (color) => {
    setActiveColor(color);
  };

  return (
    <View style={styles.container}>
      {colors.map((color) => (
        <ColorItem
          key={color}
          color={color}
          isActive={color === activeColor}
          onPress={handleColorPress}
        />
      ))}
    </View>
  );
};

export default ColorSwatch;

const styles = StyleSheet.create({
    container: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: 'red',
    }
})