import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const squareWidth = 30;

const ColorItem = ({ color, isActive, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(color)}>
      <View
        style={[
          styles.container,
          { borderColor: isActive ? 'black' : 'transparent', backgroundColor: color },
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: squareWidth,
    height: squareWidth,
    borderRadius: 5,
    borderWidth: 2,
  },
});

export default ColorItem;
